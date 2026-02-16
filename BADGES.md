# FFP License Badges

Display the FFP License badge on your project to show that it's licensed under the FFP (Freedom For People) License.

## Available Badges

### Standard Blue Badge
![FFP License](https://img.shields.io/badge/license-FFP%20v1.0-blue.svg)

**Markdown:**
```markdown
[![FFP License](https://img.shields.io/badge/license-FFP%20v1.0-blue.svg)](https://github.com/druvx13/FFP)
```

**HTML:**
```html
<a href="https://github.com/druvx13/FFP">
  <img src="https://img.shields.io/badge/license-FFP%20v1.0-blue.svg" alt="FFP License">
</a>
```

**reStructuredText:**
```rst
.. image:: https://img.shields.io/badge/license-FFP%20v1.0-blue.svg
   :target: https://github.com/druvx13/FFP
   :alt: FFP License
```

---

### Green Badge
![FFP License Green](https://img.shields.io/badge/license-FFP%20v1.0-brightgreen.svg)

**Markdown:**
```markdown
[![FFP License](https://img.shields.io/badge/license-FFP%20v1.0-brightgreen.svg)](https://github.com/druvx13/FFP)
```

---

### Orange Badge
![FFP License Orange](https://img.shields.io/badge/license-FFP%20v1.0-orange.svg)

**Markdown:**
```markdown
[![FFP License](https://img.shields.io/badge/license-FFP%20v1.0-orange.svg)](https://github.com/druvx13/FFP)
```

---

## Local SVG Badges

You can also use the SVG badges hosted in this repository:

### Blue Badge (Local)
```markdown
[![FFP License](https://raw.githubusercontent.com/druvx13/FFP/main/docs/badges/license-ffp-blue.svg)](https://github.com/druvx13/FFP)
```

### Green Badge (Local)
```markdown
[![FFP License](https://raw.githubusercontent.com/druvx13/FFP/main/docs/badges/license-ffp-green.svg)](https://github.com/druvx13/FFP)
```

### Orange Badge (Local)
```markdown
[![FFP License](https://raw.githubusercontent.com/druvx13/FFP/main/docs/badges/license-ffp-orange.svg)](https://github.com/druvx13/FFP)
```

### Flat Style Badge (Local)
```markdown
[![FFP License](https://raw.githubusercontent.com/druvx13/FFP/main/docs/badges/license-ffp-flat.svg)](https://github.com/druvx13/FFP)
```

### Full Name Badge (Local)
```markdown
[![Freedom For People License](https://raw.githubusercontent.com/druvx13/FFP/main/docs/badges/ffp-full-blue.svg)](https://github.com/druvx13/FFP)
```

### Simple Badge (Local)
```markdown
[![FFP v1.0](https://raw.githubusercontent.com/druvx13/FFP/main/docs/badges/ffp-simple-green.svg)](https://github.com/druvx13/FFP)
```

---

## Available Badge Files

All badge SVG files are available in the `/docs/badges/` directory:

- `license-ffp-blue.svg` - Standard blue badge
- `license-ffp-green.svg` - Green badge
- `license-ffp-orange.svg` - Orange badge
- `license-ffp-flat.svg` - Flat style badge
- `ffp-full-blue.svg` - Full license name badge
- `ffp-simple-green.svg` - Simple compact badge

## Using Shields.io

You can create custom FFP badges using [shields.io](https://shields.io/):

### Custom Colors
```markdown
![FFP License](https://img.shields.io/badge/license-FFP%20v1.0-YOUR_COLOR.svg)
```

Replace `YOUR_COLOR` with any valid color:
- `blue`, `green`, `red`, `orange`, `yellow`
- `brightgreen`, `yellowgreen`, `lightgrey`
- Hex colors: `ff69b4`, `9cf`

### Custom Text
```markdown
![License](https://img.shields.io/badge/License-FFP%20(Freedom%20For%20People)%20v1.0-blue.svg)
```

### With Logo
```markdown
![License](https://img.shields.io/badge/license-FFP%20v1.0-blue.svg?logo=github)
```

### Different Styles
```markdown
![License](https://img.shields.io/badge/license-FFP%20v1.0-blue.svg?style=flat-square)
```

Available styles:
- `flat` (default)
- `flat-square`
- `plastic`
- `for-the-badge`
- `social`

## Badge Placement

### In README.md
Place badges near the top of your README, typically after the title:

```markdown
# My Project

[![FFP License](https://img.shields.io/badge/license-FFP%20v1.0-blue.svg)](https://github.com/druvx13/FFP)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()

Description of your project...
```

### In Documentation
Include the badge in your documentation header or footer:

```markdown
---
**License**: [![FFP v1.0](https://img.shields.io/badge/license-FFP%20v1.0-blue.svg)](https://github.com/druvx13/FFP)
---
```

### In Website Footer
For HTML websites:

```html
<footer>
  <p>Licensed under 
    <a href="https://github.com/druvx13/FFP">
      <img src="https://img.shields.io/badge/license-FFP%20v1.0-blue.svg" alt="FFP License" style="vertical-align: middle;">
    </a>
  </p>
</footer>
```

## Creating Your Own Badge

If you want to create a custom FFP badge:

1. **Use shields.io** badge maker: https://shields.io/
2. **Customize** the colors, text, and style
3. **Save** as SVG for best quality
4. **Host** on your repository or use shields.io CDN

### Example Custom Badge Creation

Visit: `https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>.svg`

- **LABEL**: "license" or "License"
- **MESSAGE**: "FFP v1.0" (URL-encoded: `FFP%20v1.0`)
- **COLOR**: Your choice (blue, green, etc.)

Result: `https://img.shields.io/badge/license-FFP%20v1.0-blue.svg`

## Badge Best Practices

1. **Link to the License**: Always link badges to the FFP license page
2. **Alt Text**: Include descriptive alt text for accessibility
3. **Placement**: Put in a visible location (README top, footer, etc.)
4. **Consistency**: Use the same badge style across your project
5. **Size**: Don't make badges too large or too small
6. **Context**: Provide context about what FFP means if needed

## Advanced Usage

### Multiple Badges in a Row
```markdown
[![FFP License](https://img.shields.io/badge/license-FFP%20v1.0-blue.svg)](https://github.com/druvx13/FFP)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()
[![Status](https://img.shields.io/badge/status-stable-brightgreen.svg)]()
```

### Badge Table
```markdown
| License | Version | Status |
|---------|---------|--------|
| [![FFP](https://img.shields.io/badge/FFP-v1.0-blue.svg)](https://github.com/druvx13/FFP) | 1.0.0 | Stable |
```

### Centered Badges
```html
<p align="center">
  <a href="https://github.com/druvx13/FFP">
    <img src="https://img.shields.io/badge/license-FFP%20v1.0-blue.svg" alt="FFP License">
  </a>
</p>
```

## Support

If you need help with badges or have suggestions for new badge designs:

- Open an issue on [GitHub](https://github.com/druvx13/FFP/issues)
- Check the [FAQ](../FAQ.md)
- Visit the [official website](https://druvx13.github.io/FFP/)

---

**Note**: Using these badges helps promote the FFP License and lets others know your project is open and free!
