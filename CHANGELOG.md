# Changelog

All notable changes to the FFP (Freedom For People) License project are recorded in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Added
- `docs/css/styles.css` — shared stylesheet extracted from all four HTML pages, with CSS custom properties, dark-mode support (`prefers-color-scheme: dark`), and mobile-first responsive design.
- `docs/js/main.js` — shared JavaScript module (mobile nav toggle, clipboard copy helpers) extracted from inline `<script>` blocks.
- Mobile hamburger navigation menu for screens ≤ 680 px.
- Dark-mode theme using CSS `prefers-color-scheme` media query — no JavaScript or toggles required.
- Open Graph (`og:*`) and Twitter Card meta tags on every page.
- `rel="noopener noreferrer"` on all external links.
- `aria-*` attributes and `role` annotations for navigation, regions, and buttons.
- `:focus-visible` outline for keyboard-navigation accessibility.
- `CHANGELOG.md` (this file).

### Changed
- Inline `<style>` blocks and duplicate CSS removed from all four HTML pages — all styling now lives in `docs/css/styles.css`.
- Inline `<script>` blocks removed from HTML pages — JavaScript is now loaded via `<script src="js/main.js" defer>`.
- Inline `style=""` attributes replaced with semantic CSS utility classes (`text-center`, `font-bold`, `mt-large`, `divider`).
- `<div class="container">` now wraps inside a `<main>` element for improved semantics.
- Navigation bar standardised across all pages — consistent link labels, active-page highlighting, and brand link.
- Badge copy buttons migrated from inline `onclick` handlers to `data-copy` attributes processed by `main.js`.
- `faq.html` — removed broken `<link rel="stylesheet" href="styles.css">` reference that pointed to a non-existent file.
- `comparison.html` — table wrapped in `<div class="table-wrapper">` for horizontal scroll on small viewports.
- Container padding and margins made fluid/responsive using `clamp()` and viewport-relative breakpoints.
- `README.md` updated to reflect new `docs/css/` and `docs/js/` subdirectory structure.
- `CONTRIBUTING.md` updated with new directory layout and modern tooling notes.

### Fixed
- Missing `styles.css` reference in `faq.html` (now correctly points to `css/styles.css`).
- External GitHub links missing `rel="noopener noreferrer"` security attribute.

---

## [2.0.0] — 2026-02-28

### Phase 1 — License Audit Findings (v1.0)

The following issues were identified in v1.0 and addressed in v2.0:

- **Missing `Source Form` / `Object Form` definitions** — ambiguity in what forms of the Work
  distribution conditions apply to (fixed: new definitions in Section 0).
- **`Legal Entity` definition absent** — "control" scenarios were undefined for organisations
  (fixed: explicit `Legal Entity` definition added to Section 0).
- **`Contributor` definition was circular** — referenced "submitted or distributed under this
  License" without sufficient clarity (fixed: tightened definition in Section 0).
- **`Effective Date` absent** — no anchor for when rights begin (fixed: defined in Section 0).
- **Patent Retaliation clause too narrow** — only covered litigation "filed"; threats were
  excluded (fixed: Section 3.2 now covers initiation, maintenance, *or* threats).
- **Anti-Lockdown clause lacked DRM/TPM specificity** — "technological measures" was vague
  (fixed: Section 4.3 explicitly names DRM and TPM with carve-outs for encryption).
- **No AI/ML Training provision** — modern use case unaddressed (fixed: Section 4.5 added).
- **Reinstatement window undefined** — "cease all violation" had no cure deadline
  (fixed: Section 8.2 now specifies 30-day cure window).
- **No Indemnification clause** — only warranty/liability disclaimers; no positive indemnity
  obligation (fixed: Section 11 added).
- **No Export Controls notice** — users unaware of export obligations (fixed: Section 12 added).
- **No Entire Agreement clause** — risk of parol evidence disputes (fixed: Section 15 added).
- **No version upgrade path** — users unable to adopt later versions without re-licensing
  (fixed: Section 16 added with "v2.0 or later" mechanism).
- **No Governing Law provision** — dispute resolution forum undefined (fixed: Section 17 added
  with international default and arbitration preference).
- **Liability disclaimer lacked jurisdictional carve-outs** — may not be enforceable in all
  jurisdictions as written (fixed: Sections 9 and 10 now include minimum-warranty and
  minimum-liability carve-outs).
- **Contributor Warranty absent** — contributors made no representation about their rights
  (fixed: Section 5 now includes contributor representation and warranty).

### Added in v2.0

- `Legal Entity`, `Source Form`, `Object Form`, `Effective Date` definitions (Section 0).
- AI / Machine Learning training permission with output scoping (Section 4.5).
- Explicit contributor representation and warranty in Contributions clause (Section 5).
- Indemnification clause protecting Licensor and Contributors (Section 11).
- Export Controls notice (Section 12).
- Entire Agreement clause (Section 15).
- Later Versions clause with "v2.0 or later" support (Section 16).
- Governing Law and Dispute Resolution provision (Section 17).

### Changed in v2.0

- Section 3.2 (Patent Retaliation) expanded to cover litigation threats, not just filed suits.
- Section 4.1 (License Text Requirement) split into sub-clauses (a) and (b), adds URI fallback.
- Section 4.3 (No Lockdown) names DRM/TPM explicitly and adds three carve-outs.
- Section 5 (Contributions) adds contributor representation and warranty.
- Section 8.2 (Reinstatement) adds explicit 30-day cure window.
- Section 9 (Warranty Disclaimer) adds jurisdictional minimum-warranty carve-out.
- Section 10 (Liability Limitation) adds loss-of-profits/data/goodwill coverage and
  jurisdictional minimum-liability carve-out.
- Application Guide updated to reference v2.0.

---

## [1.0.0] — Initial Release

### Added
- FFP (Freedom For People) License text (`LICENSE`).
- `README.md` with overview, quick-start guide, badge examples, and community links.
- `FAQ.md` — frequently asked questions about the license.
- `COMPARISON.md` — feature comparison with MIT, Apache 2.0, GPL v3, and BSD 3-Clause.
- `CONTRIBUTING.md` — contribution guidelines and style guide.
- `PROJECT_SUMMARY.md` — high-level project summary.
- `BADGES.md` — badge usage examples.
- `docs/` website with four pages: `index.html`, `faq.html`, `comparison.html`, `badges.html`.
- `docs/badges/` directory containing six SVG badge variants.
