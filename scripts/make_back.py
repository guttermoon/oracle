#!/usr/bin/env python3
"""Generate the oracle card back: a two-tone nautical star on deep navy.

Writes:
  img/back.svg   crisp, tiny, used by the web pages
  img/back.png   600x776 raster, used in the email (upload to MailerLite)

Re-run:  python3 scripts/make_back.py
"""
import math
import os
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

W, H = 600, 776
CX, CY = 300, 388
R, R2, RI = 168, 116, 42      # long tip, short tip, valley radii
RING = 196

NAVY = "#0d2233"
NAVY_DEEP = "#081823"
GOLD = "#d9c188"
LIGHT = "#efe2bd"
DARK = "#bf9b4e"


def pt(cx, cy, ang_deg, rad):
    a = math.radians(ang_deg)
    return (cx + rad * math.cos(a), cy + rad * math.sin(a))


def star_halves(cx, cy, R, R2, RI):
    """Return list of (polygon_points, is_light) for the 16 spike halves."""
    tips = [pt(cx, cy, -90 + i * 45, R if i % 2 == 0 else R2) for i in range(8)]
    valleys = [pt(cx, cy, -90 + i * 45 + 22.5, RI) for i in range(8)]
    halves = []
    for i in range(8):
        vL = valleys[(i - 1) % 8]
        vR = valleys[i]
        halves.append(([(cx, cy), vL, tips[i]], True))
        halves.append(([(cx, cy), tips[i], vR], False))
    return halves


def make_svg():
    halves = star_halves(CX, CY, R, R2, RI)
    out = []
    out.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
               f'role="img" aria-label="Oracle card back">')
    out.append('<defs><radialGradient id="bg" cx="50%" cy="42%" r="75%">'
               f'<stop offset="0%" stop-color="{NAVY}"/>'
               f'<stop offset="100%" stop-color="{NAVY_DEEP}"/></radialGradient></defs>')
    out.append(f'<rect width="{W}" height="{H}" rx="26" fill="url(#bg)"/>')
    out.append(f'<rect x="20" y="20" width="{W-40}" height="{H-40}" rx="16" '
               f'fill="none" stroke="{GOLD}" stroke-opacity="0.85" stroke-width="2.5"/>')
    out.append(f'<rect x="30" y="30" width="{W-60}" height="{H-60}" rx="10" '
               f'fill="none" stroke="{GOLD}" stroke-opacity="0.45" stroke-width="1"/>')
    out.append(f'<circle cx="{CX}" cy="{CY}" r="{RING}" fill="none" '
               f'stroke="{GOLD}" stroke-opacity="0.5" stroke-width="1.5"/>')
    for poly, light in halves:
        pts = " ".join(f"{x:.1f},{y:.1f}" for x, y in poly)
        out.append(f'<polygon points="{pts}" fill="{LIGHT if light else DARK}"/>')
    out.append(f'<circle cx="{CX}" cy="{CY}" r="7" fill="{NAVY_DEEP}"/>')
    out.append('</svg>')
    svg = "\n".join(out)
    with open(os.path.join(ROOT, "img", "back.svg"), "w") as f:
        f.write(svg)
    return svg


def make_png():
    """Supersample x3 then downscale for smooth edges."""
    s = 3
    img = Image.new("RGB", (W * s, H * s), NAVY_DEEP)
    d = ImageDraw.Draw(img)
    # radial-ish background: simple vertical-ish vignette via concentric fills is overkill;
    # flat navy with a lighter center rectangle reads fine after downscale.
    d.rounded_rectangle([0, 0, W * s, H * s], radius=26 * s, fill=NAVY)
    d.rounded_rectangle([20 * s, 20 * s, (W - 20) * s, (H - 20) * s],
                        radius=16 * s, outline=GOLD, width=3 * s)
    d.rounded_rectangle([30 * s, 30 * s, (W - 30) * s, (H - 30) * s],
                        radius=10 * s, outline=GOLD, width=1 * s)
    d.ellipse([(CX - RING) * s, (CY - RING) * s, (CX + RING) * s, (CY + RING) * s],
              outline=GOLD, width=2 * s)
    for poly, light in star_halves(CX, CY, R, R2, RI):
        d.polygon([(x * s, y * s) for x, y in poly], fill=LIGHT if light else DARK)
    d.ellipse([(CX - 7) * s, (CY - 7) * s, (CX + 7) * s, (CY + 7) * s], fill=NAVY_DEEP)
    img = img.resize((W, H), Image.LANCZOS)
    img.save(os.path.join(ROOT, "img", "back.png"), "PNG", optimize=True)


def main():
    os.makedirs(os.path.join(ROOT, "img"), exist_ok=True)
    make_svg()
    make_png()
    size = os.path.getsize(os.path.join(ROOT, "img", "back.png"))
    print(f"Wrote img/back.svg and img/back.png ({size//1024} KB)")


if __name__ == "__main__":
    main()
