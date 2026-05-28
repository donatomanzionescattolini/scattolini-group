/**
 * upload-west-palm-beach.mjs
 *
 * Downloads free public-domain images of West Palm Beach from Wikimedia Commons
 * and uploads them to the pagina-mama S3 bucket under:
 *   assets2/areas/west-palm-beach/
 *
 * Usage:
 *   1. Create a .env.local file (or set env vars) with your AWS credentials:
 *        VITE_AWS_REGION=us-east-1
 *        VITE_AWS_ACCESS_KEY_ID=AKIA...
 *        VITE_AWS_SECRET_ACCESS_KEY=...
 *        VITE_S3_BUCKET=pagina-mama
 *
 *   2. Run:
 *        node scripts/upload-west-palm-beach.mjs
 *
 * Node.js 18+ required (uses native fetch).
 */

import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// ─── Load .env.local or .env ──────────────────────────────────────────────────
const __dir = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dir, "..");

function loadDotEnv(path) {
    if (!existsSync(path)) return;
    const lines = readFileSync(path, "utf-8").split("\n");
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eqIdx = trimmed.indexOf("=");
        if (eqIdx === -1) continue;
        const key = trimmed.slice(0, eqIdx).trim();
        const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, "");
        if (!process.env[key]) process.env[key] = val;
    }
}

loadDotEnv(resolve(root, ".env.local"));
loadDotEnv(resolve(root, ".env"));

// ─── S3 config ───────────────────────────────────────────────────────────────
const REGION = process.env.VITE_AWS_REGION || "us-east-1";
const ACCESS_KEY = process.env.VITE_AWS_ACCESS_KEY_ID || "";
const SECRET_KEY = process.env.VITE_AWS_SECRET_ACCESS_KEY || "";
const SESSION_TOKEN = process.env.VITE_AWS_SESSION_TOKEN || undefined;
const BUCKET = process.env.VITE_S3_BUCKET || "pagina-mama";
const AREA_NAME = "west-palm-beach";
const AREA_PREFIX = `assets2/areas/${AREA_NAME}`;

if (!ACCESS_KEY || !SECRET_KEY) {
    console.error(
        "❌  Missing AWS credentials.\n" +
        "    Create a .env.local file in the project root with:\n" +
        "      VITE_AWS_ACCESS_KEY_ID=...\n" +
        "      VITE_AWS_SECRET_ACCESS_KEY=...\n" +
        "      VITE_S3_BUCKET=pagina-mama"
    );
    process.exit(1);
}

const s3 = new S3Client({
    region: REGION,
    credentials: {
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_KEY,
        ...(SESSION_TOKEN ? { sessionToken: SESSION_TOKEN } : {}),
    },
});

// ─── Wikimedia Commons image candidates ──────────────────────────────────────
// All images are CC-licensed or public domain from Wikimedia Commons.
// Title = the File: page name on commons.wikimedia.org
const WIKIMEDIA_FILES = [
    "West_Palm_Beach_skyline_from_Palm_Beach_Island.jpg",
    "Downtown_West_Palm_Beach_panorama.jpg",
    "Clematis_Street_West_Palm_Beach.jpg",
    "West_Palm_Beach_waterfront.jpg",
    "Palm_Beach_County_Convention_Center.jpg",
    "West_Palm_Beach_Florida.jpg",
    "Norton_Museum_of_Art_West_Palm_Beach.jpg",
];

// S3 targets: { key, contentType }
const UPLOAD_TARGETS = [
    { s3Key: `${AREA_PREFIX}/banner.jpg`, contentType: "image/jpeg" },
    { s3Key: `${AREA_PREFIX}/firstImage.jpg`, contentType: "image/jpeg" },
    { s3Key: `${AREA_PREFIX}/thumbnail.webp`, contentType: "image/jpeg" }, // jpeg bytes, webp extension — browsers render it fine
    { s3Key: `${AREA_PREFIX}/carousel-1.jpg`, contentType: "image/jpeg" },
    { s3Key: `${AREA_PREFIX}/carousel-2.jpg`, contentType: "image/jpeg" },
    { s3Key: `${AREA_PREFIX}/carousel-3.jpg`, contentType: "image/jpeg" },
    { s3Key: `${AREA_PREFIX}/carousel-4.jpg`, contentType: "image/jpeg" },
    { s3Key: `${AREA_PREFIX}/carousel-5.jpg`, contentType: "image/jpeg" },
];

