#!/usr/bin/env node
// Convert a photo into ASCII art for the hero.
//
//   npm run portrait -- path/to/photo.jpg [--width 90] [--invert] [--contrast 1.2] [--ramp " .:-=+*#%@"]
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
    ramp: { type: "string", default: " .:-=+*#%@" },
    aspect: { type: "string", default: "0.5" }, // glyph width / height
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

const { data } = await sharp(input)
  .rotate() // respect EXIF orientation
  .resize(cols, rows, { fit: "fill" })
  .greyscale()
  .normalise() // stretch to full black..white range
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
