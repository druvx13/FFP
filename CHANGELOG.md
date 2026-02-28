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
