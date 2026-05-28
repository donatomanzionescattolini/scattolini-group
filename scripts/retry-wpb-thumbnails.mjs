/**
 * retry-wpb-thumbnails.mjs
 * Uses Wikimedia thumbnail CDN (different rate limit) to upload missing files.
 */
import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
function loadDotEnv(p) {
    if (!existsSync(p)) return;
    for (const line of readFileSync(p, "utf-8").split("\n")) {
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

const BUCKET = process.env.VITE_S3_BUCKET || "pagina-mama";
const s3 = new S3Client({
    region: process.env.VITE_AWS_REGION || "us-east-1",
    credentials: {
        accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
});
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getThumbUrl(fileTitle, width = 1200) {
    // Use Wikimedia imageinfo API requesting thumb URL at specific width
    const encoded = encodeURIComponent(`File:${fileTitle}`);
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encoded}&prop=imageinfo&iiprop=url|thumburl&iiurlwidth=${width}&format=json&origin=*`;
    const res = await fetch(url, { headers: { "User-Agent": "ScattoliniGroup/1.0" } });
    const data = await res.json();
    for (const page of Object.values(data?.query?.pages || {})) {
        const info = page?.imageinfo?.[0];
        // thumburl for resized, url for original
        if (info?.thumburl) return info.thumburl;
        if (info?.url) return info.url;
    }
    return null;
}

// Files still missing from S3 — using different filenames for variety
const TARGETS = [
    { title: "West_Palm_Beach_Panorama,_Florida_28_Feb_2024.jpg",                key: "assets2/areas/west-palm-beach/thumbnail.webp",                              ct: "image/webp" },
    { title: "West_Palm_Beach_Aerial_November_2014_photo_Don_Ramey_Logan.jpg",   key: "assets2/areas/west-palm-beach/carousel-1.jpg",                             ct: "image/jpeg" },
    { title: "West_Palm_Beach_Panorama_2024.jpg",                                key: "assets2/areas/west-palm-beach/carousel-3.jpg",                             ct: "image/jpeg" },
    { title: "City_Hall,_West_Palm_Beach,_Florida.jpg",                          key: "assets2/areas/west-palm-beach/carousel-4.jpg",                             ct: "image/jpeg" },
    { title: "Clematis_Street_Downtown_West_Palm_Beach_2013.jpg",               key: "assets2/areas/west-palm-beach/carousel-5.jpg",                             ct: "image/jpeg" },
    { title: "West_Palm_Beach_Panorama,_Florida_28_Feb_2024.jpg",               key: "assets2/areas/west-palm-beach/alba-palm-beach.webp",                       ct: "image/webp" },
    { title: "West_Palm_Beach_Panorama_2024.jpg",                               key: "assets2/desarrollos/alba-palm-beach/image-gallery/image (1).jpg",          ct: "image/jpeg" },
    { title: "City_Hall,_West_Palm_Beach,_Florida.jpg",                         key: "assets2/desarrollos/alba-palm-beach/image-gallery/image (3).jpg",          ct: "image/jpeg" },
    { title: "West_palm_beach_city.jpg",                                         key: "assets2/desarrollos/alba-palm-beach/image-gallery/image (5).jpg",          ct: "image/jpeg" },
    { title: "Clematis_Street_Downtown_West_Palm_Beach_2013.jpg",               key: "assets2/desarrollos/alba-palm-beach/image-gallery/image (7).jpg",          ct: "image/jpeg" },
];

async function run() {
    console.log("\n🔄  Uploading remaining files via Wikimedia thumbnail CDN…\n");
    for (const { title, key, ct } of TARGETS) {
        const label = key.split("/").pop().padEnd(32);
        process.stdout.write(`  ${label} `);
        try {
            await sleep(5000);
            const thumbUrl = await getThumbUrl(title, 1200);
            if (!thumbUrl) { console.log("❌  No URL resolved"); continue; }
            await sleep(4000);
            const res = await fetch(thumbUrl, {
                headers: {
                    "User-Agent": "Mozilla/5.0 ScattoliniGroup/1.0",
                    "Referer": "https://commons.wikimedia.org/",
                },
            });
            if (!res.ok) { console.log(`❌  HTTP ${res.status} — ${thumbUrl.slice(0, 80)}`); continue; }
            const buf = Buffer.from(await res.arrayBuffer());
            await s3.send(new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: buf, ContentType: ct }));
            console.log(`✅  (${Math.round(buf.length / 1024)} KB)  ← ${thumbUrl.slice(0, 60)}…`);
        } catch (e) {
            console.log(`❌  ${e.message}`);
        }
    }
    console.log("\n✅  Done.\n");
}

run().catch((e) => { console.error(e); process.exit(1); });

