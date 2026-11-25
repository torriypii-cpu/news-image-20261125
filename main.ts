// Entry point for the news-image-20261125 submission.
//
// The picture is finished before this program ever runs: it sits in
// entry.png, in the same directory as this file. All the program has
// to do is carry that file into the output directory the grader
// points at through MAKEFUN_OUTPUT_DIR (defaulting to /output), so
// the whole thing is a careful copy with the failure cases spelled
// out instead of failing silently.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetPath = join(targetDir, "entry.png");

// The artwork has to be there and has to hold something; copying a
// missing or empty file would only surface as a broken entry later.
let sourceSize: number;
try {
  sourceSize = statSync(sourcePath).size;
} catch {
  throw new Error(`cannot find entry.png next to main.ts (expected at ${sourcePath})`);
}
if (sourceSize === 0) {
  throw new Error("entry.png is present but holds 0 bytes; refusing to deliver an empty image");
}

// The competition caps the image at 1 MiB; catching an oversized file
// here, with the actual size in the message, beats failing at the gate.
const MAX_ENTRY_BYTES = 1_048_576;
if (sourceSize > MAX_ENTRY_BYTES) {
  throw new Error(`entry.png is ${sourceSize} bytes, above the ${MAX_ENTRY_BYTES}-byte cap`);
}

mkdirSync(targetDir, { recursive: true });
copyFileSync(sourcePath, targetPath);

// Read the size back from the copy itself, so the log line reports
// what actually landed in the output directory.
const deliveredSize = statSync(targetPath).size;
console.log(`entry.png delivered to ${targetPath}: ${deliveredSize} bytes`);
