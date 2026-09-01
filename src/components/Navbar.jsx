import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ currentSlide, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const el = document.querySelector('.scroll-container')
    if (!el) return
    const handler = () => setScrolled(el.scrollTop > 50)
    el.addEventListener('scroll', handler)
    return () => el.removeEventListener('scroll', handler)
  }, [])

  const navItems = [
    { label: 'Intro', id: 0 },
    { label: 'Origin', id: 1 },
    { label: 'Masalah', id: 2 },
    { label: 'Visi & Misi', id: 3 },
    { label: 'Fitur', id: 4 },
    { label: 'Target', id: 5 },
    { label: 'Teknologi', id: 6 },
    { label: 'Roadmap', id: 7 },
    { label: 'Dampak', id: 8 },
    { label: 'Kontak', id: 9 },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-vto-border' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => onNavigate(0)} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-vto-accent/10 border border-vto-accent/30 flex items-center justify-center">
            <span className="font-mono text-xs font-bold text-vto-accent">V</span>
          </div>
          <span className="font-mono font-bold text-white tracking-widest text-sm">VTO</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-1.5 font-mono text-xs rounded transition-all duration-200 ${
                currentSlide === item.id
                  ? 'text-vto-accent bg-vto-accent/10 border border-vto-accent/30'
                  : 'text-vto-muted hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Slide indicator */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="font-mono text-xs text-vto-muted">
            {String(currentSlide + 1).padStart(2, '0')} / 10
          </span>
          <div className="w-16 h-px bg-vto-border relative overflow-hidden">
            <motion.div
              className="h-full bg-vto-accent"
              animate={{ width: `${((currentSlide + 1) / 10) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-5 h-px bg-white"
            animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block w-5 h-px bg-white"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block w-5 h-px bg-white"
            animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden glass border-t border-vto-border px-6 py-4 grid grid-cols-2 gap-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false) }}
                className={`px-3 py-2 font-mono text-xs rounded text-left ${
                  currentSlide === item.id
                    ? 'text-vto-accent bg-vto-accent/10 border border-vto-accent/30'
                    : 'text-vto-muted'
                }`}
              >
                <span className="text-vto-accent mr-1">{String(item.id + 1).padStart(2, '0')}</span>
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
