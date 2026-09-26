# ThunderStudy CA — SEO / AEO / GEO + Design System Refresh

Scope note up front: this zip contains only the **/ca** (Chartered Accountancy)
subtree of thunderstudy.indevs.in — not the full site. Everything below is
scoped to these 8 pages: `index.html`, `notes.html`, `404.html`,
`final/index.html`, `foundation/index.html`, `foundation/notes.html`,
`inter/index.html`, `special/index.html`.

## 1. Technical SEO fixes

- **Fixed a site-wide broken-URL bug**: every favicon/apple-touch-icon/OG-image
  reference had a `https://https://...` double-protocol typo, on every page.
  Normalized to root-relative (`/favicon.svg`, `/favicon.ico`,
  `/apple-touch-icon.svg`) or absolute (`og-cover.png`) consistently.
- **Fixed a duplicate `<h1>`**: `foundation/notes.html` is a two-screen SPA
  (subject list + chapter list) and had an `<h1>` in each screen's markup,
  even though only one is visible at a time. Demoted the chapter-view one to
  `<h2>`.
- **Added missing canonical + robots tags** to `notes.html` and
  `foundation/notes.html`.
- **Fixed a wrong canonical/og:url** in `foundation/notes.html`
  (`/ca-notes` → `/ca/foundation/notes`).
- **Fixed wrong OG-image/favicon domains** (`commercesehoga.indevs.in`,
  `thundertest.indevs.in/favicon.svg`) that had been pasted into
  `notes.html`/`foundation/notes.html`/`404.html` from another page.
- **Added `WebSite` + `BreadcrumbList` JSON-LD** to all seven indexable pages
  (was missing everywhere).
- **Found, but did not fabricate content for**, six broken internal links to
  pages that don't exist in this zip: `/ca/formula`, `/ca/final/notes`,
  `/ca/final/pyqs`, `/ca/foundation/pyqs`, `/ca/inter/notes`,
  `/ca/inter/pyqs`. These are referenced from card grids on the live pages.
  Recommend either building those pages or removing/graying out the links
  until they exist — inventing placeholder study content felt like the wrong
  call.
- No `<img>` tags exist anywhere in this codebase (all icons are inline SVG),
  so there was no alt-text or lazy-loading work needed.

## 2. `commercesehoga.github.io` → `thundertest.indevs.in`

The literal string `commercesehoga.github.io` doesn't appear anywhere in the
site content — the closest real matches were legacy `*.github.io` URLs
functioning as content hosts. Updated:
- `foundation/notes.html`: the PDF-notes `BASE_URL` (`thunderstudy.github.io/ca_notes/`
  → `thundertest.indevs.in/ca_notes/`) and a stray JSON-LD `url` field.
- `special/index.html`: a header "Notes" link that pointed to a dead
  `thunderstudy.github.io/ca` URL, fixed to `/ca/notes`.
- Left `wondermayank.github.io` as **display text** in footer credit links
  where the `href` already correctly points to `wondermayank.in` — that whole
  block was rebuilt in the new shared footer (see §5) anyway.

## 3. Color-token swap (light + dark)

Remapped every page's `:root` / `[data-theme="dark"]` CSS custom properties
to the design system's exact tokens (`#70a1fc` / `#9A7AFB` primary,
`#26324A` / `#F4F1FF` ink, `#667085` / `#A9A4B8` muted, `#D8E1F2` / `#2A2A2A`
hairline, etc.) across `index.html`, `notes.html`, `final/index.html`,
`foundation/index.html`, `foundation/notes.html`, `inter/index.html`, and
`404.html`. Also fixed a stray hardcoded `#6699FB` in a `theme-color` meta
tag and one inline SVG stroke.

