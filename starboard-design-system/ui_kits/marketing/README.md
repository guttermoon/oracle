# Marketing UI kit · Starboard

The starboardmanifest.com homepage, recreated as click-thru React components.

## What's in here

- **`index.html`:** interactive homepage demo. Switch themes via the footer.
- **`Header.jsx`:** top nav with logo, icon links, account chip, and onboarding lozenge.
- **`Hero.jsx`:** *Set Your Course* hero with mouse-parallaxed decorative elements.
- **`TickerBanner.jsx`:** marquee ticker with logomark-pattern separators.
- **`ValueProp.jsx`:** *Ideas land everywhere* section with cadence-staggered headlines.
- **`FeatureTriad.jsx`:** three feature cards (Heart · Lighthouse · Sun).
- **`PricingGrid.jsx`:** three pricing tiers (Free / Annual / Lifetime).
- **`Newsletter.jsx`:** *Letters from the Helm* email capture.
- **`Footer.jsx`:** large display nav links, theme switcher, ship-silhouette bg.

## Notes & departures from production

- **Lucide React** is loaded from CDN; in production this is `lucide-react` npm.
- **Framer Motion** is dropped in favour of CSS-only entry animations to keep the bundle small. The component shapes match the originals.
- The PWA install bar, push notifications, and Crow feedback widget from the live site are intentionally omitted. They sit on top of this content but aren't part of the design system.
- Pricing is hard-coded to the GBP defaults (£23/year, £72 lifetime); the live site swaps these via `formatPrice(locale)`.
