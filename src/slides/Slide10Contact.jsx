import { motion } from 'framer-motion'

const contacts = [
  { icon: '💬', label: 'WhatsApp', val: 'Chat Langsung', href: 'https://wa.me/6281234567890', bg: '#25d366', color: '#fff' },
  { icon: '📧', label: 'Email', val: 'hello@vto.id', href: 'mailto:hello@vto.id', bg: '#ffe838', color: '#1a1008' },
  { icon: '💼', label: 'LinkedIn', val: 'VTO Platform', href: 'https://linkedin.com', bg: '#0077b5', color: '#fff' },
  { icon: '🐙', label: 'GitHub', val: 'github.com/vto-id', href: 'https://github.com/rizki-habibi/vto-portfolio', bg: '#1a1008', color: '#ffe838' },
]

const callouts = [
  { icon: '🤝', title: 'PARTNERSHIP', desc: 'Universitas, perusahaan, atau komunitas yang mau kolaborasi', bg: '#ffe838', color: '#1a1008' },
  { icon: '💰', title: 'INVESTASI', desc: 'Angel investor atau VC yang aligned dengan misi kami', bg: '#1a6fff', color: '#fff' },
  { icon: '👨‍💻', title: 'GABUNG TIM', desc: 'Dev, desainer, atau biz-dev yang mau ikut membangun', bg: '#ff2d20', color: '#fff' },
  { icon: '📣', title: 'BETA USER', desc: 'Early adopter yang mau feedback dan shaping produk', bg: '#7c3aed', color: '#fff' },
]

export default function Slide10Contact() {
  return (
    <section className="slide-section" style={{ background: '#fdf6e3' }}>
      <div className="absolute inset-0 halftone opacity-25 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-8">
        {/* Header — back cover style */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
        >
          <div className="inline-block px-5 py-2 mb-2" style={{ background: '#ff2d20', border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008', transform: 'rotate(1deg)' }}>
            <span className="font-bangers text-white tracking-widest">✉ CHAPTER 10 — AKHIR KATA ✉</span>
          </div>
          <h2 className="font-bangers text-ink" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', textShadow: '4px 4px 0 #ff2d20, 7px 7px 0 #1a1008' }}>
            AYO GABUNG BERSAMA VTO!
          </h2>
        </motion.div>

        {/* Marquee ticker */}
        <div className="overflow-hidden mb-6" style={{ background: '#1a1008', borderTop: '3px solid #1a1008', borderBottom: '3px solid #1a1008', padding: '8px 0' }}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="font-bangers text-sm mx-4" style={{ color: '#ffe838' }}>
                ✦ VTO · VISI · TEKNOLOGI · ORGANISASI · JOIN US · COLLABORATE · BUILD TOGETHER · INDONESIA BISA · LET'S GO ·
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Contact links */}
          <div>
            <div className="inline-block px-3 py-1 mb-3" style={{ background: '#1a1008' }}>
              <span className="font-bangers text-white text-xs tracking-widest">HUBUNGI KAMI</span>
            </div>
            <div className="space-y-2">
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  style={{ background: '#fff', border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008', padding: '12px 16px', display: 'flex', textDecoration: 'none' }}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: -4, boxShadow: '8px 8px 0 #1a1008' }}
                >
                  <div className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: c.bg, border: '2px solid #1a1008', boxShadow: '2px 2px 0 #1a1008' }}>
                    {c.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bangers text-ink text-sm">{c.label}</div>
                    <div className="font-comic text-ink text-xs font-bold opacity-60">{c.val}</div>
                  </div>
                  <span className="font-bangers text-ink opacity-40 group-hover:opacity-100 transition-opacity">→</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Callout cards */}
          <div>
            <div className="inline-block px-3 py-1 mb-3" style={{ background: '#1a1008' }}>
              <span className="font-bangers text-white text-xs tracking-widest">PELUANG KOLABORASI</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {callouts.map((c, i) => (
                <motion.div
                  key={c.title}
                  className="relative overflow-hidden"
                  style={{ background: c.bg, border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008', padding: '14px 12px' }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-2xl mb-1">{c.icon}</div>
                  <div className="font-bangers text-sm mb-1" style={{ color: c.color }}>{c.title}</div>
                  <div className="font-comic text-xs font-bold leading-snug" style={{ color: c.color, opacity: 0.8 }}>{c.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Big CTA */}
            <motion.a
              href="mailto:hello@vto.id"
              className="mt-3 flex items-center justify-center gap-2"
              style={{ background: '#ffe838', border: '4px solid #1a1008', boxShadow: '6px 6px 0 #1a1008', padding: '16px', display: 'flex', textDecoration: 'none', marginTop: 12 }}
              whileHover={{ x: -3, y: -3, boxShadow: '9px 9px 0 #1a1008' }}
              whileTap={{ x: 2, y: 2, boxShadow: '2px 2px 0 #1a1008' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            >
              <span className="font-bangers text-ink text-xl tracking-widest">✉ KIRIM PESAN SEKARANG!</span>
            </motion.a>
          </div>
        </div>

        {/* Back cover footer */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
        >
          <div className="inline-block" style={{ background: '#1a1008', border: '4px solid #ffe838', padding: '16px 32px', boxShadow: '6px 6px 0 #ffe838' }}>
            <p className="font-bangers text-white text-sm tracking-widest mb-1">✦ VTO · VISI · TEKNOLOGI · ORGANISASI ✦</p>
            <p className="font-bangers text-3xl" style={{ color: '#ffe838', textShadow: '3px 3px 0 #ff2d20' }}>VTO</p>
            <p className="font-comic text-white text-xs mt-1 opacity-60">© 2025 VTO Studios · Dibuat dengan ❤ untuk Indonesia</p>
            <p className="font-comic text-xs mt-1 opacity-40" style={{ color: '#ffe838' }}>
              Ketik ↑↑↓↓←→←→BA untuk kejutan 🎉
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bangers text-ink text-xs tracking-widest opacity-40">— halaman 10 dari 10 — TAMAT ✦</div>
    </section>
  )
}
