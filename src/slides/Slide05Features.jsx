import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  {
    id: 'matching',
    icon: '🧠',
    tag: 'AI-Powered',
    title: 'Smart Talent Matching',
    subtitle: 'Cocok. Tepat. Cepat.',
    desc: 'Sistem AI yang menganalisis skill, pengalaman, preferensi, dan kultur kerja untuk mencocokkan talenta dengan organisasi secara akurat. Bukan sekedar keyword matching — ini behavioral intelligence.',
    features: ['Analisis skill mendalam', 'Cultural fit scoring', 'Rekomendasi real-time', 'Match accuracy > 85%'],
    color: '#00ff88',
  },
  {
    id: 'dashboard',
    icon: '📊',
    tag: 'Management',
    title: 'Org Dashboard',
    subtitle: 'Satu layar, semua kontrol.',
    desc: 'Dashboard komprehensif untuk organisasi mengelola tim, project, budget, dan performa dalam satu interface. Dari startup 5 orang sampai enterprise 500 orang.',
    features: ['Team & project management', 'Analytics mendalam', 'Budget tracking', 'Performance review'],
    color: '#0066ff',
  },
  {
    id: 'learning',
    icon: '🎓',
    tag: 'Education',
    title: 'Learning Ecosystem',
    subtitle: 'Belajar. Praktik. Naik level.',
    desc: 'Platform pembelajaran yang terintegrasi dengan kebutuhan industri nyata. Kursus didesain bersama perusahaan, bukan akademisi — sehingga relevan dan langsung bisa dipraktikkan.',
    features: ['Industry-aligned curriculum', 'Hands-on projects', 'Mentorship network', 'Sertifikasi diakui'],
    color: '#7c3aed',
  },
  {
    id: 'marketplace',
    icon: '💼',
    tag: 'Economy',
    title: 'Digital Marketplace',
    subtitle: 'Monetisasi skill-mu.',
    desc: 'Marketplace untuk jual beli skill, project freelance, konsultasi, dan produk digital. Dengan sistem escrow aman, rating terverifikasi, dan pembayaran otomatis.',
    features: ['Freelance & project board', 'Secure escrow payment', 'Verified ratings', 'Revenue analytics'],
    color: '#ff6b00',
  },
]

export default function Slide05Features() {
  const [active, setActive] = useState(0)

  return (
    <section className="slide-section dot-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-vto-accent/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-vto-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-accent inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <span className="font-mono text-xs text-vto-accent tracking-widest">CHAPTER 05 · APA YANG VTO LAKUKAN</span>
          </div>
          <h2 className="font-sans font-black text-4xl md:text-6xl text-white mb-4">
            Fitur <span className="gradient-text">Unggulan</span>
          </h2>
          <p className="text-vto-muted text-base max-w-xl mx-auto">
            4 modul utama yang membentuk ekosistem VTO — saling terhubung, saling menguatkan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Tab buttons */}
          <div className="lg:col-span-2 flex lg:flex-col gap-3">
            {features.map((f, i) => (
              <motion.button
                key={f.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-300 ${
                  active === i
                    ? 'border-opacity-50 bg-opacity-10'
                    : 'border-vto-border glass hover:border-opacity-30'
                }`}
                style={active === i ? {
                  borderColor: f.color + '80',
                  backgroundColor: f.color + '10',
                } : {}}
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: f.color + '15' }}
                >
                  {f.icon}
                </div>
                <div className="hidden lg:block">
                  <div className="font-mono text-xs mb-0.5" style={{ color: f.color }}>{f.tag}</div>
                  <div className="font-sans font-bold text-white text-sm">{f.title}</div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {features.map((f, i) =>
                active === i ? (
                  <motion.div
                    key={f.id}
                    className="glass rounded-xl p-7 h-full border border-vto-border relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Accent top */}
                    <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }} />

                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-4xl">{f.icon}</span>
                      <div>
                        <div className="font-mono text-xs" style={{ color: f.color }}>{f.tag}</div>
                        <h3 className="font-sans font-black text-xl text-white">{f.title}</h3>
                        <p className="text-vto-muted text-sm">{f.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-vto-muted text-sm leading-relaxed mb-6">{f.desc}</p>

                    <div className="space-y-2">
                      {f.features.map((feat, j) => (
                        <motion.div
                          key={feat}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.08 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: f.color }} />
                          <span className="font-mono text-xs text-white">{feat}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-vto-border">05 / 10</div>
    </section>
  )
}
