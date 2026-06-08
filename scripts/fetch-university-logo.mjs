#!/usr/bin/env node
// Fetch an official university emblem/logo for the college-acceptance page.
//
// This is the STANDARD way we add a school: every university on the
// college-acceptance page gets its real emblem as a card. Run this to source
// the logo, then wire the two map lines it prints into src/lib/universityLogos.ts.
//
// Usage:
//   node scripts/fetch-university-logo.mjs --name "Sungkyunkwan University" --slug sungkyunkwan
//   node scripts/fetch-university-logo.mjs --name "Inha University" --slug inha --title "인하대학교" --lang ko
//   node scripts/fetch-university-logo.mjs --name "Fudan University" --slug fudan --dry   # list candidates only
//
// Flags:
//   --name   Display name (required) — also the default Wikipedia page title
//   --slug   Output filename stem (required), e.g. "korea-university"
//   --title  Wikipedia page title if it differs from --name
//   --lang   Wikipedia language edition (default: en; use ko for Korean schools)
//   --dir    Output dir (default: public/images/universities)
//   --dry    Print candidate logo files and exit (download nothing)
//
// Method (works for most schools): list the images on the school's Wikipedia
// page, pick the best emblem/seal/crest/logo, resolve its file URL, download it.
// If the English page only shows an unrelated corporate logo (e.g. Korea
// Aerospace / Inha both surface the "Hanjin" group logo), pass --lang ko with
// the Hangul --title, or grab the logo from the school's official site by hand.

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const UA = 'wzis-website-logo-fetch/1.0 (https://wzis.org school website; admin contact)';

function arg(flag, fallback = undefined) {
  const i = process.argv.indexOf(flag);
  if (i === -1) return fallback;
  const v = process.argv[i + 1];
  return v && !v.startsWith('--') ? v : true; // boolean flags like --dry
}

const name = arg('--name');
const slug = arg('--slug');
const title = arg('--title', name);
const lang = arg('--lang', 'en');
const outDir = arg('--dir', 'public/images/universities');
const dry = arg('--dry', false);

if (!name || !slug) {
  console.error('Error: --name and --slug are required.\nExample: --name "Yonsei University" --slug yonsei');
  process.exit(1);
}

const API = `https://${lang}.wikipedia.org/w/api.php`;

// Prefer self-contained emblems over wordmarks; reject generic wiki chrome and
// known wrong-owner logos.
const GOOD = ['emblem', 'seal', 'crest', 'coat', 'arms', 'shield', 'symbol', 'logo', 'wordmark'];
const REJECT = ['commons-logo', 'wikisource', 'wikidata', 'edit-icon', 'hanjin', 'ambox', 'red_x', 'question_book'];
// Higher score = preferred.
function score(file) {
  const f = file.toLowerCase();
  if (REJECT.some((r) => f.includes(r))) return -1;
  if (!GOOD.some((g) => f.includes(g))) return -1;
  const order = ['emblem', 'seal', 'crest', 'coat', 'arms', 'shield', 'symbol', 'logo', 'wordmark'];
  for (let i = 0; i < order.length; i++) if (f.includes(order[i])) return order.length - i;
  return 0;
}

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: 'json', ...params })}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`Wikipedia API ${res.status} for ${url}`);
  return res.json();
}

async function main() {
  const list = await api({ action: 'query', prop: 'images', imlimit: '100', titles: title });
  const pages = list?.query?.pages ?? {};
  const files = Object.values(pages).flatMap((p) => (p.images ?? []).map((i) => i.title));
  const candidates = files
    .filter((f) => score(f) >= 0)
    .sort((a, b) => score(b) - score(a));

  if (!candidates.length) {
    console.error(`No emblem/logo file found on ${lang}.wikipedia "${title}".`);
    console.error('Try --lang ko with the Hangul --title, or source the logo from the official site by hand.');
    console.error('All image files on the page:');
    files.forEach((f) => console.error('  ', f));
    process.exit(2);
  }

  console.log(`Candidates for "${name}" (best first):`);
  candidates.slice(0, 8).forEach((f, i) => console.log(`  ${i === 0 ? '→' : ' '} ${f}`));

  const chosen = candidates[0];
  if (dry) return;

  const info = await api({ action: 'query', prop: 'imageinfo', iiprop: 'url', titles: chosen });
  const page = Object.values(info?.query?.pages ?? {})[0];
  const src = page?.imageinfo?.[0]?.url;
  if (!src) throw new Error(`Could not resolve a URL for ${chosen}`);

  const ext = (src.split('.').pop() || 'png').toLowerCase().replace(/[^a-z0-9]/g, '');
  const outName = `${slug}.${ext}`;
  const outPath = join(outDir, outName);

  const bin = await fetch(src, { headers: { 'User-Agent': UA } });
  if (!bin.ok) throw new Error(`Download failed ${bin.status} for ${src}`);
  const buf = Buffer.from(await bin.arrayBuffer());
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, buf);

  console.log(`\nSaved ${outPath} (${(buf.length / 1024).toFixed(0)} KB) from ${src}`);
  console.log('\nAdd these to src/lib/universityLogos.ts:');
  console.log(`  NAME_TO_SLUG:  '${name}': '${slug}',`);
  console.log(`  SLUG_FILE:     '${slug}': '${outName}',`);
  console.log('\nThen open the file in the page to eyeball it (some seals need a tighter/padded crop).');
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
