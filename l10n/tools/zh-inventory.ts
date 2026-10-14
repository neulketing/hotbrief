// Lists the Chinese text left in the engine code (apps/, packages/, tests excluded), so a localized edition knows what
// still shows Chinese and where. Comments are skipped; a line counts when it has a Han character outside a comment.
//   node l10n/tools/zh-inventory.ts [--lines] <tree> [<tree> …]
// With several trees (the original checkout and checkouts with a patch applied) it prints one count column per tree.
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const withLines = args.includes("--lines");
const trees = args.filter((a) => a !== "--lines");
if (!trees.length) throw new Error("usage: node l10n/tools/zh-inventory.ts [--lines] <tree> [<tree> …]");

const HAN = /\p{Script=Han}/u;
const ROOTS = ["apps/web/app", "apps/api/src", "apps/worker/src", "packages/backend/src", "packages/contracts/src"];

/** Where the text ends up, by path. */
function area(file: string): string {
  if (file.startsWith("apps/web/app/routes/admin") || file.includes("admin")) return "admin UI";
  if (file.startsWith("apps/web/") || file.startsWith("apps/api/src/routes/og")) return "reader UI";
  if (file.startsWith("packages/backend/src/publication") || file.startsWith("packages/backend/src/reports")) return "public output (RSS, llms.txt, agent, reports)";
  if (/packages\/backend\/src\/(editorial|events)\//.test(file)) return "model input (kept: prompts are tuned on it)";
  if (/packages\/backend\/src\/(operations|notify)\//.test(file)) return "owner alerts (Feishu)";
  return "other backend";
}

function walk(dir: string, out: string[]) {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (name === "node_modules" || name === "tests" || name === "build" || name === ".react-router") continue;
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(name)) out.push(p);
  }
}

/** Han lines outside comments, by repo-relative file. */
function scan(tree: string): Map<string, Array<{ line: number; text: string }>> {
  const found = new Map<string, Array<{ line: number; text: string }>>();
  for (const root of ROOTS) {
    const files: string[] = [];
    try {
      walk(path.join(tree, root), files);
    } catch {
      continue;
    }
    for (const file of files) {
      let block = false;
      const hits: Array<{ line: number; text: string }> = [];
      readFileSync(file, "utf8").split("\n").forEach((raw, i) => {
        let code = raw;
        if (block) {
          const end = code.indexOf("*/");
          if (end < 0) return;
          code = code.slice(end + 2);
          block = false;
        }
        code = code.replace(/\/\*.*?\*\//g, "");
        const open = code.indexOf("/*");
        if (open >= 0) {
          code = code.slice(0, open);
          block = true;
        }
        code = code.replace(/(^|[^:"'`\\])\/\/.*$/, "$1"); // line comments (not inside URLs)
        if (/^\s*\{?\s*\/\*/.test(raw) || /^\s*\*/.test(raw)) return;
        if (HAN.test(code)) hits.push({ line: i + 1, text: raw.trim().slice(0, 160) });
      });
      if (hits.length) found.set(path.relative(tree, file), hits);
    }
  }
  return found;
}

const scans = trees.map(scan);
const files = [...new Set(scans.flatMap((s) => [...s.keys()]))].sort();
const byArea = new Map<string, number[]>();
for (const f of files) {
  const counts = scans.map((s) => s.get(f)?.length ?? 0);
  const a = area(f);
  byArea.set(a, (byArea.get(a) ?? trees.map(() => 0)).map((n, i) => n + counts[i]!));
}

const head = `| Area | ${trees.map((t) => path.basename(path.resolve(t))).join(" | ")} |`;
console.log(head);
console.log(`|---|${trees.map(() => "---:").join("|")}|`);
for (const [a, counts] of byArea) console.log(`| ${a} | ${counts.join(" | ")} |`);
console.log(`| **total** | ${trees.map((_, i) => files.reduce((n, f) => n + (scans[i]!.get(f)?.length ?? 0), 0)).join(" | ")} |`);
console.log("");
console.log(`| File | Area | ${trees.map((t) => path.basename(path.resolve(t))).join(" | ")} |`);
console.log(`|---|---|${trees.map(() => "---:").join("|")}|`);
for (const f of files) console.log(`| \`${f}\` | ${area(f)} | ${scans.map((s) => s.get(f)?.length ?? 0).join(" | ")} |`);
if (withLines) {
  const last = scans[scans.length - 1]!;
  console.log("");
  console.log(`Lines still in Chinese in ${trees[trees.length - 1]}:`);
  console.log("");
  for (const [f, hits] of [...last].sort()) for (const h of hits) console.log(`- \`${f}:${h.line}\` ${h.text.replace(/\|/g, "\\|")}`);
}
