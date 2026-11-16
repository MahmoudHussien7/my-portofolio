#!/usr/bin/env node
/**
 * Generate ATS-friendly Mahmoud-Hussein-CV.pdf from cv/Mahmoud-Hussein-CV.html
 * using Google Chrome headless print-to-PDF.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const htmlPath = join(root, "cv", "Mahmoud-Hussein-CV.html");
const outPath = join(root, "public", "Mahmoud-Hussein-CV.pdf");

if (!existsSync(htmlPath)) {
  console.error(`Missing source HTML: ${htmlPath}`);
  process.exit(1);
}

mkdirSync(dirname(outPath), { recursive: true });

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/usr/bin/google-chrome-stable",
  "/usr/bin/google-chrome",
  "/usr/local/bin/google-chrome",
  "google-chrome",
].filter(Boolean);

let chrome = null;
for (const candidate of chromeCandidates) {
  try {
    execFileSync(candidate, ["--version"], { stdio: "ignore" });
    chrome = candidate;
    break;
  } catch {
    // try next
  }
}

if (!chrome) {
  console.error("Google Chrome not found. Set CHROME_PATH or install chrome.");
  process.exit(1);
}

const fileUrl = pathToFileURL(htmlPath).href;

execFileSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--no-margins",
    `--print-to-pdf=${outPath}`,
    fileUrl,
  ],
  { stdio: "inherit" }
);

console.log(`Wrote ${outPath}`);
