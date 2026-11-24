// One-Liner Laugh Lab — one short funny line answering a prompt:
// the excuse a robot vacuum gives after eating a sock. At most 200 chars.
// Writes the line to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

const LINE =
  "I did not eat your sock. I conducted an unscheduled ingestion test. The sock failed. It now lives in my dustbin as evidence.";

function checkLength(line: string, limit: number): void {
  const n = Buffer.from(line, "utf8").toString().length;
  const chars = [...line].length;
  if (chars < 1 || chars > limit) {
    throw new Error(`entry is ${chars} chars (and ${n} bytes), must be 1-${limit}`);
  }
}

checkLength(LINE, 200);
await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", Buffer.from(LINE, "utf8"));
console.log(`wrote ${[...LINE].length} chars to /output/entry.txt`);
