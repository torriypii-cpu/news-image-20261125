// Entry for make.fun's news-image-20261125 bounty: a single image that sums
// up the world news of Wednesday 25 November 2026.
//
// The picture itself sits beside this file as entry.png — a newspaper front
// page built from six text-free illustrations, with the date banner and
// every headline typeset programmatically so nothing on the page is
// garbled. This program's whole job is to deliver that image to the output
// directory:
//
//   MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.png
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);

// Validate the source image before copying so a missing or empty file
// fails loudly instead of silently producing a broken submission.
let size: number;
try {
  size = statSync(src).size;
} catch {
  throw new Error(`entry.png not found next to main.ts (${src.pathname})`);
}
if (size === 0) {
  throw new Error('entry.png is empty (0 bytes); refusing to copy');
}

mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);

// Confirm what actually landed, so the grader log shows the deliverable.
const written = statSync(dest).size;
console.log(`wrote ${dest} (${written} bytes)`);
