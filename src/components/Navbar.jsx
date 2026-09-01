import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Cover', id: 0 },
  { label: 'Origin', id: 1 },
  { label: 'Masalah', id: 2 },
  { label: 'Visi', id: 3 },
  { label: 'Kekuatan', id: 4 },
  { label: 'Karakter', id: 5 },
  { label: 'Arsenal', id: 6 },
  { label: 'Roadmap', id: 7 },
  { label: 'Dampak', id: 8 },
  { label: 'Kontak', id: 9 },
]

export default function Navbar({ currentSlide, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const el = document.querySelector('.scroll-container')
    if (!el) return
    const h = () => setScrolled(el.scrollTop > 30)
    el.addEventListener('scroll', h)
    return () => el.removeEventListener('scroll', h)
  }, [])

  return (
    <motion.nav
      className="fixed top-6 left-0 right-0 z-50 px-4"
      style={{ pointerEvents: 'none' }}
      initial={{ y: -80 }} animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 0.5, ease: 'backOut' }}
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between"
        style={{
          background: scrolled ? '#fdf6e3' : 'transparent',
          border: scrolled ? '3px solid #1a1008' : 'none',
          boxShadow: scrolled ? '4px 4px 0 #1a1008' : 'none',
          padding: '8px 16px',
          transition: 'all 0.2s ease',
          pointerEvents: 'all',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => onNavigate(0)}
          style={{ background: '#ffe838', border: '3px solid #1a1008', boxShadow: '3px 3px 0 #1a1008', padding: '4px 12px', cursor: 'pointer' }}
        >
          <span className="font-bangers text-ink text-lg tracking-widest">VTO</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="font-bangers text-xs tracking-widest transition-all"
              style={{
                background: currentSlide === item.id ? '#ffe838' : 'transparent',
                border: currentSlide === item.id ? '2px solid #1a1008' : '2px solid transparent',
                boxShadow: currentSlide === item.id ? '2px 2px 0 #1a1008' : 'none',
                padding: '3px 10px',
                color: '#1a1008',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Page indicator */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="font-bangers text-ink text-sm">
            {String(currentSlide + 1).padStart(2, '0')} / 10
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden font-bangers text-xs px-3 py-1"
          style={{ background: '#ff2d20', border: '2px solid #1a1008', boxShadow: '2px 2px 0 #1a1008', color: '#fff', cursor: 'pointer' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'TUTUP ✕' : 'MENU ≡'}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden max-w-6xl mx-auto mt-1 grid grid-cols-2 gap-1"
            style={{ background: '#fdf6e3', border: '3px solid #1a1008', boxShadow: '4px 4px 0 #1a1008', padding: '8px', pointerEvents: 'all' }}
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
          >
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false) }}
                className="font-bangers text-xs text-left tracking-widest"
                style={{
                  background: currentSlide === item.id ? '#ffe838' : '#fff',
                  border: '2px solid #1a1008',
                  boxShadow: '2px 2px 0 #1a1008',
                  padding: '6px 10px',
                  color: '#1a1008',
                  cursor: 'pointer',
                }}
              >
                <span style={{ color: '#ff2d20' }}>{String(item.id + 1).padStart(2, '0')} </span>
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
