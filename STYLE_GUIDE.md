# Starboard — Style Guide

The Starboard design system ("Warm Minimalist"), captured from the production
site via design-extractor. Warm, approachable minimalism with a sophisticated
edge: a cream canvas, deep-navy text, and a single electric-lime accent, with
generous whitespace and soft elevation.

> **Theme note.** The canonical palette below is the **light / cream** theme
> (`background` is cream). The **Sailor's Oracle micro-site renders in dark mode**
> (per request): it inverts the two primaries — deep navy becomes the page
> background and cream becomes the text — while keeping lime as the accent. Both
> are expressed from the same tokens (`assets/style.css :root`, `tailwind.config.js`).

## Color

| Token | Hex | Role |
|-------|-----|------|
| `background` | `#f5e6cd` | Warm cream — primary page background (light theme) |
| `surface` | `#e5e7eb` | Soft gray — secondary surfaces / containers |
| `accent-primary` | `#a4e636` | Electric lime — CTAs, interactive elements, progress |
| `accent-light` | `#faf9d4` | Pale accent — subtle highlight backgrounds |
| `text-primary` | `#1b1f3b` | Deep navy — primary text (and dark-theme background) |
| `text-secondary` | `#2d3268` | Secondary text / medium contrast |
| `text-muted` | `#4d5198` | Muted text / supporting content |
| `pure-black` | `#000000` | High-contrast logo / emphasis |
| `pure-white` | `#ffffff` | High-contrast white |

Reserve lime for key interactive elements — don't overuse it. Never use a
pure-white page background; the warm cream is intentional.

## Typography

- **Headings:** Playfair Display (serif) — elegant, used sparingly.
- **Body & labels:** Chivo (sans-serif).

| Style | Font | Size / line-height | Weight | Tracking |
|-------|------|--------------------|--------|----------|
| heading-large | Playfair | 48 / 48 | 400 | — |
| heading-small | Playfair | 20 / 28 | 400 | — |
| heading-medium | Chivo | 18 / 28.8 | 600 | 0.18px |
| body-base | Chivo | 16 / 25.6 | 400 | — |
| body-bold | Chivo | 16 / 24 | 700 | 0.4px |
| body-small | Chivo | 14 / 20 | 400 | — |
| label-small | Chivo | 9 / 14.4 | 700 | 0.9px (uppercase) |

400 for regular, 600–700 for emphasis; tracking grows as text shrinks.

## Spacing (4px base)

`2 · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 128` px
(tokens `--spacing-xs … --spacing-8xl`). Favor generous whitespace.

## Border radius

`sm 4 · md 8 · lg 12 · xl 16 · full 9999` px.
**Interactive elements (buttons, inputs, tiles) use `lg` = 12px** consistently.
Don't introduce off-scale values (e.g. 10px, 14px).

## Elevation

- Resting: `rgba(0,0,0,.4) 0 2px 8px -2px, rgba(0,0,0,.3) 0 1px 2px -1px`
- Raised (large): `rgba(0,0,0,.5) 0 25px 50px -12px`

Soft, moderate-blur shadows — gentle depth, never harsh.

## Buttons

- **Primary** (`.button--primary`): lime `#a4e636` fill, deep-navy `#1b1f3b`
  text, weight 700, **radius 12px**, generous padding.
- **Ghost / secondary:** transparent fill, lime border + lime text.

Rounded rectangles (12px) — not pills.

## Components & logo

- Brand logo: stylised "starboard" wordmark with a star flourish; light and dark
  variants. Used small (~28px tall) in the nav, never oversized.
- Favicon: official compass mark, dark on transparent.
- Progress / interactive accents use lime with 12px corners.

## Sources

Tokens live in `assets/style.css` (`:root`) and `tailwind.config.js`. Captured
from the design-extractor export (starboarddesign CSS / JSON / Tailwind v4
`@theme` / DESIGN.md) for starboardmanifest.com.
