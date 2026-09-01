import { motion } from 'framer-motion'

const misi = [
  { icon: '🎯', text: 'Koneksi nyata antara talenta & organisasi', color: '#ffe838' },
  { icon: '📡', text: 'Akses peluang digital untuk semua, dari Sabang sampai Merauke', color: '#1a6fff' },
  { icon: '🔧', text: 'Infrastruktur terbuka yang bisa dipakai siapa saja', color: '#ff2d20' },
  { icon: '🌱', text: 'Dampak jangka panjang, bukan metrik semu', color: '#00c853' },
  { icon: '🤝', text: 'Jembatan antara pemerintah, swasta, & akademisi', color: '#ff6b00' },
  { icon: '⚡', text: 'Budaya inovasi tanpa henti di seluruh ekosistem', color: '#7c3aed' },
]

export default function Slide04Vision() {
  return (
    <section className="slide-section" style={{ background: '#1a6fff' }}>
      <div className="absolute inset-0 halftone-blue opacity-30 pointer-events-none" />
      <div className="absolute inset-0 speed-lines opacity-10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
        >
          <div className="inline-block px-5 py-2 mb-3" style={{ background: '#ffe838', border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008', transform: 'rotate(-1deg)' }}>
            <span className="font-bangers text-ink tracking-widest">✦ CHAPTER 04 — VISI & MISI ✦</span>
          </div>
          <h2
            className="font-bangers text-white"
            style={{ fontSize: 'clamp(2rem, 7vw, 4.5rem)', textShadow: '5px 5px 0 #1a1008' }}
          >
            TUJUAN BESAR VTO!
          </h2>
        </motion.div>

        {/* Visi splash panel */}
        <motion.div
          className="relative mb-6 overflow-hidden"
          style={{ background: '#1a1008', border: '4px solid #ffe838', boxShadow: '8px 8px 0 #1a1008', padding: '28px 24px' }}
          initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          {/* halftone */}
          <div className="absolute inset-0 halftone opacity-10" />

          {/* corner decorations */}
          <div className="absolute top-3 left-3 font-bangers text-yellow-400 opacity-40 text-5xl leading-none" style={{ color: '#ffe838' }}>✦</div>
          <div className="absolute bottom-3 right-3 font-bangers text-yellow-400 opacity-40 text-5xl leading-none" style={{ color: '#ffe838' }}>✦</div>

          <div className="relative z-10 text-center">
            <div className="inline-block mb-3" style={{ background: '#ff2d20', border: '2px solid #ffe838', padding: '3px 16px' }}>
              <span className="font-bangers text-white tracking-widest text-sm">VISI 2030</span>
            </div>
            <blockquote
              className="font-bangers text-white leading-snug"
              style={{ fontSize: 'clamp(1.1rem, 3vw, 1.8rem)', textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}
            >
              "Menjadi infrastruktur digital terdepan yang{' '}
              <span style={{ color: '#ffe838' }}>memberdayakan setiap individu</span>{' '}
              dan organisasi di Indonesia untuk{' '}
              <span style={{ color: '#00d4ff' }}>berkolaborasi, berkembang, dan berdampak.</span>"
            </blockquote>
            <p className="font-comic text-white opacity-60 text-sm mt-3">
              Bukan unicorn, bukan decacorn — VTO ingin jadi <strong className="text-yellow-300" style={{ color: '#ffe838' }}>BACKBONE</strong> ekosistem digital Indonesia.
            </p>
          </div>
        </motion.div>

        {/* Misi grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {misi.map((m, i) => (
            <motion.div
              key={m.text}
              className="relative overflow-hidden"
              style={{ background: '#fdf6e3', border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008', padding: '14px' }}
              initial={{ y: 30, opacity: 0, rotate: i % 2 === 0 ? -1 : 1 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: 'backOut' }}
              whileHover={{ y: -4, boxShadow: '7px 7px 0 #1a1008' }}
            >
              {/* Color flag */}
              <div className="absolute top-0 left-0 right-0 h-2" style={{ background: m.color }} />
              <div className="pt-2 flex items-start gap-3">
                <span className="text-2xl">{m.icon}</span>
                <p className="font-comic font-bold text-ink text-sm leading-snug">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bangers text-white text-xs tracking-widest opacity-40">— halaman 04 dari 10 —</div>
    </section>
  )
}
