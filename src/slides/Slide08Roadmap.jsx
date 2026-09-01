import { motion } from 'framer-motion'

const phases = [
  {
    phase: 'Phase 1',
    period: 'Q1–Q2 2025',
    status: 'completed',
    title: 'Fondasi & MVP',
    color: '#00ff88',
    items: [
      '✅ Core platform architecture',
      '✅ User authentication & profiles',
      '✅ Basic talent matching',
      '✅ Organization dashboard v1',
      '✅ Beta launch dengan 500 pengguna',
    ],
  },
  {
    phase: 'Phase 2',
    period: 'Q3–Q4 2025',
    status: 'active',
    title: 'Growth & Features',
    color: '#0066ff',
    items: [
      '🔄 AI matching v2 (behavioral)',
      '🔄 Learning ecosystem module',
      '🔄 Digital marketplace launch',
      '🔄 Mobile app (iOS + Android)',
      '⏳ 10,000 pengguna aktif',
    ],
  },
  {
    phase: 'Phase 3',
    period: 'Q1–Q2 2026',
    status: 'planned',
    title: 'Ekspansi & Partnership',
    color: '#7c3aed',
    items: [
      '⏳ Partnership dengan 50+ universitas',
      '⏳ Enterprise tier launch',
      '⏳ API publik untuk developer',
      '⏳ Sertifikasi program resmi',
      '⏳ 100,000 pengguna aktif',
    ],
  },
  {
    phase: 'Phase 4',
    period: 'Q3 2026 +',
    status: 'future',
    title: 'Dominasi Ekosistem',
    color: '#ff6b00',
    items: [
      '🌟 Ekspansi ke ASEAN',
      '🌟 VTO Labs (R&D arm)',
      '🌟 Venture studio for alumni',
      '🌟 IPO / strategic acquisition',
      '🌟 1 Juta pengguna aktif',
    ],
  },
]

const statusConfig = {
  completed: { label: 'SELESAI', bg: '#00ff88' },
  active: { label: 'AKTIF', bg: '#0066ff' },
  planned: { label: 'DIRENCANAKAN', bg: '#7c3aed' },
  future: { label: 'MASA DEPAN', bg: '#ff6b00' },
}

export default function Slide08Roadmap() {
  return (
    <section className="slide-section grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-vto-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-vto-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-accent inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <span className="font-mono text-xs text-vto-accent tracking-widest">CHAPTER 08 · ROADMAP</span>
          </div>
          <h2 className="font-sans font-black text-4xl md:text-6xl text-white mb-4">
            Peta Jalan <span className="gradient-text">VTO</span>
          </h2>
          <p className="text-vto-muted text-base max-w-xl mx-auto">
            Roadmap yang jelas dan terukur — bukan janji kosong, tapi milestone konkret dengan timeline nyata.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((phase, i) => {
            const sc = statusConfig[phase.status]
            return (
              <motion.div
                key={phase.phase}
                className="glass rounded-xl p-5 border border-vto-border relative overflow-hidden card-hover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                  style={{ backgroundColor: phase.color }}
                />

                {/* Status badge */}
                <div className="flex justify-between items-start mb-4 pt-1">
                  <div>
                    <div className="font-mono text-xs" style={{ color: phase.color }}>{phase.phase}</div>
                    <div className="font-mono text-xs text-vto-muted">{phase.period}</div>
                  </div>
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-full"
                    style={{ background: sc.bg + '20', color: sc.bg, border: `1px solid ${sc.bg}40` }}
                  >
                    {sc.label}
                  </span>
                </div>

                <h3
                  className="font-sans font-black text-base text-white mb-4"
                  style={{ borderBottom: `1px solid ${phase.color}30`, paddingBottom: '12px' }}
                >
                  {phase.title}
                </h3>

                <div className="space-y-2">
                  {phase.items.map((item, j) => (
                    <motion.div
                      key={j}
                      className="font-mono text-xs text-vto-muted leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + j * 0.05 }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                {/* Progress for active */}
                {phase.status === 'active' && (
                  <div className="mt-4 pt-3 border-t border-vto-border">
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-xs text-vto-muted">Progress</span>
                      <span className="font-mono text-xs text-vto-blue">40%</span>
                    </div>
                    <div className="h-1 bg-vto-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-vto-blue rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '40%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                )}
                {phase.status === 'completed' && (
                  <div className="mt-4 pt-3 border-t border-vto-border">
                    <div className="h-1 bg-vto-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: phase.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Timeline bar */}
        <motion.div
          className="mt-8 glass rounded-xl p-4 border border-vto-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-vto-muted whitespace-nowrap">2025</span>
            <div className="flex-1 h-2 bg-vto-border rounded-full overflow-hidden relative">
              <div className="absolute inset-0 flex">
                <div className="w-1/4 bg-vto-accent" />
                <div className="w-1/4 bg-vto-blue animate-pulse" />
                <div className="w-1/4 bg-vto-purple/40" />
                <div className="w-1/4 bg-vto-orange/30" />
              </div>
            </div>
            <span className="font-mono text-xs text-vto-muted whitespace-nowrap">2027+</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-vto-border">08 / 10</div>
    </section>
  )
}
