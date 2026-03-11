import {
    DeleteObjectCommand,
    ListObjectsV2Command,
    PutObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";

const AWS_REGION = (import.meta.env.VITE_AWS_REGION || "").trim() && import.meta.env.VITE_AWS_REGION !== "N/A"
    ? import.meta.env.VITE_AWS_REGION.trim()
    : "us-east-1";
const AWS_ACCESS_KEY_ID = (import.meta.env.VITE_AWS_ACCESS_KEY_ID || "").trim();
const AWS_SECRET_ACCESS_KEY = (import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || "").trim();
const AWS_SESSION_TOKEN = (import.meta.env.VITE_AWS_SESSION_TOKEN || "").trim() || undefined;
const BUCKET_NAME = (import.meta.env.VITE_S3_BUCKET || "pagina-mama").trim();
const ASSETS_PREFIX = "assets2/desarrollos";
const AREAS_PREFIX = "assets2/areas";

if (import.meta.env.DEV) {
    console.info("[S3 config]", {
        bucket: BUCKET_NAME,
        region: AWS_REGION,
        accessKeyIdSuffix: AWS_ACCESS_KEY_ID ? `***${AWS_ACCESS_KEY_ID.slice(-4)}` : "(missing)",
        hasSecretAccessKey: Boolean(AWS_SECRET_ACCESS_KEY),
        hasSessionToken: Boolean(AWS_SESSION_TOKEN),
    });
}

if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY) {
    console.error("[S3 config] Missing AWS credentials. Uploads will fail.", {
        hasAccessKey: Boolean(AWS_ACCESS_KEY_ID),
        hasSecretKey: Boolean(AWS_SECRET_ACCESS_KEY),
    });
}

const s3Client = new S3Client({
    region: AWS_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        sessionToken: AWS_SESSION_TOKEN,
    },
});

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
    targetName?: string;
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
 * Normalizes a string for use in S3 paths.
 * We keep it minimal but ensure consistent case if needed.
 * For now, we just trim as per user request for exact matches.
 */
export function normalizePathSegment(value: string): string {
    return String(value || "").trim();
}

async function convertImageToMime(file: File, mimeType: "image/jpeg" | "image/webp"): Promise<Uint8Array> {
    try {
        const bitmap = await createImageBitmap(file);
        const canvas = document.createElement("canvas");
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return new Uint8Array(await file.arrayBuffer());
        }
        ctx.drawImage(bitmap, 0, 0);
        const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, mimeType, mimeType === "image/jpeg" ? 0.9 : undefined),
        );
        if (!blob) {
            return new Uint8Array(await file.arrayBuffer());
        }
        const buffer = await blob.arrayBuffer();
        return new Uint8Array(buffer);
    } catch (error) {
        console.warn("Image conversion fallback:", error);
        return new Uint8Array(await file.arrayBuffer());
    }
}

function getFriendlyS3Error(error: unknown): string {
    const defaultMessage = "Unknown upload error";
    if (!error || typeof error !== "object") return defaultMessage;

    const err = error as { name?: string; message?: string };
    if (err.name === "InvalidAccessKeyId" || (err.message || "").includes("Access Key Id")) {
        return "S3 rejected the access key ID. This is not a CORS error. Check which env file is winning and restart the Vite server so the browser picks up the latest credentials.";
    }
    if (err.name === "SignatureDoesNotMatch" || (err.message || "").includes("signature")) {
        return "S3 signature mismatch. Verify VITE_AWS_REGION, access key, secret key, and optional session token.";
    }
    return err.message || defaultMessage;
}

