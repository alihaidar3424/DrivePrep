import { execSync } from "node:child_process";
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
const appDir = join(ROOT, "app");
const publicDir = join(ROOT, "public");
mkdirSync(outDir, { recursive: true });

await writePng(markSvg, join(outDir, "icon-192.png"), 192);
await writePng(markSvg, join(outDir, "icon-512.png"), 512);
await writePng(maskableSvg(512), join(outDir, "icon-512-maskable.png"), 512);

writeFileSync(
  join(outDir, "apple-touch-icon.png"),
  await sharp(join(outDir, "icon-192.png")).png().toBuffer(),
);

// Browser tab favicon (Next.js app/ file conventions)
await writePng(markSvg, join(appDir, "icon.png"), 32);
await writePng(markSvg, join(appDir, "apple-icon.png"), 180);

// Legacy /favicon.ico request + multi-size PNG fallbacks
const favicon16 = join(publicDir, "favicon-16.png");
const favicon32 = join(publicDir, "favicon-32.png");
await writePng(markSvg, favicon16, 16);
await writePng(markSvg, favicon32, 32);

try {
  execSync(
    `magick "${favicon16}" "${favicon32}" "${join(appDir, "favicon.ico")}"`,
    { stdio: "ignore" },
  );
  execSync(`cp "${join(appDir, "favicon.ico")}" "${join(publicDir, "favicon.ico")}"`, {
    stdio: "ignore",
  });
} catch {
  // ImageMagick unavailable — 32px PNG still works via metadata + app/icon.png
  writeFileSync(join(publicDir, "favicon.ico"), readFileSync(favicon32));
}

console.log("Generated RaahPass favicon + PWA icons");
