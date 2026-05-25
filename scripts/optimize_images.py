#!/usr/bin/env python3
"""Generate web-optimized card art from the source PNGs.

Source PNGs (1.3-2.2 MB each) live in the repo root. This writes two JPEG
derivatives per card:
  img/cards/<slug>.jpg   ~900px wide  (the reveal view)
  img/thumbs/<slug>.jpg  ~360px wide  (the browse grid)

Re-run after replacing any source art:  python3 scripts/optimize_images.py
"""
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# source filename -> slug (slugs must match cards.json)
MAPPING = {
    "swallows.png": "two-swallows",
    "anchor.png": "anchor",
    "nautical_star.png": "nautical-star",
    "turtle.png": "shellback-turtle",
    "hold_fast.png": "hold-fast",
    "shark.png": "shark",
    "mermaid.png": "mermaid",
    "dagger.png": "dagger",
    "skull.png": "skull",
    "golden_dragon.png": "golden-dragon",
    "pig_and-rooster.png": "pig-and-rooster",
    "hula-girl.png": "hula-girl",
    "hearts.png": "two-hearts",
    "cannons.png": "crossed-cannons",
    "tiger.png": "tiger",
    "parrit.png": "parrot",
}

CARD_W = 900
THUMB_W = 360
BACK_W = 800  # img/back.png is built from back.png in the repo root


def flatten(im):
    """RGBA/P -> RGB on a white background."""
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[-1])
        return bg
    return im.convert("RGB")


def resize_to_width(im, width):
    if im.width <= width:
        return im
    h = round(im.height * width / im.width)
    return im.resize((width, h), Image.LANCZOS)


def save_jpeg(im, path, quality):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, "JPEG", quality=quality, optimize=True, progressive=True)
    return os.path.getsize(path)


def build_back():
    """Optimize the deck back (root back.png -> img/back.png).

    Quantized PNG keeps the line art and lettering crisp while staying small;
    this single file is used by the web pages and the email blocks.
    """
    src = os.path.join(ROOT, "back.png")
    if not os.path.exists(src):
        print("back.png not found in repo root; skipping back")
        return
    im = resize_to_width(flatten(Image.open(src)), BACK_W)
    im = im.quantize(colors=256, method=Image.FASTOCTREE)
    out = os.path.join(ROOT, "img", "back.png")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    im.save(out, "PNG", optimize=True)
    print(f"{'back':18s} png ={os.path.getsize(out)//1024:4d}KB")


def main():
    missing = []
    total = 0
    for src, slug in MAPPING.items():
        src_path = os.path.join(ROOT, src)
        if not os.path.exists(src_path):
            missing.append(src)
            continue
        base = flatten(Image.open(src_path))
        card = resize_to_width(base, CARD_W)
        thumb = resize_to_width(base, THUMB_W)
        c = save_jpeg(card, os.path.join(ROOT, "img", "cards", slug + ".jpg"), 82)
        t = save_jpeg(thumb, os.path.join(ROOT, "img", "thumbs", slug + ".jpg"), 80)
        total += c + t
        print(f"{slug:18s} card={c//1024:4d}KB thumb={t//1024:3d}KB")
    build_back()
    print(f"\nTotal card derivatives: {total/1024/1024:.2f} MB")
    if missing:
        print("MISSING SOURCES:", ", ".join(missing))


if __name__ == "__main__":
    main()
