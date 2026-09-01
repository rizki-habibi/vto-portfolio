import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const STAR_COUNT = 180
    const stars = []

    class Star {
      constructor() {
        this.reset(true)
      }
      reset(initial = false) {
        this.x = Math.random() * W
        this.y = initial ? Math.random() * H : Math.random() * H
        this.size = Math.random() * 1.8 + 0.2
        this.baseAlpha = Math.random() * 0.7 + 0.1
        this.alpha = this.baseAlpha
        this.twinkleSpeed = Math.random() * 0.02 + 0.005
        this.twinkleOffset = Math.random() * Math.PI * 2
        this.color = this.pickColor()
        this.pulse = 0
      }
      pickColor() {
        const colors = ['#ffffff', '#e8f4ff', '#ffe8f0', '#f0e8ff', '#e8fff0', '#00ff88', '#0066ff']
        return colors[Math.floor(Math.random() * colors.length)]
      }
      update(t) {
        this.pulse = t * this.twinkleSpeed + this.twinkleOffset
        this.alpha = this.baseAlpha * (0.4 + 0.6 * Math.abs(Math.sin(this.pulse)))
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.fill()

        // Glow for larger stars
        if (this.size > 1.2) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
          const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3)
          grad.addColorStop(0, this.color + '44')
          grad.addColorStop(1, 'transparent')
          ctx.fillStyle = grad
          ctx.globalAlpha = this.alpha * 0.4
          ctx.fill()
        }
        ctx.globalAlpha = 1
      }
    }

    // Shooting stars
    const shootingStars = []
    class ShootingStar {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * W * 0.7
        this.y = Math.random() * H * 0.4
        this.len = Math.random() * 120 + 60
        this.speed = Math.random() * 8 + 4
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3
        this.alpha = 1
        this.active = false
        this.timer = Math.random() * 400 + 200
      }
      update() {
        if (!this.active) {
          this.timer--
          if (this.timer <= 0) this.active = true
          return
        }
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed
        this.alpha -= 0.025
        if (this.alpha <= 0 || this.x > W || this.y > H) this.reset()
      }
      draw() {
        if (!this.active) return
        const tail = {
          x: this.x - Math.cos(this.angle) * this.len,
          y: this.y - Math.sin(this.angle) * this.len,
        }
        const grad = ctx.createLinearGradient(tail.x, tail.y, this.x, this.y)
        grad.addColorStop(0, 'transparent')
        grad.addColorStop(1, `rgba(0,255,136,${this.alpha})`)
        ctx.beginPath()
        ctx.moveTo(tail.x, tail.y)
        ctx.lineTo(this.x, this.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.globalAlpha = this.alpha
        ctx.stroke()
        ctx.globalAlpha = 1
      }
    }

    for (let i = 0; i < STAR_COUNT; i++) stars.push(new Star())
    for (let i = 0; i < 4; i++) shootingStars.push(new ShootingStar())

    let animId
    let t = 0
    function animate() {
      ctx.clearRect(0, 0, W, H)
      t++
      stars.forEach(s => { s.update(t); s.draw() })
      shootingStars.forEach(s => { s.update(); s.draw() })
      animId = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
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
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }}
    />
  )
}
