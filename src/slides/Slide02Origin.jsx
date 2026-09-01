import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2023',
    icon: '🌱',
    title: 'Ide Lahir',
    desc: 'Melihat kesenjangan antara talenta digital Indonesia dan akses peluang nyata. VTO mulai dirumuskan dari kamar kos.',
    color: '#00ff88',
  },
  {
    year: '2024',
    icon: '⚙️',
    title: 'Fondasi Dibangun',
    desc: 'Arsitektur sistem dirancang. Tim kecil berkumpul dengan satu keyakinan: ekosistem digital Indonesia bisa lebih baik.',
    color: '#0066ff',
  },
  {
    year: '2025',
    icon: '🚀',
    title: 'VTO Diluncurkan',
    desc: 'Platform resmi diluncurkan. Fitur pertama live: sistem matching talenta, dashboard organisasi, dan portal peluang.',
    color: '#7c3aed',
  },
  {
    year: '2026',
    icon: '📈',
    title: 'Ekspansi & Validasi',
    desc: 'Skala pengguna bertambah. Partnership dengan institusi pendidikan dan industri teknologi mulai terbentuk.',
    color: '#ff6b00',
  },
  {
    year: 'FUTURE',
    icon: '🌟',
    title: 'Ekosistem Penuh',
    desc: 'VTO menjadi infrastruktur digital nasional yang menopang mobilitas talenta, inovasi organisasi, dan dampak sosial.',
    color: '#00ff88',
  },
]

export default function Slide02Origin() {
  return (
    <section className="slide-section dot-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-vto-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-vto-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-accent inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <span className="font-mono text-xs text-vto-accent tracking-widest">CHAPTER 02 · ASAL USUL</span>
          </div>
          <h2 className="font-sans font-black text-4xl md:text-6xl text-white mb-4">
            Kenapa VTO <br />
            <span className="gradient-text">Diciptakan?</span>
          </h2>
          <p className="text-vto-muted text-base max-w-xl mx-auto">
            Bukan sekadar startup — ini adalah respons nyata terhadap masalah ekosistem digital yang terlalu lama diabaikan.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-vto-border md:-translate-x-px" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Card */}
                <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left ml-12 md:ml-0'}`}>
                  <div className="glass rounded-xl p-5 card-hover border border-vto-border">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-mono text-xs text-vto-muted">{item.year}</div>
                        <div className="font-sans font-bold text-white text-sm">{item.title}</div>
                      </div>
                    </div>
                    <p className="text-vto-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-5 z-10">
                  <motion.div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: item.color, backgroundColor: item.color + '22' }}
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-mono text-vto-muted text-sm italic">
            "VTO bukan hanya platform — ini adalah infrastruktur untuk generasi berikutnya."
          </p>
          <p className="font-mono text-vto-accent text-xs mt-2">— Tim Pendiri VTO, 2025</p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-vto-border">02 / 10</div>
    </section>
  )
}
