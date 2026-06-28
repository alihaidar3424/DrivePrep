import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const markSvg = readFileSync(join(ROOT, "public", "brand", "logo-mark.svg"), "utf8");

/** Maskable icon: extra padding so the badge is not clipped on Android. */
function maskableSvg(size) {
  const pad = Math.round(size * 0.12);
  const inner = size - pad * 2;
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#064E3B"/>
  <svg x="${pad}" y="${pad}" width="${inner}" height="${inner}" viewBox="0 0 512 512">
    ${markSvg.replace(/<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "")}
  </svg>
</svg>`;
}

async function writePng(svg, filePath, size) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(filePath);
}

const outDir = join(ROOT, "public", "icons");
mkdirSync(outDir, { recursive: true });

await writePng(markSvg, join(outDir, "icon-192.png"), 192);
await writePng(markSvg, join(outDir, "icon-512.png"), 512);
await writePng(maskableSvg(512), join(outDir, "icon-512-maskable.png"), 512);

writeFileSync(
  join(outDir, "apple-touch-icon.png"),
  await sharp(join(outDir, "icon-192.png")).png().toBuffer(),
);

console.log("Generated RaahPass PWA icons in public/icons/");
