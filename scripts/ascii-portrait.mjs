#!/usr/bin/env node
// Convert a photo into ASCII art for the hero.
//
//   npm run portrait -- path/to/photo.jpg [--width 90] [--clahe] [--sharpen] [--invert] [--contrast 1.2] [--gamma 1.0] [--ramp " .:-=+*#%@"]
//
// Writes src/portrait.txt (or --out <file>). Tips:
//   - Use a tightly cropped head-and-shoulders shot with a plain background.
//   - The site renders light glyphs on a dark page, so by default BRIGHT pixels
//     become DENSE characters. Use --invert if your photo reads better flipped.
//   - Tweak --contrast and --gamma until the face reads well, then hand-edit
//     portrait.txt if you want to clean up stray characters.
import { writeFileSync } from "node:fs";
import { parseArgs } from "node:util";
import sharp from "sharp";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    width: { type: "string", default: "90" },
    invert: { type: "boolean", default: false },
    contrast: { type: "string", default: "1.15" },
    gamma: { type: "string", default: "1.0" },
    clahe: { type: "boolean", default: false }, // local contrast: brings out facial features
    sharpen: { type: "boolean", default: false },
    ramp: { type: "string", default: " .:-=+*#%@" },
    aspect: { type: "string", default: "0.6" }, // glyph width / height
    out: { type: "string", default: "src/portrait.txt" },
  },
});

const input = positionals[0];
if (!input) {
  console.error("usage: npm run portrait -- <photo> [--width 90] [--invert] [--contrast 1.15] [--gamma 1.0]");
  process.exit(1);
}

const cols = Number(values.width);
const meta = await sharp(input).metadata();
const rows = Math.round(cols * (meta.height / meta.width) * Number(values.aspect));

// Pre-process at full resolution (features survive better), then downsample.
let img = sharp(input).rotate().greyscale(); // rotate() respects EXIF orientation
if (values.clahe) img = img.clahe({ width: 64, height: 64, maxSlope: 3 });
if (values.sharpen) img = img.sharpen({ sigma: 1.5 });
const pre = await img.png().toBuffer();
const { data } = await sharp(pre)
  .resize(cols, rows, { fit: "fill" })
  .normalise() // stretch to full black..white range
  .toColourspace("b-w")
  .raw()
  .toBuffer({ resolveWithObject: true });

const ramp = values.ramp;
const contrast = Number(values.contrast);
const gamma = Number(values.gamma);
const lines = [];
for (let y = 0; y < rows; y++) {
  let line = "";
  for (let x = 0; x < cols; x++) {
    let v = data[y * cols + x] / 255;
    v = Math.min(1, Math.max(0, (v - 0.5) * contrast + 0.5));
    v = Math.pow(v, gamma);
    if (values.invert) v = 1 - v;
    line += ramp[Math.min(ramp.length - 1, Math.floor(v * ramp.length))];
  }
  lines.push(line.replace(/\s+$/, ""));
}

writeFileSync(values.out, lines.join("\n") + "\n");
console.log(`wrote ${values.out} (${cols}x${rows})`);
