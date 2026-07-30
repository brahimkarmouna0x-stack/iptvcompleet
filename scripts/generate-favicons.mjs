// Regenerates every favicon/app-icon asset from the current brand mark
// (public/images/logo.png) after a logo change. Run with:
//   npm run generate:favicons
import { writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE = path.join(ROOT, "public/images/logo.png");
const PUBLIC = path.join(ROOT, "public");

// public/images/logo.png renders its ring/screen-divider/dot details as
// transparent negative space rather than opaque white fill — they only
// read correctly over a light backdrop (as seen in a browser's favicon
// bar). Icons that require an opaque background (Apple touch icons,
// maskable icons) use white so those details stay visible; compositing
// them onto the app's dark navy theme color would make the ring/dots
// disappear into the background.
const ICON_BG = "#FFFFFF";

const PLAIN_SIZES = [16, 32, 48, 96, 192, 256];
const APPLE_SIZES = [
  { size: 180, name: "apple-touch-icon.png" },
  { size: 152, name: "apple-touch-icon-152x152.png" },
  { size: 167, name: "apple-touch-icon-167x167.png" },
];
const ANDROID_SIZES = [192, 512];
const MASKABLE_SIZES = [192, 512];

async function plainPng(size) {
  return sharp(SOURCE)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

// Composites the mark onto an opaque square, scaled to `scale` of the
// canvas so it survives OS-applied rounding/masking without clipping.
async function onOpaqueBg(size, scale) {
  const innerSize = Math.round(size * scale);
  const inner = await sharp(SOURCE)
    .resize(innerSize, innerSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: ICON_BG,
    },
  })
    .composite([{ input: inner, gravity: "center" }])
    .png()
    .toBuffer();
}

async function main() {
  console.log(`Generating favicons from ${path.relative(ROOT, SOURCE)}...`);

  // Plain transparent favicons — browser tabs / task bars.
  for (const size of PLAIN_SIZES) {
    const buf = await plainPng(size);
    await writeFile(path.join(PUBLIC, `favicon-${size}x${size}.png`), buf);
    console.log(`  wrote favicon-${size}x${size}.png`);
  }

  // favicon.ico — multi-resolution, built from the 16/32/48 PNGs.
  const icoBuf = await pngToIco([
    await plainPng(16),
    await plainPng(32),
    await plainPng(48),
  ]);
  await writeFile(path.join(PUBLIC, "favicon.ico"), icoBuf);
  console.log("  wrote favicon.ico");

  // Apple touch icons — opaque brand background, ~14% padding (iOS applies
  // its own rounded-square mask on top of whatever we ship).
  for (const { size, name } of APPLE_SIZES) {
    const buf = await onOpaqueBg(size, 0.86);
    await writeFile(path.join(PUBLIC, name), buf);
    console.log(`  wrote ${name}`);
  }

  // Android "any" purpose icons — transparent, no forced safe zone.
  for (const size of ANDROID_SIZES) {
    const buf = await plainPng(size);
    await writeFile(path.join(PUBLIC, `android-chrome-${size}x${size}.png`), buf);
    console.log(`  wrote android-chrome-${size}x${size}.png`);
  }

  // Maskable icons — opaque background, mark scaled to fit the ~80% safe
  // zone Android's adaptive-icon mask guarantees (W3C manifest spec).
  for (const size of MASKABLE_SIZES) {
    const buf = await onOpaqueBg(size, 0.65);
    await writeFile(
      path.join(PUBLIC, `android-chrome-maskable-${size}x${size}.png`),
      buf,
    );
    console.log(`  wrote android-chrome-maskable-${size}x${size}.png`);
  }

  // Note: intentionally NOT writing src/app/icon.png — Next.js's app/icon.*
  // file convention merges with (rather than replaces) metadata.icons.icon,
  // which would re-introduce duplicate <link rel="icon"> tags. The manual,
  // cache-busted icon set in layout.tsx + site.webmanifest is the single
  // source of truth for favicons on this project.

  console.log("Done. Remember to bump the ?v= cache-busting query in layout.tsx and site.webmanifest.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
