/* eslint-disable react/prop-types */
/**
 * Starboard app — small reusable bits.
 */
const { useState } = React;

/* Cover tile — either a color palette or a brand decorative element.
   The mock can't ship real user photos, so we lean on the brand iconography
   so the board covers feel intentional, not like broken placeholders. */
function Photo({ tone = 'a', glyph, alt = '' }) {
  const palettes = {
    a: 'linear-gradient(135deg, #4D5198 0%, #2D3268 100%)',  // indigo
    b: 'linear-gradient(135deg, #FAF9D4 0%, #A3C132 100%)',  // pale → lime
    c: 'linear-gradient(135deg, #D98A5F 0%, #6A4D44 100%)',  // terra → umber
    d: 'linear-gradient(135deg, #04041C 0%, #4D5198 100%)',  // deep night
    e: 'linear-gradient(135deg, #F5E6CD 0%, #6A4D44 100%)',  // cream → umber
    f: 'linear-gradient(135deg, #8F9E7A 0%, #4A5D45 100%)',  // sage → forest
  };
  return (
    <div
      role="img" aria-label={alt}
      style={{
        background: palettes[tone] || palettes.a,
        width: '100%', height: '100%', borderRadius: 8,
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {glyph && (
        <img
          src={`../../assets/elements/dark/${glyph}.webp`}
          alt=""
          style={{ width: '60%', height: '60%', objectFit: 'contain', opacity: 0.5 }}
        />
      )}
    </div>
  );
}

/* BoardCard — single vision board tile. Shows cover collage + name + count. */
function BoardCard({ name, count, tones = ['a','b','c','d'], glyphs = [], onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="card"
      style={{
        textAlign: 'left', padding: 14, border: '1px solid var(--card-border)',
        background: 'var(--card-bg-glass)', cursor: 'pointer',
        display: 'flex', flexDirection: 'column', gap: 10, minHeight: 200,
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 4, height: 120, borderRadius: 8, overflow: 'hidden',
        }}
      >
        {tones.slice(0, 4).map((t, i) => (
          <Photo key={i} tone={t} glyph={glyphs[i]} alt="" />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{
          fontFamily: 'var(--font-family-secondary)', fontStyle: 'italic',
          fontSize: 18, color: 'var(--text-color)',
        }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 11, color: 'var(--text-muted)' }}>
          {count} image{count === 1 ? '' : 's'}
        </span>
      </div>
    </button>
  );
}

/* LibraryTile — single image in the Library grid. */
function LibraryTile({ tone, tag }) {
  return (
    <div style={{ position: 'relative', aspectRatio: '1', borderRadius: 8, overflow: 'hidden' }}>
      <Photo tone={tone} />
      {tag && (
        <span
          style={{
            position: 'absolute', bottom: 6, left: 6,
            fontFamily: 'var(--font-family-chivo)', fontSize: 9, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#fff', background: 'rgba(0,0,0,0.45)',
            padding: '3px 6px', borderRadius: 4,
          }}
        >{tag}</span>
      )}
    </div>
  );
}

/* AffirmationRow — list row used in Notifications. */
function AffirmationRow({ time, label, body, enabled }) {
  const [on, setOn] = useState(enabled);
  return (
    <div className="card" style={{ padding: 16, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{ minWidth: 60 }}>
        <div style={{
          fontFamily: 'var(--font-family-secondary)', fontStyle: 'italic',
          fontSize: 22, color: 'var(--text-color)', lineHeight: 1,
        }}>{time}</div>
        <div style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 4 }}>
          {label}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 13, color: 'var(--text-color)', lineHeight: 1.5 }}>
          {body}
        </div>
      </div>
      <button
        onClick={() => setOn((v) => !v)}
        aria-pressed={on}
        style={{
          width: 36, height: 22, padding: 0, border: 0, borderRadius: 9999,
          background: on ? 'var(--accent-color)' : 'var(--border-muted)',
          position: 'relative', flexShrink: 0, transition: 'background 200ms',
        }}
      >
        <span
          style={{
            position: 'absolute', top: 2, left: on ? 16 : 2,
            width: 18, height: 18, borderRadius: 9999,
            background: 'var(--bg-color)',
            transition: 'left 200ms cubic-bezier(0.16,1,0.3,1)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
          }}
        ></span>
      </button>
    </div>
  );
}

/* SettingRow — a single account list row */
function SettingRow({ icon, label, hint, onClick }) {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '14px 16px', width: '100%',
        background: 'transparent', border: 0, cursor: 'pointer',
        borderBottom: '1px solid var(--border-muted)',
        textAlign: 'left',
      }}
    >
      <i data-lucide={icon} style={{ width: 18, height: 18, color: 'var(--text-color)', opacity: 0.7 }}></i>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 14, color: 'var(--text-color)' }}>{label}</div>
        {hint && <div style={{ fontFamily: 'var(--font-family-chivo)', fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{hint}</div>}
      </div>
      <i data-lucide="chevron-right" style={{ width: 16, height: 16, color: 'var(--text-color)', opacity: 0.4 }}></i>
    </button>
  );
}

Object.assign(window, { Photo, BoardCard, LibraryTile, AffirmationRow, SettingRow });
