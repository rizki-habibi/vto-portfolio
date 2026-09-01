import { motion } from 'framer-motion'

const villains = [
  {
    name: 'SI TEMBOK KESEMPATAN',
    icon: '🧱',
    power: 'Memblokir talenta dari peluang nyata',
    stat: '70% talenta tak terkoneksi',
    desc: 'Jutaan developer, desainer & kreator berbakat Indonesia tersembunyi di balik dinding sistem yang kuno dan tidak transparan.',
    bg: '#ff2d20',
    sfx: 'BLOCKED!',
  },
  {
    name: 'SI BIROKRASI LAMBAT',
    icon: '🐌',
    power: 'Memperlambat rekrutmen sampai berbulan-bulan',
    stat: '3-6 bulan rata-rata hiring',
    desc: 'Proses seleksi bertele-tele, formulir tidak berujung, dan interview tanpa kepastian. Inovasi tertahan oleh proses yang usang.',
    bg: '#ff6b00',
    sfx: 'SLOOOW!',
  },
  {
    name: 'SI KESENJANGAN ILMU',
    icon: '📚',
    power: 'Kurikulum tertinggal dari industri 5 tahun',
    stat: '2 Juta+ gap tenaga kerja digital',
    desc: 'Lulusan lulus tanpa skill relevan. Dunia kerja menuntut lebih. Tidak ada yang menjembatani keduanya secara nyata.',
    bg: '#7c3aed',
    sfx: 'GAP!',
  },
  {
    name: 'SI FRAGMENTASI PLATFORM',
    icon: '🔀',
    power: 'Memecah ekosistem jadi 15+ tempat berbeda',
    stat: 'Tidak ada satu rumah yang lengkap',
    desc: 'LinkedIn untuk network, Upwork untuk freelance, Coursera untuk belajar, Slack untuk kolaborasi. Terlalu banyak tab terbuka!',
    bg: '#1a6fff',
    sfx: 'SCATTER!',
  },
]

export default function Slide03Problem() {
  return (
    <section className="slide-section" style={{ background: '#1a1008' }}>
      <div className="absolute inset-0 halftone-red opacity-10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
        >
          <div className="inline-block px-6 py-2 mb-3" style={{ background: '#ff2d20', border: '3px solid #ffe838', boxShadow: '4px 4px 0 #ffe838' }}>
            <span className="font-bangers text-white tracking-widest">⚠ CHAPTER 03 — PARA PENJAHAT ⚠</span>
          </div>
          <h2
            className="font-bangers"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: '#ffe838', textShadow: '4px 4px 0 #ff2d20, 7px 7px 0 #000' }}
          >
            MUSUH YANG HARUS DIKALAHKAN!
          </h2>
          <p className="font-comic font-bold text-white opacity-70 text-sm mt-2">
            4 masalah nyata yang menghambat ekosistem digital Indonesia
          </p>
        </motion.div>

        {/* Villain cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {villains.map((v, i) => (
            <motion.div
              key={v.name}
              className="relative overflow-hidden"
              style={{ background: '#fdf6e3', border: '4px solid #ffe838', boxShadow: '6px 6px 0 #ffe838', padding: '20px' }}
              initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: 'backOut' }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Halftone corner */}
              <div className="absolute top-0 right-0 w-24 h-24 halftone-red opacity-20" />

              {/* Villain color bar */}
              <div className="absolute top-0 left-0 bottom-0 w-2" style={{ background: v.bg }} />

              <div className="pl-3">
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: v.bg, border: '3px solid #1a1008', boxShadow: '3px 3px 0 #1a1008' }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <div className="font-bangers text-white text-xs px-2 py-0.5 inline-block mb-1" style={{ background: v.bg, border: '1px solid #1a1008' }}>
                      VILLAIN #{i + 1}
                    </div>
                    <h3 className="font-bangers text-ink leading-tight" style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)' }}>
                      {v.name}
                    </h3>
                  </div>
                </div>

                {/* Power level */}
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-bangers text-white text-xs px-2 py-0.5" style={{ background: '#1a1008' }}>KEKUATAN:</span>
                  <span className="font-comic text-ink text-xs font-bold">{v.power}</span>
                </div>

                <p className="font-comic text-ink text-xs leading-relaxed mb-3">{v.desc}</p>

                {/* Stat */}
                <div className="flex items-center justify-between">
                  <span className="font-bangers text-lg" style={{ color: v.bg, textShadow: '1px 1px 0 #1a1008' }}>{v.stat}</span>
                  <span
                    className="font-bangers text-xl opacity-60"
                    style={{ color: v.bg, textShadow: '2px 2px 0 #1a1008' }}
                  >
                    {v.sfx}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VTO response */}
        <motion.div
          className="mt-6 text-center"
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }} transition={{ type: 'spring', delay: 0.5 }}
        >
          <div
            className="inline-block px-8 py-4"
            style={{ background: '#ffe838', border: '4px solid #ffe838', boxShadow: '6px 6px 0 #ffe838', outline: '4px solid #1a1008', outlineOffset: '-4px' }}
          >
            <span className="font-bangers text-ink" style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', textShadow: '3px 3px 0 rgba(0,0,0,0.2)' }}>
              ⚡ VTO SIAP MELAWAN SEMUANYA! ⚡
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bangers text-yellow-400 text-xs tracking-widest opacity-40" style={{ color: '#ffe838' }}>— halaman 03 dari 10 —</div>
    </section>
  )
}
