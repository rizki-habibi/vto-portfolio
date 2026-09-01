import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const panels = [
  { bg: '#ffe838', text: 'SEBUAH CERITA\nBELUM PERNAH\nDICERITAKAN...', color: '#1a1008', delay: 0 },
  { bg: '#1a6fff', text: 'TENTANG VISI\nYANG BERANI...', color: '#fff', delay: 0.3 },
  { bg: '#ff2d20', text: 'TEKNOLOGI\nYANG KUAT...', color: '#fff', delay: 0.6 },
  { bg: '#1a1008', text: 'DAN SEBUAH\nORGANISASI\nYANG LAHIR...', color: '#ffe838', delay: 0.9 },
]

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0) // 0=panels, 1=title, 2=done
  const [progress, setProgress] = useState(0)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    // Show panels then title
    const t1 = setTimeout(() => setPhase(1), 2200)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (phase < 1) return
    const id = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(id)
          setTimeout(() => { setExit(true); setTimeout(onComplete, 700) }, 400)
          return 100
        }
        return Math.min(p + Math.random() * 6 + 2, 100)
      })
    }, 55)
    return () => clearInterval(id)
  }, [phase, onComplete])

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] overflow-hidden"
          style={{ background: '#fdf6e3' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          {/* Halftone bg */}
          <div className="absolute inset-0 halftone opacity-40 pointer-events-none" />

          {phase === 0 && (
            /* ── Phase 0: 4 opening panels slide in ── */
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2" style={{ gap: 6, padding: 6, background: '#1a1008' }}>
              {panels.map((p, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center relative overflow-hidden"
                  style={{ background: p.bg, border: '3px solid #1a1008' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: p.delay, duration: 0.35, ease: 'backOut' }}
                >
                  {/* speed lines */}
                  <div className="absolute inset-0 speed-lines opacity-20" />
                  <p
                    className="font-bangers text-center leading-tight relative z-10"
                    style={{
                      color: p.color,
                      fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                      textShadow: p.color === '#fff' ? '2px 2px 0 #1a1008' : 'none',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {p.text}
                  </p>
                  {/* panel number */}
                  <span
                    className="absolute bottom-2 right-3 font-bangers opacity-30"
                    style={{ color: p.color, fontSize: '0.7rem' }}
                  >
                    {i + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {phase === 1 && (
            /* ── Phase 1: Title card + progress ── */
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Big ink border card */}
              <motion.div
                className="comic-panel relative"
                style={{ padding: '40px 56px', maxWidth: 480, width: '90%', background: '#ffe838' }}
                initial={{ rotate: -6, scale: 0.7 }}
                animate={{ rotate: -1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                {/* Corner stars */}
                {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
                  <span key={i} className={`absolute ${pos} text-ink text-lg`}>✦</span>
                ))}

                <p className="font-bangers text-center text-ink text-sm tracking-widest mb-2">
                  ✦ SEBUAH KARYA VTO STUDIOS ✦
                </p>
                <h1
                  className="font-bangers text-center leading-none text-ink"
                  style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', textShadow: '4px 4px 0 rgba(0,0,0,0.15)' }}
                >
                  VTO
                </h1>
                <p className="font-bangers text-center text-ink tracking-[0.2em] text-lg mt-1">
                  VISI · TEKNOLOGI · ORGANISASI
                </p>

                <div className="mt-6">
                  {/* progress track */}
                  <div className="relative h-5 rounded-none" style={{ border: '3px solid #1a1008', background: '#fff' }}>
                    <motion.div
                      className="absolute inset-y-0 left-0"
                      style={{
                        width: `${Math.min(progress, 100)}%`,
                        background: 'repeating-linear-gradient(90deg, #1a6fff 0px, #1a6fff 16px, #ff2d20 16px, #ff2d20 32px)',
                        borderRight: progress < 100 ? '3px solid #1a1008' : 'none',
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="font-bangers text-ink text-sm">LOADING...</span>
                    <span className="font-bangers text-ink text-sm">{Math.floor(progress)}%</span>
                  </div>
                </div>
              </motion.div>

              {/* Bouncing dots */}
              <div className="flex gap-3 mt-6">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    className="w-4 h-4 rounded-full"
                    style={{ background: ['#ffe838', '#ff2d20', '#1a6fff'][i], border: '2px solid #1a1008' }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
