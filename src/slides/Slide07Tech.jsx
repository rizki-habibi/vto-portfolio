import { motion } from 'framer-motion'

const stack = [
  { name: 'Next.js', cat: 'Frontend', color: '#ffffff', icon: '▲', level: 95 },
  { name: 'React', cat: 'Frontend', color: '#61dafb', icon: '⚛', level: 95 },
  { name: 'TypeScript', cat: 'Language', color: '#3178c6', icon: 'TS', level: 90 },
  { name: 'Tailwind CSS', cat: 'Styling', color: '#38bdf8', icon: '🎨', level: 92 },
  { name: 'Laravel', cat: 'Backend', color: '#ff2d20', icon: '🔥', level: 88 },
  { name: 'Node.js', cat: 'Backend', color: '#84cc16', icon: '⬡', level: 85 },
  { name: 'PostgreSQL', cat: 'Database', color: '#336791', icon: '🐘', level: 85 },
  { name: 'Redis', cat: 'Cache', color: '#dc382d', icon: '⚡', level: 80 },
  { name: 'Docker', cat: 'DevOps', color: '#2496ed', icon: '🐳', level: 82 },
  { name: 'Vercel', cat: 'Deploy', color: '#ffffff', icon: '▲', level: 95 },
  { name: 'OpenAI', cat: 'AI/ML', color: '#00a67e', icon: '🧠', level: 78 },
  { name: 'Supabase', cat: 'BaaS', color: '#3ecf8e', icon: '⚡', level: 85 },
]

const layers = [
  { label: 'Presentation Layer', items: ['Next.js', 'React', 'Tailwind CSS'], color: '#00ff88' },
  { label: 'Application Layer', items: ['TypeScript', 'Laravel', 'Node.js'], color: '#0066ff' },
  { label: 'Data Layer', items: ['PostgreSQL', 'Redis', 'Supabase'], color: '#7c3aed' },
  { label: 'Infrastructure Layer', items: ['Docker', 'Vercel', 'OpenAI'], color: '#ff6b00' },
]

export default function Slide07Tech() {
  return (
    <section className="slide-section noise-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-vto-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-vto-accent/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-accent inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <span className="font-mono text-xs text-vto-accent tracking-widest">CHAPTER 07 · TEKNOLOGI</span>
          </div>
          <h2 className="font-sans font-black text-4xl md:text-6xl text-white mb-4">
            Stack & <span className="gradient-text">Arsitektur</span>
          </h2>
          <p className="text-vto-muted text-base max-w-xl mx-auto">
            Dibangun dengan teknologi modern, scalable, dan battle-tested untuk menopang ekosistem skala nasional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tech grid */}
          <div>
            <div className="font-mono text-xs text-vto-muted mb-4">TECH STACK</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="glass rounded-xl p-4 card-hover border border-vto-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-lg" style={{ color: tech.color }}>{tech.icon}</span>
                    <div>
                      <div className="font-mono text-xs text-white font-bold">{tech.name}</div>
                      <div className="font-mono text-xs text-vto-muted">{tech.cat}</div>
                    </div>
                  </div>
                  <div className="h-1 bg-vto-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: tech.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.05 + 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Architecture layers */}
          <div>
            <div className="font-mono text-xs text-vto-muted mb-4">LAYER ARSITEKTUR</div>
            <div className="space-y-3">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  className="glass rounded-xl p-5 border border-vto-border relative overflow-hidden"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                    style={{ backgroundColor: layer.color }}
                  />
                  <div className="pl-3">
                    <div className="font-mono text-xs mb-2" style={{ color: layer.color }}>{layer.label}</div>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map(item => (
                        <span
                          key={item}
                          className="font-mono text-xs px-2.5 py-1 rounded-lg"
                          style={{ background: layer.color + '15', color: 'white', border: `1px solid ${layer.color}30` }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Performance metrics */}
            <motion.div
              className="mt-4 glass-accent rounded-xl p-5 border border-vto-accent/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="font-mono text-xs text-vto-accent mb-3">PERFORMANCE TARGET</div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { val: '<100ms', label: 'API Response' },
                  { val: '99.9%', label: 'Uptime' },
                  { val: '1M+', label: 'Concurrent Users' },
                ].map(m => (
                  <div key={m.label}>
                    <div className="font-mono font-black text-lg text-vto-accent">{m.val}</div>
                    <div className="font-mono text-xs text-vto-muted">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-vto-border">07 / 10</div>
    </section>
  )
}
