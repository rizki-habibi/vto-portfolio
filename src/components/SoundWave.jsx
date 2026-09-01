import { motion } from 'framer-motion'

/**
 * SoundWave — animated vertical bars like an audio equalizer/waveform.
 * Props:
 *   bars      : number of bars (default 12)
 *   color     : bar color (default '#00ff88')
 *   height    : max bar height in px (default 40)
 *   className : extra classes
 *   playing   : if false, bars freeze at low height
 */
export default function SoundWave({
  bars = 16,
  color = '#00ff88',
  height = 40,
  className = '',
  playing = true,
}) {
  return (
    <div
      className={`flex items-end gap-0.5 ${className}`}
      style={{ height, display: 'inline-flex' }}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => {
        const delay = (i / bars) * 0.6
        const randomH = 0.2 + Math.random() * 0.8
        return (
          <motion.div
            key={i}
            style={{
              width: 3,
              borderRadius: 2,
              backgroundColor: color,
              originY: 1,
              boxShadow: `0 0 6px ${color}88`,
            }}
            animate={
              playing
                ? {
                    scaleY: [randomH, 1, 0.3, 0.9, 0.5, 1, randomH],
                    opacity: [0.7, 1, 0.6, 0.9, 0.7, 1, 0.7],
                  }
                : { scaleY: 0.15 }
            }
            initial={{ scaleY: 0.15, height }}
            transition={
              playing
                ? {
                    duration: 1.2 + Math.random() * 0.6,
                    delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
                : {}
            }
          />
        )
      })}
    </div>
  )
}
