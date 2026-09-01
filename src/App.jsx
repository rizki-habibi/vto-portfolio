import { useState, useRef, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

// ── Global FX ──────────────────────────────────────────────────────────────
import LoadingScreen from './components/LoadingScreen'
import Cursor from './components/Cursor'
import Particles from './components/Particles'
import StarField from './components/StarField'
import AuroraBackground from './components/AuroraBackground'
import FloatingOrbs from './components/FloatingOrbs'
import Navbar from './components/Navbar'
import NavDots from './components/NavDots'
import ScrollProgress from './components/ScrollProgress'
import KonamiEgg from './components/KonamiEgg'

// ── Slides ─────────────────────────────────────────────────────────────────
import Slide01Hero from './slides/Slide01Hero'
import Slide02Origin from './slides/Slide02Origin'
import Slide03Problem from './slides/Slide03Problem'
import Slide04Vision from './slides/Slide04Vision'
import Slide05Features from './slides/Slide05Features'
import Slide06Target from './slides/Slide06Target'
import Slide07Tech from './slides/Slide07Tech'
import Slide08Roadmap from './slides/Slide08Roadmap'
import Slide09Impact from './slides/Slide09Impact'
import Slide10Contact from './slides/Slide10Contact'

const TOTAL = 10

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef(null)
  const slideRefs = useRef([])

  /* ── Navigation ──────────────────────────────────────────────────────── */
  const navigateTo = useCallback((index) => {
    const el = slideRefs.current[index]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setCurrentSlide(index)
    }
  }, [])

  /* ── Track active slide via IntersectionObserver ─────────────────────── */
  useEffect(() => {
    if (!loaded) return
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = slideRefs.current.indexOf(entry.target)
            if (idx !== -1) setCurrentSlide(idx)
          }
        })
      },
      { root: container, threshold: 0.5 },
    )
    slideRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [loaded])

  /* ── Keyboard navigation ─────────────────────────────────────────────── */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        navigateTo(Math.min(currentSlide + 1, TOTAL - 1))
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        navigateTo(Math.max(currentSlide - 1, 0))
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [currentSlide, navigateTo])

  const setRef = (i) => (el) => { slideRefs.current[i] = el }

  return (
    <>
      {/* ── Layer order (z-index low → high) ────────────────────────────
          0 : FloatingOrbs
          0 : StarField canvas
          1 : Particles canvas
          2 : AuroraBackground canvas
          FX on top of content: scanline, progress, cursor, eggs
      ─────────────────────────────────────────────────────────────────── */}

      {/* Background ambience */}
      <FloatingOrbs opacity={0.1} />
      <StarField />

      {/* Custom cursor */}
      <Cursor />

      {/* Scanline retro overlay */}
      <div className="scanline-overlay" aria-hidden="true" />

      {/* Konami easter egg */}
      <KonamiEgg />

      {/* ── Loading screen ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {/* ── Main app ───────────────────────────────────────────────────── */}
      {loaded && (
        <>
          {/* Connected particles network */}
          <Particles />

          {/* Aurora behind content */}
          <AuroraBackground opacity={0.15} />

          {/* UI chrome */}
          <ScrollProgress currentSlide={currentSlide} totalSlides={TOTAL} />
          <Navbar currentSlide={currentSlide} onNavigate={navigateTo} />
          <NavDots active={currentSlide} onNavigate={navigateTo} />

          {/* Scroll container */}
          <div
            ref={containerRef}
            className="scroll-container"
            style={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory' }}
          >
            {[
              <Slide01Hero key={0} onNavigate={navigateTo} />,
              <Slide02Origin key={1} />,
              <Slide03Problem key={2} />,
              <Slide04Vision key={3} />,
              <Slide05Features key={4} />,
              <Slide06Target key={5} />,
              <Slide07Tech key={6} />,
              <Slide08Roadmap key={7} />,
              <Slide09Impact key={8} />,
              <Slide10Contact key={9} />,
            ].map((slide, i) => (
              <div key={i} ref={setRef(i)} className="scroll-section">
                {slide}
              </div>
            ))}
          </div>

          {/* Keyboard hint */}
          <div
            className="fixed bottom-8 right-20 font-mono text-xs text-vto-border pointer-events-none select-none"
            aria-hidden="true"
          >
            ↑↓ Navigasi
          </div>

          {/* Easter egg hint — very subtle */}
          <div
            className="fixed bottom-2 left-1/2 -translate-x-1/2 font-mono text-xs pointer-events-none select-none"
            style={{ color: 'rgba(255,255,255,0.04)' }}
            aria-hidden="true"
          >
            ↑↑↓↓←→←→BA
          </div>
        </>
      )}
    </>
  )
}
