import { useState, useRef, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

import LoadingScreen from './components/LoadingScreen'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import NavDots from './components/NavDots'
import ScrollProgress from './components/ScrollProgress'
import KonamiEgg from './components/KonamiEgg'

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

  const navigateTo = useCallback((index) => {
    const el = slideRefs.current[index]
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setCurrentSlide(index) }
  }, [])

  /* Track active slide */
  useEffect(() => {
    if (!loaded) return
    const container = containerRef.current
    if (!container) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting && e.intersectionRatio >= 0.5) {
          const idx = slideRefs.current.indexOf(e.target)
          if (idx !== -1) setCurrentSlide(idx)
        }
      }),
      { root: container, threshold: 0.5 }
    )
    slideRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [loaded])

  /* Keyboard nav */
  useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); navigateTo(Math.min(currentSlide + 1, TOTAL - 1)) }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); navigateTo(Math.max(currentSlide - 1, 0)) }
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [currentSlide, navigateTo])

  const setRef = (i) => (el) => { slideRefs.current[i] = el }

  return (
    <>
      <Cursor />
      <KonamiEgg />

      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          <ScrollProgress />
          <Navbar currentSlide={currentSlide} onNavigate={navigateTo} />
          <NavDots active={currentSlide} onNavigate={navigateTo} />

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
              <div key={i} ref={setRef(i)} className="scroll-section">{slide}</div>
            ))}
          </div>

          {/* Keyboard hint — comic style */}
          <div
            className="fixed bottom-4 right-16 font-bangers text-xs pointer-events-none"
            style={{ background: '#1a1008', color: '#ffe838', border: '2px solid #ffe838', padding: '2px 8px', opacity: 0.6 }}
          >
            ↑↓ NAVIGASI
          </div>
        </>
      )}
    </>
  )
}
