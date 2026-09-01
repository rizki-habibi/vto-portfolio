import { motion } from 'framer-motion'

const arcs = [
  {
    arc: 'ARC 1',
    period: 'Q1–Q2 2025',
    title: 'AWAL MULA',
    subtitle: 'Fondasi & MVP',
    status: 'TAMAT',
    statusBg: '#00c853',
    bg: '#ffe838',
    color: '#1a1008',
    cover: '📖',
    panels: [
      '✅ Core platform dibangun dari nol',
      '✅ Sistem autentikasi & profil aktif',
      '✅ Basic talent matching live',
      '✅ Dashboard organisasi v1',
      '✅ 500 pengguna beta pertama',
    ],
    sfx: 'ORIGIN!',
  },
  {
    arc: 'ARC 2',
    period: 'Q3–Q4 2025',
    title: 'KEBANGKITAN',
    subtitle: 'Growth & Features',
    status: 'ONGOING',
    statusBg: '#1a6fff',
    bg: '#1a6fff',
    color: '#fff',
    cover: '⚡',
    panels: [
      '🔄 AI matching v2 — behavioral',
      '🔄 Learning ecosystem module',
      '🔄 Digital marketplace launch',
      '🔄 Mobile app iOS + Android',
      '⏳ Target: 10,000 pengguna aktif',
    ],
    sfx: 'RISE!',
  },
  {
    arc: 'ARC 3',
    period: 'Q1–Q2 2026',
    title: 'EKSPANSI',
    subtitle: 'Partnership & Scale',
    status: 'SEGERA',
    statusBg: '#ff6b00',
    bg: '#ff6b00',
    color: '#fff',
    cover: '🌐',
    panels: [
      '⏳ 50+ universitas partner',
      '⏳ Enterprise tier launch',
      '⏳ Public API untuk developer',
      '⏳ Program sertifikasi resmi',
      '⏳ Target: 100,000 pengguna',
    ],
    sfx: 'EXPAND!',
  },
  {
    arc: 'ARC FINAL',
    period: '2027+',
    title: 'DOMINASI',
    subtitle: 'Ekosistem Penuh',
    status: 'ENDGAME',
    statusBg: '#7c3aed',
    bg: '#1a1008',
    color: '#ffe838',
    cover: '🌟',
    panels: [
      '🌟 Ekspansi ke seluruh ASEAN',
      '🌟 VTO Labs — divisi R&D',
      '🌟 Venture studio untuk alumni',
      '🌟 1 Juta pengguna aktif',
      '🌟 IPO / strategic partnership',
    ],
    sfx: 'FINAL!',
  },
]

export default function Slide08Roadmap() {
  return (
    <section className="slide-section" style={{ background: '#fdf6e3' }}>
      <div className="absolute inset-0 halftone opacity-25 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
        >
          <div className="inline-block px-5 py-2 mb-2" style={{ background: '#ff6b00', border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008', transform: 'rotate(-1deg)' }}>
            <span className="font-bangers text-white tracking-widest">📚 CHAPTER 08 — ROADMAP CERITA 📚</span>
          </div>
          <h2 className="font-bangers text-ink" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', textShadow: '4px 4px 0 #ff6b00, 7px 7px 0 #1a1008' }}>
            PERJALANAN MASIH PANJANG!
          </h2>
        </motion.div>

        {/* Comic arc books shelf */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {arcs.map((arc, i) => (
            <motion.div
              key={arc.arc}
              className="relative overflow-hidden flex flex-col"
              style={{ background: arc.bg, border: '4px solid #1a1008', boxShadow: '6px 6px 0 #1a1008' }}
              initial={{ y: 50, rotate: (i % 2 === 0 ? -2 : 2), opacity: 0 }}
              whileInView={{ y: 0, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 200, damping: 18 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
            >
              {/* "Cover" section */}
              <div className="relative" style={{ background: arc.status === 'TAMAT' ? '#1a1008' : arc.bg, padding: '16px', borderBottom: '3px solid #1a1008', minHeight: 90 }}>
                <div className="absolute inset-0 halftone opacity-10" />
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-1">{arc.cover}</div>
                  <span
                    className="font-bangers text-xs px-2 py-0.5"
                    style={{ background: arc.statusBg, color: '#fff', border: '2px solid #1a1008', boxShadow: '2px 2px 0 #1a1008' }}
                  >
                    {arc.status}
                  </span>
                </div>
                {/* SFX watermark */}
                <div
                  className="absolute bottom-0 right-0 font-bangers opacity-10 leading-none"
                  style={{ fontSize: '2.5rem', color: arc.color }}
                >
                  {arc.sfx}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '14px', flex: 1 }}>
                <div className="font-bangers text-xs mb-1" style={{ color: arc.color, opacity: 0.6 }}>{arc.period}</div>
                <div className="font-bangers leading-tight mb-1" style={{ color: arc.color, fontSize: '1.1rem' }}>{arc.arc}</div>
                <div className="font-bangers text-sm mb-1" style={{ color: arc.color }}>{arc.title}</div>
                <div className="font-comic text-xs mb-3 font-bold" style={{ color: arc.color, opacity: 0.7 }}>{arc.subtitle}</div>

                {/* Panel list */}
                <div className="space-y-1">
                  {arc.panels.map((panel, j) => (
                    <motion.p
                      key={j}
                      className="font-comic text-xs leading-snug"
                      style={{ color: arc.color, opacity: 0.85 }}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 0.85, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + j * 0.06 }}
                    >
                      {panel}
                    </motion.p>
                  ))}
                </div>

                {/* Progress bar for ongoing */}
                {arc.status === 'ONGOING' && (
                  <div className="mt-3">
                    <div className="h-2" style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)' }}>
                      <motion.div
                        className="h-full"
                        style={{ background: '#ffe838' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '40%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                    <span className="font-bangers text-xs" style={{ color: '#ffe838' }}>40% SELESAI</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline strip */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
        >
          <div style={{ background: '#1a1008', border: '3px solid #1a1008', height: 28, position: 'relative', display: 'flex' }}>
            {[
              { w: '25%', bg: '#00c853', label: 'ARC 1' },
              { w: '25%', bg: '#1a6fff', label: 'ARC 2' },
              { w: '25%', bg: '#ff6b00', label: 'ARC 3' },
              { w: '25%', bg: '#7c3aed', label: 'FINAL' },
            ].map((seg, i) => (
              <div key={i} style={{ width: seg.w, background: seg.bg, borderRight: '3px solid #1a1008', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="font-bangers text-white text-xs" style={{ textShadow: '1px 1px 0 #1a1008' }}>{seg.label}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1">
            <span className="font-bangers text-ink text-xs">2025</span>
            <span className="font-bangers text-ink text-xs">2027+</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bangers text-ink text-xs tracking-widest opacity-40">— halaman 08 dari 10 —</div>
    </section>
  )
}
