import { motion } from 'framer-motion'

const links = [
  {
    icon: '💬',
    label: 'WhatsApp',
    value: 'Chat Langsung',
    href: 'https://wa.me/6281234567890',
    color: '#25d366',
    desc: 'Respon < 1 jam di jam kerja',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'hello@vto.id',
    href: 'mailto:hello@vto.id',
    color: '#00ff88',
    desc: 'Untuk keperluan formal & partnership',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'VTO Platform',
    href: 'https://linkedin.com',
    color: '#0077b5',
    desc: 'Update terbaru & networking profesional',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/vto-id',
    href: 'https://github.com',
    color: '#ffffff',
    desc: 'Open source contributions welcome',
  },
]

const opportunities = [
  { icon: '🤝', title: 'Partnership', desc: 'Universitas, perusahaan, atau komunitas yang ingin berkolaborasi' },
  { icon: '💰', title: 'Investasi', desc: 'Angel investor atau VC yang aligned dengan misi kami' },
  { icon: '👨‍💻', title: 'Bergabung Tim', desc: 'Developer, desainer, atau biz-dev yang mau ikut membangun' },
  { icon: '📣', title: 'Jadi Beta User', desc: 'Early adopter yang mau feedback dan ikut shaping produk' },
]

const MarqueeBar = () => {
  const items = ['VTO · VISI · TEKNOLOGI · ORGANISASI · JOIN US · COLLABORATE · BUILD TOGETHER · ']
  return (
    <div className="overflow-hidden py-3 border-y border-vto-border my-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-mono text-xs text-vto-muted mx-4">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Slide10Contact() {
  return (
    <section className="slide-section grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-vto-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-vto-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-accent inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-vto-accent animate-pulse" />
            <span className="font-mono text-xs text-vto-accent tracking-widest">CHAPTER 10 · BERGABUNG</span>
          </div>

          <motion.h2
            className="font-sans font-black text-5xl md:text-7xl text-white mb-2 leading-none"
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Ayo <span className="text-glow text-vto-accent">Gabung</span>
          </motion.h2>
          <h2 className="font-sans font-black text-5xl md:text-7xl text-white mb-6 leading-none">
            Bersama VTO
          </h2>

          <p className="text-vto-muted text-base max-w-xl mx-auto">
            Ekosistem terbaik dibangun bersama-sama. Punya ide, modal, skill, atau sekadar semangat? Kami ingin mendengar dari kamu.
          </p>
        </motion.div>

        <MarqueeBar />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact links */}
          <div>
            <div className="font-mono text-xs text-vto-muted mb-4">HUBUNGI KAMI</div>
            <div className="space-y-3">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-xl p-4 card-hover border border-vto-border group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: link.color + '15', border: `1px solid ${link.color}30` }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-vto-muted">{link.label}</div>
                    <div className="font-sans font-bold text-white text-sm">{link.value}</div>
                    <div className="font-mono text-xs text-vto-muted">{link.desc}</div>
                  </div>
                  <svg
                    className="w-4 h-4 text-vto-muted group-hover:text-vto-accent transition-colors"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div>
            <div className="font-mono text-xs text-vto-muted mb-4">PELUANG KOLABORASI</div>
            <div className="grid grid-cols-2 gap-3">
              {opportunities.map((opp, i) => (
                <motion.div
                  key={opp.title}
                  className="glass rounded-xl p-4 card-hover border border-vto-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-2xl mb-2">{opp.icon}</div>
                  <div className="font-sans font-bold text-white text-sm mb-1">{opp.title}</div>
                  <div className="font-mono text-xs text-vto-muted leading-relaxed">{opp.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="mailto:hello@vto.id"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-mono font-bold text-sm bg-vto-accent text-vto-black hover:bg-vto-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-vto-accent/20"
              >
                <span>✉</span>
                Kirim Proposal Kolaborasi
              </a>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-vto-accent/10 border border-vto-accent/30 flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-vto-accent">V</span>
            </div>
            <span className="font-mono font-bold text-white tracking-widest">VTO</span>
          </div>
          <p className="font-mono text-xs text-vto-muted">
            Visi · Teknologi · Organisasi — Membangun ekosistem digital Indonesia
          </p>
          <p className="font-mono text-xs text-vto-border mt-2">
            © 2025 VTO. Dibuat dengan ❤️ untuk Indonesia
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-vto-border">10 / 10</div>
    </section>
  )
}
