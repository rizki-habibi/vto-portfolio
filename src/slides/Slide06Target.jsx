import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const characters = [
  {
    id: 'dev',
    codename: 'THE BUILDER',
    icon: '👨‍💻',
    role: 'Developer & Engineer',
    bg: '#ffe838',
    color: '#1a1008',
    tagline: '"Aku cuma butuh tempat yang mengerti bahwa kode adalah seni."',
    traits: ['Full-Stack', 'Open Source', 'Remote-first', 'Lifelong Learner'],
    story: 'Ia menulis kode sejak SMA. Bukan untuk gaji, tapi karena menciptakan sesuatu dari nol terasa seperti sihir. VTO memberinya panggung yang layak.',
    pct: 35,
  },
  {
    id: 'design',
    codename: 'THE ARTIST',
    icon: '🎨',
    role: 'Desainer & Kreator',
    bg: '#ff4fa3',
    color: '#fff',
    tagline: '"Saya desainer, bukan dekorator. Ada bedanya."',
    traits: ['UI/UX', 'Visual Story', 'Motion', 'Brand Identity'],
    story: 'Selalu dipandang sebelah mata di dunia tech. Padahal tanpa desainer, produk terbaik pun terasa asing. VTO tahu betul nilai karya kreatif.',
    pct: 20,
  },
  {
    id: 'org',
    codename: 'THE COMMANDER',
    icon: '🏢',
    role: 'Startup & Organisasi',
    bg: '#1a6fff',
    color: '#fff',
    tagline: '"Kami butuh orang yang tepat, kemarin."',
    traits: ['Early Stage', 'Scale-up', 'SME', 'Enterprise'],
    story: 'Punya ide brilian, funding cukup, tapi tidak punya cara cepat menemukan tim yang pas. VTO memotong 80% waktu pencarian talenta mereka.',
    pct: 25,
  },
  {
    id: 'edu',
    codename: 'THE MENTOR',
    icon: '🎓',
    role: 'Institusi Pendidikan',
    bg: '#7c3aed',
    color: '#fff',
    tagline: '"Mahasiswa kami siap — mereka hanya butuh pintu."',
    traits: ['Universitas', 'Bootcamp', 'SMK', 'Kursus Online'],
    story: 'Bertahun-tahun meluluskan mahasiswa berbakat yang langsung terserap oleh pasar kerja luar negeri. VTO membangun jembatan agar mereka berkontribusi di dalam negeri.',
    pct: 15,
  },
  {
    id: 'mystery',
    codename: '[ REDACTED ]',
    icon: '❓',
    role: '???',
    bg: '#1a1008',
    color: '#ffe838',
    tagline: '"Identitas saya tidak penting. Yang penting, visi ini terus berjalan."',
    traits: ['???', '???', '???', '???'],
    story: 'Ada satu pengurus VTO yang identitasnya sengaja tidak akan pernah diungkap. Bukan karena misterius — tapi karena ia percaya bahwa karya lebih berbicara daripada nama.',
    pct: 5,
    isMystery: true,
  },
]

function MysteryReveal({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'rgba(26,16,8,0.92)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-sm w-full mx-4"
        style={{ background: '#1a1008', border: '4px solid #ffe838', boxShadow: '10px 10px 0 #ffe838', padding: '32px 24px' }}
        initial={{ scale: 0.5, rotate: -10 }} animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0.5, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute inset-0 halftone opacity-10" />

        {/* Redacted file look */}
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-1 mb-2" style={{ background: '#ff2d20', border: '2px solid #ffe838' }}>
            <span className="font-bangers text-white tracking-widest text-sm">⚠ FILE RAHASIA ⚠</span>
          </div>
          <div className="text-6xl mb-2">🕵️</div>
          <h3 className="font-bangers text-5xl" style={{ color: '#ffe838', textShadow: '4px 4px 0 #ff2d20' }}>
            [REDACTED]
          </h3>
        </div>

        {/* Fake dossier */}
        <div className="space-y-3">
          {[
            { label: 'NAMA', val: '██████████' },
            { label: 'JABATAN', val: 'Pengurus VTO' },
            { label: 'LOKASI', val: '██████, Indonesia' },
            { label: 'KEAHLIAN', val: '████████████████' },
            { label: 'MOTIVASI', val: 'Terlalu berbahaya untuk diungkap' },
          ].map(row => (
            <div key={row.label} className="flex gap-3 items-start" style={{ borderBottom: '1px dashed #ffe83844', paddingBottom: 8 }}>
              <span className="font-bangers text-xs flex-shrink-0 px-2 py-0.5" style={{ background: '#ffe838', color: '#1a1008', minWidth: 90 }}>{row.label}</span>
              <span className="font-comic text-sm font-bold" style={{ color: '#ffe838' }}>{row.val}</span>
            </div>
          ))}
        </div>

        <p className="font-comic text-sm mt-4 leading-relaxed" style={{ color: '#ffffff99' }}>
          Ia memilih untuk bekerja dalam diam. Kontribusinya nyata, namanya tidak. Dan itu adalah pilihan yang ia buat dengan penuh kesadaran.
        </p>

        <button
          onClick={onClose}
          className="comic-btn comic-btn-yellow w-full mt-4 py-3 font-bangers text-lg"
        >
          TUTUP FILE
        </button>
      </motion.div>
    </motion.div>
  )
}

