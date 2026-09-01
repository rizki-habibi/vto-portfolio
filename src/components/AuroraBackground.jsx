import { useEffect, useRef } from 'react'

/**
 * AuroraBackground — animated aurora borealis effect rendered on a canvas.
 * Sits as a fixed full-screen layer behind content.
 */
export default function AuroraBackground({ opacity = 0.18 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    // Aurora bands
    const bands = [
      { y: H * 0.25, hue: 150, speed: 0.0008, amp: 80, freq: 0.003, phase: 0 },
      { y: H * 0.35, hue: 200, speed: 0.0012, amp: 60, freq: 0.004, phase: 1 },
      { y: H * 0.15, hue: 270, speed: 0.0006, amp: 100, freq: 0.002, phase: 2 },
      { y: H * 0.45, hue: 170, speed: 0.001, amp: 70, freq: 0.0035, phase: 3 },
    ]

    let animId
    let t = 0

    function drawBand(band) {
      const points = []
      const steps = 80
      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * W
        const y =
          band.y +
          Math.sin(x * band.freq + t * band.speed * 1000 + band.phase) * band.amp +
          Math.sin(x * band.freq * 2.3 + t * band.speed * 700) * (band.amp * 0.4)
        points.push({ x, y })
      }

      // Draw as a gradient ribbon
      ctx.beginPath()
      ctx.moveTo(points[0].x, 0)
      points.forEach(p => ctx.lineTo(p.x, p.y))
      ctx.lineTo(W, 0)
      ctx.closePath()

      const grad = ctx.createLinearGradient(0, 0, 0, H * 0.6)
      grad.addColorStop(0, `hsla(${band.hue}, 80%, 60%, 0)`)
      grad.addColorStop(0.4, `hsla(${band.hue}, 80%, 60%, 0.08)`)
      grad.addColorStop(0.7, `hsla(${band.hue + 30}, 80%, 70%, 0.04)`)
      grad.addColorStop(1, `hsla(${band.hue}, 80%, 60%, 0)`)
      ctx.fillStyle = grad
      ctx.fill()
    }

    function animate(timestamp) {
      t = timestamp
      ctx.clearRect(0, 0, W, H)
      bands.forEach(drawBand)
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
      bands[0].y = H * 0.25
      bands[1].y = H * 0.35
      bands[2].y = H * 0.15
      bands[3].y = H * 0.45
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
        opacity,
        mixBlendMode: 'screen',
      }}
    />
  )
}
