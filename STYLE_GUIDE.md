# Starboard — Style Guide

Design tokens and component rules for the Starboard brand, as used across the
Sailor's Oracle micro-site. **Dark mode only.**

Source of truth:
- CSS custom properties — `assets/style.css` (`:root`)
- Tailwind theme — `tailwind.config.js`

## Color

| Token | Hex | Role |
|-------|-----|------|
| Navy (background) | `#1b1f3b` | Page background; text on lime |
| Navy deep | `#04041c` | Footer / deep shadow |
| Surface | `#2d3268` | Cards / raised panels |
| Periwinkle | `#4d5198` | Borders, muted accents |
| Lime | `#a4e636` | Primary buttons, links, accents |
| Lime deep | `#8fc91f` | Lime hover / pressed |
| Cream | `#f5e6cd` | Primary text, headings, wordmark |

Secondary text uses cream at reduced opacity: `rgba(245,230,205,0.78)` (muted),
`rgba(245,230,205,0.6)` (soft).

The page background is a **flat** `#1b1f3b` — no gradients.

## Typography

- **Display / headings** — "Playfair Display", italic, weight 400. Hero
  headline, card names, section titles.
- **Body / UI** — "Chivo", weights 400 / 700.

Scale:
- Hero headline `clamp(42px, 9vw, 86px)`
- Card name 32px · Section title 28px
- Body / lede 16–18px
- Eyebrow / labels 12px, uppercase, letter-spacing 0.3em, lime

## Buttons

- **Primary** — lime `#a4e636` fill, navy `#1b1f3b` text, weight 700,
  border-radius `12px`, padding `13px 28px`. Hover: lift 2px + slight brightness.
- **Ghost / secondary** — transparent fill, lime border + lime text. Hover: 12%
  lime tint.

Buttons are rounded **rectangles** (radius 12px), not full pills.

## Surfaces & cards

- Surface panels — `#2d3268`, border-radius `16px`.
- Oracle card art / tiles — border-radius 10–14px, shadow
  `0 18px 36px rgba(4,4,28,0.55)`, aspect ratio 600 × 776.

## Decorative motifs

Cream line-art tattoo motifs (anchor, crow, compass rose, key, eye, shell,
conch, …) on transparent backgrounds. Used sparingly as ambient decoration
scattered around hero sections; hidden on small screens.

## Logo & icon

- **Wordmark lockup** (`sb dark bg logo lockup horizontal.webp`) — small, in the
  top nav (~28px tall). Never oversized.
- **Favicon** — official compass mark, dark on transparent
  (`starboard offical icon dark.svg`).

## Radius & shadow tokens

| Token | Value |
|-------|-------|
| `--radius` | 12px (buttons, tiles) |
| `--radius-card` | 16px (surface cards) |
| `--radius-pill` | 999px |
| `--shadow-card` | `0 18px 36px rgba(4,4,28,0.55)` |

> The live extractor page (design-extractor.com) is behind a bot wall (HTTP 403)
> and could not be fetched; these tokens come from the Starboard production
> stylesheet.
