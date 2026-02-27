import { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from "@aws-sdk/client-s3";

const BUCKET_NAME = "pagina-mama";
const ASSETS_PREFIX = "assets2/desarrollos";
const AREAS_PREFIX = "assets2/areas";

// S3 client configuration - credentials should be set via environment variables
const s3Client = new S3Client({
  region: import.meta.env.VITE_AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || "",
  },
});

// Valid file types and their expected names
export const VALID_FILE_TYPES = {
  pdfs: ["brochure.pdf", "hoja.pdf", "planos.pdf"],
  video: ["video.mp4"],
  banner: ["banner.jpg"],
  thumbnail: ["thumbnail.webp"],
  gallery: /^image \(\d+\)\.jpg$/i,
} as const;

export interface UploadResult {
  success: boolean;
  key?: string;
  url?: string;
  error?: string;
}

export interface MediaFile {
  key: string;
  name: string;
  url: string;
  type: "pdf" | "video" | "banner" | "gallery" | "thumbnail";
  size?: number;
  lastModified?: Date;
}

/**
 * Validates if a file has a correct name based on its type
 */
export function validateFileName(fileName: string, fileType: "pdf" | "video" | "banner" | "gallery" | "thumbnail"): { valid: boolean; error?: string } {
  const normalizedName = fileName.toLowerCase();
  
  switch (fileType) {
    case "pdf":
      if (!(VALID_FILE_TYPES.pdfs as readonly string[]).includes(normalizedName)) {
        return { 
          valid: false, 
          error: `Invalid PDF name. Must be one of: ${VALID_FILE_TYPES.pdfs.join(", ")}` 
        };
      }
      break;
    case "video":
      if (normalizedName !== "video.mp4") {
        return { valid: false, error: "Video must be named 'video.mp4'" };
      }
      break;
    case "banner":
      if (normalizedName !== "banner.jpg") {
        return { valid: false, error: "Banner must be named 'banner.jpg'" };
      }
      break;
    case "thumbnail":
      // Thumbnail will be renamed automatically, accept any webp
      if (!normalizedName.endsWith(".webp")) {
        return { valid: false, error: "Thumbnail must be a .webp file" };
      }
      break;
    case "gallery":
      if (!VALID_FILE_TYPES.gallery.test(fileName)) {
        return { 
          valid: false, 
          error: "Gallery images must be named 'image (1).jpg', 'image (2).jpg', etc." 
        };
      }
      break;
  }
  
  return { valid: true };
}

/**
 * Upload a file to S3
 */
export async function uploadFileToS3(
  file: File,
  areaName: string,
  desarrolloName: string,
  fileType: "pdf" | "video" | "banner" | "gallery" | "thumbnail"
): Promise<UploadResult> {
  // Validate file name
  const validation = validateFileName(file.name, fileType);
  if (!validation.valid) {
    return { success: false, error: validation.error };
  }

  // Determine the S3 path based on file type
  // Path structure: assets2/desarrollos/{areaName}/{desarrolloName}/...
  // Thumbnail goes to: assets2/areas/{areaName}/{desarrolloName}.webp
  let s3Path: string;
  switch (fileType) {
    case "pdf":
      s3Path = `${ASSETS_PREFIX}/${areaName}/${desarrolloName}/pdfs/${file.name}`;
      break;
    case "video":
      s3Path = `${ASSETS_PREFIX}/${areaName}/${desarrolloName}/video.mp4`;
      break;
    case "banner":
      s3Path = `${ASSETS_PREFIX}/${areaName}/${desarrolloName}/banner.jpg`;
      break;
    case "thumbnail":
      // Thumbnail goes to areas folder with desarrollo name
      s3Path = `${AREAS_PREFIX}/${areaName}/${desarrolloName}.webp`;
      break;
    case "gallery":
      s3Path = `${ASSETS_PREFIX}/${areaName}/${desarrolloName}/image-gallery/${file.name}`;
      break;
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: s3Path,
      Body: new Uint8Array(arrayBuffer),
      ContentType: file.type,
      ACL: "public-read",
    });

    await s3Client.send(command);
    
    return {
      success: true,
      key: s3Path,
      url: `https://${BUCKET_NAME}.s3.amazonaws.com/${s3Path}`,
    };
  } catch (error) {
    console.error("S3 upload error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown upload error",
    };
  }
}

