import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

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

const BUCKET = process.env.VITE_S3_BUCKET || "pagina-mama";
const s3 = new S3Client({
    region: process.env.VITE_AWS_REGION || "us-east-1",
    credentials: {
        accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
});

async function listPrefix(prefix) {
    const r = await s3.send(new ListObjectsV2Command({ Bucket: BUCKET, Prefix: prefix }));
    return (r.Contents || []).map(f => ({ name: f.Key.replace(prefix, ""), size: Math.round(f.Size / 1024) + "KB" }));
}

console.log("\n📦  S3 contents — pagina-mama\n");

const wpb = await listPrefix("assets2/areas/west-palm-beach/");
console.log("West Palm Beach AREA  (assets2/areas/west-palm-beach/):");
wpb.forEach(f => console.log(`  ✅  ${f.name.padEnd(30)} ${f.size}`));

const alba = await listPrefix("assets2/desarrollos/alba-palm-beach/");
console.log("\nAlba Palm Beach DEVELOPMENT  (assets2/desarrollos/alba-palm-beach/):");
alba.forEach(f => console.log(`  ✅  ${f.name.padEnd(40)} ${f.size}`));

const EXPECTED_AREA = ["banner.jpg","firstImage.jpg","thumbnail.webp","carousel-1.jpg","carousel-2.jpg","carousel-3.jpg","carousel-4.jpg","carousel-5.jpg","alba-palm-beach.webp"];
const EXPECTED_DEV  = ["banner.jpg","image-gallery/image (1).jpg","image-gallery/image (2).jpg","image-gallery/image (3).jpg","image-gallery/image (4).jpg","image-gallery/image (5).jpg","image-gallery/image (6).jpg","image-gallery/image (7).jpg","image-gallery/image (8).jpg"];

const wpbNames = wpb.map(f => f.name);
const albaNames = alba.map(f => f.name);
const missingArea = EXPECTED_AREA.filter(n => !wpbNames.includes(n));
const missingDev  = EXPECTED_DEV.filter(n => !albaNames.includes(n));

if (missingArea.length || missingDev.length) {
    console.log("\n⚠️   Missing files:");
    missingArea.forEach(n => console.log(`  ❌  areas/west-palm-beach/${n}`));
    missingDev.forEach(n => console.log(`  ❌  desarrollos/alba-palm-beach/${n}`));
} else {
    console.log("\n🎉  All expected files are present in S3!\n");
}

