/* eslint-disable react/prop-types */
/**
 * PricingGrid — three tiers.
 * Middle (annual) is highlighted with `card--highlighted`.
 */
function PricingGrid() {
  const tiers = [
    {
      title: 'Free', price: 'Free', period: 'forever',
      features: ['3 vision boards', '50 images', '3 active reminders', 'Healing frequencies', 'Private boards only'],
      highlighted: false,
    },
    {
      title: 'Annual', price: '£23', period: 'per year',
      features: ['13 vision boards', '250 images', '13 active reminders', 'Custom music upload', 'Public shareable links', 'Download & share montages'],
      highlighted: true,
    },
    {
      title: 'Lifetime', price: '£72', period: 'one time',
      features: ['Everything in Annual', 'Lifetime access', 'No subscription', 'All future updates', 'Star Chart Edition early access'],
      highlighted: false,
    },
  ];

  return (
    <section className="section" style={{ paddingTop: 60, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>PLANS</p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--text-color)', marginBottom: 12 }}>Choose your course.</h2>
          <p style={{ fontFamily: 'var(--font-family-chivo)', color: 'var(--text-muted)', maxWidth: 460, margin: '0 auto', lineHeight: 1.6 }}>
            Free forever. Annual at the price of one cafe. Lifetime never expires, never goes on sale.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 28,
          }}
        >
          {tiers.map((t) => (
            <div
              key={t.title}
              className={`card ${t.highlighted ? 'card--highlighted' : ''}`}
              style={{
                padding: '32px 26px',
                display: 'flex', flexDirection: 'column',
                background: t.highlighted
                  ? 'color-mix(in srgb, var(--accent-color) 5%, var(--card-bg-glass))'
                  : 'var(--card-bg-glass)',
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-family-chivo)',
                    fontWeight: 500, fontStyle: 'normal',
                    fontSize: 14, color: 'var(--text-color)',
                    letterSpacing: '0.04em', marginBottom: 16,
                  }}
                >{t.title}</h3>
                <div
                  style={{
                    fontFamily: 'var(--font-family-secondary)',
                    fontStyle: 'italic', fontWeight: 400,
                    fontSize: 56, lineHeight: 1, color: 'var(--text-color)',
                    letterSpacing: '0.01em', marginBottom: 8,
                  }}
                >{t.price}</div>
                <p style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 13, color: 'var(--text-muted)' }}>{t.period}</p>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginBottom: 32, flexGrow: 1 }}>
                {t.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex', gap: 12, alignItems: 'flex-start',
                      fontFamily: 'var(--font-family-chivo)', fontSize: 14,
                      color: 'var(--text-subtle)', marginBottom: 14, lineHeight: 1.5,
                    }}
                  >
                    <svg
                      width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="var(--accent-color)" strokeWidth="2.5"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    >
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="button button--primary button--lg" style={{ width: '100%' }}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PricingGrid });
