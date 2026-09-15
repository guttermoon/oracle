/* eslint-disable react/prop-types */
/**
 * Footer — large display navigation links + auth CTAs + theme toggle.
 * Ship silhouette behind, 10% opacity.
 */
function Footer({ theme, onThemeChange }) {
  return (
    <footer
      style={{
        position: 'relative',
        marginTop: 64,
        background: 'var(--footer-bg)',
        color: 'var(--footer-text)',
        borderTop: '1px solid var(--border-medium)',
        overflow: 'hidden',
      }}
    >
      {/* Ship silhouette */}
      <div
        style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <img
          src="../../assets/elements/dark/ship.webp"
          alt=""
          style={{ width: 560, height: 560, opacity: 0.18, objectFit: 'contain' }}
        />
      </div>

      {/* Compass rose in corner */}
      <img
        src="../../assets/elements/dark/compass-rose.webp"
        alt="" aria-hidden="true"
        style={{
          position: 'absolute', right: 24, bottom: 100,
          width: 200, height: 200, opacity: 0.08,
          objectFit: 'contain', pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ padding: '80px 24px', position: 'relative', zIndex: 1, maxWidth: 1100 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 80, marginBottom: 48,
          }}
        >
          {/* Left: nav + theme */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Vision Boards', href: '#' },
                { label: 'Explore', href: '#' },
                { label: 'Pricing', href: '#' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    fontFamily: 'var(--font-family-secondary)',
                    fontStyle: 'italic', fontWeight: 400,
                    fontSize: 'clamp(32px, 4vw, 56px)',
                    color: 'var(--footer-text)',
                    display: 'inline-flex', alignItems: 'center', gap: 12,
                    transition: 'opacity 200ms',
                    lineHeight: 1.1,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.7)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
                >
                  <SparkleEffect sparkleSrc={`../../assets/decorations/sparkle-${theme === 'warm' ? 'warm' : (theme === 'light' ? 'light' : 'dark')}.webp`}>
                    {l.label}
                  </SparkleEffect>
                  <span style={{ opacity: 0.6 }}>→</span>
                </a>
              ))}
            </nav>
            <ThemeToggle theme={theme} onSelect={onThemeChange} />
          </div>

          {/* Right: auth + contact */}
          <div
            style={{
              display: 'flex', flexDirection: 'column', gap: 32,
              alignItems: 'flex-end', textAlign: 'right',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-family-chivo)',
                  fontSize: 16, color: 'var(--footer-text)', opacity: 0.6,
                  marginBottom: 24, maxWidth: 380,
                  lineHeight: 1.55,
                }}
              >
                Log in to access your vision boards or create a new account to get started.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                <button className="button button--primary button--lg" style={{ paddingLeft: 32, paddingRight: 32 }}>Log In</button>
                <button className="button button--secondary button--lg" style={{ paddingLeft: 32, paddingRight: 32, color: 'var(--footer-text)', borderColor: 'var(--footer-text)' }}>Create Account</button>
              </div>
            </div>
            <a
              href="mailto:captain@starboardmanifest.com"
              style={{
                fontSize: 20, color: 'var(--footer-text)', opacity: 0.95,
                fontFamily: 'var(--font-family-chivo)',
              }}
            >captain@starboardmanifest.com</a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
              <img
                src="../../assets/elements/dark/anchor.webp"
                alt="" aria-hidden="true"
                style={{ width: 24, height: 24, opacity: 0.7, objectFit: 'contain' }}
              />
              <span style={{
                fontFamily: 'var(--font-family-secondary)', fontStyle: 'italic',
                fontSize: 18, color: 'var(--footer-text)', opacity: 0.85,
              }}>— The Captain</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', gap: 16,
            paddingTop: 24,
            borderTop: '1px solid color-mix(in srgb, var(--footer-text) 15%, transparent)',
          }}
        >
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'DMCA'].map((l) => (
              <a key={l} href="#" style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 13, color: 'var(--footer-text)', opacity: 0.6 }}>{l}</a>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 13, opacity: 0.6 }}>©2026 Starboard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
