# The Captain's Log Oracle

A 16-card nautical oracle deck and a tiny static site that lets newsletter readers
**pause, draw a card, and read its meaning**. Because email clients strip
JavaScript, the email only holds the invitation (face-down cards the reader taps);
the draw and reveal happen on the web page.

## What's here

| Path | What it is |
| --- | --- |
| `cards.json` | Canonical card data — names, keywords, teasers, full meanings, reflection prompts. Edit this. |
| `index.html` | Browse the full deck. |
| `draw.html` | Draw a random card (or `draw.html?card=<slug>` for a specific one). |
| `assets/` | `style.css` + `deck.js` (vanilla, no dependencies). |
| `img/cards/`, `img/thumbs/` | Web-optimized art (generated). |
| `img/back.png` | The card back, optimized from `back.png` in the repo root (generated). |
| `email/` | MailerLite guide + paste-in HTML blocks. |
| `CARDS.md` | Human-readable copy, paste-ready for Notion (generated). |
| `scripts/` | Build scripts (see below). |
| `*.png` (root) | Original full-resolution card art. |

## Deploy

Enable **GitHub Pages** (Settings → Pages → `main`, root). The repo must be public
on the free plan. The site is then live at `https://guttermoon.github.io/oracle/`.

## Regenerate after changing art or copy

```sh
pip install Pillow
python3 scripts/optimize_images.py   # rebuild img/cards, img/thumbs, and img/back.png
python3 scripts/make_cards_md.py     # rebuild CARDS.md from cards.json
```

## Add it to the newsletter

See [`email/mailerlite-recipe.md`](email/mailerlite-recipe.md).
