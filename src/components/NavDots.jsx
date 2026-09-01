import { motion } from 'framer-motion'

const slides = [
  { id: 0, label: 'Cover' },
  { id: 1, label: 'Origin' },
  { id: 2, label: 'Masalah' },
  { id: 3, label: 'Visi' },
  { id: 4, label: 'Kekuatan' },
  { id: 5, label: 'Karakter' },
  { id: 6, label: 'Arsenal' },
  { id: 7, label: 'Roadmap' },
  { id: 8, label: 'Dampak' },
  { id: 9, label: 'Kontak' },
]

const dotBgs = ['#ffe838', '#1a6fff', '#ff2d20', '#1a6fff', '#ff6b00', '#00c853', '#1a1008', '#ff6b00', '#ffe838', '#ff2d20']

export default function NavDots({ active, onNavigate }) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {slides.map(s => (
        <button
          key={s.id}
          onClick={() => onNavigate(s.id)}
          className="group relative flex items-center justify-end"
          aria-label={s.label}
        >
          {/* Tooltip */}
          <span
            className="absolute right-7 font-bangers text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity px-2 py-0.5"
            style={{ background: '#1a1008', color: '#ffe838', border: '1px solid #ffe838', pointerEvents: 'none' }}
          >
            {s.label}
          </span>

          {/* Dot */}
          <motion.div
            animate={active === s.id
              ? { width: 20, height: 8, background: dotBgs[s.id], border: '2px solid #1a1008' }
              : { width: 8, height: 8, background: '#fff', border: '2px solid #1a1008' }}
            whileHover={{ scale: 1.4 }}
            style={{ borderRadius: 4, boxShadow: active === s.id ? '2px 2px 0 #1a1008' : '1px 1px 0 #1a1008' }}
          />
        </button>
      ))}
    </div>
  )
}
