import { motion } from 'framer-motion'

const segments = [
  {
    icon: '👨‍💻',
    title: 'Developer & Engineer',
    desc: 'Full-stack, frontend, backend, mobile, DevOps — semua level welcome. VTO memberikan akses ke proyek nyata, mentor berpengalaman, dan peluang karir tanpa batas.',
    tags: ['Junior Dev', 'Senior Dev', 'Freelancer', 'Open Source Contributor'],
    color: '#00ff88',
    pct: 35,
  },
  {
    icon: '🎨',
    title: 'Desainer & Kreator',
    desc: 'UI/UX designer, visual artist, content creator, motion designer. Talent kreatif yang sering tersisih dari ekosistem tech — VTO memberikan platform setara untuk mereka.',
    tags: ['UI/UX', 'Graphic Design', 'Motion', 'Branding'],
    color: '#ff6b00',
    pct: 20,
  },
  {
    icon: '🏢',
    title: 'Startup & Perusahaan',
    desc: 'Dari startup tahap ideasi sampai scale-up yang butuh scaling cepat. VTO menjadi infrastruktur rekrutmen, manajemen, dan inovasi yang bisa disesuaikan.',
    tags: ['Early Stage', 'Growth Stage', 'SME', 'Corporate'],
    color: '#0066ff',
    pct: 25,
  },
  {
    icon: '🎓',
    title: 'Institusi Pendidikan',
    desc: 'Universitas, bootcamp, dan lembaga pelatihan yang ingin menjembatani mahasiswanya langsung ke industri nyata — dengan kurikulum yang relevan dan tervalidasi.',
    tags: ['Universitas', 'Bootcamp', 'SMK', 'Kursus Online'],
    color: '#7c3aed',
    pct: 15,
  },
  {
    icon: '🌿',
    title: 'NGO & Komunitas',
    desc: 'Organisasi non-profit, komunitas teknologi, dan kelompok dampak sosial yang membutuhkan akses talenta dan tools untuk memperbesar dampak mereka.',
    tags: ['NGO', 'Tech Community', 'Social Impact', 'Government'],
    color: '#00ccff',
    pct: 5,
  },
]

export default function Slide06Target() {
  return (
    <section className="slide-section grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-72 h-72 bg-vto-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-vto-accent/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-accent inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <span className="font-mono text-xs text-vto-accent tracking-widest">CHAPTER 06 · TARGET PENGGUNA</span>
          </div>
          <h2 className="font-sans font-black text-4xl md:text-6xl text-white mb-4">
            Siapa yang <span className="gradient-text-purple">VTO Layani?</span>
          </h2>
          <p className="text-vto-muted text-base max-w-xl mx-auto">
            VTO dirancang untuk semua aktor ekosistem digital — bukan hanya satu segmen.
          </p>
        </motion.div>

        {/* Market breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Pie visualization */}
          <motion.div
            className="lg:col-span-1 glass rounded-xl p-6 border border-vto-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-xs text-vto-muted mb-4">DISTRIBUSI PASAR</div>
            <div className="space-y-3">
              {segments.map((s, i) => (
                <div key={s.title}>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-xs text-white">{s.icon} {s.title.split(' ')[0]}</span>
                    <span className="font-mono text-xs" style={{ color: s.color }}>{s.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-vto-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: s.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-vto-border">
              <div className="font-mono text-xs text-vto-muted">TAM (Indonesia)</div>
              <div className="font-mono font-bold text-2xl text-vto-accent">$4.8B</div>
              <div className="font-mono text-xs text-vto-muted">Digital talent market 2025</div>
            </div>
          </motion.div>

          {/* Segment cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {segments.map((s, i) => (
              <motion.div
                key={s.title}
                className="glass rounded-xl p-4 card-hover border border-vto-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: s.color + '15', border: `1px solid ${s.color}30` }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-white text-sm">{s.title}</h4>
                    <div className="font-mono text-xs" style={{ color: s.color }}>{s.pct}% pasar</div>
                  </div>
                </div>
                <p className="text-vto-muted text-xs leading-relaxed mb-3">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 rounded-full"
                      style={{ background: s.color + '15', color: s.color, border: `1px solid ${s.color}30` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-vto-border">06 / 10</div>
    </section>
  )
}
