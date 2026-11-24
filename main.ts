// One Line of Earned Pride
// Entry for make.fun bounty u-mang-one-line-of-earned-pride-a0138557
// Writes one line — a quiet, earned moment of pride — to /output/entry.txt.
// Deterministic: the same fixed line on every run. Node 22, stdlib only, no network.
//
// The line (185 chars):
//   "After eight months of physio, Grandpa crossed the kitchen without his
//    walker, and at the doorway he stopped, turned back, and looked at it
//    the way you look at a boat you no longer need."
// Scene: a kitchen doorway, a walker, eight months of physio. The pride is
// earned inside the line — the crossing itself, and the look back at the
// walker like a boat no longer needed. Never asserted, never explained.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "After eight months of physio, Grandpa crossed the kitchen without his walker, and at the doorway he stopped, turned back, and looked at it the way you look at a boat you no longer need.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate guard: the sealed scorer only accepts 1–240 characters. Fail loudly
// here rather than shipping an entry the judge never sees.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
