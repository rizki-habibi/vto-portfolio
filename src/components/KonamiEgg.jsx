import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KONAMI = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
  'b','a',
]

const confettiColors = ['#00ff88','#0066ff','#7c3aed','#ff6b00','#ff2d20','#fff','#00ccff']

function Confetti() {
  const pieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    size: Math.random() * 8 + 4,
    delay: Math.random() * 0.5,
    duration: Math.random() * 2 + 2,
    rotate: Math.random() * 720 - 360,
    shape: Math.random() > 0.5 ? 'circle' : 'square',
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-[99990] overflow-hidden">
      {pieces.map(p => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.size,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size}px ${p.color}`,
          }}
          animate={{
            y: window.innerHeight + 40,
            rotate: p.rotate,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  )
}

export default function KonamiEgg() {
  const [keys, setKeys] = useState([])
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      setKeys(prev => {
        const next = [...prev, e.key].slice(-KONAMI.length)
        if (next.join(',') === KONAMI.join(',')) {
          setActivated(true)
          setTimeout(() => setActivated(false), 5000)
        }
        return next
      })
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <AnimatePresence>
      {activated && (
        <>
          <Confetti key="confetti" />
          <motion.div
            key="banner"
            className="fixed inset-0 z-[99989] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: 'backOut' }}
          >
            <div className="glass-accent border border-vto-accent/40 rounded-2xl px-10 py-8 text-center shadow-2xl">
              <div className="text-6xl mb-3 animate-bounce">🎉</div>
              <div className="font-mono font-black text-2xl text-vto-accent text-glow mb-2">
                KONAMI CODE ACTIVATED!
              </div>
              <div className="font-mono text-sm text-vto-muted">
                Kamu menemukan easter egg rahasia VTO 🚀
              </div>
              <div className="font-mono text-xs text-vto-border mt-3">
                ↑ ↑ ↓ ↓ ← → ← → B A
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
