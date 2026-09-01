import { motion } from 'framer-motion'

const orbConfigs = [
  { size: 300, x: '10%',  y: '20%',  color: '#00ff88', blur: 120, dur: 12, delay: 0    },
  { size: 200, x: '80%',  y: '15%',  color: '#0066ff', blur: 100, dur: 15, delay: 2    },
  { size: 250, x: '60%',  y: '70%',  color: '#7c3aed', blur: 110, dur: 18, delay: 1    },
  { size: 180, x: '20%',  y: '75%',  color: '#ff6b00', blur: 90,  dur: 10, delay: 3    },
  { size: 150, x: '45%',  y: '40%',  color: '#00ccff', blur: 80,  dur: 14, delay: 0.5  },
  { size: 120, x: '90%',  y: '55%',  color: '#ff2d20', blur: 70,  dur: 20, delay: 4    },
]

export default function FloatingOrbs({ opacity = 0.12 }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        pointerEvents: 'none', zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {orbConfigs.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            backgroundColor: orb.color,
            filter: `blur(${orb.blur}px)`,
            opacity,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 40, -20, 0],
            scale: [1, 1.15, 0.9, 1.05, 1],
            opacity: [opacity, opacity * 1.5, opacity * 0.7, opacity * 1.2, opacity],
          }}
          transition={{
            duration: orb.dur,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
