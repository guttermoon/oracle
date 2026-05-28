/* eslint-disable react/prop-types */
/**
 * Marketing kit shared components for Starboard.
 * Loaded as a single Babel bundle. Each component exported to window
 * for cross-file scope.
 */

const { useState, useEffect, useRef } = React;

/* =====================================================================
   SparkleEffect — wraps text; on hover drops small sparkle stars
   ===================================================================== */
function SparkleEffect({ children, sparkleSrc = '../../assets/decorations/sparkle-dark.webp' }) {
  const [sparkles, setSparkles] = React.useState([]);
  const idRef = React.useRef(0);
  const onEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const next = Array.from({ length: 4 }).map(() => ({
      id: ++idRef.current,
      left: Math.random() * rect.width,
      top: Math.random() * rect.height,
      size: 12 + Math.random() * 12,
      delay: Math.random() * 200,
    }));
    setSparkles((s) => [...s, ...next]);
    setTimeout(() => setSparkles((s) => s.filter((x) => !next.find((n) => n.id === x.id))), 2200);
  };
  return (
    <span style={{ position: 'relative', display: 'inline-block' }} onMouseEnter={onEnter}>
      {children}
      {sparkles.map((s) => (
        <img
          key={s.id}
          src={sparkleSrc}
          alt=""
          style={{
            position: 'absolute',
            left: s.left, top: s.top, width: s.size, height: s.size,
            pointerEvents: 'none', opacity: 0,
            animation: `sparkleAnim 2s ${s.delay}ms ease-in-out forwards`,
            zIndex: 5,
          }}
        />
      ))}
    </span>
  );
}

/* =====================================================================
   Logo — picks the right lockup file for the active theme
   ===================================================================== */
function Logo({ height = 32, theme = 'dark', variant = 'horizontal' }) {
  const map = {
    dark: {
      horizontal: '../../assets/logos/sb-dark-lockup-horizontal.webp',
      vertical: '../../assets/logos/sb-dark-lockup-vertical.webp',
      mark: '../../assets/logos/sb-dark-logomark.webp',
    },
    light: {
      horizontal: '../../assets/logos/sb-light-lockup-horizontal.webp',
      vertical: '../../assets/logos/sb-light-lockup-horizontal.webp',
      mark: '../../assets/logos/sb-light-logomark.webp',
    },
    warm: {
      horizontal: '../../assets/logos/sb-warm-lockup-horizontal.webp',
      vertical: '../../assets/logos/sb-warm-lockup-horizontal.webp',
      mark: '../../assets/logos/sb-warm-logomark.webp',
    },
  };
  return <img src={map[theme][variant]} alt="Starboard" style={{ height, width: 'auto' }} />;
}

/* =====================================================================
   ThemeToggle — segmented pill, fires onSelect
   ===================================================================== */
function ThemeToggle({ theme, onSelect }) {
  return (
    <div
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        background: 'rgba(0,0,0,0.05)', borderRadius: 9999, padding: 5,
      }}
    >
      {['dark', 'light', 'warm'].map((t) => (
        <button
          key={t}
          onClick={() => onSelect(t)}
          className={`button ${theme === t ? 'button--primary' : 'button--ghost'} button--pill button--sm`}
          style={{ textTransform: 'capitalize', fontWeight: 700, letterSpacing: '0.05em', fontSize: 11 }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

Object.assign(window, { SparkleEffect, Logo, ThemeToggle });
