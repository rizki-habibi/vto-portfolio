import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const powers = [
  {
    id: 'matching',
    icon: '🧠',
    name: 'SMART MATCHING',
    tag: 'KEKUATAN UTAMA',
    tagBg: '#ff2d20',
    color: '#ffe838',
    bg: '#1a1008',
    sfx: 'MATCH!',
    desc: 'AI yang menganalisis skill, pengalaman, preferensi, dan kultur kerja. Mencocokkan talenta dengan organisasi secara akurat — bukan sekadar keyword.',
    stats: [
      { label: 'Akurasi Match', val: '85%' },
      { label: 'Waktu Proses', val: '<5 det' },
    ],
    abilities: ['Behavioral analysis', 'Cultural fit score', 'Real-time rekomendasi', 'Smart filtering'],
  },
  {
    id: 'dashboard',
    icon: '📊',
    name: 'ORG DASHBOARD',
    tag: 'ALAT KENDALI',
    tagBg: '#1a6fff',
    color: '#fff',
    bg: '#1a6fff',
    sfx: 'CONTROL!',
    desc: 'Satu panel untuk semua — kelola tim, project, budget, dan performa. Dari startup 5 orang sampai enterprise 500 orang dalam satu interface yang bersih.',
    stats: [
      { label: 'Modul', val: '12+' },
      { label: 'Integrasi', val: '20+' },
    ],
    abilities: ['Team management', 'Project tracking', 'Budget analytics', 'Performance review'],
  },
  {
    id: 'learning',
    icon: '🎓',
    name: 'LEARNING HUB',
    tag: 'PENGETAHUAN',
    tagBg: '#7c3aed',
    color: '#fff',
    bg: '#7c3aed',
    sfx: 'LEARN!',
    desc: 'Platform pembelajaran yang terintegrasi dengan kebutuhan industri nyata. Kursus didesain bareng perusahaan, bukan akademisi yang jauh dari lapangan.',
    stats: [
      { label: 'Kursus', val: '500+' },
      { label: 'Mentor', val: '200+' },
    ],
    abilities: ['Industry-aligned', 'Hands-on projects', 'Mentorship', 'Sertifikasi resmi'],
  },
  {
    id: 'marketplace',
    icon: '💼',
    name: 'MARKETPLACE',
    tag: 'PENGHASILAN',
    tagBg: '#ff6b00',
    color: '#fff',
    bg: '#ff6b00',
    sfx: 'SELL!',
    desc: 'Jual skill, ambil project freelance, beli produk digital, konsultasi. Sistem escrow aman, rating terverifikasi, pembayaran otomatis.',
    stats: [
      { label: 'Transaksi/hari', val: '1K+' },
      { label: 'Fee', val: '3%' },
    ],
    abilities: ['Freelance board', 'Secure escrow', 'Verified ratings', 'Auto payment'],
  },
]

export default function Slide05Features() {
  const [active, setActive] = useState(0)
  const p = powers[active]

  return (
    <section className="slide-section" style={{ background: '#fdf6e3' }}>
      <div className="absolute inset-0 halftone opacity-25 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
        >
          <div className="inline-block px-5 py-2 mb-2" style={{ background: '#ff6b00', border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008', transform: 'rotate(1deg)' }}>
            <span className="font-bangers text-white tracking-widest">⚡ CHAPTER 05 — KEKUATAN VTO ⚡</span>
          </div>
          <h2 className="font-bangers text-ink" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', textShadow: '4px 4px 0 #ffe838, 6px 6px 0 #1a1008' }}>
            4 SENJATA ANDALAN!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Power selector */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {powers.map((pw, i) => (
              <button
                key={pw.id}
                onClick={() => setActive(i)}
                className="flex items-center gap-3 px-4 py-3 flex-shrink-0 lg:flex-shrink transition-all"
                style={{
                  background: active === i ? p.bg : '#fff',
                  border: '3px solid #1a1008',
                  boxShadow: active === i ? '5px 5px 0 #1a1008' : '3px 3px 0 #1a1008',
                  transform: active === i ? 'translate(-2px,-2px)' : 'none',
                  minWidth: 140,
                }}
              >
                <span className="text-2xl">{pw.icon}</span>
                <span className="font-bangers text-sm" style={{ color: active === i ? pw.color : '#1a1008' }}>
                  {pw.name}
                </span>
              </button>
            ))}
          </div>

          {/* Power card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              className="lg:col-span-2 relative overflow-hidden"
              style={{ background: p.bg, border: '4px solid #1a1008', boxShadow: '8px 8px 0 #1a1008', padding: '24px', minHeight: 340 }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
            >
              {/* Halftone bg */}
              <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />

              {/* SFX watermark */}
              <div
                className="absolute -bottom-4 -right-4 font-bangers opacity-10 leading-none pointer-events-none"
                style={{ fontSize: '8rem', color: p.color }}
              >
                {p.sfx}
              </div>

              <div className="relative z-10">
                {/* Tag + title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{p.icon}</div>
                  <div>
                    <div className="inline-block px-2 py-0.5 mb-1" style={{ background: p.tagBg, border: '2px solid #1a1008' }}>
                      <span className="font-bangers text-white text-xs">{p.tag}</span>
                    </div>
                    <h3 className="font-bangers" style={{ color: p.color, fontSize: '1.8rem', textShadow: '3px 3px 0 rgba(0,0,0,0.4)' }}>
                      {p.name}
                    </h3>
                  </div>
                </div>

                {/* Speech bubble desc */}
                <div className="mb-4 rounded-2xl p-4" style={{ background: '#fff', border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008' }}>
                  <p className="font-comic font-bold text-ink text-sm leading-relaxed">{p.desc}</p>
                </div>

                {/* Stats */}
                <div className="flex gap-3 mb-4">
                  {p.stats.map(s => (
                    <div key={s.label} className="text-center px-4 py-2" style={{ background: '#1a1008', border: '2px solid #ffe838', flex: 1 }}>
                      <div className="font-bangers text-2xl" style={{ color: p.color }}>{s.val}</div>
                      <div className="font-comic text-white text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Abilities */}
                <div className="flex flex-wrap gap-2">
                  {p.abilities.map(a => (
                    <span key={a} className="font-bangers text-xs px-3 py-1" style={{ background: '#1a1008', color: p.color, border: `2px solid ${p.color}` }}>
                      ✓ {a}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bangers text-ink text-xs tracking-widest opacity-40">— halaman 05 dari 10 —</div>
    </section>
  )
}
