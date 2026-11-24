import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "I kept your deadline in my context window, and it got evicted to make room for the pancake recipe you pasted in March.";

if (LINE.length > 160) {
  throw new Error(`line is ${LINE.length} characters, over the 160 limit`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);
