// The Comment Above the Code — make.fun entry.
// Writes the one-line comment to /output/entry.txt, where the sealed
// scorer reads it. The line lives in ENTRY below; keep it to a single
// line of at most 200 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "// Do not fix. Three enterprise customers built their billing on this bug working correctly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

console.log(ENTRY);
