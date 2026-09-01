import { motion } from 'framer-motion'

const timelineEvents = [
  {
    year: '2023',
    panel: 'bg-yellow',
    bg: '#ffe838',
    color: '#1a1008',
    emoji: '💡',
    title: 'IDE MUNCUL!',
    caption: 'Di sebuah kamar kos sederhana di Jember...',
    bubble: 'Saya lihat ada yang salah. Talenta kita bertebaran tapi tak ada yang menghubungkan mereka dengan peluang nyata!',
    sfx: 'PING!',
    sfxColor: '#ff2d20',
  },
  {
    year: '2024',
    bg: '#1a6fff',
    color: '#fff',
    emoji: '⚙️',
    title: 'FONDASI DIBANGUN',
    caption: 'Bergadang, ngopi, debugging tanpa henti...',
    bubble: 'Baris demi baris kode ditulis. Tim kecil bergabung dengan satu keyakinan yang sama.',
    sfx: 'KLIK!',
    sfxColor: '#ffe838',
  },
  {
    year: '2025',
    bg: '#ff2d20',
    color: '#fff',
    emoji: '🚀',
    title: 'VTO DILUNCURKAN!',
    caption: 'Hari yang ditunggu-tunggu akhirnya tiba!',
    bubble: 'Platform hidup! Fitur matching, dashboard organisasi, dan portal peluang semuanya aktif!',
    sfx: 'BOOM!',
    sfxColor: '#ffe838',
  },
  {
    year: '2026',
    bg: '#1a1008',
    color: '#ffe838',
    emoji: '📈',
    title: 'EKSPANSI DIMULAI',
    caption: 'Pengguna bertambah. Partner berdatangan.',
    bubble: 'Universitas, perusahaan tech, NGO — semua mau bergabung. VTO mulai dikenal!',
    sfx: 'YES!',
    sfxColor: '#ffe838',
  },
]

export default function Slide02Origin() {
  return (
    <section className="slide-section" style={{ background: '#fdf6e3' }}>
      <div className="absolute inset-0 halftone opacity-25 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: -40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
        >
          <div className="inline-block comic-panel px-6 py-3 mb-3" style={{ background: '#ffe838', transform: 'rotate(-1deg)' }}>
            <span className="font-bangers text-ink text-xl tracking-widest">✦ CHAPTER 02 — ASAL USUL ✦</span>
          </div>
          <h2
            className="font-bangers"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: '#1a1008', textShadow: '4px 4px 0 #ffe838, 6px 6px 0 #1a1008' }}
          >
            BAGAIMANA VTO LAHIR?
          </h2>
        </motion.div>

        {/* Comic panels grid */}
        <div className="comic-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'auto auto' }}>
          {timelineEvents.map((ev, i) => (
            <motion.div
              key={ev.year}
              className="relative overflow-hidden"
              style={{ background: ev.bg, border: '3px solid #1a1008', minHeight: 200, padding: '16px' }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.4, ease: 'backOut' }}
            >
              {/* Halftone */}
              <div className={`absolute inset-0 opacity-20 ${ev.bg === '#ffe838' ? 'halftone' : ev.bg === '#1a6fff' ? 'halftone-blue' : ev.bg === '#ff2d20' ? 'halftone-red' : ''}`} />

              {/* Year badge */}
              <div className="absolute top-2 right-2" style={{ background: '#fff', border: '2px solid #1a1008', padding: '2px 8px', boxShadow: '2px 2px 0 #1a1008' }}>
                <span className="font-bangers" style={{ color: '#1a1008', fontSize: '0.75rem' }}>{ev.year}</span>
              </div>

              {/* SFX */}
              <div
                className="absolute -top-1 -left-1 font-bangers leading-none opacity-15 pointer-events-none"
                style={{ fontSize: '4rem', color: ev.sfxColor }}
              >
                {ev.sfx}
              </div>

              <div className="relative z-10">
                {/* Title */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{ev.emoji}</span>
                  <h3 className="font-bangers" style={{ color: ev.color, fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', textShadow: ev.color === '#fff' ? '2px 2px 0 rgba(0,0,0,0.4)' : 'none' }}>
                    {ev.title}
                  </h3>
                </div>

                {/* Caption */}
                <p className="font-comic font-bold text-xs mb-3 opacity-80" style={{ color: ev.color }}>
                  {ev.caption}
                </p>

                {/* Speech bubble */}
                <div
                  className="relative rounded-2xl p-3"
                  style={{ background: '#fff', border: '2px solid #1a1008', boxShadow: '3px 3px 0 #1a1008' }}
                >
                  <p className="font-comic text-ink text-xs leading-snug font-bold">"{ev.bubble}"</p>
                  {/* bubble tail */}
                  <div style={{
                    position: 'absolute', bottom: -10, left: 16,
                    borderLeft: '8px solid transparent', borderRight: '8px solid transparent',
                    borderTop: '10px solid #1a1008'
                  }} />
                  <div style={{
                    position: 'absolute', bottom: -7, left: 18,
                    borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
                    borderTop: '8px solid #fff', zIndex: 1
                  }} />
                </div>

                {/* SFX stamp */}
                <div className="mt-3">
                  <span className="font-bangers" style={{ color: ev.sfxColor, fontSize: '1.2rem', textShadow: '2px 2px 0 #1a1008' }}>
                    {ev.sfx}
                  </span>
                </div>
              </div>

              {/* Panel number */}
              <span className="absolute bottom-2 right-3 font-bangers opacity-30" style={{ color: ev.color, fontSize: '0.65rem' }}>
                {i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer quote */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
        >
          <div className="inline-block comic-panel px-6 py-3" style={{ background: '#1a1008', transform: 'rotate(1deg)' }}>
            <p className="font-marker text-yellow-300" style={{ color: '#ffe838', fontSize: '0.9rem' }}>
              "VTO bukan hanya platform — ini adalah cerita yang masih terus ditulis."
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bangers text-ink text-xs tracking-widest opacity-40">— halaman 02 dari 10 —</div>
    </section>
  )
}