/**
 * List all media files for a desarrollo
 */
export async function listDesarrolloMedia(areaName: string, desarrolloName: string): Promise<MediaFile[]> {
  const prefix = `${ASSETS_PREFIX}/${areaName}/${desarrolloName}/`;
  const files: MediaFile[] = [];

  try {
    // List files in the desarrollo folder
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: prefix,
    });

    const response = await s3Client.send(command);
    
    if (response.Contents) {
      for (const object of response.Contents) {
        if (!object.Key) continue;
        
        const relativePath = object.Key.replace(prefix, "");
        const fileName = relativePath.split("/").pop() || "";
        
        let type: MediaFile["type"];
        if (relativePath.startsWith("pdfs/")) {
          type = "pdf";
        } else if (relativePath === "video.mp4") {
          type = "video";
        } else if (relativePath === "banner.jpg") {
          type = "banner";
        } else if (relativePath.startsWith("image-gallery/")) {
          type = "gallery";
        } else {
          continue; // Skip unknown files
        }

        files.push({
          key: object.Key,
          name: fileName,
          url: `https://${BUCKET_NAME}.s3.amazonaws.com/${object.Key}`,
          type,
          size: object.Size,
          lastModified: object.LastModified,
        });
      }
    }
    
    // Also check for thumbnail in areas folder
    const thumbnailKey = `${AREAS_PREFIX}/${areaName}/${desarrolloName}.webp`;
    const thumbnailCommand = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: thumbnailKey,
    });
    
    const thumbnailResponse = await s3Client.send(thumbnailCommand);
    if (thumbnailResponse.Contents) {
      for (const object of thumbnailResponse.Contents) {
        if (object.Key === thumbnailKey) {
          files.push({
            key: object.Key,
            name: `${desarrolloName}.webp`,
            url: `https://${BUCKET_NAME}.s3.amazonaws.com/${object.Key}`,
            type: "thumbnail",
            size: object.Size,
            lastModified: object.LastModified,
          });
        }
      }
    }
  } catch (error) {
    console.error("S3 list error:", error);
  }

  return files;
}

/**
 * Delete a file from S3
 */
export async function deleteFileFromS3(key: string): Promise<boolean> {
  try {
    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });

    await s3Client.send(command);
    return true;
  } catch (error) {
    console.error("S3 delete error:", error);
    return false;
  }
}

/**
 * Count gallery images for a desarrollo
 */
export async function countGalleryImages(areaName: string, desarrolloName: string): Promise<number> {
  const files = await listDesarrolloMedia(areaName, desarrolloName);
  return files.filter(f => f.type === "gallery").length;
}

/**
 * Get the next available gallery image number
 */
export async function getNextGalleryImageNumber(areaName: string, desarrolloName: string): Promise<number> {
  const files = await listDesarrolloMedia(areaName, desarrolloName);
  const galleryFiles = files.filter(f => f.type === "gallery");
  
  let maxNumber = 0;
  for (const file of galleryFiles) {
    const match = file.name.match(/image \((\d+)\)\.jpg/i);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num > maxNumber) maxNumber = num;
    }
  }
  
  return maxNumber + 1;
}

/**
 * Rename a file to proper gallery format and upload
 */
export async function uploadGalleryImage(
  file: File,
  areaName: string,
  desarrolloName: string,
  imageNumber: number
): Promise<UploadResult> {
  const newFileName = `image (${imageNumber}).jpg`;
  const s3Path = `${ASSETS_PREFIX}/${areaName}/${desarrolloName}/image-gallery/${newFileName}`;

  try {
    const arrayBuffer = await file.arrayBuffer();
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: s3Path,
      Body: new Uint8Array(arrayBuffer),
      ContentType: "image/jpeg",
      ACL: "public-read",
    });

    await s3Client.send(command);
    
    return {
      success: true,
      key: s3Path,
      url: `https://${BUCKET_NAME}.s3.amazonaws.com/${s3Path}`,
    };
  } catch (error) {
    console.error("S3 gallery upload error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown upload error",
    };
  }
}
