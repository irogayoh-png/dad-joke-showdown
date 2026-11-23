// Dad Joke Showdown — GAHAR version.
// Writes one fixed dad joke to <output>/entry.txt, deterministically.
// No randomness, no network, no input: every run produces the same bytes.
// The joke: a father at the breakfast table. Two linked puns, both earned
// by the setup (eggs crack; eggs scramble), punchline on the last word.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told the eggs a joke at breakfast. They cracked up, and now I can't unscramble what I said.";

const MAX_CHARS = 200;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...JOKE].length > MAX_CHARS || JOKE.trim().length === 0) {
  throw new Error("joke must be 1-200 non-blank characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
