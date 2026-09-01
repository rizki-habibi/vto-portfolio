import { motion } from 'framer-motion'

const misi = [
  { icon: '🎯', title: 'Koneksi Nyata', desc: 'Menghubungkan talenta dengan organisasi secara cerdas dan efisien melalui sistem matching berbasis AI.' },
  { icon: '📡', title: 'Akses Universal', desc: 'Memastikan setiap orang, di manapun di Indonesia, bisa mengakses peluang digital yang sama.' },
  { icon: '🔧', title: 'Infrastruktur Terbuka', desc: 'Membangun layer teknologi yang bisa dipakai oleh semua aktor ekosistem — dari indie dev sampai enterprise.' },
  { icon: '🌱', title: 'Dampak Berkelanjutan', desc: 'Setiap fitur dirancang untuk menciptakan dampak jangka panjang, bukan metrik semu jangka pendek.' },
  { icon: '🤝', title: 'Kolaborasi Lintas Sektor', desc: 'Menjembatani pemerintah, swasta, akademisi, dan komunitas dalam satu platform yang kohesif.' },
  { icon: '⚡', title: 'Inovasi Tanpa Henti', desc: 'Mendorong budaya eksperimen, iterasi cepat, dan pembelajaran terus-menerus di seluruh ekosistem.' },
]

export default function Slide04Vision() {
  return (
    <section className="slide-section grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-vto-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-vto-accent/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-accent inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <span className="font-mono text-xs text-vto-accent tracking-widest">CHAPTER 04 · VISI & MISI</span>
          </div>
          <h2 className="font-sans font-black text-4xl md:text-6xl text-white mb-4">
            Ke Mana VTO <br />
            <span className="gradient-text">Menuju?</span>
          </h2>
        </motion.div>

        {/* Vision statement */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-accent rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-vto-accent rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-vto-accent rounded-br-2xl" />

            <div className="font-mono text-xs text-vto-accent tracking-widest mb-4">VISI 2030</div>
            <h3 className="font-sans font-black text-2xl md:text-4xl text-white leading-tight mb-4">
              "Menjadi infrastruktur digital terdepan yang{' '}
              <span className="text-vto-accent">memberdayakan setiap individu</span> dan organisasi di Indonesia untuk{' '}
              <span className="text-vto-blue">berkolaborasi, berkembang, dan berdampak</span>."
            </h3>
            <p className="text-vto-muted text-sm mt-4">
              Bukan unicorn, bukan decacorn — VTO ingin menjadi <strong className="text-white">backbone</strong> ekosistem digital Indonesia.
            </p>
          </div>
        </motion.div>

        {/* Misi grid */}
        <div>
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs text-vto-muted tracking-widest">6 PILAR MISI</span>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {misi.map((m, i) => (
              <motion.div
                key={m.title}
                className="glass rounded-xl p-5 card-hover border border-vto-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-2xl mb-3">{m.icon}</div>
                <h4 className="font-sans font-bold text-white text-sm mb-2">{m.title}</h4>
                <p className="text-vto-muted text-xs leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-vto-border">04 / 10</div>
    </section>
  )
}
