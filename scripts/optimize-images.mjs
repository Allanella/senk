/**
 * Compress & resize public images for static export (next/image is unoptimized).
 * Creates WebP + optimized JPEG siblings; overwrites oversized originals in place
 * after backing them up under _image-source/ (kept outside public).
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const PUBLIC = path.resolve('public')
const SOURCE = path.resolve('_image-source')
const THUMBS = path.join(PUBLIC, 'thumbs')

/** @type {{ file: string, maxWidth: number, quality: number }[]} */
const TARGETS = [
  { file: 'eliza.JPG', maxWidth: 1920, quality: 72 },
  { file: 'hm.JPG', maxWidth: 900, quality: 75 },
  { file: 'library.JPG', maxWidth: 1400, quality: 72 },
  { file: 'lab1.JPG', maxWidth: 1400, quality: 72 },
  { file: 'scienceLab.JPG', maxWidth: 1400, quality: 72 },
  { file: 'senk-badge.png', maxWidth: 512, quality: 80 },
  { file: 'badge.JPG', maxWidth: 256, quality: 82 },
]

const GALLERY_MEDIUM_WIDTH = 1400
const THUMB_WIDTH = 640
const MIN_BYTES_TO_TOUCH = 250_000

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function backupOnce(relFile) {
  const src = path.join(PUBLIC, relFile)
  const dest = path.join(SOURCE, relFile)
  if (!fs.existsSync(src)) return null
  ensureDir(path.dirname(dest))
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(src, dest)
  }
  return fs.existsSync(dest) ? dest : src
}

async function writeOptimized(inputPath, outBaseNoExt, { maxWidth, quality }) {
  const image = sharp(inputPath, { failOn: 'none' }).rotate()
  const meta = await image.metadata()
  const width = meta.width && meta.width > maxWidth ? maxWidth : meta.width

  const pipeline = () =>
    sharp(inputPath, { failOn: 'none' })
      .rotate()
      .resize({ width, withoutEnlargement: true })

  // Use unique temp names to avoid Windows case-insensitive .jpg/.JPG collisions
  const jpegPath = `${outBaseNoExt}.__opt.jpg`
  const webpPath = `${outBaseNoExt}.webp`

  await pipeline()
    .jpeg({ quality, mozjpeg: true, chromaSubsampling: '4:2:0' })
    .toFile(jpegPath)

  await pipeline()
    .webp({ quality: Math.min(quality + 2, 82) })
    .toFile(webpPath)

  const jpgStat = fs.statSync(jpegPath)
  const webpStat = fs.statSync(webpPath)
  return { jpegPath, webpPath, jpgKB: Math.round(jpgStat.size / 1024), webpKB: Math.round(webpStat.size / 1024) }
}

async function optimizeNamedTargets() {
  console.log('\n=== Named page assets ===')
  for (const target of TARGETS) {
    const srcPath = path.join(PUBLIC, target.file)
    if (!fs.existsSync(srcPath)) {
      console.log(`skip missing ${target.file}`)
      continue
    }
    const before = fs.statSync(srcPath).size
    if (before < MIN_BYTES_TO_TOUCH && !target.file.endsWith('.png')) {
      console.log(`skip small ${target.file} (${Math.round(before / 1024)}KB)`)
      continue
    }

    const backup = backupOnce(target.file)
    const input = backup || srcPath
    const base = path.join(PUBLIC, path.parse(target.file).name)
    const result = await writeOptimized(input, base, target)

    // Keep legacy .JPG path working by copying optimized jpeg over it
    const legacyExt = path.extname(target.file)
    if (legacyExt.toLowerCase() === '.jpg' || legacyExt === '.JPG' || legacyExt === '.jpeg') {
      fs.copyFileSync(result.jpegPath, path.join(PUBLIC, target.file))
    } else if (legacyExt.toLowerCase() === '.png') {
      // Prefer webp for badge; also write a small png
      await sharp(input)
        .rotate()
        .resize({ width: target.maxWidth, withoutEnlargement: true })
        .png({ compressionLevel: 9, palette: true, quality: 80 })
        .toFile(path.join(PUBLIC, target.file))
    }

    const after = fs.statSync(path.join(PUBLIC, target.file)).size
    console.log(
      `${target.file}: ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB` +
        ` (+ ${path.basename(result.webpPath)} ${result.webpKB}KB)`
    )
  }
}

async function replaceInPlace(srcPath, optimizedJpegPath) {
  const tmp = `${srcPath}.__replace`
  fs.copyFileSync(optimizedJpegPath, tmp)
  fs.unlinkSync(srcPath)
  fs.renameSync(tmp, srcPath)
  try {
    fs.unlinkSync(optimizedJpegPath)
  } catch {
    /* ignore */
  }
}

async function optimizeOversizedRemainders() {
  console.log('\n=== Oversized remainders (>250KB) ===')
  ensureDir(THUMBS)

  const files = fs
    .readdirSync(PUBLIC)
    .filter((f) => /\.(jpe?g|png)$/i.test(f) && !f.startsWith('.'))

  for (const file of files) {
    const srcPath = path.join(PUBLIC, file)
    const size = fs.statSync(srcPath).size
    const name = path.parse(file).name

    if (size < MIN_BYTES_TO_TOUCH) continue
    if (TARGETS.some((t) => t.file.toLowerCase() === file.toLowerCase())) continue

    const backupPath = backupOnce(file)
    const input = backupPath || srcPath
    const result = await writeOptimized(input, path.join(PUBLIC, name), {
      maxWidth: GALLERY_MEDIUM_WIDTH,
      quality: 72,
    })
    await replaceInPlace(srcPath, result.jpegPath)

    const thumbJpg = path.join(THUMBS, `${name}.JPG`)
    await sharp(input, { failOn: 'none' })
      .rotate()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 68, mozjpeg: true })
      .toFile(`${thumbJpg}.__tmp`)
    if (fs.existsSync(thumbJpg)) fs.unlinkSync(thumbJpg)
    fs.renameSync(`${thumbJpg}.__tmp`, thumbJpg)

    await sharp(input, { failOn: 'none' })
      .rotate()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: 70 })
      .toFile(path.join(THUMBS, `${name}.webp`))

    console.log(
      `${file}: ${Math.round(size / 1024)}KB → ${Math.round(fs.statSync(srcPath).size / 1024)}KB (webp ${result.webpKB}KB)`
    )
  }
}

async function main() {
  ensureDir(SOURCE)
  await optimizeNamedTargets()
  await optimizeOversizedRemainders()

  const remaining = fs
    .readdirSync(PUBLIC)
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .map((f) => ({ f, s: fs.statSync(path.join(PUBLIC, f)).size }))
    .filter((x) => x.s > 1_000_000)
    .sort((a, b) => b.s - a.s)

  if (remaining.length) {
    console.log('\n=== Still >1MB in public (unused / leftover) ===')
    for (const { f, s } of remaining) {
      console.log(`  ${f} ${Math.round(s / 1024)}KB`)
    }
  }
  console.log('\nDone.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
