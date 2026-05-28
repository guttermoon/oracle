# Starboard Design System

> **Your vision, on board. Your course, in sight.**
> Starboard is a manifestation tool to build your vision boards, set affirmations and reminders, and come back to them every day as videos with a healing frequency soundtrack. Your boards in your pocket, wherever you go.

- **Tagline (homepage):** *Your vision, on board. Your course, in sight.*
- **CTA headline:** *Set Your Course*
- **Categories:** Productivity · Wellness · Manifestation
- **Platforms:** iOS, Android, Web (PWA) — built on Next.js 16 + Capacitor
- **Contact:** `captain@starboardmanifest.com`
- **Site:** [starboardmanifest.com](https://starboardmanifest.com)

This project is a faithful design-system extraction of the Starboard product, intended to drive **brand-aligned mocks, slides, and prototypes**. Everything here was lifted from the production codebase.

## Sources used

- **Codebase:** `guttermoon/sb` branch `1.27` (private) — Next.js + Tailwind + Capacitor. The README inside that repo dates the brand and design tokens; this design system is a derivative.
- Specifically read: `app/globals.css` (the 97 KB single-source-of-truth for tokens & components), `app/layout.tsx` (font loading), `components/(common)/**`, `components/(features)/**`, `app/(marketing)/**`, `public/llms-full.txt`.
- The reader can explore further at <https://github.com/guttermoon/sb> (access permitting) to build deeper mocks that mirror live behavior — especially `app/globals.css`, the `(features)/boards/` directory, and the `(features)/moon/` "Celestial Grimoire" surface, which has its own typography and atmosphere.

---

## Product surfaces in scope

| Surface | What it is | UI kit |
|---|---|---|
| **Marketing site** | starboardmanifest.com — hero, value prop, features, pricing, footer, ticker banner | [`ui_kits/marketing/`](ui_kits/marketing/) |
| **App (PWA / Capacitor)** | Authenticated app — vision-boards grid, board editor, library, notifications, moon ritual page, account | [`ui_kits/app/`](ui_kits/app/) |

Both share one design token system, three swappable themes (**dark · light · warm**), and one brand voice.

---

## Index

```
.
├── README.md                ← you are here
├── SKILL.md                 ← Claude-Code-compatible skill manifest
├── colors_and_type.css      ← canonical CSS variables + type system
├── fonts/                   ← 3 brand TTF files (Playfair Display, Chivo, Reality Stone)
├── assets/
│   ├── logos/               ← brand marks (star primary, ship secondary, 4 themes)
│   ├── elements/dark/       ← 22 inked WebPs (app + marketing decoration)
│   ├── board-art/           ← 18 pared-back tarot-framed PNGs (boards, hi-impact marketing)
│   ├── oracle/              ← 16 muted sailor-jerry stills + animated flash (blog, newsletter)
│   ├── decorations/         ← star patterns, flourishes, banners, ornament frames
│   └── imagery/             ← banner, og-image, icon backgrounds, animation
├── reference/
│   ├── nautical-vocabulary.md  ← phrases, idioms, ship anatomy, weather terms
│   ├── founder-story.md     ← internal founder context
│   └── llms-full.txt        ← Starboard's public llms.txt manifest
├── preview/                 ← Design System tab cards (30+ cards, registered)
├── ui_kits/
│   ├── marketing/           ← homepage, hero, ticker, pricing, newsletter, footer
│   └── app/                 ← vision boards, library, notifications, moon, account
├── slides/                  ← 7-slide brand deck
├── social/                  ← 22 social media templates (IG + Pinterest)
├── email/                   ← Letters from the Helm newsletter template
└── app_store/               ← 6 App Store screenshot frames
```

---

## CONTENT FUNDAMENTALS

### Founder & voice

Starboard is written by **Megan Williams** (London) — the founder, the captain. "Megan" and "the Captain" are interchangeable signatures. Use whichever fits the surface:

- **Megan** — personal, blog posts, founder letters in long-form, the writer behind the brand
- **The Captain** — the helm-keeper, used for product-voice moments (welcome emails, app onboarding, push notifications, signature lines on marketing surfaces)
- **`captain@starboardmanifest.com`** — the public-facing inbox, always

They are the same person. The Captain is the role Megan plays when speaking through the product. Sign off as `— Megan` for blog and personal letters, `— The Captain` for product surfaces, or `— Megan, Captain` when both fit.

The blog at [starboardmanifest.com/blog](https://starboardmanifest.com/blog) is the running tone-of-voice reference. Read recent posts to calibrate cadence and idiom use; don't anchor on any single one.

### Audience address

The audience is the **Sailor**. Capitalized when addressed directly: *Welcome aboard, Sailor.* Used at the open or close of long-form pieces (blog, newsletter, onboarding). Drop the address in chrome and button labels.

### Voice characteristics

- **Steady authority.** We guide, we don't hype.
- **Long-range thinking.** Charting courses, not chasing trends.
- **Grounded confidence.** Precision over performance.
- **Mythic intelligence.** Older than wellness. Victorian navigational.
- **Explorer, not priestess.** Universal, inclusive, neither gendered nor goddess-coded.
- **Dry honesty.** First person, willing to admit what is and isn't working.

### Reach for nautical vocabulary

The full vocabulary palette lives in [`reference/nautical-vocabulary.md`](reference/nautical-vocabulary.md) — phrases, idioms, ship anatomy, weather terms, commands. Use it as a resource pool, not a checklist. Reach for a nautical term whenever it lands naturally:

- **Marketing headlines:** *Set your course.* *Steady as she goes.* *Even keel.*
- **Error states:** *Dead in the water. Try again.*
- **Success states:** *Anchors aweigh. Your board is saved.*
- **Push notifications:** *Fair winds, Sailor. Time to revisit your board.*
- **Email subject lines:** *Letters from the Helm* · *The doldrums are temporary* · *Following seas this week*
- **Onboarding step labels:** *Cast off · Get underway · Set bearings · Make fast*
- **Empty states:** *Your library is high and dry. Add an image to begin.*
- **Slogans / merch:** *Hold fast.* *Steady on.* *Sea legs.* *Even keel.*

**Restraint matters.** One nautical term per surface, not three. If a button just needs to say "Save," let it say "Save." The vocabulary is for moments where brand voice can breathe — not every UI label.

### Steeped in lore

Long-form Starboard writing — blog, newsletter, social posts, Instagram captions, Pinterest descriptions — is **edutainment**. Every piece should leave the Sailor feeling enriched, like they picked up something worth telling someone else at dinner. Think the cadence of *No Such Thing as a Fish* (the QI podcast): a single surprising fact, told plainly, that opens into a wider story.

The well to draw from:

- **Maritime history & lore.** The etymology of *lanthorn* (16th-century lanterns made of translucent animal horn, taboo to let go out at night, viewed as a harbinger of doom). Why ships are called *she*. The origin of *starboard*, *port*, *posh*, *the bitter end*. Naval superstitions: no whistling on deck, never sail on a Friday, why Royal Navy pipers played certain tunes.
- **Mythology.** Sea gods (Poseidon, Manannán mac Lir, the kelpie), constellations and their stories (Cassiopeia, Orion's belt as a navigational tool), Norse navigational mythology, selkies, the Wild Hunt, the Morrigan as crow.
- **Science.** Reticular activating system and why repetition rewires attention. Lunar cycles and tidal physics. Neuroplasticity, the slow build of behavioural change, why visualization actually does something. Stars used for celestial navigation, sextant geometry, why the North Star sits where it does.
- **Botanical & seasonal lore.** Why the Strawberry Moon is so named (the brief window strawberries ripen — pay attention or miss it). The folklore of each full moon. Solstices, equinoxes, cross-quarter days.
- **Folk practice.** Tarot iconography, oracle decks, sailor-jerry tattoo meanings (swallows = home safely, anchor = grounded, hold fast = endurance). Hand-drawn navigational charts, monk illumination, Victorian engraving traditions.

The voice is the smart friend who knows the strange story behind the everyday thing. Never lecturing. Never *did you know* in a quiz-show way. Just: *here is something interesting, and here is why it matters.*

A single fact, then the connection back to the practice. That's the rhythm.

### Person, voice & punctuation

- **First person from Megan / the Captain** in long-form. **Second person** when addressing the Sailor. Never *the user*.
- **No exclamation points.** The brand does not shout.
- **Commas and short sentences over em dashes.** Em dashes feel editorial. Use commas, fragments, and the occasional colon-led tangent instead.
- **Sentence case** everywhere. Page titles in the chrome are Title Case (`Vision Boards`, `Library`, `Moon Phases`).
- **UPPERCASE wide-tracked** for eyebrows, labels, badges (`PLANS`, `ONBOARDING · 60%`).
- **Numbers in copy:** numerals. `3 vision boards`, `13 daily reminders`.
- **Pricing:** localized. `£23/year`, `£72 one-time`.

### Bedrock references

The brand carries these influences in the background. Don't quote them, but recognize them when they surface in copy direction:
- **Nick Cave — *Come Sail Your Ships*.** The lyric Megan is tattooed with. Source of the maritime metaphor.
- **David Bowie's *Blackstar*.** Iconographic source for the SB star mark.
- **The crow.** A personal guardian motif; appears in the decorative element set.
- **Lanthorn (16th-century ship's lantern).** The central metaphor for the practice: a flame that needs tending.
- **Lunar cycle.** Starboard pays attention to moon phases as a calendar marker for editorial timing.

### Vocabulary

These are the brand-distinct terms Starboard owns. Use them in product UI, button copy, and marketing headlines so the experience feels coherent. They live alongside (not instead of) the broader category vocabulary the audience actually searches for — *mood board*, *dream board*, *manifestation*, *habit*, *meditation* — which belongs in supporting copy, metadata, SEO descriptions, and the `llms.txt` manifest. Brand voice first in the chrome, search-friendly vocabulary elsewhere.

| Brand-distinct term | When to use |
|---|---|
| **Sailor** | the audience. Capitalized when addressed. *Welcome aboard, Sailor.* |
| **the Captain** | the voice. Sign-offs, push notifications, formal product speech. |
| **Megan** | the voice. Sign-offs for blog and personal letters. |
| **vision board** | the core noun, every surface |
| **board** | shorthand inside the app once a vision board is open |
| **montage** | the looping video output |
| **affirmation** | the written intention attached to a reminder |
| **reminder** | scheduled push or local notification |
| **lanthorn** | the central metaphor for the practice. Use in long-form, not chrome. |
| **chart / course / bearings** | navigation verbs for goals, intent, direction |
| **constellation / north star / horizon** | celestial direction language |
| **anchor / helm / compass / sextant** | grounding & instrument metaphors |
| **tide / current / voyage / landfall** | passage metaphors for progress over time |
| **healing frequency** | the included Solfeggio audio (396, 432, 528 Hz, etc.) |

### Sample lines (pulled from across the brand)

Long-form opening (first-person, dry):
> *"I tried every vision board app I could find. One sent me notifications about finding love. The app had decided, without asking, what I should want."*

Mythic but grounded:
> *"During the age of sail, a lanthorn was a vital tool. It had to be tended. That's Starboard. The lanthorn you carry."*

Marketing headline cadence:
> *"Set your course."* · *"Steady as she goes."* · *"Your vision, on board. Your course, in sight."*

Sign-offs:
> *"Welcome aboard, Sailor. — Megan"*
> *"Fair winds. — The Captain"*

> *"Welcome aboard, Sailor."*

---

## VISUAL FOUNDATIONS

### Colors

Three full themes, all swappable via `[data-theme="dark|light|warm"]`. See `colors_and_type.css` for the full role table — here's the headline:

| Role | Dark | Light | Warm |
|---|---|---|---|
| bg | `#1B1F3B` deep navy | `#FEFDF6` warm white | `#F7F0DB` parchment |
| text | `#F5E6CD` cream | `#04041C` ink | `#6A4D44` umber |
| accent (button) | `#A4E636` lime | `#A3C132` olive-lime | `#4A5D45` forest |
| ticker | `#4D5198` purple | `#4D5198` purple | `#8F9E7A` sage |
| card surface | `#2D3268` deep purple | `#FFFFFF` pure white | `#FFF9EB` cream |

**Tertiary accents** carry the secondary palette beat:
- Dark: `#4D5198` (indigo), `#04041C` (deep night)
- Light: `#FAF9D4` (pale yellow), `#4D5198` (indigo)
- Warm: `#8F9E7A` (sage), `#D98A5F` (terracotta), `#7B5E4F` (deep umber)

### Typography

- **Headings** — Playfair Display, **italic**, weight 400. *Always italic.* It's the single most identifiable type detail in the brand. Letter-spacing 0.01–0.05em.
- **Body** — Chivo, regular (400). Line-height 1.5–1.6.
- **Eyebrows / small labels** — Chivo, weight 600, ALL CAPS, letter-spacing 0.18–0.25em.
- **Logo wordmark** — Reality Stone, draws the letters of "STARBOARD" inside every lockup.
- Display sizes are aggressive: hero H1 hits **72px** on desktop; H2 hits **52px**. Reserve.

That's the full brand type set. Three families, no more.

### Backgrounds

- **Aged-parchment texture** (`.bg-parchment-texture`) — vignette + corner foxing + SVG fractal noise, fixed-attached. This is the *default page background* in every theme. Don't replace it with a flat color.
- **Atmospheric overlays** on the Moon page only: stars, particles, ink texture, amethyst radial gradients.
- **Hero decorative imagery** — branded webp elements (anchor, compass rose, key, shell, crow, eye) placed absolutely around the hero with `opacity: 0.25–0.40`, scaled by mouse-position parallax.
- **No** gradient buttons. **No** bluish-purple gradient backgrounds. **No** generic "vibe" gradients.

### Animation

| Use | Easing | Duration |
|---|---|---|
| Default ease | `cubic-bezier(0.16, 1, 0.3, 1)` | ~600–1400ms |
| Marketing reveal | `cubic-bezier(0.21, 0.47, 0.32, 0.98)` (Relume) | 800ms with 150ms staggers |
| Atmospheric (twinkle, pulse) | `cubic-bezier(0.37, 0, 0.63, 1)` | 6–10s, infinite |
| Sparkle | ease-in-out | 2s, on hover only |

- **Entry:** `animate-fade-in-up` (translateY 30px → 0, 0.8s). Hero copy uses 0ms / 200ms / 400ms staggers.
- **Decorative elements:** `scale-float-in-{left,right,top}` — slight rotation, scale 0.5→1.1→1, lands with overshoot.
- **Float loop:** subtle `translateY(-15–20px)` over 6–8s, infinite alternate.
- **Ticker:** linear `transform: translateX(0 → -50%)` over 30s, infinite.
- **Sparkle on text hover** (`SparkleEffect`): small webp sparkle stars drop in at random positions inside the hovered element.
- Respect `prefers-reduced-motion: reduce` — kill transitions when set.

### Hover & press states

- **Primary buttons:** background lifts to a slightly darker accent + 1px translateY(-1px) + soft glow on dark mode.
- **Secondary / ghost links:** opacity 0.6 → 1.0 on hover. (The header nav links explicitly do this.)
- **Cards:** subtle `transform: translateY(-2px)` plus shadow swap from `--card-shadow` → `--card-shadow-hover`.
- **Press / active:** `active:scale-[0.96]` + `active:opacity-80` (used on bottom-nav buttons).
- **Tap highlights are killed** (`-webkit-tap-highlight-color: transparent`) — components own their own feedback.

### Borders

Borders are **theme-tinted**, not solid. The codebase explicitly notes that a flat `#04041C` outline on cream "reads as a heavy outline" and tints to `rgba(4, 4, 28, 0.10)` instead.

- Base card border: `--card-border` (10–25% of text color)
- Highlighted card: `--card-border-highlighted` (18–50%)
- Width: always 1px. Radius: 8–12px.

### Shadows

Tinted toward `--text-color`, not pure black. The codebase explicitly avoids harsh pure-black shadows on cream surfaces.

- Resting: `--card-shadow` (small, ~3–8px blur)
- Hover: `--card-shadow-hover` (40–48px blur, 20–24px y-offset)
- Modal: always carries `0 25px 50px -12px rgba(0,0,0,0.5)` regardless of theme.

### Corner radii

- `--radius-sm` 4px — checkbox / micro
- `--radius-md` 8px — default for buttons, cards, modals
- `--radius-lg` 12px — large cards, pricing tiers
- `--radius-pill` 9999px — segmented toggles, dock pills (sparingly)

### Glass / transparency / blur

Used **sparingly** for nav and overlays, never for cards:
- `pwa-nav`: `backdrop-filter: blur(10px)` over `rgba(26, 26, 26, 0.8)`.
- Otherwise cards are opaque (`--card-bg-glass` is solid in every theme — the name is legacy).
- Modal backdrop is solid `rgba(0, 0, 0, 0.8)`, never blurred.

### Layout rules

- **Container max-width:** 5xl (`64rem` ≈ 1024px) on most marketing sections, 4xl on hero copy.
- **Section padding:** `py-12 sm:py-16 md:py-20` (vertical), `px-4 sm:px-6 lg:px-8` (horizontal).
- **Grid gutters:** `gap-6 sm:gap-8` for card grids.
- **Header:** fixed top, 56px tall + safe-area padding. Border-bottom uses `border-white/5`.
- **Bottom nav (mobile only):** fixed bottom, 64px + safe-area. Hidden at `md:` breakpoint and up.
- **Safe-area handling** is first-class — the codebase publishes `--safe-top`, `--safe-bottom`, `--bottom-nav-height` for components to consume.

### Imagery vibe

- **Warm, ink-illustrated, vintage maritime** — the decorative element set is hand-drawn line/fill art: anchors, compasses, crows, shells, lighthouses, fish, eyes, hearts, keys, suns.
- Each element ships in three theme variants (dark, light, warm) and as both SVG and webp PNG. The `assets/elements/dark/` folder holds the cream-on-navy "dark" variant — use it on dark surfaces.
- Elements always render at **partial opacity** (0.25–0.40) and float behind content, never as primary content.
- No photography in the marketing site. The user's own photos populate vision boards inside the app.
- The user-content surface ("vision board") shows real photos — these are warm, sun-flared, lifestyle-y. Treat them as user data, not brand asset.

---

## ICONOGRAPHY

Two parallel icon systems, used for different jobs.

### 1. UI icons — Lucide React

For interface chrome (nav, buttons, status), the app uses **[lucide-react](https://lucide.dev/)** at default stroke weight (`stroke-width: 2`, `1.5px` in some compact toolbars). Icons used in nav and chrome:

| Lucide icon | Where |
|---|---|
| `Image` | Vision Boards nav |
| `Library` | Library nav |
| `Bell` | Notifications nav |
| `MoonStar` | Moon Phases nav |
| `User` | Account |
| `Menu`, `X` | Hamburger toggle |
| `Sun`, `Moon`, `Coffee` | Theme toggle (light / dark / warm respectively) |
| `Plus`, `Pencil`, `Trash2`, `Settings`, `Play` | Common verbs |

Load from CDN: `https://unpkg.com/lucide@latest` (vanilla) or `https://cdn.jsdelivr.net/npm/lucide-react@0.563.0/dist/umd/lucide-react.production.min.js`.

### 2. Brand decorative SVGs — `assets/elements/`

The product's signature visual identity. Hand-drawn, ink-illustration nautical & mystical motifs. These are **not interface icons** — they are decoration, hero ornamentation, and metaphor.

Each ships in 3 theme variants (dark / light / warm) and 2 formats (SVG / WebP). The dark-bg WebP variants are imported into `assets/elements/dark/`:

`anchor`, `compass-rose`, `conch`, `crow`, `crow-sm`, `crow-on-branch`, `crow-on-shell`, `crown`, `eye-1`, `eye-2`, `fish`, `heart`, `hearts`, `key`, `lighthouse`, `shell`, `ship`, `snakes`, `sun`, `swallows`, `coins`

Use them as:
- **Hero parallax decorations** — 4 large elements + 2 background elements, mouse-parallaxed (see `HeroSection` original).
- **Feature-card iconography** — render at 100×100, `opacity-80`, `object-contain`. `Heart`, `Lighthouse`, `Sun` are the codebase's three feature triad icons.
- **Footer background** — a single `Ship` at `opacity: 0.10`, centered, behind the footer content.
- **Card ornamental corners** — the `OrnamentalFrame` component wraps content in two large art-nouveau corner SVGs at 0.25 opacity.

> **A note on the dark variants only:** This kit only imported the dark-bg WebP versions to keep the bundle small. The light and warm WebP/SVG variants exist in the source repo at `public/elements/{light background, warm}/` — pull them in via `github_import_files` if you need them.

### Emoji & unicode

- The product **does not** use emoji in customer-facing UI.
- It **does** use a Unicode arrow (`→`) for inline link affordances and small CTAs: `<Button>{'→'}</Button>`.
- It uses ASCII chevrons in selects (rendered as inline SVG) — never the literal `▼`.

### Logos

The Starboard logomark — a six-pointed compass-rose star inside an ornamental border with the word "STARBOARD" beneath — comes in:

- **Horizontal lockup** (word + mark, side-by-side) — header/nav, banners.
- **Vertical lockup** (mark above word) — splash, lockup-heavy moments.
- **Logomark** (mark only) — small contexts, favicon.
- **Logomark Fancy** — the same mark with extra serif flourishes.
- **Logomark Pattern** — a tilable square containing 4 logomarks in opposite corners; used as the ticker-banner separator.

Three palettes: **dark bg** (cream on navy), **light bg** (navy on white), **warm** (navy on parchment), and **green** — a cross-theme variant that reads on both light and dark surfaces. **Use the green lockup wherever you don't know the user's appearance mode** (HTML emails, App Store screenshots, social previews, third-party embeds, system splashes). Treat it as the *adaptive* lockup; pick a theme-specific lockup only when you know the surface.

### Oracle illustrations — the blog & newsletter style

A separate, muted illustration style for **blog posts, newsletter content, and Oracle-deck-style features** lives in [`assets/oracle/`](assets/oracle/). These are diamond-framed sailor-jerry-style tattoo flash illustrations — navy on cream, with muted red and orange accents (`#9B4A4A`, `#D98A5F`).

Use the Oracle set when:
- The surface is a **blog post header**, **newsletter hero**, or a **deck slide that wants editorial weight**.
- You need a focal illustration, not a decoration. Oracle pieces stand alone; the dark-bg elements layer behind content.
- The tone calls for a **slight smirk** — the Oracle illustrations have hula girls, sailor skulls, tigers, parrots, mermaids, daggers, *hold fast* knuckle tattoos. They're playful where the dark-bg elements are reverent.

Don't mix the two styles in one composition. Pick a register and stay there.

The Oracle inventory includes: anchor, cannons, dagger, golden-dragon, hearts, hold-fast, hula-girl, mermaid, nautical-star, parrot, pig-and-rooster, shark, skull, swallows, tiger, turtle, plus an animated `oracle-flash` GIF/MP4 for prominent moments.

---

## Substitutions & flags

- **Three brand fonts** — Playfair Display, Chivo, Reality Stone. **All loaded locally from `fonts/`** (variable-weight masters). No Google Fonts dependency in the brand kit. ✅
- **Reality Stone** is the **logo wordmark font** — it draws the letters of "STARBOARD" inside every lockup file. Exposed as `var(--font-family-reality)` so you can render the wordmark typographically (deck title slides, badge text).
- **Amita, Space Grotesk, Cinzel, Cinzel Decorative, Cormorant Garamond** are **vision-board user fonts**, not brand fonts. The app offers them as optional faces the Sailor can pick to style their own board copy. Do not reach for them in brand surfaces.
- **Lucide React icons** are linked via npm CDN at the same version the source uses (`0.563.0`). ✅
- **Decorative element variants:** only the **dark-bg WebP set** is imported here, and that's intentional — the dark-bg variants are designed to **work universally across all three themes**. Don't go hunting for light- or warm-bg variants; use the dark-bg files everywhere.
- This kit does **not** include the moon-rendering canvas script (the live product computes phase + illumination via SunCalc). For static mocks, use a CSS-painted moon (see `ui_kits/app/Screens.jsx → MoonScreen`) or the `moon-frame.svg` decoration as a placeholder.
