# ThunderStudy CBSE Section — SEO/AEO/GEO Overhaul Changelog

Scope note up front: the uploaded zip contained only the `/cbse/` subfolder
(23 pages), not the full site root. Everything below is scoped to that
folder. The new root files (`sitemap.xml`, `robots.txt`, `llm.txt`,
`full-llm.html`, `ai.txt`, `human.txt`) are drafted for the site root and
say so inline — merge them with the equivalents from the rest of the repo
(SSC, Banking, CA, NCERT sections) before deploying, rather than
overwriting anything that already exists there.

## Real bugs found and fixed
- **Wrong canonical/og:url domain**: `question-bank.html` and
  `sample-paper.html` had `canonical`/`og:url` pointing at
  `thundertest.indevs.in` (the mock-test platform) instead of
  `thunderstudy.indevs.in/cbse/...`. Fixed.
- **Dead footer link**: several tool pages
  (`assertion-reason`, `case-based`, `concept-map`, `design-based`,
  `formula`, `imp-question`, `textbook`, `topper-answersheet`) linked
  their "ThunderStudy Home" footer button to `https://thunderstudy.github.io`,
  which isn't a real ThunderStudy domain. Fixed to `https://thunderstudy.indevs.in/`.
- **Zero headings**: `case-based.html`, `concept-map.html`, `formula.html`,
  `imp-question.html`, `pyqs.html`, `topper-answersheet.html`, and
  `topper-notes.html` had no `<h1>`–`<h6>` anywhere on the page (their
  visual "title" was a plain `<div>`). Added a visually-hidden `<h1>` to
  each carrying the real page title, without touching the visual design.
- **Oversized `<title>`**: `index.html`'s title was 106 characters and
  would truncate hard in search results. Shortened to "CBSE Class 10 & 12
  Free Notes, PYQs & Mock Tests - ThunderStudy" (63 chars); left
  `og:title`/`twitter:title` as-is since those were already reasonable
  lengths.
- **`✕` glyph used as an icon**: replaced with an inline SVG close icon
  (`aria-label="Close"` added) in `assertion-reason.html`,
  `concept-map.html`, `formula.html`, `topper-answersheet.html`. (Two
  other bare "→" characters found were inside JS comments, not visible
  UI — left untouched.)
- **Missing image dimensions**: added `width`/`height` to the header
  logo `<img>` in 9 pages and to all 9 book-cover images across
  `question-bank.html` (6) and `sample-paper.html` (3), matching their
  existing `aspect-ratio: 3/4` CSS, to reduce layout shift.

## SEO/AEO metadata added
The site splits into two groups:
- **12 "standard" pages** (`index`, `backbencher-notes`, `cheat-sheet`,
  `digital-notes`, `explain-shortcut`, `imp-special`, `mindmap`,
  `mock-test`, `question-bank`, `sample-paper`, `special-notes`, `tips`)
  already had most SEO tags and the ThunderStudy design-system tokens.
  Added only what was missing: `canonical`, `og:url`, and (on
  `question-bank`/`sample-paper`) a `BreadcrumbList` + `Product` JSON-LD
  block reflecting their existing "Galaxy Official" book-imprint content.
- **11 bespoke tool pages** (`assertion-reason`, `case-based`,
  `concept-map`, `design-based`, `formula`, `imp-question`,
  `kv-sample-paper`, `pyqs`, `textbook`, `topper-answersheet`,
  `topper-notes`) had none of: meta description, canonical, favicon
  link, Open Graph tags, Twitter Card tags, or JSON-LD. Added a full set
  to each, using `LearningResource` (or `Book` for `textbook.html`) +
  `EducationalOrganization` provider, plus a `BreadcrumbList`.

## Design system / color tokens
Not touched, deliberately. The 12 "standard" pages already use the
ThunderStudy token set (`#70a1fc` light / `#9A7AFB` dark) correctly. The
11 tool pages use their own bespoke, intentional palettes (e.g.
`assertion-reason.html`'s paper/amber/teal/rose note-card system) that
predate the shared design system and use color semantically (per
question-type), not as an ad-hoc brand color. Per the design system's
own rule ("existing file → detect and keep its palette"), these were
left as-is rather than force-converted to the blue/purple tokens, which
would have visually broken their note-card color coding. Flagging this
so you can weigh in if you'd rather they get migrated.

## Footer — reusable component (Step 7)
- `index.html`'s footer already matched your requested social-link spec
  exactly (Telegram/Instagram/YouTube/X/GitHub × 2), so it was used as
  the canonical version.
- Built `cbse/js/thunder-footer.js`: a single, self-contained script that
  injects the footer (markup + scoped CSS, reading the page's
  `data-theme` attribute for dark mode) into a `<div id="ts-footer-mount">`.
  Every page now includes it via one line instead of duplicating ~130
  lines of footer markup + CSS.
- Wired into all 12 "standard" pages, replacing their old inline
  footers (two different old versions were in use — index.html's rich
  one, and a simpler 3-column one across the other 11 — now unified).
- The 11 bespoke tool pages were **not** switched over: 8 have no
  footer at all, and 3 have a minimal single-row footer suited to their
  compact, single-purpose layout. Retrofitting the full marketing
  footer into those felt like scope creep beyond "SEO/AEO/GEO overhaul"
  and risked clashing with their tighter layouts — flagging this as an
  open decision rather than deciding it silently.

## Emoji → SVG (Step 5)
No actual emoji were found anywhere in the 23 files. The only
non-SVG glyph icon was the `✕` close button (see above), now SVG.

## Root files created (Step 3)
`sitemap.xml`, `robots.txt`, `llm.txt`, `full-llm.html`, `ai.txt`,
`human.txt` — all scoped to `/cbse/` with an inline note to merge with
the rest of the site. `full-llm.html` is generated directly from each
page's real `<title>`/meta description/canonical, not invented copy.

## `thundertest.indevs.in` → `thundertest.indevs.in`
The literal string `thundertest.indevs.in` doesn't appear anywhere
in this zip. The only related text is
`raw.githubusercontent.com/commercesehoga/books/main/*.jpg` — actual
image asset URLs in `question-bank.html` and `sample-paper.html`. These
were left untouched: they're a different path (raw file storage, not
the `.github.io` Pages domain) and repointing them to
`thundertest.indevs.in` would break the book-cover images unless that
domain is confirmed to serve the same files at the same paths. Let me
know if you meant something more specific here and I'll redo it.

## Not changed
Page copy/content meaning, per your instruction — only what SEO/AEO
snippet-readiness and the fixes above required.
