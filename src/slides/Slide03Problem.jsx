import { motion } from 'framer-motion'

const problems = [
  {
    number: '01',
    icon: '🔍',
    title: 'Talenta Tak Terlihat',
    desc: 'Jutaan developer, desainer, dan kreator berbakat Indonesia kesulitan diakses oleh organisasi yang membutuhkan mereka. Tidak ada jembatan yang efisien.',
    stat: '70%',
    statLabel: 'talenta digital belum terkoneksi',
    color: '#ff4444',
  },
  {
    number: '02',
    icon: '🏢',
    title: 'Organisasi Stagnan',
    desc: 'Startup dan perusahaan menghabiskan waktu berbulan-bulan hanya untuk menemukan tim yang tepat. Birokrasi dan proses rekrutmen yang kaku memperlambat inovasi.',
    stat: '3-6',
    statLabel: 'bulan rata-rata rekrutmen tech',
    color: '#ff6b00',
  },
  {
    number: '03',
    icon: '📚',
    title: 'Kesenjangan Skill & Peluang',
    desc: 'Kurikulum pendidikan tertinggal dari kebutuhan industri. Banyak lulusan tidak siap, sementara lowongan pekerjaan terus bertambah tanpa kandidat yang sesuai.',
    stat: '2M+',
    statLabel: 'gap tenaga kerja digital 2025',
    color: '#7c3aed',
  },
  {
    number: '04',
    icon: '🌐',
    title: 'Ekosistem Terfragmentasi',
    desc: 'Tools tersebar di mana-mana. Tidak ada satu platform yang mengintegrasikan pembelajaran, kolaborasi, rekrutmen, dan monetisasi dalam satu ekosistem.',
    stat: '15+',
    statLabel: 'platform terpisah yang harus digunakan',
    color: '#0066ff',
  },
]

export default function Slide03Problem() {
  return (
    <section className="slide-section noise-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-red-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-vto-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-accent inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs text-vto-accent tracking-widest">CHAPTER 03 · MASALAH NYATA</span>
          </div>
          <h2 className="font-sans font-black text-4xl md:text-6xl text-white mb-4">
            Masalah yang{' '}
            <span className="text-red-400">VTO Selesaikan</span>
          </h2>
          <p className="text-vto-muted text-base max-w-xl mx-auto">
            Ekosistem digital Indonesia punya potensi luar biasa — tapi hambatan sistemik mencegahnya berkembang optimal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.number}
              className="glass rounded-xl p-6 card-hover border border-vto-border relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Background number */}
              <div
                className="absolute top-3 right-4 font-mono font-black text-6xl opacity-5 select-none"
                style={{ color: p.color }}
              >
                {p.number}
              </div>

              {/* Accent line */}
              <div
                className="absolute top-0 left-0 w-full h-0.5"
                style={{ background: `linear-gradient(90deg, ${p.color}44, transparent)` }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: p.color + '15', border: `1px solid ${p.color}33` }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-mono text-xs mb-1" style={{ color: p.color }}>PROBLEM {p.number}</div>
                    <h3 className="font-sans font-bold text-white text-base">{p.title}</h3>
                  </div>
                </div>

                <p className="text-vto-muted text-sm leading-relaxed mb-5">{p.desc}</p>

                <div className="flex items-center gap-3 pt-3 border-t border-vto-border/50">
                  <span
                    className="font-mono font-black text-2xl"
                    style={{ color: p.color }}
                  >
                    {p.stat}
                  </span>
                  <span className="font-mono text-xs text-vto-muted">{p.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 glass-accent rounded-xl p-5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-mono text-vto-accent text-sm">
            ⚡ VTO hadir sebagai solusi menyeluruh — bukan patch-up, tapi transformasi ekosistem dari fondasinya.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-vto-border">03 / 10</div>
    </section>
  )
}
