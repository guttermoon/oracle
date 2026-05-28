/* eslint-disable react/prop-types */
/* All screens for the app mock. Each is a self-contained component
   that receives `nav` (to switch screens) and an optional `data` prop. */

/* ====================== Vision Boards ====================== */
function VisionBoardsScreen({ nav }) {
  const boards = [
    { id: 'career',  name: 'Career',       count: 24, tones: ['a','d','a','d'], glyphs: ['compass-rose', 'lighthouse', 'key',    'ship']    },
    { id: 'wealth',  name: 'Wealth',       count: 18, tones: ['c','e','c','e'], glyphs: ['coins',        'crown',      'key',    'sun']     },
    { id: 'health',  name: 'Health',       count: 11, tones: ['f','f','f','f'], glyphs: ['heart',        'sun',        'eye-1',  'shell']   },
    { id: 'travel',  name: 'Travel',       count: 32, tones: ['d','a','d','a'], glyphs: ['compass-rose', 'anchor',     'ship',   'swallows']},
    { id: 'create',  name: 'Creativity',   count: 9,  tones: ['b','c','b','c'], glyphs: ['crow',         'eye-2',      'hearts', 'sun']     },
    { id: 'spirit',  name: 'Spirituality', count: 7,  tones: ['d','d','d','d'], glyphs: ['eye-1',        'crow-sm',    'snakes', 'hearts']  },
  ];
  return (
    <div style={{ padding: '20px 18px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 6 }}>YOUR FLEET</div>
          <h2 style={{ fontSize: 32, color: 'var(--text-color)' }}>Vision boards</h2>
        </div>
        <button className="button button--primary" style={{ minHeight: 40, padding: '10px 16px' }}>
          <i data-lucide="plus" style={{ width: 16, height: 16 }}></i> New board
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {boards.map((b) => (
          <BoardCard
            key={b.id} name={b.name} count={b.count} tones={b.tones} glyphs={b.glyphs}
            onOpen={() => nav('board', { board: b })}
          />
        ))}
      </div>
    </div>
  );
}

/* ====================== Board Detail ====================== */
function BoardDetailScreen({ nav, data }) {
  const board = data?.board || { name: 'Career & Craft', count: 24, tones: ['a','b','d','c'] };
  const fill = ['a','b','c','d','e','f','c','a','b','d','e','f'];
  return (
    <div style={{ padding: '20px 18px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <button className="button button--ghost" onClick={() => nav('boards')} style={{ padding: 0 }}>
          <i data-lucide="chevron-left" style={{ width: 20, height: 20 }}></i>
        </button>
        <div className="eyebrow">BOARD</div>
      </div>
      <h2 style={{ fontSize: 36, color: 'var(--text-color)', marginBottom: 6 }}>{board.name}</h2>
      <div style={{ fontFamily: 'var(--font-family-chivo)', color: 'var(--text-muted)', fontSize: 12, marginBottom: 20 }}>
        {board.count} images · last edited today
      </div>

      <div className="card" style={{ padding: 18, marginBottom: 20, position: 'relative' }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>AFFIRMATION</div>
        <p style={{
          fontFamily: 'var(--font-family-secondary)', fontStyle: 'italic',
          fontSize: 20, color: 'var(--text-color)', lineHeight: 1.35,
        }}>
          The work I make today is the work I want to be making in five years. I move steady, not fast.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <button className="button button--primary" style={{ flex: 1 }}>
          <i data-lucide="play" style={{ width: 16, height: 16 }}></i> Play montage
        </button>
        <button className="button button--secondary">
          <i data-lucide="plus" style={{ width: 16, height: 16 }}></i> Add
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        {fill.map((t, i) => (
          <div key={i} style={{ aspectRatio: '1', borderRadius: 6, overflow: 'hidden' }}>
            <Photo tone={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ====================== Library ====================== */
function LibraryScreen() {
  const tags = ['All', 'Career', 'Home', 'Health', 'Travel', 'Words'];
  const [active, setActive] = React.useState('All');
  const tiles = ['a','b','c','d','e','f','c','d','a','b','f','e','a','c','d','b','e','f'];
  return (
    <div style={{ padding: '20px 18px 24px' }}>
      <div className="eyebrow" style={{ marginBottom: 6 }}>EVERY IMAGE YOU'VE GATHERED</div>
      <h2 style={{ fontSize: 32, color: 'var(--text-color)', marginBottom: 18 }}>Library</h2>
      <div style={{
        display: 'flex', gap: 8, marginBottom: 14, overflowX: 'auto',
        padding: '2px 0 6px', scrollbarWidth: 'none',
      }}>
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`button ${active === t ? 'button--primary' : 'button--secondary'}`}
            style={{ minHeight: 32, padding: '8px 14px', fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 700 }}
          >{t}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        {tiles.map((t, i) => (
          <LibraryTile key={i} tone={t} tag={i % 5 === 0 ? 'NEW' : undefined} />
        ))}
      </div>
    </div>
  );
}

/* ====================== Notifications ====================== */
function NotificationsScreen() {
  const items = [
    { time: '07:30', label: 'MORNING WATCH', body: 'The work I make today is the work I want to be making in five years.', enabled: true  },
    { time: '12:00', label: 'MIDDAY',        body: 'My direction stays steady. I trust the slow build.', enabled: true  },
    { time: '18:00', label: 'DOG WATCH',     body: 'Tonight I rest. The work waits patiently for me.', enabled: false },
    { time: '22:30', label: 'NIGHT',         body: 'I close the day with my goals in view, not behind me.', enabled: true  },
  ];
  return (
    <div style={{ padding: '20px 18px 24px' }}>
      <div className="eyebrow" style={{ marginBottom: 6 }}>YOUR DAILY WATCH</div>
      <h2 style={{ fontSize: 32, color: 'var(--text-color)', marginBottom: 18 }}>Reminders</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((it, i) => <AffirmationRow key={i} {...it} />)}
      </div>
      <button
        className="button button--primary"
        style={{ width: '100%', marginTop: 18 }}
      >
        <i data-lucide="plus" style={{ width: 16, height: 16 }}></i> Set another reminder
      </button>
    </div>
  );
}

/* ====================== Moon Phases ====================== */
function MoonScreen() {
  return (
    <div style={{ padding: '20px 18px 24px' }}>
      <div className="moon-atmosphere">
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <div style={{
            fontFamily: 'var(--font-family-chivo)', fontSize: 10, letterSpacing: '0.35em',
            color: 'var(--accent-color)', textTransform: 'uppercase', marginBottom: 6,
          }}>TODAY'S PHASE</div>
          <div
            aria-label="moon phase"
            style={{
              width: 130, height: 130, margin: '6px auto 18px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #F5E6CD 0%, #4D5198 60%, #04041C 100%)',
              boxShadow: '0 0 40px rgba(77,81,152,0.35), inset -10px 0 30px rgba(4,4,28,0.55)',
            }}
          ></div>
          <div style={{
            fontFamily: '"Playfair Display", serif', fontStyle: 'italic',
            fontSize: 22, color: 'var(--text-color)', letterSpacing: '0.06em', marginBottom: 4,
          }}>Waxing Gibbous</div>
          <div style={{
            fontFamily: 'var(--font-family-chivo)', fontStyle: 'italic',
            fontSize: 11, letterSpacing: '0.15em', color: 'var(--text-muted)',
          }}>78% illuminated · 27 Nov</div>
        </div>

        {/* Bento */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
          <div style={{ padding: '12px 10px', borderRadius: 8, background: 'rgba(245,230,205,0.06)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 8, letterSpacing: '0.40em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>BEST FOR</div>
            <div style={{ fontFamily: 'var(--font-family-secondary)', fontSize: 14, fontStyle: 'italic', color: 'var(--text-color)' }}>Refinement · clarity</div>
          </div>
          <div style={{ padding: '12px 10px', borderRadius: 8, background: 'rgba(245,230,205,0.06)', border: '1px solid var(--card-border)', textAlign: 'center', position: 'relative' }}>
            <div style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 8, letterSpacing: '0.40em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>AFFIRMATION</div>
            <div style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 12, fontStyle: 'italic', color: 'var(--text-color)', lineHeight: 1.4 }}>What I tend grows into form.</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {['Tidy desk', 'Re-read goals', 'Send the note'].map((r, i) => (
            <div key={i} style={{ padding: '10px 8px', borderRadius: 8, background: 'rgba(245,230,205,0.06)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 7, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>RITUAL {i + 1}</div>
              <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 12, color: 'var(--text-color)', lineHeight: 1.3 }}>{r}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ====================== Account ====================== */
function AccountScreen({ theme, onThemeChange }) {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div style={{ padding: '20px 18px 24px' }}>
      <div className="eyebrow" style={{ marginBottom: 6 }}>SAILOR · SAM · ABOARD SINCE 2025</div>
      <h2 style={{ fontSize: 32, color: 'var(--text-color)', marginBottom: 20 }}>The helm</h2>

      <div className="card" style={{ padding: '6px 0', marginBottom: 20 }}>
        <SettingRow icon="user"      label="Profile"       hint="captain@starboardmanifest.com" />
        <SettingRow icon="badge-check" label="Subscription" hint="Lifetime · paid in full" />
        <SettingRow icon="bell"      label="Reminders"     hint="4 active" />
        <SettingRow icon="lock"      label="Private boards" hint="Boards stay private by default" />
      </div>

      <div className="eyebrow" style={{ marginBottom: 10 }}>APPEARANCE</div>
      <div className="card" style={{ padding: 14, display: 'flex', gap: 6, justifyContent: 'space-between' }}>
        {['dark', 'light', 'warm'].map((t) => (
          <button
            key={t}
            onClick={() => onThemeChange(t)}
            className={`button ${theme === t ? 'button--primary' : 'button--secondary'} button--pill`}
            style={{ flex: 1, minHeight: 36, padding: '8px 12px', fontSize: 11, letterSpacing: '0.05em', textTransform: 'capitalize', fontWeight: 700 }}
          >{t}</button>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  VisionBoardsScreen, BoardDetailScreen, LibraryScreen,
  NotificationsScreen, MoonScreen, AccountScreen,
});
