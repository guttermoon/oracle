/* eslint-disable react/prop-types */
/**
 * Header — fixed top nav.
 * Left: hamburger (mobile) + 4 icon links (desktop).
 * Center: logo lockup.
 * Right: onboarding lozenge + account chip.
 */
function Header({ theme, active = 'home', onNavigate }) {
  const items = [
    { id: 'boards',  label: 'Vision Boards', icon: 'image' },
    { id: 'library', label: 'Library',       icon: 'library' },
    { id: 'notifications', label: 'Notifications', icon: 'bell' },
    { id: 'moon',    label: 'Moon Phases',   icon: 'moon-star' },
  ];
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'var(--nav-bg)',
        borderBottom: '1px solid rgba(245, 230, 205, 0.04)',
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}
    >
      <div
        style={{
          maxWidth: 1024, margin: '0 auto', padding: '14px 24px',
          display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
          gap: 12,
        }}
      >
        {/* Left: nav icons */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {items.map((it) => (
            <a
              key={it.id}
              role="button"
              onClick={() => onNavigate?.(it.id)}
              aria-label={it.label}
              style={{
                padding: 10, borderRadius: 8,
                color: 'var(--text-color)',
                opacity: active === it.id ? 1 : 0.5,
                display: 'inline-flex',
                transition: 'opacity 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = active === it.id ? 1 : 0.5)}
            >
              <i data-lucide={it.icon} style={{ width: 20, height: 20 }}></i>
            </a>
          ))}
        </nav>
        {/* Center: logo */}
        <a onClick={() => onNavigate?.('home')} style={{ cursor: 'pointer' }}>
          <Logo theme={theme} height={36} />
        </a>
        {/* Right: onboarding + account */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 14 }}>
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              border: '1px solid var(--border-medium)',
              borderRadius: 6, padding: '6px 10px',
            }}
          >
            <span
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--accent-color)',
                animation: 'pulse 2s infinite',
              }}
            ></span>
            <span
              style={{
                fontFamily: 'var(--font-family-chivo)',
                fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--text-color)',
              }}
            >Onboarding · 60%</span>
          </div>
          <a
            role="button"
            onClick={() => onNavigate?.('account')}
            style={{
              color: 'var(--text-color)', opacity: 0.6,
              display: 'inline-flex', alignItems: 'center', gap: 8,
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-family-chivo)',
                fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', opacity: 0.6,
              }}
            >Sam</span>
            <i data-lucide="user" style={{ width: 16, height: 16 }}></i>
          </a>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Header });