export async function uploadFileToS3(
    file: File,
    areaName: string,
    desarrolloName: string,
    fileType: "pdf" | "video" | "banner" | "gallery" | "thumbnail",
    options?: { targetName?: string },
): Promise<UploadResult> {
    const safeArea = normalizePathSegment(areaName);
    const safeProject = normalizePathSegment(desarrolloName);

    if (!safeProject) {
        return { success: false, error: "Project name is required before uploading media." };
    }

    let body: Uint8Array;
    let s3Path: string;
    let contentType: string;
    let targetName: string;

    if (fileType === "banner") {
        targetName = "banner.jpg";
        s3Path = `${ASSETS_PREFIX}/${safeProject}/${targetName}`;
        contentType = "image/jpeg";
        body = await convertImageToMime(file, "image/jpeg");
    } else if (fileType === "thumbnail") {
        if (!safeArea) return { success: false, error: "Area name is required for thumbnails." };
        targetName = `${safeProject}.webp`;
        s3Path = `${AREAS_PREFIX}/${safeArea}/${targetName}`;
        contentType = "image/webp";
        body = await convertImageToMime(file, "image/webp");
    } else if (fileType === "video") {
        targetName = "video.mp4";
        s3Path = `${ASSETS_PREFIX}/${safeProject}/${targetName}`;
        contentType = file.type || "video/mp4";
        const arrayBuffer = await file.arrayBuffer();
        body = new Uint8Array(arrayBuffer);
    } else if (fileType === "pdf") {
        const rawName = options?.targetName || file.name || "document.pdf";
        targetName = rawName.toLowerCase().endsWith(".pdf") ? rawName : `${rawName}.pdf`;
        s3Path = `${ASSETS_PREFIX}/${safeProject}/pdfs/${targetName}`;
        contentType = "application/pdf";
        const arrayBuffer = await file.arrayBuffer();
        body = new Uint8Array(arrayBuffer);
    } else if (fileType === "gallery") {
        const rawName = options?.targetName || file.name || "image.jpg";
        targetName = rawName.toLowerCase().endsWith(".jpg") ? rawName : `${rawName}.jpg`;
        s3Path = `${ASSETS_PREFIX}/${safeProject}/image-gallery/${targetName}`;
        contentType = "image/jpeg";
        body = await convertImageToMime(file, "image/jpeg");
    } else {
        return { success: false, error: `Unknown file type: ${fileType}` };
    }

    try {
        console.log(`Uploading to S3: bucket=${BUCKET_NAME}, key=${s3Path}, contentType=${contentType}`);
        const command = new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: s3Path,
            Body: body,
            ContentType: contentType,
        });

        const sendResult = await s3Client.send(command);
        console.log("S3 upload success result:", sendResult);

        return {
            success: true,
            key: s3Path,
            targetName,
            url: `https://${BUCKET_NAME}.s3.amazonaws.com/${s3Path}`,
        };
    } catch (error) {
        console.error("S3 upload error:", error);
        console.error("Upload details:", { bucket: BUCKET_NAME, key: s3Path, fileType, fileSize: body.length });
        return {
            success: false,
            error: getFriendlyS3Error(error),
        };
    }
}

export async function listDesarrolloMedia(areaName: string, desarrolloName: string): Promise<MediaFile[]> {
    const safeArea = normalizePathSegment(areaName);
    const safeProject = normalizePathSegment(desarrolloName);
    const prefix = `${ASSETS_PREFIX}/${safeProject}/`;
    const files: MediaFile[] = [];

    try {
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
                    continue;
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

        const thumbnailKey = `${AREAS_PREFIX}/${safeArea}/${safeProject}.webp`;
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
                        name: `${safeProject}.webp`,
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

export async function countGalleryImages(areaName: string, desarrolloName: string): Promise<number> {
    const files = await listDesarrolloMedia(areaName, desarrolloName);
    return files.filter((f) => f.type === "gallery").length;
}

export async function getNextGalleryImageNumber(areaName: string, desarrolloName: string): Promise<number> {
    const files = await listDesarrolloMedia(areaName, desarrolloName);
    const galleryFiles = files.filter((f) => f.type === "gallery");

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

export async function uploadGalleryImage(
    file: File,
    areaName: string,
    desarrolloName: string,
    imageNumber: number,
): Promise<UploadResult> {
    return uploadFileToS3(file, areaName, desarrolloName, "gallery", {
        targetName: `image (${imageNumber}).jpg`,
    });
}
