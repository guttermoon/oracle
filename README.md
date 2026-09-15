# The Sailor's Oracle

A sixteen-card nautical oracle deck and a small static site that lets newsletter readers pause, draw a card, and read its meaning. Because email clients strip JavaScript, the email only holds the invitation (face-down cards the reader taps); the draw and reveal happen here on the web page. Part of [Starboard](https://www.starboardmanifest.com/).

Live site: https://oracle.starboardmanifest.com

## What's here

| Path | What it is |
| --- | --- |
| `cards.json` | Canonical card data: names, keywords, teasers, meanings, reflection prompts. Edit this. |
| `index.html` | Home: deck overview, "Draw your card", and the full grid. |
| `draw.html` | Draw a random card, or `draw.html?card=<slug>` for a specific one. |
| `styleguide.html` | Rendered brand style guide. |
| `assets/` | `style.css` and `deck.js` (vanilla, no dependencies). |
| `img/cards/`, `img/thumbs/` | Web-optimized art (generated). |
| `img/back.png` | The card back (generated). |
| `brand/` | Logos, wordmarks, icons, favicon. |
| `design/` | Style guide, design tokens, Tailwind theme, CARDS.md. |
| `art-source/` | Original full-resolution card art (build input). |
| `email/` | Newsletter guide and paste-in HTML blocks. |
| `scripts/` | Build scripts (see below). |
| `starboard-design-system/` | The Starboard brand & design system (tokens, type, logos, illustration registers, UI-kit mocks). Supporting material — the deck above is the main piece. |

## Design system

- `styleguide.html`: a rendered, browsable style guide. Visit https://oracle.starboardmanifest.com/styleguide.html
- `design/STYLE_GUIDE.md`, `design/design-tokens.json`, `design/tailwind.config.js`: the same system for tooling.

Dark theme: deep navy background, warm cream text, a single electric lime accent. Headings use Playfair Display, body uses Chivo.

## Regenerate after changing art or copy

```sh
pip install Pillow
python3 scripts/optimize_images.py   # rebuild img/cards, img/thumbs, img/back.png from art-source/
python3 scripts/make_cards_md.py     # rebuild design/CARDS.md from cards.json
```

## License

© 2026 Megan Williams. All rights reserved. This repository is on public view as a portfolio piece — read it freely, but no licence to reuse, copy, or modify the code or artwork is granted. See [`LICENSE`](LICENSE). Want to use part of it? Ask — the answer may well be yes.
