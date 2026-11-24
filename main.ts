// Fortune in a Pot
// Writes a single kind, funny fortune (<= 120 chars) to /output/entry.txt.
// The fortune is written for this plant on this windowsill: three new
// leaves before autumn ends, and the twist is kind and believable — the
// cat that has stalked it for six months finally calls a truce.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Three new leaves before autumn ends, and the cat that has stalked you six months will finally call a truce.";

// Gate: the entry must be 1-120 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 120 || !LINE.trim()) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
