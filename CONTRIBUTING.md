# Contributing to the FFP License Project

Thank you for your interest in contributing to the FFP (Freedom For People) License project! This document provides guidelines for contributing to the license documentation, website, and related materials.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Contribution Guidelines](#contribution-guidelines)
- [Documentation Style Guide](#documentation-style-guide)
- [Submitting Changes](#submitting-changes)
- [License](#license)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of:
- Experience level
- Gender identity and expression
- Sexual orientation
- Disability
- Personal appearance
- Body size
- Race, ethnicity, or nationality
- Age
- Religion or lack thereof

### Our Standards

**Positive behaviors include:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behaviors include:**
- Harassment, trolling, or discriminatory comments
- Personal or political attacks
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## How Can I Contribute?

### Reporting Issues

If you find issues with the license documentation, website, or have suggestions:

1. **Check existing issues** to avoid duplicates
2. **Create a new issue** with a clear title and description
3. **Provide context** including:
   - What you expected
   - What actually happened
   - Steps to reproduce (if applicable)
   - Suggestions for improvement

### Suggesting Enhancements

We welcome suggestions for improving the FFP License project:

1. **Check if the suggestion already exists** in issues or discussions
2. **Open a new issue** with the "enhancement" label
3. **Describe the enhancement** including:
   - The problem it solves
   - How it benefits users
   - Potential implementation approaches

### Improving Documentation

Documentation improvements are always welcome:

- **Fix typos or grammatical errors**
- **Clarify confusing sections**
- **Add examples or use cases**
- **Improve formatting and readability**
- **Translate documentation** (with preserved legal meaning)

### Enhancing the Website

Contributions to the website (`docs/` folder):

- **Improve styling and design** — edit `docs/css/styles.css`
- **Fix responsive design issues** — breakpoints and mobile layout live in `docs/css/styles.css`
- **Add accessibility improvements** — aria attributes, semantic HTML in the `.html` files
- **Improve navigation** — shared nav in each page's `<nav class="site-nav">` block
- **Add useful features** — shared behaviour lives in `docs/js/main.js`

#### Website Directory Layout

```
docs/
├── index.html       ← License text page
├── faq.html         ← FAQ page
├── comparison.html  ← Comparison page
├── badges.html      ← Badge gallery page
├── css/
│   └── styles.css   ← Shared stylesheet (single source of truth for all styling)
├── js/
│   └── main.js      ← Shared JavaScript (nav toggle, clipboard helpers)
└── badges/          ← SVG badge files
```

### Adding Examples and Resources

Help others by contributing:

- **Example projects** using the FFP License
- **Integration guides** for different platforms
- **FAQs** based on real user questions
- **Comparison matrices** with other licenses
- **Badge variations** and styling options

## Getting Started

### Prerequisites

For website development:
- Basic HTML, CSS, and JavaScript knowledge
- A web browser for testing
- A text editor or IDE

For documentation:
- Markdown knowledge
- Understanding of the FFP License terms

### Setting Up

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/FFP.git
   cd FFP
   ```
3. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Testing Your Changes

#### Documentation Changes
- Preview markdown files in your editor or using a markdown previewer
- Check all links work correctly
- Verify formatting renders properly

#### Website Changes
- Open `docs/index.html` in a web browser (no build step required — it's plain HTML/CSS/JS)
- Test on different browsers (Chrome, Firefox, Safari, Edge)
- Test responsive design on different screen sizes (especially ≤ 680 px for the mobile nav)
- Enable your browser's "prefer dark color scheme" emulation to verify dark-mode rendering
- Verify all navigation links work across all four pages
- Test clipboard copy functionality on `index.html` and `badges.html`
- Check for console errors

## Contribution Guidelines

### What We Accept

✅ **We welcome:**
- Documentation improvements and clarifications
- Website enhancements and bug fixes
- New examples and use cases
- FAQ additions based on real questions
- Translation improvements (non-legal sections)
- Badge designs and variations
- Accessibility improvements
- Performance optimizations

### What We Generally Don't Accept

❌ **We generally don't accept:**
- Changes to the core license terms (legal text) without extensive legal review
- Additions that significantly increase complexity without clear benefit
- Style changes that don't improve readability or accessibility
- Features that require backend services or databases
- Breaking changes to existing URLs or structure

### Special Considerations for License Text

⚠️ **Important**: The license legal text in the LICENSE file and the terms section of the website should only be modified:
- With maintainer review and explicit written approval
- For critical bug fixes that affect legal interpretation
- For official version updates (e.g., v2.0 → v3.0)

The current authoritative version is **FFP License v2.0**. Any proposed changes to the legal text must be discussed in a GitHub Issue before a pull request is opened.

For the license text:
- Translation or formatting changes must preserve legal meaning
- Changes must be clearly marked as unofficial if not approved
- Discuss in an issue before making changes

## Documentation Style Guide

### Markdown Guidelines

- Use ATX-style headers (`#` not underlines)
- Use fenced code blocks with language specification
- Use **bold** for emphasis, *italics* for slight emphasis
- Use bullet points for unordered lists
- Use numbered lists for sequential steps
- Include blank lines around headers and code blocks

### Writing Style

- Write in clear, simple language
- Use active voice
- Be concise but complete
- Define acronyms on first use
- Use examples to illustrate concepts
- Structure content with clear headings

### Formatting Conventions

- **File names**: Use UPPERCASE.md for top-level docs (README.md, FAQ.md)
- **Links**: Use relative links for internal documents
- **Code**: Use `inline code` for file names, commands, and code snippets
- **Emphasis**: Use **bold** for important terms, *italics* sparingly

## Submitting Changes

### Pull Request Process

1. **Update your branch** with the latest changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Commit your changes** with clear messages:
   ```bash
   git add .
   git commit -m "Add: Brief description of your changes"
   ```

   Use conventional commit prefixes:
   - `Add:` for new features or content
   - `Fix:` for bug fixes
   - `Update:` for updates to existing content
   - `Docs:` for documentation-only changes
   - `Style:` for formatting/style changes
   - `Refactor:` for code restructuring

3. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a pull request** on GitHub with:
   - Clear title describing the change
   - Description explaining what and why
   - Reference to related issues (if any)
   - Screenshots (for visual changes)

### Pull Request Review

- Maintainers will review your PR
- Address any feedback or requested changes
- Once approved, your PR will be merged
- Your contribution will be credited

### After Your PR is Merged

- Delete your feature branch
- Update your fork's main branch
- Celebrate! 🎉 You've contributed to FFP!

## Recognition

All contributors will be recognized in our documentation. By contributing, you agree to have your GitHub username listed in our contributors list.

## Questions?

If you have questions about contributing:

- **Open an issue** for general questions
- **Start a discussion** for open-ended topics
- **Check existing documentation** for answers

## License

By contributing to the FFP License project, you agree that your contributions will be licensed under the FFP (Freedom For People) License, Version 2.0 (or any later version published by the FFP License Project).

For documentation and non-legal content, you also agree that your contributions may be relicensed as needed for compatibility or legal reasons.

### Contributor License Agreement (CLA)

By submitting any Contribution to this repository, you represent and warrant that:

1. **You have the right** to grant the license described in Section 5 of the FFP License v2.0.
2. **Your Contribution is original** or you have obtained sufficient rights to submit it under these terms.
3. **You understand** that your Contribution may be made publicly available and incorporated into the Work.
4. **You accept** that your Contribution is licensed inbound on the same terms as the Work (FFP License v2.0, inbound = outbound).

No separate CLA document is required; your act of submitting a pull request constitutes agreement to the above.

---

Thank you for helping make the FFP License better for everyone! 🙌
