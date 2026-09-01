import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

const colors = ['#ffe838', '#ff2d20', '#1a6fff', '#ff6b00', '#7c3aed', '#00c853']

function Confetti() {
  const pieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 10 + 4,
    delay: Math.random() * 0.4,
    dur: Math.random() * 1.5 + 1.5,
    rotate: Math.random() * 720 - 360,
  }))
  return (
    <div className="fixed inset-0 pointer-events-none z-[99990] overflow-hidden">
      {pieces.map(p => (
        <motion.div key={p.id}
          style={{
            position: 'absolute', left: `${p.x}%`, top: -20,
            width: p.size, height: p.size,
            background: p.color, border: '2px solid #1a1008',
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
          animate={{ y: window.innerHeight + 40, rotate: p.rotate, opacity: [1, 1, 0] }}
          transition={{ duration: p.dur, delay: p.delay, ease: 'easeIn' }}
        />
      ))}
    </div>
  )
}

export default function KonamiEgg() {
  const [keys, setKeys] = useState([])
  const [active, setActive] = useState(false)

  useEffect(() => {
    const h = (e) => {
      setKeys(prev => {
        const next = [...prev, e.key].slice(-KONAMI.length)
        if (next.join(',') === KONAMI.join(',')) {
          setActive(true)
          setTimeout(() => setActive(false), 5000)
        }
        return next
      })
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  return (
    <AnimatePresence>
      {active && (
        <>
          <Confetti key="confetti" />
          <motion.div
            key="banner"
            className="fixed inset-0 z-[99989] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 15 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            <div style={{ background: '#ffe838', border: '5px solid #1a1008', boxShadow: '10px 10px 0 #1a1008', padding: '32px 40px', textAlign: 'center', maxWidth: 400, width: '90%' }}>
              <div className="text-6xl mb-3">🎉</div>
              <h2 className="font-bangers text-ink text-3xl mb-2" style={{ textShadow: '3px 3px 0 #ff2d20' }}>
                KONAMI CODE!
              </h2>
              <p className="font-comic font-bold text-ink text-sm">
                Kamu menemukan easter egg rahasia VTO! 🕵️
              </p>
              <p className="font-bangers text-ink text-xs mt-2 opacity-50">↑↑↓↓←→←→BA</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
