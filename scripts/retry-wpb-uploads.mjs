/**
 * retry-wpb-uploads.mjs — retry the rate-limited S3 uploads from upload-alba-palm-beach.mjs
 */
import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

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

const BUCKET = process.env.VITE_S3_BUCKET || "pagina-mama";
const s3 = new S3Client({
    region: process.env.VITE_AWS_REGION || "us-east-1",
    credentials: {
        accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function resolveWikimediaUrl(title) {
    const encoded = encodeURIComponent(`File:${title}`);
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encoded}&prop=imageinfo&iiprop=url&format=json&origin=*`;
    const res = await fetch(url);
    const data = await res.json();
    for (const page of Object.values(data?.query?.pages || {})) {
        const u = page?.imageinfo?.[0]?.url;
        if (u) return u;
    }
    return null;
}

// Items that failed with 429 in the previous run — using longer delays this time
const RETRIES = [
    { title: "Clematis_Street_Downtown_West_Palm_Beach_2013.jpg",                key: "assets2/areas/west-palm-beach/thumbnail.webp",                               ct: "image/webp" },
    { title: "Clematis_Street_and_Rosemary_Avenue,_West_Palm_Beach,_Florida.jpg",key: "assets2/areas/west-palm-beach/carousel-1.jpg",                              ct: "image/jpeg" },
    { title: "West_palm_beach_city.jpg",                                          key: "assets2/areas/west-palm-beach/carousel-3.jpg",                              ct: "image/jpeg" },
    { title: "City_Hall,_West_Palm_Beach,_Florida.jpg",                           key: "assets2/areas/west-palm-beach/carousel-4.jpg",                              ct: "image/jpeg" },
    { title: "West_Palm_Beach_Panorama_2024.jpg",                                 key: "assets2/areas/west-palm-beach/carousel-5.jpg",                              ct: "image/jpeg" },
    { title: "West_Palm_Beach_Aerial_November_2014_photo_Don_Ramey_Logan.jpg",   key: "assets2/areas/west-palm-beach/alba-palm-beach.webp",                        ct: "image/webp" },
    { title: "West_Palm_Beach_Aerial_November_2014_photo_Don_Ramey_Logan.jpg",   key: "assets2/desarrollos/alba-palm-beach/image-gallery/image (1).jpg",           ct: "image/jpeg" },
    { title: "Clematis_Street_Downtown_West_Palm_Beach_2013.jpg",                key: "assets2/desarrollos/alba-palm-beach/image-gallery/image (3).jpg",           ct: "image/jpeg" },
    { title: "West_palm_beach_city.jpg",                                          key: "assets2/desarrollos/alba-palm-beach/image-gallery/image (5).jpg",           ct: "image/jpeg" },
    { title: "West_Palm_Beach_Panorama_2024.jpg",                                key: "assets2/desarrollos/alba-palm-beach/image-gallery/image (7).jpg",           ct: "image/jpeg" },
];

async function run() {
    console.log(`\n🔄  Retrying rate-limited uploads (5 s delay between each)…\n`);
    for (const { title, key, ct } of RETRIES) {
        const label = key.split("/").pop().padEnd(32);
        process.stdout.write(`  ${label} `);
        try {
            await sleep(4000);
            const imgUrl = await resolveWikimediaUrl(title);
            if (!imgUrl) { console.log("❌  URL not resolved"); continue; }
            await sleep(3000);
            const res = await fetch(imgUrl, { headers: { "User-Agent": "ScattoliniGroup/1.0 (realestate)" } });
            if (!res.ok) { console.log(`❌  HTTP ${res.status}`); continue; }
            const buf = Buffer.from(await res.arrayBuffer());
            await s3.send(new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: buf, ContentType: ct }));
            console.log(`✅  (${Math.round(buf.length / 1024)} KB)`);
        } catch (e) {
            console.log(`❌  ${e.message}`);
        }
    }
    console.log("\n✅  Done.\n");
}

run().catch((e) => { console.error(e); process.exit(1); });

