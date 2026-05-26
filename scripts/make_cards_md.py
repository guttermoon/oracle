#!/usr/bin/env python3
"""Render CARDS.md (paste-ready for Notion) from the canonical cards.json."""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

with open(os.path.join(ROOT, "cards.json")) as f:
    data = json.load(f)

lines = [f"# {data['deck']}: card meanings", "",
         "_Cleaned copy generated from `cards.json`. Edit the JSON, then re-run "
         "`python3 scripts/make_cards_md.py`._", ""]
for c in data["cards"]:
    lines.append(f"## {c['name']}")
    lines.append("")
    lines.append(f"**Keywords:** {c['keywords']}")
    lines.append("")
    lines.append(f"**Teaser:** {c['teaser']}")
    lines.append("")
    lines.append("**Meaning:**")
    lines.append("")
    for p in c["meaning"]:
        lines.append(p)
        lines.append("")
    lines.append(f"**Sit with this:** _{c['reflection']}_")
    lines.append("")
    lines.append("---")
    lines.append("")

with open(os.path.join(ROOT, "design", "CARDS.md"), "w") as f:
    f.write("\n".join(lines).rstrip() + "\n")
print("Wrote design/CARDS.md")
