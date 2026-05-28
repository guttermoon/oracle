/* eslint-disable react/prop-types */
/**
 * TickerBanner — horizontal scrolling marquee.
 * Items separated by the SB pattern logomark.
 */
function TickerBanner({ items }) {
  const defaultItems = [
    'Chart your vision', 'Even keel', 'Steady as she goes',
    'Set your course', 'Anchors aweigh', 'Fair winds',
    'Hold fast', 'Following seas',
  ];
  const list = items?.length ? items : defaultItems;
  // Triple list for seamless loop
  const tripled = [...list, ...list, ...list];

  return (
    <div
      style={{
        background: 'var(--ticker-bg)', color: 'var(--ticker-text)',
        borderTop: '1px solid var(--ticker-bg)', borderBottom: '1px solid var(--ticker-bg)',
        overflow: 'hidden',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 2.5rem, #000 calc(100% - 2.5rem), transparent 100%)',
        maskImage:       'linear-gradient(to right, transparent 0, #000 2.5rem, #000 calc(100% - 2.5rem), transparent 100%)',
      }}
    >
      <div
        style={{
          display: 'flex', alignItems: 'center', padding: '12px 0',
          width: 'max-content',
          animation: 'ticker 30s linear infinite',
        }}
      >
        {tripled.map((it, idx) => (
          <React.Fragment key={idx}>
            <span
              style={{
                fontFamily: 'var(--font-family-chivo)',
                fontWeight: 700, fontSize: 14, letterSpacing: '0.03em',
                padding: '0 24px', whiteSpace: 'nowrap',
              }}
            >{it}</span>
            <span style={{ width: 44, height: 44, flexShrink: 0, margin: '0 12px', opacity: 0.95 }}>
              <img
                src="../../assets/logos/sb-dark-logomark-pattern.webp"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { TickerBanner });
