/* eslint-disable react/prop-types */
/**
 * Newsletter — "Letters from the Helm" from the Captain to the sailor.
 * Stateful: idle → loading → success.
 */
function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [state, setState] = React.useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setState('loading');
    setTimeout(() => setState('success'), 700);
  };

  return (
    <section style={{ padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
      {/* Background lighthouse silhouette */}
      <img
        src="../../assets/elements/dark/lighthouse.webp"
        aria-hidden="true" alt=""
        style={{
          position: 'absolute', right: 'min(8vw, 80px)', top: 40,
          width: 220, height: 220, opacity: 0.10,
          objectFit: 'contain', pointerEvents: 'none',
        }}
      />
      <img
        src="../../assets/elements/dark/swallows.webp"
        aria-hidden="true" alt=""
        style={{
          position: 'absolute', left: 'min(6vw, 60px)', top: 60,
          width: 140, height: 140, opacity: 0.08,
          objectFit: 'contain', pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ maxWidth: 620, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p className="eyebrow" style={{ marginBottom: 14 }}>FROM THE CAPTAIN</p>
        <SparkleEffect>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: 'var(--text-color)', marginBottom: 16 }}>
            Letters from the Helm
          </h2>
        </SparkleEffect>
        <p
          style={{
            fontFamily: 'var(--font-family-chivo)',
            color: 'var(--text-muted)',
            maxWidth: 480, margin: '0 auto 36px',
            fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.6,
          }}
        >
          A monthly letter from the Captain. Lunar timing, brand-new boards, the strange story behind the everyday thing. Twice a month, never more.
        </p>

        {state === 'success' ? (
          <div className="card" style={{ maxWidth: 460, margin: '0 auto', padding: '24px 28px', textAlign: 'left' }}>
            <p style={{
              fontFamily: 'var(--font-family-secondary)', fontStyle: 'italic',
              fontSize: 22, color: 'var(--text-color)', marginBottom: 6, lineHeight: 1.2,
            }}>
              Welcome aboard, Sailor.
            </p>
            <p style={{ fontFamily: 'var(--font-family-chivo)', color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, marginBottom: 14 }}>
              Your first letter from the Helm will arrive within the week. Fair winds.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img
                src="../../assets/elements/dark/anchor.webp"
                alt="" aria-hidden="true"
                style={{ width: 28, height: 28, opacity: 0.7, objectFit: 'contain' }}
              />
              <span style={{
                fontFamily: 'var(--font-family-secondary)', fontStyle: 'italic',
                fontSize: 15, color: 'var(--text-color)',
              }}>— Megan, Captain</span>
            </div>
          </div>
        ) : (
          <>
            <form
              onSubmit={onSubmit}
              style={{ display: 'flex', gap: 8, maxWidth: 460, margin: '0 auto', alignItems: 'stretch' }}
              noValidate
            >
              <input
                type="email"
                className="input-field"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flex: 1 }}
                disabled={state === 'loading'}
              />
              <button
                type="submit"
                className="button button--primary"
                style={{ paddingLeft: 22, paddingRight: 22, fontSize: 18 }}
                disabled={state === 'loading'}
              >{state === 'loading' ? '…' : '→'}</button>
            </form>
            <p style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 12, color: 'var(--text-muted)', marginTop: 18 }}>
              We respect your inbox. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { Newsletter });
