import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function CountUp({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const impactStats = [
  { value: 100000, suffix: '+', prefix: '', label: 'Talenta Terkoneksi', sublabel: 'Target 2026', color: '#00ff88', icon: '👥' },
  { value: 5000, suffix: '+', prefix: '', label: 'Organisasi Terdaftar', sublabel: 'Target 2026', color: '#0066ff', icon: '🏢' },
  { value: 50, suffix: '+', prefix: '', label: 'Universitas Partner', sublabel: 'Target 2026', color: '#7c3aed', icon: '🎓' },
  { value: 1, suffix: 'M', prefix: 'Rp ', label: 'Total Transaksi', sublabel: 'Target 2026 (USD)', color: '#ff6b00', icon: '💰' },
]

const pillars = [
  {
    icon: '🌱',
    title: 'Dampak Sosial',
    items: [
      'Menekan angka pengangguran digital muda',
      'Mengurangi brain drain ke luar negeri',
      'Pemerataan akses digital ke daerah',
      'Memperkuat ekonomi kreatif lokal',
    ],
    color: '#00ff88',
  },
  {
    icon: '💡',
    title: 'Dampak Ekonomi',
    items: [
      'Menciptakan 50,000+ lapangan kerja baru',
      'Meningkatkan produktivitas organisasi 3x',
      'Memangkas biaya rekrutmen rata-rata 60%',
      'Menambah GDP digital Indonesia',
    ],
    color: '#0066ff',
  },
  {
    icon: '🌍',
    title: 'Dampak Ekosistem',
    items: [
      'Standarisasi kualitas talenta digital',
      'Percepatan adopsi teknologi baru',
      'Kolaborasi lintas institusi lebih mudah',
      'Indonesia siap bersaing global',
    ],
    color: '#7c3aed',
  },
]

export default function Slide09Impact() {
  return (
    <section className="slide-section dot-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-vto-accent/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-vto-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-accent inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <span className="font-mono text-xs text-vto-accent tracking-widest">CHAPTER 09 · DAMPAK & TUJUAN</span>
          </div>
          <h2 className="font-sans font-black text-4xl md:text-6xl text-white mb-4">
            Dampak yang <span className="gradient-text">VTO Kejar</span>
          </h2>
          <p className="text-vto-muted text-base max-w-xl mx-auto">
            Lebih dari sekedar bisnis — VTO ingin meninggalkan warisan nyata bagi ekosistem digital Indonesia.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass rounded-xl p-5 text-center card-hover border border-vto-border"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-mono font-black text-2xl md:text-3xl mb-1" style={{ color: stat.color }}>
                <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="font-mono text-xs text-white font-bold">{stat.label}</div>
              <div className="font-mono text-xs text-vto-muted mt-1">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Impact pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass rounded-xl p-6 card-hover border border-vto-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: p.color + '15', border: `1px solid ${p.color}30` }}
                >
                  {p.icon}
                </div>
                <h3 className="font-sans font-bold text-white">{p.title}</h3>
              </div>
              <div className="space-y-2">
                {p.items.map((item, j) => (
                  <motion.div
                    key={j}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.07 }}
                  >
                    <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: p.color }} />
                    <span className="font-mono text-xs text-vto-muted leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          className="mt-8 glass-accent rounded-2xl p-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-sans font-bold text-white text-lg mb-2">
            "Kami tidak mengukur sukses dari valuasi —
          </p>
          <p className="font-sans font-bold text-vto-accent text-lg">
            tapi dari berapa banyak hidup yang berubah karena VTO."
          </p>
          <p className="font-mono text-vto-muted text-xs mt-3">— Visi Jangka Panjang VTO</p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-vto-border">09 / 10</div>
    </section>
  )
}
