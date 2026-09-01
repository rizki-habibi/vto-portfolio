import { motion } from 'framer-motion'

const slides = [
  { id: 0, label: 'Intro' },
  { id: 1, label: 'Origin' },
  { id: 2, label: 'Masalah' },
  { id: 3, label: 'Visi & Misi' },
  { id: 4, label: 'Fitur' },
  { id: 5, label: 'Target' },
  { id: 6, label: 'Teknologi' },
  { id: 7, label: 'Roadmap' },
  { id: 8, label: 'Dampak' },
  { id: 9, label: 'Kontak' },
]

export default function NavDots({ active, onNavigate }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {slides.map((s) => (
        <button
          key={s.id}
          onClick={() => onNavigate(s.id)}
          className="group relative flex items-center justify-end"
          aria-label={s.label}
        >
          {/* Label tooltip */}
          <span className="absolute right-6 font-mono text-xs text-vto-muted whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pr-1">
            {s.label}
          </span>
          {/* Dot */}
          <motion.div
            className="rounded-full border transition-all duration-300"
            animate={active === s.id
              ? { width: 24, height: 8, borderColor: '#00ff88', backgroundColor: '#00ff88' }
              : { width: 8, height: 8, borderColor: '#444', backgroundColor: 'transparent' }
            }
            whileHover={{ scale: 1.4 }}
          />
        </button>
      ))}
    </div>
  )
}
