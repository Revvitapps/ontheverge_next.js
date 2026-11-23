// Wraps each design comp in designs-src/ into a complete HTML page in public/designs/.
// The comps were written as page bodies; this adds the document head, a shared reset,
// favicon and share metadata, absolute logo paths, and a small "All styles" link back to the chooser.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "designs-src");
const out = join(root, "public", "designs");
mkdirSync(out, { recursive: true });

const labels = {
  regal: { name: "Regal", theme: "#13303E", desc: "Style option 1 for On the Verge Enrichment: navy and gold, quiet and elegant." },
  joyful: { name: "Joyful", theme: "#4A1F4F", desc: "Style option 2 for On the Verge Enrichment: warm, vibrant and celebratory." },
  horizon: { name: "Horizon", theme: "#F8FAFA", desc: "Style option 3 for On the Verge Enrichment: light, airy and modern." },
  brand: { name: "Brand guide", theme: "#13303E", desc: "The On the Verge Enrichment brand guide: logo, color, type, imagery and voice." },
};

const reset = `<style id="otv-reset">
:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{margin:0;font:14px/1.5 system-ui,-apple-system,sans-serif}
img{max-width:100%}
[hidden]{display:none!important}
.otv-back{position:fixed;z-index:9999;left:calc(16px + env(safe-area-inset-left,0px));bottom:calc(16px + env(safe-area-inset-bottom,0px));display:inline-flex;align-items:center;gap:.5rem;padding:.6rem 1rem .6rem .8rem;border-radius:999px;background:rgba(11,31,41,.92);color:#F6F3EC;font:500 12px/1 "Jost",system-ui,sans-serif;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;border:1px solid rgba(217,180,101,.55);box-shadow:0 8px 24px rgba(11,31,41,.25);backdrop-filter:blur(6px);transition:transform .2s,background .2s}
.otv-back:hover{transform:translateY(-2px);background:#13303E}
.otv-back svg{width:12px;height:12px}
@media print{.otv-back{display:none}}
</style>`;

const back = `<a class="otv-back" href="/" aria-label="Back to all style options"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z" fill="#D9B465"/></svg>All styles</a>`;

for (const file of readdirSync(src).filter((f) => f.endsWith(".html"))) {
  const slug = file.replace(/\.html$/, "");
  const meta = labels[slug] ?? { name: slug, theme: "#13303E", desc: "On the Verge Enrichment" };
  let body = readFileSync(join(src, file), "utf8");

  // Logo files live in /assets; the comps referenced them relatively.
  body = body
    .replace(/(["'(])(?:\.\/)?(?:assets\/)?(otv-(?:logo|mark)(?:-reverse)?\.png)/g, "$1/assets/$2")
    .replace(/<meta name="claude:viewport-fit-sides"[^>]*>\s*/g, "");

  // Pull the <title> and anything before <style> up into <head>.
  body = body.replace(/<title>[\s\S]*?<\/title>\s*/, "");
  const headParts = [];
  body = body.replace(/^\s*((?:<link[^>]*>\s*|<style[\s\S]*?<\/style>\s*)+)/, (m) => {
    headParts.push(m);
    return "";
  });

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="${meta.theme}">
<meta name="description" content="${meta.desc}">
<meta property="og:title" content="On the Verge Enrichment · ${meta.name}">
<meta property="og:description" content="${meta.desc}">
<meta property="og:image" content="/assets/otv-logo.png">
<link rel="icon" href="/assets/otv-mark.png" type="image/png">
<link rel="apple-touch-icon" href="/assets/otv-mark.png">
<title>On the Verge Enrichment | ${meta.name}</title>
${reset}
${headParts.join("\n")}
</head>
<body>
${body}
${back}
</body>
</html>
`;
  writeFileSync(join(out, `${slug}.html`), html);
  console.log(`designs: ${slug}.html`);
}
