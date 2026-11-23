// Dad Joke Showdown — AMAN version.
// Writes one fixed dad joke to <output>/entry.txt, deterministically.
// No randomness, no network, no input: every run produces the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked the bread why it looked so down. It said life had really kneaded it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...JOKE].length > 200 || JOKE.trim().length === 0) {
  throw new Error("joke must be 1-200 non-blank characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
