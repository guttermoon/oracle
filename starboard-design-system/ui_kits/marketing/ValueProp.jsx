/* eslint-disable react/prop-types */
/**
 * ValueProp — cadence-staggered headlines + supporting copy.
 * Matches the live site's "Ideas land everywhere" section structurally.
 */
function ValueProp() {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--border-muted)', borderBottom: '1px solid var(--border-muted)' }}>
      <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
        <SparkleEffect>
          <h2
            style={{ fontSize: 'clamp(32px, 5.5vw, 56px)', color: 'var(--text-color)', marginBottom: 4 }}
          >
            Ideas land everywhere.
          </h2>
        </SparkleEffect>
        <h2
          style={{ fontSize: 'clamp(32px, 5.5vw, 56px)', color: 'var(--text-color)', marginBottom: 36 }}
        >
          Screenshots, saved images, lines you can't unhear.
        </h2>
        <p
          style={{
            fontSize: 'clamp(16px, 1.5vw, 22px)', color: 'var(--text-subtle)',
            maxWidth: 600, margin: '0 auto 28px', lineHeight: 1.55, fontWeight: 500,
          }}
        >
          Starboard catches the scatter and turns it into a vision board you actually return to.
        </p>
        <div style={{ width: 64, height: 1, background: 'var(--border-medium)', margin: '0 auto 28px' }}></div>
        <p
          style={{ fontSize: 'clamp(14px, 1.2vw, 18px)', color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.55 }}
        >
          Career, wealth, health, home, creativity, travel, spirituality. Whatever you're charting toward, the board stays in view.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { ValueProp });
