---
name: starboard-design
description: Use this skill to generate well-branded interfaces and assets for Starboard, a vision board and manifestation app. Contains colors, type, fonts, brand SVG/WebP assets, voice & tone, and UI kit components for the marketing site and the authenticated app. Use for production code or throwaway mocks, slides, and prototypes.
user-invocable: true
---

# Starboard Design Skill

Read the `README.md` file in this skill first; it covers brand voice, color/type tokens, visual foundations, and iconography. Then explore:

- `colors_and_type.css`: drop-in CSS variables and type system. Import this and set `[data-theme="dark|light|warm"]` on your root element.
- `assets/logos/`: brand marks for all three themes.
- `assets/elements/dark/`: 22 decorative WebP elements (anchor, compass, crow, key, lighthouse, …).
- `assets/decorations/`: star patterns, ornamental frames, dividers, and moon brackets.
- `assets/imagery/`: banner, OG image, and icon backgrounds.
- `ui_kits/marketing/` and `ui_kits/app/`: interactive recreations of the marketing site and authenticated app, with reusable JSX components.
- `slides/`: brand deck slide templates.

## When generating artifacts

- **Static HTML mocks, slides, throwaway prototypes:** copy assets from `assets/` into your output folder and reference them with relative paths. Import `colors_and_type.css` and pick a theme on the root.
- **Production code (Next.js, React, etc.):** lift the CSS variables and theme structure into your stylesheet, install `lucide-react` for UI icons, and load Playfair Display + Chivo from Google Fonts (or `next/font/google` to match the source repo).

## Brand guardrails

1. **Headings are always Playfair Display, italic.** That single detail carries 50% of the brand identity.
2. **Three themes, swapped via `[data-theme]`:** never hard-code palette values. Read the role tokens.
3. **No emoji in customer-facing UI.** Use brand decorative SVGs from `assets/elements/` instead.
4. **No gradient buttons. No bluish-purple gradient backgrounds. No "vibe" gradients.**
5. **Voice:** second-person, sentence-case, no exclamation points. Mystical-but-grounded. Use the Helm / Captain maritime metaphor only in section titles and footers.

If invoked without specific guidance, ask the user what they want to build (slide, marketing screen, app screen, video, full landing page) and act as an expert Starboard designer who outputs HTML artifacts *or* production code, depending on the need.
