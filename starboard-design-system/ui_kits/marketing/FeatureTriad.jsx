/* eslint-disable react/prop-types */
/**
 * FeatureTriad — three feature cards using brand decorative elements as icons.
 * Heart · Lighthouse · Sun is the canonical triad from the production site.
 */
function FeatureTriad() {
  const feats = [
    {
      icon: 'heart',
      title: 'Gather what guides you.',
      body: 'Upload in bulk. Crop fast. Everything you save sits in one library, ready when you need it.\n\nNo more digging through camera rolls. The board stays loaded.',
      cta: 'Build your library',
    },
    {
      icon: 'lighthouse',
      title: 'A board that moves.',
      body: 'Turn boards into a looping montage you actually want to watch. Layer text. Add music. Tune the healing frequency.\n\nCareer, wealth, health, home. Pick a theme, set a course.',
      cta: 'Build a vision board',
    },
    {
      icon: 'sun',
      title: 'The board returns to you.',
      body: 'Write affirmations and reminders without a character limit. Schedule them when you need them most.\n\nRepetition strengthens attention. Attention shapes behavior. The lanthorn you carry.',
      cta: 'Write an affirmation',
    },
  ];

  return (
    <section className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 48,
          }}
        >
          {feats.map((f, i) => (
            <div
              key={f.icon}
              className={`fade-in-up delay-${(i + 1) * 100}`}
              style={{ textAlign: 'center' }}
            >
              <div
                style={{
                  width: 120, height: 120, margin: '0 auto 20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <img
                  src={`../../assets/elements/dark/${f.icon}.webp`}
                  alt={f.icon}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.85 }}
                />
              </div>
              <h4 style={{ fontSize: 22, color: 'var(--text-color)', marginBottom: 14 }}>{f.title}</h4>
              <p
                style={{
                  fontFamily: 'var(--font-family-chivo)',
                  fontSize: 14, color: 'var(--text-muted)',
                  maxWidth: 320, margin: '0 auto 20px',
                  lineHeight: 1.6, whiteSpace: 'pre-line',
                }}
              >
                {f.body}
              </p>
              <button className="button button--primary">{f.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FeatureTriad });
