import { motion } from 'framer-motion'

const weapons = [
  { name: 'Next.js', type: 'SENJATA UTAMA', icon: '▲', color: '#1a1008', bg: '#fff', power: 95, desc: 'Frontend framework terkuat untuk performa maksimal' },
  { name: 'React', type: 'TULANG PUNGGUNG', icon: '⚛', color: '#61dafb', bg: '#1a1008', power: 95, desc: 'Library UI yang fleksibel dan battle-tested' },
  { name: 'TypeScript', type: 'PELINDUNG', icon: 'TS', color: '#fff', bg: '#3178c6', power: 90, desc: 'Mencegah bug sebelum muncul di production' },
  { name: 'Laravel', type: 'BENTENG BELAKANG', icon: '🔥', color: '#fff', bg: '#ff2d20', power: 88, desc: 'Backend yang kokoh, ekspresif, dan scalable' },
  { name: 'PostgreSQL', type: 'LEMARI RAHASIA', icon: '🐘', color: '#fff', bg: '#336791', power: 85, desc: 'Database relasional yang tak pernah gagal' },
  { name: 'Redis', type: 'TURBO BOOSTER', icon: '⚡', color: '#fff', bg: '#dc382d', power: 80, desc: 'Cache in-memory untuk kecepatan yang gila-gilaan' },
  { name: 'Docker', type: 'KAPSUL TEMPUR', icon: '🐳', color: '#fff', bg: '#2496ed', power: 82, desc: 'Containerisasi untuk deploy yang konsisten' },
  { name: 'Vercel', type: 'PELUNCUR ROKET', icon: '🚀', color: '#1a1008', bg: '#ffe838', power: 95, desc: 'Deploy dalam detik, CDN global, zero config' },
  { name: 'OpenAI', type: 'OTAK AI', icon: '🧠', color: '#fff', bg: '#7c3aed', power: 78, desc: 'Intelligence layer untuk smart matching' },
  { name: 'Supabase', type: 'ASISTEN SETIA', icon: '💚', color: '#fff', bg: '#00c853', power: 85, desc: 'Backend-as-a-service yang developer-friendly' },
]

const layers = [
  { label: 'LAPISAN TAMPILAN', items: ['Next.js', 'React', 'TypeScript'], color: '#ffe838', desc: 'Yang dilihat pengguna' },
  { label: 'LAPISAN LOGIKA', items: ['Laravel', 'Node.js', 'OpenAI'], color: '#ff2d20', desc: 'Yang bikin semuanya bekerja' },
  { label: 'LAPISAN DATA', items: ['PostgreSQL', 'Redis', 'Supabase'], color: '#1a6fff', desc: 'Yang menyimpan segalanya' },
  { label: 'LAPISAN INFRASTRUKTUR', items: ['Docker', 'Vercel', 'GitHub Actions'], color: '#7c3aed', desc: 'Yang menopang semuanya' },
]

export default function Slide07Tech() {
  return (
    <section className="slide-section" style={{ background: '#fdf6e3' }}>
      <div className="absolute inset-0 halftone opacity-25 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
        >
          <div className="inline-block px-5 py-2 mb-2" style={{ background: '#1a1008', border: '3px solid #ffe838', boxShadow: '4px 4px 0 #ffe838', transform: 'rotate(1deg)' }}>
            <span className="font-bangers text-yellow-300 tracking-widest" style={{ color: '#ffe838' }}>⚙ CHAPTER 07 — ARSENAL TEKNOLOGI ⚙</span>
          </div>
          <h2 className="font-bangers text-ink" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', textShadow: '4px 4px 0 #1a6fff, 7px 7px 0 #1a1008' }}>
            SENJATA-SENJATA VTO!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Weapon grid */}
          <div>
            <div className="inline-block px-3 py-1 mb-3" style={{ background: '#1a1008' }}>
              <span className="font-bangers text-white text-xs tracking-widest">DAFTAR PERSENJATAAN</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {weapons.map((w, i) => (
                <motion.div
                  key={w.name}
                  className="relative overflow-hidden"
                  style={{ background: w.bg, border: '3px solid #1a1008', boxShadow: '3px 3px 0 #1a1008', padding: '10px' }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, ease: 'backOut' }}
                  whileHover={{ y: -3, boxShadow: '6px 6px 0 #1a1008' }}
                >
                  {/* Power bar */}
                  <div className="absolute bottom-0 left-0 h-1" style={{ width: `${w.power}%`, background: '#ffe838' }} />

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg" style={{ color: w.color }}>{w.icon}</span>
                    <span className="font-bangers text-sm" style={{ color: w.color }}>{w.name}</span>
                  </div>
                  <div className="font-comic text-xs font-bold opacity-70 mb-1" style={{ color: w.color }}>{w.type}</div>
                  <div className="font-bangers text-xs" style={{ color: w.color, opacity: 0.9 }}>{w.power}% POWER</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Architecture layers */}
          <div>
            <div className="inline-block px-3 py-1 mb-3" style={{ background: '#1a1008' }}>
              <span className="font-bangers text-white text-xs tracking-widest">DIAGRAM PERTAHANAN</span>
            </div>
            <div className="space-y-3">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  className="relative overflow-hidden"
                  style={{ background: '#fff', border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008', padding: '14px' }}
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  {/* color stripe left */}
                  <div className="absolute left-0 top-0 bottom-0 w-3" style={{ background: layer.color }} />
                  <div className="pl-5">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bangers text-ink text-sm">{layer.label}</span>
                      <span className="font-comic text-xs text-ink opacity-50">{layer.desc}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map(item => (
                        <span key={item} className="font-bangers text-xs px-2 py-1"
                          style={{ background: layer.color, color: '#1a1008', border: '2px solid #1a1008', boxShadow: '2px 2px 0 #1a1008' }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Performance target */}
              <motion.div
                className="relative"
                style={{ background: '#ffe838', border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008', padding: '14px' }}
                initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              >
                <span className="font-bangers text-ink text-sm block mb-2">🎯 TARGET PERFORMA</span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[{ v: '<100ms', l: 'API Response' }, { v: '99.9%', l: 'Uptime' }, { v: '1M+', l: 'Users' }].map(m => (
                    <div key={m.l} style={{ background: '#1a1008', border: '2px solid #ffe838', padding: '8px 4px' }}>
                      <div className="font-bangers" style={{ color: '#ffe838', fontSize: '1rem' }}>{m.v}</div>
                      <div className="font-comic text-white text-xs">{m.l}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bangers text-ink text-xs tracking-widest opacity-40">— halaman 07 dari 10 —</div>
    </section>
  )
}
