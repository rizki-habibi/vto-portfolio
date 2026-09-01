import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx - 8 + 'px'
      dot.style.top = my - 8 + 'px'
    }
    const tick = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      ring.style.left = rx - 20 + 'px'
      ring.style.top = ry - 20 + 'px'
      requestAnimationFrame(tick)
    }

    const onDown = () => { dot.style.transform = 'scale(2)'; ring.style.transform = 'scale(0.5)' }
    const onUp = () => { dot.style.transform = 'scale(1)'; ring.style.transform = 'scale(1)' }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    tick()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={ringRef} className="cursor-follower" />
    </>
  )
}
