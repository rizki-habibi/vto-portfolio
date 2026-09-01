import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * ScrollProgress — thin glowing bar at the very top tracking scroll position.
 * Also shows current slide number on the right edge.
 */
export default function ScrollProgress({ currentSlide, totalSlides = 10 }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = document.querySelector('.scroll-container')
    if (!container) return

    const update = () => {
      const scrollTop = container.scrollTop
      const maxScroll = container.scrollHeight - container.clientHeight
      setProgress(maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0)
    }

    container.addEventListener('scroll', update, { passive: true })
    update()
    return () => container.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
      {/* Background track */}
      <div className="h-0.5 bg-vto-border/40 w-full" />

      {/* Animated fill */}
      <motion.div
        className="h-0.5 absolute top-0 left-0"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00ff88, #0066ff, #7c3aed)',
          boxShadow: '0 0 8px #00ff8888, 0 0 16px #0066ff44',
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Glowing tip */}
      {progress > 1 && progress < 99 && (
        <motion.div
          className="absolute top-0 w-3 h-3 rounded-full -translate-y-1/4"
          style={{
            left: `calc(${progress}% - 6px)`,
            background: '#00ff88',
            boxShadow: '0 0 8px #00ff88, 0 0 16px #00ff8866',
          }}
        />
      )}
    </div>
  )
}