export default function Slide06Target() {
  const [active, setActive] = useState(null)
  const [mysteryOpen, setMysteryOpen] = useState(false)

  return (
    <section className="slide-section" style={{ background: '#fdf6e3' }}>
      <div className="absolute inset-0 halftone opacity-25 pointer-events-none" />

      <AnimatePresence>
        {mysteryOpen && <MysteryReveal onClose={() => setMysteryOpen(false)} />}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
        >
          <div className="inline-block px-5 py-2 mb-2" style={{ background: '#00c853', border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008', transform: 'rotate(-1deg)' }}>
            <span className="font-bangers text-white tracking-widest">👥 CHAPTER 06 — PARA KARAKTER 👥</span>
          </div>
          <h2 className="font-bangers text-ink" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', textShadow: '4px 4px 0 #00c853, 6px 6px 0 #1a1008' }}>
            SIAPA YANG TERLIBAT?
          </h2>
          <p className="font-comic font-bold text-ink text-sm mt-2 opacity-70">
            Klik kartu untuk melihat cerita mereka — dan ada satu yang misterius...
          </p>
        </motion.div>

        {/* Character cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {characters.map((c, i) => (
            <motion.button
              key={c.id}
              onClick={() => c.isMystery ? setMysteryOpen(true) : setActive(active === c.id ? null : c.id)}
              className="relative overflow-hidden text-left"
              style={{
                background: c.bg,
                border: '3px solid #1a1008',
                boxShadow: active === c.id ? '8px 8px 0 #1a1008' : '4px 4px 0 #1a1008',
                padding: '16px 12px',
                transform: active === c.id ? 'translate(-4px,-4px)' : 'none',
                transition: 'all 0.15s ease',
              }}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: 'backOut' }}
              whileHover={{ y: -4 }}
            >
              {c.isMystery && (
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,232,56,0.08) 4px, rgba(255,232,56,0.08) 8px)' }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <div className="text-3xl mb-2 relative z-10">{c.icon}</div>
              <div className="relative z-10">
                <div className="font-bangers text-xs mb-1" style={{ color: c.color === '#fff' ? 'rgba(255,255,255,0.6)' : 'rgba(26,16,8,0.5)' }}>
                  {c.pct}% PASAR
                </div>
                <div className="font-bangers leading-tight text-sm" style={{ color: c.color }}>{c.codename}</div>
                <div className="font-comic text-xs mt-1 font-bold" style={{ color: c.color, opacity: 0.8 }}>{c.role}</div>
              </div>

              {c.isMystery && (
                <div className="absolute top-2 right-2">
                  <motion.span
                    className="font-bangers text-xs px-1"
                    style={{ background: '#ff2d20', color: '#fff', border: '1px solid #ffe838' }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ???
                  </motion.span>
                </div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence>
          {active && !characters.find(c => c.id === active)?.isMystery && (
            <motion.div
              className="mt-4 relative overflow-hidden"
              style={{ background: '#fff', border: '4px solid #1a1008', boxShadow: '6px 6px 0 #1a1008', padding: '20px' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {(() => {
                const c = characters.find(ch => ch.id === active)
                if (!c) return null
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="inline-block px-3 py-1 mb-2" style={{ background: c.bg, border: '2px solid #1a1008' }}>
                        <span className="font-bangers" style={{ color: c.color === '#fff' ? '#fff' : '#1a1008', fontSize: '0.8rem' }}>{c.codename}</span>
                      </div>
                      <p className="font-comic font-bold text-ink text-sm leading-relaxed">{c.story}</p>
                    </div>
                    <div>
                      <p className="font-marker text-ink text-sm mb-3 opacity-70">{c.tagline}</p>
                      <div className="flex flex-wrap gap-2">
                        {c.traits.map(t => (
                          <span key={t} className="font-bangers text-xs px-2 py-1"
                            style={{ background: c.bg, color: c.color === '#fff' ? '#fff' : '#1a1008', border: '2px solid #1a1008' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bangers text-ink text-xs tracking-widest opacity-40">— halaman 06 dari 10 —</div>
    </section>
  )
}
