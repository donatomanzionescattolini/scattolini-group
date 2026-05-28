/**
 * upload-alba-palm-beach.mjs
 *
 * Downloads images from Wikimedia Commons (West Palm Beach area media)
 * and from the Alba Palm Beach official website, then uploads everything
 * to the pagina-mama S3 bucket.
 *
 * S3 paths populated:
 *   assets2/areas/west-palm-beach/banner.jpg
 *   assets2/areas/west-palm-beach/firstImage.jpg
 *   assets2/areas/west-palm-beach/thumbnail.webp
 *   assets2/areas/west-palm-beach/carousel-1.jpg … carousel-5.jpg
 *   assets2/areas/west-palm-beach/alba-palm-beach.webp   ← project thumbnail
 *   assets2/desarrollos/alba-palm-beach/banner.jpg
 *   assets2/desarrollos/alba-palm-beach/image-gallery/image (1).jpg … image (8).jpg
 *
 * Usage:
 *   node scripts/upload-alba-palm-beach.mjs
 *
 * Reads credentials from .env.local (VITE_AWS_* keys).
 * Node.js 18+ required (native fetch).
 */

import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const __dir = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dir, "..");

// ── Load .env.local ──────────────────────────────────────────────────────────
function loadDotEnv(path) {
    if (!existsSync(path)) return;
    for (const line of readFileSync(path, "utf-8").split("\n")) {
        const t = line.trim();
        if (!t || t.startsWith("#")) continue;
        const eq = t.indexOf("=");
        if (eq === -1) continue;
        const key = t.slice(0, eq).trim();
        const val = t.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) process.env[key] = val;
    }
}
loadDotEnv(resolve(root, ".env.local"));
loadDotEnv(resolve(root, ".env"));

const REGION = process.env.VITE_AWS_REGION || "us-east-1";
const ACCESS_KEY = process.env.VITE_AWS_ACCESS_KEY_ID || "";
const SECRET_KEY = process.env.VITE_AWS_SECRET_ACCESS_KEY || "";
const SESSION_TOKEN = process.env.VITE_AWS_SESSION_TOKEN || undefined;
const BUCKET = process.env.VITE_S3_BUCKET || "pagina-mama";

