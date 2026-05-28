# App UI kit · Starboard

The authenticated Starboard app, recreated as a click-thru React mock. This is the PWA / Capacitor surface — *not* the marketing site.

## What's in here

- **`index.html`** — interactive app demo. Bottom nav switches screens; theme toggle in the nav cycles dark → light → warm.
- **`AppShell.jsx`** — the chrome (header + bottom nav + screen routing).
- **`Screens.jsx`** — all screens: Vision Boards, Board Detail, Library, Notifications, Moon Ritual, Account.
- **`Components.jsx`** — small reusable cards & rows (BoardCard, LibraryTile, AffirmationRow, ToggleRow).

## Screens demonstrated

1. **Vision Boards** — grid of board cards with cover art, name, and image count. *Click any to enter Board Detail.*
2. **Board Detail** — single board with image grid, affirmation, play-montage button.
3. **Library** — image library grid with filter tags.
4. **Notifications** — list of scheduled reminders with time + affirmation text.
5. **Moon Ritual** — the Celestial Grimoire surface, with phase orb, affirmation, and ritual bento tiles. Uses its own palette (amethyst + gold).
6. **Account** — settings list (profile, subscription, theme).

## Notes & departures from production

- Vision-board video playback, real image uploads, push-notification scheduling, and SunCalc-based moon rendering are all mocked. The moon page uses a CSS-painted phase rather than the production canvas.
- All "user" content (board names, images, affirmations) is illustrative.
- Subscription / paywall logic is shown visually but inert.
- Production renders the auth flow in a separate route group; this mock starts already-authenticated.
