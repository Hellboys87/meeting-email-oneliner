// One-line entry for make.fun bounty
// "The Meeting That Should Have Been an Email"
// (u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
//
// Writes the joke — exactly one line, <= 200 characters — to
// $MAKEFUN_OUTPUT_DIR/entry.txt (defaults to /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Sixty minutes in, our only action item was scheduling a second meeting to decide what the first one was for.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