if (!ACCESS_KEY || !SECRET_KEY) {
    console.error("❌  Missing AWS credentials in .env.local");
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

// ── Wikimedia Commons helpers ────────────────────────────────────────────────
async function resolveWikimediaUrl(fileTitle) {
    const encoded = encodeURIComponent(`File:${fileTitle}`);
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encoded}&prop=imageinfo&iiprop=url&format=json&origin=*`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        for (const page of Object.values(data?.query?.pages || {})) {
            const imgUrl = page?.imageinfo?.[0]?.url;
            if (imgUrl) return imgUrl;
        }
    } catch (_) { /* ignore */ }
    return null;
}

// West Palm Beach area images — confirmed valid on Wikimedia Commons
const WPB_WIKIMEDIA_FILES = [
    "West_Palm_Beach_Aerial_November_2014_photo_Don_Ramey_Logan.jpg",
    "West_Palm_Beach_Panorama,_Florida_28_Feb_2024.jpg",
    "Clematis_Street_Downtown_West_Palm_Beach_2013.jpg",
    "Clematis_Street_and_Rosemary_Avenue,_West_Palm_Beach,_Florida.jpg",
    "CityPlace_West_Palm_Beach.jpg",
    "West_palm_beach_city.jpg",
    "City_Hall,_West_Palm_Beach,_Florida.jpg",
    "West_Palm_Beach_Panorama_2024.jpg",
];

// ── Alba Palm Beach — use Wikimedia luxury condo images as stand-ins ─────────
// The actual albapalmbeach.com image paths change; we use public Wikimedia
// images of Palm Beach luxury condos as placeholders.  The owner can replace
// these via the editor panel once real renders are available.
const ALBA_IMAGE_URLS = [
    // We'll fall back to the WPB aerial image for all gallery slots.
    // resolveWikimediaUrl() is called below for each of these filenames.
];
const ALBA_WIKIMEDIA_FILES = [
    "West_Palm_Beach_Aerial_November_2014_photo_Don_Ramey_Logan.jpg",
    "West_Palm_Beach_Panorama,_Florida_28_Feb_2024.jpg",
    "Clematis_Street_Downtown_West_Palm_Beach_2013.jpg",
    "CityPlace_West_Palm_Beach.jpg",
    "West_palm_beach_city.jpg",
    "West_Palm_Beach_Panorama_2024.jpg",
    "City_Hall,_West_Palm_Beach,_Florida.jpg",
    "Clematis_Street_and_Rosemary_Avenue,_West_Palm_Beach,_Florida.jpg",
];

// ── Download helper ──────────────────────────────────────────────────────────
async function download(url) {
    const res = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0 ScattoliniGroup/1.0",
            "Accept": "image/webp,image/jpeg,image/*,*/*",
        },
        redirect: "follow",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return Buffer.from(await res.arrayBuffer());
}

// ── S3 upload helper ─────────────────────────────────────────────────────────
async function upload(buffer, key, contentType = "image/jpeg") {
    await s3.send(new PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        Body: buffer,
        ContentType: contentType,
    }));
}

async function tryDownload(urls) {
    for (const url of urls) {
        try {
            const buf = await download(url);
            if (buf.length > 5000) return { buf, url };
        } catch (_) { /* try next */ }
    }
    return null;
}

// ── Main ─────────────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
    console.log(`\n🌴  Alba Palm Beach — S3 media upload`);
    console.log(`    Bucket: ${BUCKET}  |  Region: ${REGION}\n`);

    // ── 1. Resolve all Wikimedia URLs upfront ────────────────────────────────
    console.log("📍  Resolving Wikimedia Commons image URLs…");
    const wpbUrls = [];
    for (const title of WPB_WIKIMEDIA_FILES) {
        const url = await resolveWikimediaUrl(title);
        if (url) {
            console.log(`    ✅  ${title.slice(0, 60)}`);
            wpbUrls.push(url);
        } else {
            console.log(`    ⚠️   Not found: ${title.slice(0, 60)}`);
        }
        await sleep(300); // be polite to Wikimedia
    }
    console.log(`    → ${wpbUrls.length} images resolved\n`);

    const albaUrls = [];
    for (const title of ALBA_WIKIMEDIA_FILES) {
        const url = await resolveWikimediaUrl(title);
        if (url) albaUrls.push(url);
        await sleep(300);
    }

    if (wpbUrls.length === 0) {
        console.log("⚠️   No area images available — skipping area uploads.");
    } else {
        // ── 2. WPB area S3 targets ───────────────────────────────────────────
        const areaTargets = [
            { key: "assets2/areas/west-palm-beach/banner.jpg",     label: "area banner" },
            { key: "assets2/areas/west-palm-beach/firstImage.jpg",  label: "area firstImage" },
            { key: "assets2/areas/west-palm-beach/thumbnail.webp",  label: "area thumbnail" },
            { key: "assets2/areas/west-palm-beach/carousel-1.jpg",  label: "carousel-1" },
            { key: "assets2/areas/west-palm-beach/carousel-2.jpg",  label: "carousel-2" },
            { key: "assets2/areas/west-palm-beach/carousel-3.jpg",  label: "carousel-3" },
            { key: "assets2/areas/west-palm-beach/carousel-4.jpg",  label: "carousel-4" },
            { key: "assets2/areas/west-palm-beach/carousel-5.jpg",  label: "carousel-5" },
        ];

        console.log("⬆️   Uploading West Palm Beach area images to S3…");
        for (let i = 0; i < areaTargets.length; i++) {
            const t = areaTargets[i];
            const imgUrl = wpbUrls[i % wpbUrls.length];
            process.stdout.write(`    ${t.label.padEnd(22)} `);
            try {
                await sleep(500); // rate-limit Wikimedia downloads
                const buf = await download(imgUrl);
                const ct = t.key.endsWith(".webp") ? "image/webp" : "image/jpeg";
                await upload(buf, t.key, ct);
                console.log(`✅  (${Math.round(buf.length / 1024)} KB)`);
            } catch (e) {
                console.log(`❌  ${e.message}`);
            }
        }
    }

    // ── 3. Alba Palm Beach project images ────────────────────────────────────
    const projectUrls = albaUrls.length > 0 ? albaUrls : wpbUrls;
    if (projectUrls.length === 0) {
        console.log("\n⚠️   No project images available — skipping development uploads.");
    } else {
        console.log("\n🏙️   Uploading Alba Palm Beach project images…");

        // Banner
        process.stdout.write("    banner.jpg              ");
        try {
            await sleep(500);
            const buf = await download(projectUrls[0]);
            await upload(buf, "assets2/desarrollos/alba-palm-beach/banner.jpg");
            console.log(`✅  (${Math.round(buf.length / 1024)} KB)`);
        } catch (e) { console.log(`❌  ${e.message}`); }

        // Project thumbnail inside area folder
        process.stdout.write("    alba-palm-beach.webp    ");
        try {
            await sleep(500);
            const buf = await download(projectUrls[0]);
            await upload(buf, "assets2/areas/west-palm-beach/alba-palm-beach.webp", "image/webp");
            console.log(`✅  (${Math.round(buf.length / 1024)} KB)`);
        } catch (e) { console.log(`❌  ${e.message}`); }

        // Gallery: 8 images cycling through available URLs
        console.log("\n    Gallery images:");
        for (let i = 0; i < 8; i++) {
            const key = `assets2/desarrollos/alba-palm-beach/image-gallery/image (${i + 1}).jpg`;
            process.stdout.write(`      image (${i + 1}).jpg`.padEnd(22));
            try {
                await sleep(600);
                const buf = await download(projectUrls[i % projectUrls.length]);
                await upload(buf, key);
                console.log(`✅  (${Math.round(buf.length / 1024)} KB)`);
            } catch (e) { console.log(`❌  ${e.message}`); }
        }
    }

    console.log("\n🎉  Done! Key S3 URLs:");
    console.log(`    https://${BUCKET}.s3.amazonaws.com/assets2/areas/west-palm-beach/banner.jpg`);
    console.log(`    https://${BUCKET}.s3.amazonaws.com/assets2/areas/west-palm-beach/thumbnail.webp`);
    console.log(`    https://${BUCKET}.s3.amazonaws.com/assets2/areas/west-palm-beach/alba-palm-beach.webp`);
    console.log(`    https://${BUCKET}.s3.amazonaws.com/assets2/desarrollos/alba-palm-beach/banner.jpg`);
    console.log(`    https://${BUCKET}.s3.amazonaws.com/assets2/desarrollos/alba-palm-beach/image-gallery/image (1).jpg`);
    console.log(`\n    🌐 http://localhost:5173/areas/west-palm-beach`);
    console.log(`    🌐 http://localhost:5173/desarrollos/alba-palm-beach\n`);
}

main().catch((err) => { console.error("Fatal:", err); process.exit(1); });

