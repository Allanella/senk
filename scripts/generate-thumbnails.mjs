// scripts/generate-thumbnails.mjs
// Usage: node scripts/generate-thumbnails.mjs
// Reads full-res images from /public, writes resized+compressed
// thumbnails to /public/thumbs, keeping the same filenames.

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const THUMB_DIR = path.resolve('public/thumbs');
const MAX_WIDTH = 1000; // plenty for a grid card, even on retina
const JPEG_QUALITY = 70;

async function main() {
  await mkdir(THUMB_DIR, { recursive: true });
  const files = await readdir(PUBLIC_DIR);
  const images = files.filter((f) => /\.(jpe?g|png)$/i.test(f));

  for (const file of images) {
    const inputPath = path.join(PUBLIC_DIR, file);
    const outputPath = path.join(THUMB_DIR, file);
    const image = sharp(inputPath);
    const meta = await image.metadata();

    if (!meta.width || meta.width <= MAX_WIDTH) {
      console.log(`Skipping ${file} (already small: ${meta.width}px)`);
      continue;
    }

    await image
      .rotate()
      .resize({ width: MAX_WIDTH })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(outputPath);

    console.log(`Resized ${file}: ${meta.width}px -> ${MAX_WIDTH}px`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
