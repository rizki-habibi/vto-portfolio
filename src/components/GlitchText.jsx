import { useEffect, useRef, useState } from 'react'

/**
 * GlitchText — renders text with a CSS + JS glitch effect.
 * Props:
 *   text      : string
 *   className : extra classes for the outer span
 *   intensity : 'low' | 'medium' | 'high'  (default 'medium')
 *   tag       : HTML tag to use (default 'span')
 */
export default function GlitchText({
  text,
  className = '',
  intensity = 'medium',
  tag: Tag = 'span',
}) {
  const elRef = useRef(null)
  const [glitching, setGlitching] = useState(false)

  const intervalMap = { low: 4000, medium: 2500, high: 1200 }
  const durationMap = { low: 300, medium: 500, high: 700 }

  useEffect(() => {
    const triggerGlitch = () => {
      setGlitching(true)
      setTimeout(() => setGlitching(false), durationMap[intensity])
    }
    // Random initial delay
    const initDelay = setTimeout(() => {
      triggerGlitch()
      const id = setInterval(triggerGlitch, intervalMap[intensity] + Math.random() * 1000)
      return () => clearInterval(id)
    }, Math.random() * 2000)

    const id = setInterval(triggerGlitch, intervalMap[intensity] + Math.random() * 1000)
    return () => {
      clearTimeout(initDelay)
      clearInterval(id)
    }
  }, [intensity])

  return (
    <Tag
      ref={elRef}
      className={`glitch-wrapper ${glitching ? 'glitching' : ''} ${className}`}
      data-text={text}
      aria-label={text}
    >
      {text}
    </Tag>
  )
}
