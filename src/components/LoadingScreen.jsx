import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Matrix rain canvas ─────────────────────────────────────────────────── */
function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const fontSize = 13
    const cols = Math.floor(W / fontSize)
    const drops = Array(cols).fill(1)
    // mix of katakana, digits, latin
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789VTOVTOVTO@#$%&ABCDEFabcdef'

    let animId
    function draw() {
      ctx.fillStyle = 'rgba(10,10,10,0.06)'
      ctx.fillRect(0, 0, W, H)
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`

      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)]
        const isVTO = ch === 'V' || ch === 'T' || ch === 'O'
        ctx.fillStyle = isVTO
          ? `rgba(0,255,136,${Math.random() * 0.5 + 0.5})`
          : `rgba(0,255,136,${Math.random() * 0.3 + 0.05})`
        ctx.fillText(ch, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > H && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity: 0.35, pointerEvents: 'none',
      }}
    />
  )
}

/* ── Boot log lines ─────────────────────────────────────────────────────── */
const bootLines = [
  { text: 'Inisialisasi kernel VTO v2.0.0...', color: '#00ff88' },
  { text: 'Memuat modul AI matching engine...', color: '#e0e0e0' },
  { text: 'Mengaktifkan lapisan keamanan...', color: '#e0e0e0' },
  { text: 'Membangun koneksi ke jaringan...', color: '#e0e0e0' },
  { text: 'Rendering antarmuka pengguna...', color: '#e0e0e0' },
  { text: 'SISTEM SIAP — Selamat datang!', color: '#00ff88' },
]

/* ── Hex grid decoration ────────────────────────────────────────────────── */
function HexGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${(i % 6) * 18 + Math.random() * 4}%`,
            top: `${Math.floor(i / 6) * 28 + Math.random() * 6}%`,
            width: 36, height: 36,
            border: '1px solid rgba(0,255,136,0.08)',
            clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
            backgroundColor: 'rgba(0,255,136,0.02)',
          }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 3 + (i % 4), delay: i * 0.18, repeat: Infinity }}
        />
      ))}
    </div>
  )
}

/* ── Main loader ────────────────────────────────────────────────────────── */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [lineIndex, setLineIndex] = useState(0)
  const [displayed, setDisplayed] = useState([])
  const [done, setDone] = useState(false)
  const [showFlash, setShowFlash] = useState(false)

  /* progress counter */
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(id); setTimeout(() => setDone(true), 600); return 100 }
        return Math.min(p + Math.random() * 4 + 1, 100)
      })
    }, 60)
    return () => clearInterval(id)
  }, [])

  /* boot lines */
  useEffect(() => {
    if (lineIndex >= bootLines.length) return
    const delay = lineIndex === 0 ? 400 : 520
    const t = setTimeout(() => {
      setDisplayed(prev => [...prev, bootLines[lineIndex]])
      setLineIndex(i => i + 1)
    }, delay)
    return () => clearTimeout(t)
  }, [lineIndex])

  /* complete transition */
  useEffect(() => {
    if (done) {
      setShowFlash(true)
      setTimeout(() => { setShowFlash(false); onComplete() }, 900)
    }
  }, [done, onComplete])

  const clamped = Math.min(Math.floor(progress), 100)

  return (
    <AnimatePresence>
      {!done && !showFlash && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] bg-vto-black flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Matrix rain */}
          <MatrixRain />

          {/* Hex grid */}
          <HexGrid />

          {/* Scan line sweeping down */}
          <motion.div
            className="absolute left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, #00ff8866, transparent)' }}
            animate={{ top: ['-2%', '102%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
          />

          {/* Main card */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6 px-8 py-10 max-w-md w-full"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Spinning logo rings */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-vto-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
              {/* dashes ring */}
              <motion.div
                className="absolute inset-1 rounded-full"
                style={{
                  border: '2px dashed rgba(0,255,136,0.25)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              {/* accent ring */}
              <motion.div
                className="absolute inset-2 rounded-full border-t-2 border-r-2 border-vto-accent"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              />
              {/* blue inner ring */}
              <motion.div
                className="absolute inset-4 rounded-full border-b-2 border-vto-blue/70"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              {/* orbiting dot */}
              <motion.div
                className="absolute w-3 h-3"
                style={{ top: 8, left: '50%', marginLeft: -6 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                transformTemplate={({ rotate }) => `rotate(${rotate}) translateX(40px)`}
              >
                <div className="w-3 h-3 rounded-full bg-vto-accent"
                  style={{ boxShadow: '0 0 8px #00ff88, 0 0 16px #00ff8866' }} />
              </motion.div>
              {/* Logo */}
              <motion.span
                className="font-mono font-black text-xl text-vto-accent"
                style={{ textShadow: '0 0 12px #00ff88, 0 0 24px #00ff8866' }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                VTO
              </motion.span>
            </div>

            {/* Title */}
            <div className="text-center">
              <motion.h1
                className="font-mono text-2xl font-bold text-white tracking-[0.2em] mb-1"
                initial={{ opacity: 0, letterSpacing: '0.5em' }}
                animate={{ opacity: 1, letterSpacing: '0.2em' }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                MEMUAT PORTOFOLIO
              </motion.h1>
              <motion.p
                className="font-mono text-vto-muted text-xs tracking-[0.3em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                VISI · TEKNOLOGI · ORGANISASI
              </motion.p>
            </div>

            {/* Progress */}
            <div className="w-full">
              <div className="flex justify-between mb-1.5">
                <span className="font-mono text-xs text-vto-muted">LOADING...</span>
                <motion.span
                  className="font-mono text-xs text-vto-accent"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  {clamped}%
                </motion.span>
              </div>
              {/* Track */}
              <div className="relative w-full h-px bg-vto-border overflow-visible">
                <motion.div
                  className="absolute top-0 left-0 h-full"
                  style={{
                    width: `${clamped}%`,
                    background: 'linear-gradient(90deg, #00ff88, #0066ff)',
                    boxShadow: '0 0 8px #00ff8888',
                  }}
                  transition={{ duration: 0.2 }}
                />
                {/* Glowing tip */}
                <motion.div
                  className="absolute top-1/2 w-2.5 h-2.5 rounded-full -translate-y-1/2"
                  style={{
                    left: `calc(${clamped}% - 5px)`,
                    background: '#00ff88',
                    boxShadow: '0 0 8px #00ff88, 0 0 16px #00ff8866',
                  }}
                />
              </div>
            </div>

            {/* Boot log terminal */}
            <div className="w-full glass rounded-xl p-4 border border-vto-border/50 min-h-[120px]">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-vto-border/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-xs text-vto-muted ml-1">vto-system ~ boot</span>
              </div>
              <div className="space-y-1">
                {displayed.map((line, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="text-vto-accent font-mono text-xs select-none">›</span>
                    <span className="font-mono text-xs" style={{ color: line.color }}>
                      {line.text}
                    </span>
                  </motion.div>
                ))}
                {lineIndex < bootLines.length && (
                  <span className="font-mono text-xs text-vto-accent animate-blink">_</span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* White flash on complete */}
      {showFlash && (
        <motion.div
          key="flash"
          className="fixed inset-0 z-[99999] bg-vto-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      )}
    </AnimatePresence>
  )
}
