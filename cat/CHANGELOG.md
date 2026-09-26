# ThunderStudy CAT & MBA Entrance Section — SEO/AEO/GEO + Design-System Overhaul
_Generated: 

Scope note: this archive contained only `/cat/` (1 hub page + 10 topic
pages) — no site root. Root files below are scoped to this section and
should be merged with the real site root.

## Starting point
Unlike the banking archive, **cat/index.html was already fully built** to
the current ThunderStudy standard: correct design-system tokens
(#70a1fc/#9A7AFB), working dark-mode toggle, JSON-LD (BreadcrumbList,
CollectionPage, FAQPage), and the current site header/footer (with all 6
social links). I used index.html's own header, footer, and CSS **verbatim**
as the template for the 10 subpages, rather than inventing a new pattern,
so the whole section is now internally consistent.

The 10 subpages, by contrast, had **none** of that: no JSON-LD, no dark
mode, no theme toggle, no real footer (most had a single placeholder line
with a broken `href="#"` link), and heavy emoji use. They fell into two
groups by shared template:
- **Group A** (english-grammar, lrdi, quantitative-aptitude, verbal,
  vocabulary) — shared "glass" DM Sans template.
- **Group B** (formula, gk, mindmap, pyqs, sample-paper) — shared "Segoe UI"
  card-grid template, mostly JS-rendered content.

## STEP 1 — Technical SEO audit & fixes
- No H1 duplication and no broken `https://https://` links found in this
  archive.
- 9 of 10 subpages had **no meta description, canonical, robots, theme-color,
  OG/Twitter tags, or favicon link at all** — added the full set to every
  page, matching index.html's existing pattern.
- Fixed a broken placeholder link (`href="#" onclick="event.preventDefault()"`)
  in the old one-line footers of formula/gk/mindmap/pyqs/sample-paper —
  replaced with the real site footer and working links.

## STEP 2 — AEO
- Added a visible, on-page **FAQ section** (2 Q&As, using index.html's own
  `.faq-container`/`.faq-card` styling) to all 10 subpages.
- Each FAQ pair also ships as FAQPage JSON-LD for answer-engine parsing.

## STEP 3 — GEO + root files
- Created llm.txt, full-llm.html, ai.txt, human.txt, sitemap.xml, robots.txt
  scoped to `/cat/`. index.html already correctly linked to `/full-llm.html`
  (no naming mismatch to fix here, unlike the banking archive).
- Added BreadcrumbList + WebPage JSON-LD to every subpage.

## STEP 4 — Design-system pass (light + dark mode)
- Injected the ThunderStudy design-system `:root` tokens (light **#70a1fc**
  / dark **#9A7AFB**, plus ink/muted/canvas/surface/card/hairline) into all
  10 subpages, copied verbatim from index.html.
- Added a real, working dark-mode **toggle button** (sun/moon SVG, same
  markup/script as index.html) to every subpage — none had one before.
- The original per-page color schemes (Group A's blue/purple "glass" vars,
  Group B's hardcoded blues) were **left in place for decorative content**
  rather than rewritten line-by-line across ~4,000 lines of bespoke markup.
  Instead, a scoped `[data-theme="dark"]` override patch was added for
  each group's real container/card classes (`.container`, `.stat-card`,
  `.topic-card`, `.formula-card`, `.gk-grid` children, etc.) so dark mode
  is fully usable and readable, even though it isn't pixel-identical to the
  design system on every decorative element. Flag if you'd like these fully
  rewritten to design-system tokens instead of patched.
- The new header, breadcrumb bar, FAQ section and footer on every page use
  the exact design-system tokens/components — no patching needed there.

## STEP 5 — Emoji → SVG
- Replaced every emoji across all 10 subpages (24 distinct emoji: ⚡ 💜 ❤️
  📈 📊 📐 ⬇️ 🎯 📖 📚 🧠 💰 📅 📰 🗺️ 🌍 🎨 🎭 🏛️ 👑 ⚛️ 🧪 🧬 📄 📋 📝) with
  inline SVG icons using `currentColor`, so they re-theme automatically.

## STEP 6 — Branding & favicon
- `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` added to all
  10 subpages (favicon.svg itself is outside this archive, at the site root).
- Wordmark split into `.brand-thunder`/`.brand-study` (index.html's own
  classes) via the new header, applied consistently across all 11 pages.

## STEP 7 — Footer skill + social links
- Replaced every subpage's placeholder footer with **index.html's exact
  `site-footer`** — 3 link columns (ThunderStudy / Resources / Community &
  Social) plus the 6 social icons (Telegram, Instagram, YouTube, X, GitHub
  personal, GitHub org) already live on the hub page. This keeps the whole
  `/cat/` section byte-for-byte consistent with the current site footer,
  rather than introducing a second footer style.

## Other
- Also added a **breadcrumb bar** (Home &rsaquo; CAT & MBA Entrance
  Preparation &rsaquo; [Page]) to every subpage, matching index.html's
  pattern — wasn't explicitly requested but is a natural extension of the
  BreadcrumbList JSON-LD and a low-risk, high-value addition.
- No `commercesehoga.github.io` references existed in this archive either.

## Known gaps / things to double check before deploying
- No root `favicon.svg`, site-root `index.html`, or shared root files
  existed in this archive — merge the root files here with the real site
  root when the full ThunderStudy codebase is overhauled.
- Group A/B's original decorative colors were patched for dark-mode
  readability rather than rewritten to design-system tokens line-by-line
  (see Step 4 note) — flag if a full rewrite of those ~4,000 lines is wanted.
- Group B pages (formula, gk, mindmap, pyqs, sample-paper) render most of
  their content via inline `<script>` (JS template strings) rather than
  static HTML — that JS wasn't touched, only the static head/header/footer/
  emoji, to avoid breaking functionality.