**Exception, on purpose:** `special/index.html` (the CA planner tool) keeps
its existing purple/glass-morphism palette. It already has a strong,
consistent visual identity (its dark-mode purple is coincidentally identical
to the design system's `#9A7AFB`), and the design system's own guidance is to
detect and preserve a page's existing dominant palette rather than force a
change when no color was explicitly specified for that page. I added CSS
variable aliases so the shared footer component still re-themes correctly
using this page's own purple as the accent, rather than clashing with it.

**Contrast check (WCAG):** ink/muted text on the canvas background comfortably
clears AA (12.8:1 and 5:1 in light mode; even higher in dark). White button
text on the `primary` fill comes out to ~2.6:1 (light) / ~3.2:1 (dark) —
below the 4.5:1 AA text threshold. This is inherent to the design system's
own primary/on-primary pairing, not something introduced here; flagging it
for awareness rather than overriding the spec unilaterally.

## 4. Emoji → SVG

Found emoji in exactly one file, `special/index.html` (~50 occurrences of 25
distinct emoji). Handled by context:
- **Rendered via `innerHTML`** (toast-free UI text, table cells, badges,
  buttons): replaced with inline `currentColor` SVGs matching the design
  system's stroke-icon style, so they re-theme automatically — warning
  triangle, sad-face, empty-tray, clipboard, pencil, person, pin, calendar,
  skip-forward, checkmark, trash, tomato/pomodoro, target, coffee, leaf, X.
- **Rendered via `textContent`, native `confirm()`, or sent to an external
  app** (toast notifications, the delete-all confirm dialog, the WhatsApp
  share message, the search input's `placeholder` attribute): these cannot
  render HTML/SVG at all, so the emoji were removed and the text cleaned up
  instead, rather than shipping literal `<svg>...</svg>` as visible text.
- The 🧪 flask emoji was also embedded in the *data* (`work: '🧪 Test 1'`),
  reused in three places (table render, WhatsApp text, ICS calendar export).
  Removed it from the data itself and switched the "is this a test day?"
  check from `.includes('🧪')` to `.includes('Test')` so the existing "TEST"
  badge still renders correctly.
- Left one plain `✓` character inside `[✓]` / `[ ]` checklist notation in the
  plain-text "copy planner" export — that's ASCII-style bracket notation in a
  plain-text-only context, not a pictographic emoji, so it stays.

## 5. Footer componentization + social links

- Built a single **`footer.html`** partial (3-column layout — Thunder /
  wondermayank / Legal — plus a social-icon row) instead of the same footer
  markup being duplicated across all 7 pages.
- Added **`assets/footer.js`**, a tiny loader that `fetch()`es `footer.html`
  into a `<div id="site-footer"></div>` placeholder on every page, with an
  inline-fallback footer if the fetch fails.
- Added **`assets/footer.css`** for the social-icon row and the two-tone
  wordmark styling (§6) — loaded on every page, and it reads each page's own
  color tokens so it re-themes automatically (including on `special/index.html`,
  via the alias variables mentioned in §3).
- Replaced every page's static `<footer>…</footer>` with the
  `<div id="site-footer"></div>` mount point, and added the mount + assets to
  `special/index.html`, which previously had **no footer at all**.
- In `foundation/notes.html`, the old footer sat *inside* the "subjects"
  SPA-screen, so it disappeared once a student clicked into a chapter list.
  Moved it to sit outside both screens so it's always visible.
- Rebuilt the link set per the design system's spec (dropped a couple of
  stale/undocumented links like "Portfolio" and legacy `.github.io` credit
  text, fixed "Free Study Material" to point at `blog.thunderstudy.indevs.in`
  instead of a broken self-referencing link, added a missing FAQ link).
- Added the social-icon row with the exact links requested:
  Telegram (`t.me/Thunderstudy_official`), Instagram (`Thunderstudyx`),
  YouTube (`@Thunderstudy_official`), X (`Thunderstudyx`), and both GitHub
  accounts (`wondermayank`, `ThunderStudy`) — each with its own SVG icon,
  `target="_blank" rel="noopener noreferrer"`, and an `aria-label`.

## 6. Branding & favicon

- Created **`favicon.svg`** (the lightning-bolt mark already used in the nav
  logo), with a `prefers-color-scheme` media query so it switches between the
  light (`#70a1fc`) and dark (`#9A7AFB`) accent automatically in browsers that
  support theme-aware SVG favicons.
- Confirmed/normalized `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`
  in the `<head>` of all 8 pages.
- Styled every visible "ThunderStudy" wordmark (nav logo, loading-screen
  labels, footer link) as two `<span>`s — `.wm-thunder` (page's neutral ink
  token — reads white on dark surfaces) and `.wm-study` (always the brand
  accent color) — via shared rules in `assets/footer.css`.

## 7. New root files (GEO/AEO)

Created at the top level of this zip: `llm.txt`, `full-llm.html`, `ai.txt`,
`human.txt`, `sitemap.xml`, `robots.txt`. Linked all four discovery files
(`llm.txt`, `full-llm.html`, `ai.txt`, `human.txt`) from every indexable
page's `<head>`, and updated `special/index.html`'s existing (previously
dead) discovery `<link>` tags to point at these instead of the old
`llms.txt`/`llms-full.txt`/`humans.txt` names it had been referencing.

**Important:** since this zip is only the `/ca` subtree, these root files
describe the CA section specifically. If thunderstudy.indevs.in already has
site-wide versions of these files for its other verticals (CUET, SSC,
Banking, etc.), merge this content into those rather than overwriting them.

## Known gaps / things I didn't do

- Didn't build the 6 missing pages behind the broken links noted in §1 —
  that's new content, not a SEO/design pass.
- Didn't touch `special/index.html`'s color palette (§3) — deliberate.
- `og:image`/`apple-touch-icon`/`favicon.ico`/`manifest.json` assets
  themselves aren't in this zip (only referenced by path) — `favicon.svg` is
  now included; the rest still need to exist at the real domain root.
- Didn't create a `security.txt` — it was already linked from
  `special/index.html` before my changes, but wasn't in this task's list, so
  I left that pre-existing dangling reference as-is.