// ─── Utilities ────────────────────────────────────────────────────────────────

/**
 * Resolve a Wikimedia Commons file title to its direct image URL via the API.
 */
async function resolveWikimediaUrl(fileTitle) {
    const encoded = encodeURIComponent(`File:${fileTitle}`);
    const apiUrl =
        `https://commons.wikimedia.org/w/api.php?action=query&titles=${encoded}` +
        `&prop=imageinfo&iiprop=url&format=json&origin=*`;
    const resp = await fetch(apiUrl);
    if (!resp.ok) throw new Error(`Wikimedia API error: ${resp.status}`);
    const data = await resp.json();
    const pages = data?.query?.pages || {};
    for (const page of Object.values(pages)) {
        const url = page?.imageinfo?.[0]?.url;
        if (url) return url;
    }
    return null;
}

/**
 * Download an image URL and return a Buffer.
 */
async function downloadImage(url) {
    const resp = await fetch(url, {
        headers: { "User-Agent": "ScattoliniGroup/1.0 (real-estate-site; contact@scattolinigroup.com)" },
    });
    if (!resp.ok) throw new Error(`Download failed (${resp.status}): ${url}`);
    const arrayBuf = await resp.arrayBuffer();
    return Buffer.from(arrayBuf);
}

/**
 * Upload a Buffer to S3.
 */
async function uploadToS3(buffer, s3Key, contentType) {
    await s3.send(
        new PutObjectCommand({
            Bucket: BUCKET,
            Key: s3Key,
            Body: buffer,
            ContentType: contentType,
        })
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
    console.log(`\n🌴  West Palm Beach media upload`);
    console.log(`    Bucket : ${BUCKET}`);
    console.log(`    Region : ${REGION}`);
    console.log(`    Prefix : ${AREA_PREFIX}\n`);

    // Step 1: Resolve Wikimedia URLs
    console.log("🔍  Resolving Wikimedia Commons image URLs…");
    const resolvedImages = [];

    for (const title of WIKIMEDIA_FILES) {
        try {
            const url = await resolveWikimediaUrl(title);
            if (url) {
                console.log(`    ✅  ${title}`);
                resolvedImages.push(url);
            } else {
                console.log(`    ⚠️  No URL found for: ${title}`);
            }
        } catch (err) {
            console.log(`    ⚠️  Failed to resolve: ${title} — ${err.message}`);
        }
        if (resolvedImages.length >= UPLOAD_TARGETS.length) break;
    }

    if (resolvedImages.length === 0) {
        console.error("\n❌  Could not resolve any Wikimedia images. Check your internet connection.");
        process.exit(1);
    }

    console.log(`\n📥  Downloading and uploading ${Math.min(resolvedImages.length, UPLOAD_TARGETS.length)} images…\n`);

    for (let i = 0; i < UPLOAD_TARGETS.length; i++) {
        const target = UPLOAD_TARGETS[i];
        // Cycle through available images if we have fewer than targets
        const imageUrl = resolvedImages[i % resolvedImages.length];

        process.stdout.write(`    ⬆️   ${target.s3Key}  ←  downloading… `);
        try {
            const buffer = await downloadImage(imageUrl);
            await uploadToS3(buffer, target.s3Key, target.contentType);
            console.log(`✅  (${(buffer.length / 1024).toFixed(0)} KB)`);
        } catch (err) {
            console.log(`❌  ${err.message}`);
        }
    }

    console.log("\n🎉  Done! West Palm Beach media is now live at:");
    console.log(`    https://${BUCKET}.s3.amazonaws.com/${AREA_PREFIX}/banner.jpg`);
    console.log(`    https://${BUCKET}.s3.amazonaws.com/${AREA_PREFIX}/thumbnail.webp`);
    console.log(`    https://${BUCKET}.s3.amazonaws.com/${AREA_PREFIX}/firstImage.jpg`);
    console.log(`    https://${BUCKET}.s3.amazonaws.com/${AREA_PREFIX}/carousel-1.jpg  … carousel-5.jpg`);
    console.log("\n    Visit: http://localhost:5173/areas/west-palm-beach\n");
}

main().catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
});

