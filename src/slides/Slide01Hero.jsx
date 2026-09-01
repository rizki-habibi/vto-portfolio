import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GlitchText from '../components/GlitchText'
import MagneticButton from '../components/MagneticButton'
import SoundWave from '../components/SoundWave'

const words = ['Visi', 'Teknologi', 'Organisasi']

function TypewriterLoop({ texts }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1500)
      return () => clearTimeout(t)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % texts.length)
      return
    }
    const speed = deleting ? 60 : 100
    const t = setTimeout(() => setSubIndex((s) => s + (deleting ? -1 : 1)), speed)
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, texts])

  return (
    <span className="text-vto-accent text-glow">
      {texts[index].substring(0, subIndex)}
      <span className="animate-blink">|</span>
    </span>
  )
}

/* Floating particle ring around the VTO logo */
function RingParticles() {
  const count = 20
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * 360
        const rad = 110
        const x = Math.cos((angle * Math.PI) / 180) * rad
        const y = Math.sin((angle * Math.PI) / 180) * rad
        const size = Math.random() * 3 + 1
        const dur = 3 + (i % 5)
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: size,
              height: size,
              backgroundColor: i % 3 === 0 ? '#00ff88' : i % 3 === 1 ? '#0066ff' : '#7c3aed',
              boxShadow: `0 0 ${size * 2}px currentColor`,
              transform: 'translate(-50%,-50%)',
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 1, 0.4],
              x: [0, Math.cos((angle * Math.PI) / 180) * 8, 0],
              y: [0, Math.sin((angle * Math.PI) / 180) * 8, 0],
            }}
            transition={{ duration: dur, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
          />
        )
      })}
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Slide01Hero({ onNavigate }) {
  return (
    <section className="slide-section grid-bg noise-bg overflow-hidden">
      {/* Radial glow blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00ff8815 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0066ff12 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Chapter tag */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="glass-accent inline-flex items-center gap-3 px-4 py-2 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-vto-accent animate-pulse" />
              <span className="font-mono text-xs text-vto-accent tracking-widest">
                CHAPTER 01 · PERKENALAN
              </span>
              <SoundWave bars={8} height={14} color="#00ff88" />
            </div>
          </motion.div>

          {/* Main headline with glitch + ring */}
          <motion.div variants={itemVariants} className="relative">
            <p className="font-mono text-vto-muted text-sm tracking-[0.3em] mb-3">
              MEMPERKENALKAN
            </p>

            {/* Particle ring (positioned around the VTO text) */}
            <div className="relative inline-block">
              <RingParticles />
              <GlitchText
                text="VTO"
                tag="h1"
                intensity="low"
                className="font-sans font-black text-6xl md:text-8xl text-white leading-none tracking-tight select-none"
              />
            </div>

            <div className="mt-3 font-mono text-xl md:text-2xl text-white">
              <TypewriterLoop texts={words} />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-vto-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Platform ekosistem digital yang menghubungkan{' '}
            <span className="text-white font-medium">talenta</span>,{' '}
            <span className="text-vto-accent font-medium">teknologi</span>, dan{' '}
            <span className="text-vto-blue font-medium">peluang</span>{' '}
            untuk membentuk masa depan Indonesia.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 pt-4"
          >
            {[
              { value: '2025', label: 'Tahun Berdiri' },
              { value: '∞', label: 'Potensi' },
              { value: '1', label: 'Ekosistem' },
              { value: '3', label: 'Pilar Utama' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="font-mono text-3xl font-bold text-vto-accent text-glow">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-vto-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 pt-2 flex-wrap">
            <MagneticButton
              onClick={() => onNavigate(1)}
              className="px-7 py-3 rounded-xl font-mono font-bold text-sm bg-vto-accent text-vto-black
                         shadow-lg shadow-vto-accent/20 hover:shadow-vto-accent/40 transition-shadow"
            >
              Jelajahi VTO →
            </MagneticButton>
            <MagneticButton
              onClick={() => onNavigate(9)}
              className="px-7 py-3 rounded-xl font-mono font-bold text-sm glass border border-vto-accent/30
                         text-vto-accent hover:bg-vto-accent/10 transition-colors"
            >
              Hubungi Kami
            </MagneticButton>
          </motion.div>

          {/* Scroll hint */}
          <motion.div variants={itemVariants} className="pt-4">
            <button
              onClick={() => onNavigate(1)}
              className="group inline-flex flex-col items-center gap-2 text-vto-muted hover:text-vto-accent transition-colors duration-300"
            >
              <span className="font-mono text-xs tracking-widest">GULIR KE BAWAH</span>
              <motion.div
                className="w-px h-10 bg-gradient-to-b from-vto-accent to-transparent"
                animate={{ scaleY: [1, 0.3, 1], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating code snippets */}
      <motion.div
        className="absolute top-20 right-16 font-mono text-xs text-vto-accent/25 hidden md:block"
        animate={{ y: [-6, 6, -6], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {'{ vto: "ekosistem" }'}
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-16 font-mono text-xs text-vto-blue/25 hidden md:block"
        animate={{ y: [6, -6, 6], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        const future = VTO()
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-10 font-mono text-xs text-vto-purple/20 hidden lg:block"
        animate={{ y: [-4, 8, -4], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      >
        import {'{'} Vision {'}'} from 'vto'
      </motion.div>

      {/* Slide number */}
      <div className="absolute bottom-8 left-8 font-mono text-xs text-vto-border">01 / 10</div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-vto-accent/30 rounded-tl-lg pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-vto-accent/30 rounded-br-lg pointer-events-none" />
    </section>
  )
}
