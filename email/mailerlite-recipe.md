# Putting the oracle draw in your MailerLite newsletter

**The one thing to know about email:** a real shuffle/draw can't run *inside* an
email — Gmail, Outlook, Apple Mail and Yahoo all strip JavaScript, and the
CSS-only "flip" tricks break in Gmail and Outlook. So the email holds the
*invitation* (face-down cards the reader taps) and the draw/reveal happens on the
web page at `draw.html`, which works in every browser. Tapping a face-down card is
also more on-brand than a hidden random number generator — the reader is *drawn*
to a card.

The site lives at **https://guttermoon.github.io/oracle/** (update this everywhere
if you move to a custom domain). `draw.html` picks a random card on landing;
`draw.html?card=<slug>` shows one specific card (used for the featured-card block).

---

## One-time setup

1. **Publish the site.** Enable GitHub Pages on the `guttermoon/oracle` repo
   (Settings → Pages → deploy from `main`, root). Confirm the repo is public, or
   Pages won't serve on the free plan. Visit the URL and draw a card to confirm.
2. **Upload the card back for the email.** In MailerLite, open the file manager
   and upload `img/back.png`. Copy its MailerLite URL — using MailerLite-hosted
   images is best for deliverability. (You can skip this and hotlink from the site;
   it still works.)

---

## Option A — native blocks (works on every MailerLite plan)

No code needed. In the drag-and-drop editor:

1. Drop a **Box / container** block and set its background to navy `#0d2233`,
   rounded corners, with comfortable padding. Everything below goes inside it.
2. Add a **Text** block: a small gold eyebrow ("THE CAPTAIN'S LOG"), a serif
   heading ("Pause and pick your card"), and one line of body text
   ("Take a breath. Tap the card you're drawn to and let the sea answer.").
3. Add a **3-column** structure. Drop an **Image** block in each column, upload
   `back.png` to all three, set width ~110px, and link every image to
   `https://guttermoon.github.io/oracle/draw.html`. (All three point to the same
   page — it randomizes — so the reader's pick is preserved and always a real draw.)
4. Add a **Button** block: "Or draw at random →", gold background `#d9c188`,
   navy text, linked to the same `draw.html`.
5. Add a tiny **Text** link as a fallback: "Tap here if the cards don't load →"
   to the same URL.

Save it as a **reusable block** in MailerLite so you can drop it into any issue.

---

## Option B — paste-in HTML (if your plan has the Custom HTML block)

If your MailerLite plan includes the **Custom HTML** block, you can skip the manual
build: paste the contents of [`card-row.html`](./card-row.html) into it. Do the two
find/replace passes noted at the top of that file (your site URL, and the
MailerLite-hosted `back.png` URL). This renders the whole picker as one tidy block.

---

## Featured card of the issue (optional)

To spotlight one card inline (great for the full-moon send), use
[`featured-card.html`](./featured-card.html) in a Custom HTML block, **or** rebuild
it with native blocks: card image + name + keywords + teaser + a button
"Read the full meaning →" linking to `draw.html?card=<slug>`.

Pull the name / keywords / teaser straight from `cards.json`. Slugs:
`two-swallows, anchor, nautical-star, shellback-turtle, hold-fast, shark, mermaid,
dagger, skull, golden-dragon, pig-and-rooster, hula-girl, two-hearts,
crossed-cannons, tiger, parrot`.

---

## Before you hit send

- **Test send** to Gmail, Apple Mail, and Outlook. Confirm the card backs show,
  all three link through, and the button works.
- **Open it on your phone** and tap a back — most readers open on mobile.
- **Outlook note:** the rounded gold button may render as a square in older Outlook
  for Windows. It stays fully clickable; if you want pixel-perfect Outlook buttons,
  use MailerLite's native Button block (Option A), which handles that for you.
- Add `?utm_source=newsletter` to the links if you want to track draws in your
  site analytics.
