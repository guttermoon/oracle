/* eslint-disable react/prop-types */
/**
 * Hero — "Set Your Course."
 * Six brand decorations float and parallax around the headline.
 * Mouse position drives a translate on two depth layers.
 */
function Hero({ theme }) {
  const [parallax, setParallax] = React.useState({ x: 0.5, y: 0.5 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setParallax({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    });
  };

  const px = (range) => `${(parallax.x - 0.5) * range}%`;
  const py = (range) => `${(parallax.y - 0.5) * range}%`;

  // Foreground decorations — larger, more opaque, react more to mouse
  const dec = [
    { src: 'compass-rose', pos: { top: '12%',  right: '6%'  }, size: 110, op: 0.42, float: '6s'   },
    { src: 'key',          pos: { top: '8%',   left:  '6%'  }, size: 90,  op: 0.38, float: '7.5s' },
    { src: 'anchor',       pos: { bottom: '14%', left: '8%' }, size: 120, op: 0.45, float: '8s'   },
    { src: 'shell',        pos: { bottom: '10%', right: '10%' }, size: 96, op: 0.38, float: '6.5s' },
  ];
  // Background decorations — smaller, lighter, drift less
  const bg = [
    { src: 'crow-sm',  pos: { top: '32%',  left:  '20%' }, size: 70, op: 0.28, float: '9s'  },
    { src: 'eye-1',    pos: { bottom: '34%', right: '24%' }, size: 80, op: 0.22, float: '11s' },
    { src: 'swallows', pos: { top: '20%',  right: '32%' }, size: 76, op: 0.28, float: '10s' },
  ];

  return (
    <section
      onMouseMove={onMove}
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: 120, paddingBottom: 80,
      }}
    >
      {/* Foreground decorative layer (parallax range 6%) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          transform: `translate(${px(6)}, ${py(6)})`,
          transition: 'transform 600ms cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {dec.map((d, i) => (
          <img
            key={d.src}
            src={`../../assets/elements/dark/${d.src}.webp`}
            alt=""
            style={{
              position: 'absolute', ...d.pos,
              width: d.size, height: d.size,
              objectFit: 'contain', opacity: d.op,
              animation: `floatY ${d.float} cubic-bezier(0.37,0,0.63,1) ${i * 0.4}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Background decorative layer (parallax range 3%) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          transform: `translate(${px(3)}, ${py(3)})`,
          transition: 'transform 1000ms cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {bg.map((d, i) => (
          <img
            key={d.src}
            src={`../../assets/elements/dark/${d.src}.webp`}
            alt=""
            style={{
              position: 'absolute', ...d.pos,
              width: d.size, height: d.size,
              objectFit: 'contain', opacity: d.op,
              animation: `floatY ${d.float} cubic-bezier(0.37,0,0.63,1) ${i * 0.5 + 0.2}s infinite alternate-reverse`,
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 760 }}>
        <SparkleEffect>
          <h1
            style={{ fontSize: 'clamp(48px, 9vw, 96px)', color: 'var(--text-color)', marginBottom: 24, lineHeight: 1.08 }}
          >
            Set your course, Sailor.
          </h1>
        </SparkleEffect>
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(15px, 1.5vw, 20px)',
            maxWidth: 580, margin: '0 auto 36px',
            lineHeight: 1.55,
          }}
        >
          Build your vision boards. Set affirmations and reminders. Come back to them every day as videos with a healing frequency soundtrack. Your boards in your pocket, wherever you go.
        </p>
        <div
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button className="button button--primary button--lg">Hoist the sails</button>
          <button className="button button--secondary button--lg">See how it works</button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
