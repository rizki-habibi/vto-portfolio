import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function CountUp({ target, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const steps = 50
        const inc = target / steps
        let cur = 0
        const t = setInterval(() => {
          cur += inc
          if (cur >= target) { setVal(target); clearInterval(t) }
          else setVal(Math.floor(cur))
        }, 1800 / steps)
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>
}

const bigStats = [
  { val: 100000, suffix: '+', prefix: '', label: 'TALENTA', sub: 'Terkoneksi (target 2026)', bg: '#ffe838', color: '#1a1008', icon: '👥' },
  { val: 5000, suffix: '+', prefix: '', label: 'ORGANISASI', sub: 'Terdaftar', bg: '#1a6fff', color: '#fff', icon: '🏢' },
  { val: 50, suffix: '+', prefix: '', label: 'UNIVERSITAS', sub: 'Partner aktif', bg: '#ff2d20', color: '#fff', icon: '🎓' },
  { val: 1, suffix: 'M', prefix: '$', label: 'TRANSAKSI', sub: 'Total volume USD', bg: '#7c3aed', color: '#fff', icon: '💰' },
]

const impacts = [
  { icon: '🌱', title: 'DAMPAK SOSIAL', color: '#00c853', items: ['Tekan angka pengangguran digital', 'Kurangi brain drain ke luar negeri', 'Pemerataan akses digital daerah', 'Perkuat ekonomi kreatif lokal'] },
  { icon: '💡', title: 'DAMPAK EKONOMI', color: '#ffe838', items: ['50,000+ lapangan kerja baru', 'Produktivitas organisasi naik 3x', 'Biaya rekrutmen turun 60%', 'Tambah GDP digital Indonesia'] },
  { icon: '🌍', title: 'DAMPAK EKOSISTEM', color: '#1a6fff', items: ['Standarisasi kualitas talenta', 'Percepatan adopsi teknologi baru', 'Kolaborasi lintas institusi', 'Indonesia siap bersaing global'] },
]

export default function Slide09Impact() {
  return (
    <section className="slide-section" style={{ background: '#1a1008' }}>
      <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
      <div className="absolute inset-0 speed-lines opacity-10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8">
        {/* SPLASH header */}
        <motion.div
          className="text-center mb-8"
          initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <div className="inline-block px-6 py-3 mb-2" style={{ background: '#ffe838', border: '4px solid #ffe838', outline: '3px solid #1a1008', outlineOffset: '3px', transform: 'rotate(-1deg)' }}>
            <span className="font-bangers text-ink tracking-widest text-lg">💥 CHAPTER 09 — DAMPAK BESAR 💥</span>
          </div>
          <h2
            className="font-bangers"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', color: '#ffe838', textShadow: '5px 5px 0 #ff2d20, 9px 9px 0 rgba(0,0,0,0.5)', lineHeight: 0.95 }}
          >
            INI BUKAN SEKADAR<br />STARTUP!
          </h2>
          <p className="font-comic font-bold text-white opacity-60 text-sm mt-3">
            Ini adalah gerakan untuk ekosistem digital Indonesia yang lebih adil dan merata.
          </p>
        </motion.div>

        {/* Big stat panels */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {bigStats.map((s, i) => (
            <motion.div
              key={s.label}
              className="relative overflow-hidden text-center"
              style={{ background: s.bg, border: '4px solid #ffe838', boxShadow: '6px 6px 0 #ffe838', padding: '16px 8px' }}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
            >
              <div className="absolute inset-0 halftone opacity-15" />
              <div className="relative z-10">
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="font-bangers" style={{ color: s.color, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}>
                  <CountUp target={s.val} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <div className="font-bangers text-sm" style={{ color: s.color }}>{s.label}</div>
                <div className="font-comic text-xs font-bold mt-1" style={{ color: s.color, opacity: 0.7 }}>{s.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {impacts.map((imp, i) => (
            <motion.div
              key={imp.title}
              className="relative overflow-hidden"
              style={{ background: '#fdf6e3', border: '4px solid #ffe838', boxShadow: '5px 5px 0 #ffe838', padding: '18px' }}
              initial={{ x: i === 1 ? 0 : i === 0 ? -40 : 40, y: i === 1 ? 40 : 0, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 right-0 h-2" style={{ background: imp.color }} />
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{imp.icon}</span>
                  <span className="font-bangers text-ink text-sm">{imp.title}</span>
                </div>
                <div className="space-y-1">
                  {imp.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="font-bangers text-xs flex-shrink-0" style={{ color: imp.color }}>▶</span>
                      <span className="font-comic text-xs font-bold text-ink leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing declaration */}
        <motion.div
          className="mt-6 text-center relative overflow-hidden"
          style={{ background: '#ffe838', border: '4px solid #ffe838', outline: '3px solid #1a1008', outlineOffset: '-6px', padding: '20px', boxShadow: '8px 8px 0 #ffe838' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
        >
          <p className="font-bangers text-ink" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}>
            "Kami tidak mengukur sukses dari valuasi —
          </p>
          <p className="font-bangers text-ink" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', textShadow: '2px 2px 0 rgba(0,0,0,0.15)' }}>
            TAPI DARI BERAPA BANYAK HIDUP YANG BERUBAH KARENA VTO!"
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bangers text-white text-xs tracking-widest opacity-30">— halaman 09 dari 10 —</div>
    </section>
  )
}
