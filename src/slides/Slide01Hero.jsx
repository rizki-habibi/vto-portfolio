import { motion } from 'framer-motion'

export default function Slide01Hero({ onNavigate }) {
  return (
    <section className="slide-section" style={{ background: '#fdf6e3' }}>
      <div className="absolute inset-0 halftone opacity-30" />
      {/* Speed lines from center */}
      <div className="absolute inset-0 speed-lines opacity-30" />

      {/* Big ink gutter frame */}
      <div className="absolute inset-3 md:inset-5" style={{ border: '5px solid #1a1008', pointerEvents: 'none' }} />
      <div className="absolute inset-5 md:inset-8" style={{ border: '2px solid #1a1008', pointerEvents: 'none' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ minHeight: '90vh', alignItems: 'stretch' }}>

        {/* LEFT — cover text */}
        <div className="flex flex-col justify-between py-4" style={{ borderRight: '4px solid #1a1008' }}>

          {/* Top label */}
          <motion.div
            initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
          >
            <div className="inline-block" style={{ background: '#ff2d20', border: '3px solid #1a1008', padding: '4px 16px', boxShadow: '3px 3px 0 #1a1008' }}>
              <span className="font-bangers text-white tracking-widest text-sm">EDISI PERDANA · 2025</span>
            </div>
          </motion.div>

          {/* Giant title */}
          <motion.div
            className="my-6"
            initial={{ scale: 0.5, rotate: -5, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          >
            <h1
              className="font-bangers leading-none"
              style={{
                fontSize: 'clamp(5rem, 16vw, 10rem)',
                color: '#1a1008',
                textShadow: '6px 6px 0 #ffe838, 10px 10px 0 #1a1008',
                lineHeight: 0.9,
              }}
            >
              VTO
            </h1>
            <div
              className="font-bangers tracking-[0.15em] mt-2"
              style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)', color: '#1a6fff', textShadow: '2px 2px 0 #1a1008' }}
            >
              VISI · TEKNOLOGI · ORGANISASI
            </div>
          </motion.div>

          {/* Tagline speech bubble */}
          <motion.div
            className="speech-bubble max-w-xs"
            initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
          >
            <p className="font-comic font-bold text-ink text-sm leading-snug">
              "Platform ekosistem digital yang menghubungkan <strong>talenta</strong>, <strong>teknologi</strong>, dan <strong>peluang</strong> — untuk Indonesia yang lebih maju!"
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex gap-3 flex-wrap mt-6"
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
          >
            {[
              { v: '2025', l: 'Berdiri', bg: '#ffe838' },
              { v: '3', l: 'Pilar', bg: '#1a6fff', c: '#fff' },
              { v: '∞', l: 'Potensi', bg: '#ff2d20', c: '#fff' },
            ].map(s => (
              <div key={s.l} className="text-center comic-panel px-4 py-2" style={{ background: s.bg, minWidth: 72 }}>
                <div className="font-bangers text-2xl" style={{ color: s.c || '#1a1008' }}>{s.v}</div>
                <div className="font-comic text-xs font-bold" style={{ color: s.c || '#1a1008' }}>{s.l}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex gap-3 mt-6 flex-wrap"
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.75 }}
          >
            <button onClick={() => onNavigate(1)}
              className="comic-btn comic-btn-ink font-bangers text-lg px-8 py-3 tracking-widest">
              BACA CERITANYA →
            </button>
            <button onClick={() => onNavigate(9)}
              className="comic-btn comic-btn-yellow font-bangers text-lg px-6 py-3 tracking-widest">
              KONTAK
            </button>
          </motion.div>
        </div>

        {/* RIGHT — cover illustration panel */}
        <motion.div
          className="relative flex flex-col items-center justify-center"
          style={{ borderLeft: '4px solid #1a1008', background: '#ffe838', minHeight: 400 }}
          initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="absolute inset-0 halftone-yellow opacity-60" />

          {/* Decorative action burst */}
          <div
            className="starburst w-48 h-48 md:w-64 md:h-64 animate-float-comic relative z-10 flex-col"
            style={{ background: '#ff2d20', border: '4px solid #1a1008', boxShadow: '8px 8px 0 #1a1008' }}
          >
            <span className="font-bangers text-white text-4xl md:text-5xl" style={{ textShadow: '3px 3px 0 #1a1008' }}>VTO!</span>
            <span className="font-comic text-white text-xs font-bold mt-1">HADIR!</span>
          </div>

          {/* Floating badges */}
          <motion.div
            className="absolute top-4 right-4 comic-panel px-3 py-2"
            style={{ background: '#1a6fff', transform: 'rotate(8deg)' }}
            animate={{ rotate: [8, 12, 8] }} transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-bangers text-white text-sm">NEW!</span>
          </motion.div>
          <motion.div
            className="absolute bottom-6 left-4 comic-panel px-3 py-1"
            style={{ background: '#fff', transform: 'rotate(-6deg)' }}
            animate={{ rotate: [-6, -10, -6] }} transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="font-bangers text-ink text-xs">100% ASLI INDONESIA</span>
          </motion.div>

          {/* Action words */}
          <div className="absolute top-8 left-4 font-bangers text-ink text-2xl opacity-20 -rotate-12">POW!</div>
          <div className="absolute bottom-12 right-4 font-bangers text-ink text-xl opacity-20 rotate-6">ZAP!</div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-4 right-1/2 translate-x-1/2 font-bangers text-ink text-xs tracking-widest opacity-60 flex flex-col items-center gap-1"
            animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span>SCROLL ↓</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bangers text-ink text-xs tracking-widest opacity-50">
        — halaman 01 dari 10 —
      </div>
    </section>
  )
}
