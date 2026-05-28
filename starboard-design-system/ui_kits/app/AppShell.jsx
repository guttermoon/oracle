/* eslint-disable react/prop-types */
/**
 * AppShell — fixed header + screen content + fixed bottom nav.
 * Routes via a tiny screen state machine.
 */
function AppShell() {
  const [theme, setTheme] = React.useState('dark');
  const [screen, setScreen] = React.useState('boards');
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (window.lucide) window.lucide.createIcons();
  }, [theme, screen]);

  const nav = (next, extra) => {
    setData(extra || {});
    setScreen(next);
    window.scrollTo({ top: 0 });
  };

  const navItems = [
    { id: 'boards',        icon: 'image',     label: 'Boards' },
    { id: 'library',       icon: 'library',   label: 'Library' },
    { id: 'notifications', icon: 'bell',      label: 'Alerts' },
    { id: 'moon',          icon: 'moon-star', label: 'Moon' },
    { id: 'account',       icon: 'user',      label: 'Sam' },
  ];

  const themeCycle = { dark: 'light', light: 'warm', warm: 'dark' };
  const themeIcon = { dark: 'moon', light: 'sun', warm: 'coffee' };

  // Pick a screen-label for the topmost section so it appears in comment context
  const screenLabel = {
    boards: '01 Vision Boards', board: '02 Board Detail',
    library: '03 Library', notifications: '04 Notifications',
    moon: '05 Moon Ritual', account: '06 Account',
  }[screen] || screen;

  return (
    <>
      {/* Header */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: 'var(--nav-bg)',
          borderBottom: '1px solid var(--border-muted)',
          maxWidth: 480, margin: '0 auto',
        }}
      >
        <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
          {screen !== 'boards' ? (
            <button
              className="button button--ghost"
              onClick={() => nav('boards')}
              aria-label="Back"
              style={{ padding: 6 }}
            >
              <i data-lucide="chevron-left" style={{ width: 20, height: 20 }}></i>
            </button>
          ) : null}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img
              src={`../../assets/logos/sb-${theme === 'warm' ? 'warm' : (theme === 'light' ? 'light' : 'dark')}-lockup-horizontal.webp`}
              alt="Starboard"
              style={{ height: 28 }}
            />
          </div>
          {screen !== 'boards' ? <div style={{ width: 32 }}></div> : (
            <button
              aria-label="Notifications"
              className="button button--ghost"
              style={{ padding: 6 }}
              onClick={() => nav('notifications')}
            >
              <i data-lucide="bell" style={{ width: 20, height: 20 }}></i>
            </button>
          )}
        </div>
      </header>

      {/* Screen */}
      <main data-screen-label={screenLabel} className="app-frame">
        {screen === 'boards'        && <VisionBoardsScreen nav={nav} />}
        {screen === 'board'         && <BoardDetailScreen  nav={nav} data={data} />}
        {screen === 'library'       && <LibraryScreen      nav={nav} />}
        {screen === 'notifications' && <NotificationsScreen nav={nav} />}
        {screen === 'moon'          && <MoonScreen         nav={nav} />}
        {screen === 'account'       && <AccountScreen      nav={nav} theme={theme} onThemeChange={setTheme} />}
      </main>

      {/* Bottom nav */}
      <nav
        style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40,
          background: 'var(--nav-bg)',
          borderTop: '1px solid var(--border-muted)',
          maxWidth: 480, margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'stretch', height: 64, padding: '0 4px' }}>
          {navItems.map((it) => {
            const active = screen === it.id || (it.id === 'boards' && screen === 'board');
            return (
              <button
                key={it.id}
                onClick={() => nav(it.id)}
                style={{
                  flex: 1, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 4,
                  background: active ? 'color-mix(in srgb, var(--accent-color) 12%, transparent)' : 'transparent',
                  color: active ? 'var(--accent-color)' : 'var(--text-muted)',
                  border: 0, borderRadius: 10, cursor: 'pointer',
                  transition: 'all 150ms',
                }}
              >
                <i data-lucide={it.icon} style={{ width: 20, height: 20 }}></i>
                <span style={{
                  fontFamily: 'var(--font-family-chivo)', fontSize: 10, fontWeight: 500,
                }}>{it.label}</span>
              </button>
            );
          })}
          <button
            onClick={() => setTheme(themeCycle[theme])}
            aria-label={`Switch theme to ${themeCycle[theme]}`}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 4,
              background: 'transparent', color: 'var(--text-muted)',
              border: 0, borderRadius: 10, cursor: 'pointer',
            }}
          >
            <i data-lucide={themeIcon[theme]} style={{ width: 20, height: 20 }}></i>
            <span style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 10, fontWeight: 500, textTransform: 'capitalize' }}>{theme}</span>
          </button>
        </div>
      </nav>
    </>
  );
}

Object.assign(window, { AppShell });
