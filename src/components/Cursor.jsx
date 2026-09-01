import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX - 6 + 'px'
      cursor.style.top = mouseY - 6 + 'px'
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.left = followerX - 18 + 'px'
      follower.style.top = followerY - 18 + 'px'
      requestAnimationFrame(animate)
    }

    const onMouseDown = () => {
      cursor.style.transform = 'scale(2)'
      follower.style.transform = 'scale(0.5)'
    }
    const onMouseUp = () => {
      cursor.style.transform = 'scale(1)'
      follower.style.transform = 'scale(1)'
    }

    // Scale cursor on hoverable elements
    const onMouseEnterLink = () => {
      cursor.style.transform = 'scale(3)'
      follower.style.opacity = '0'
    }
    const onMouseLeaveLink = () => {
      cursor.style.transform = 'scale(1)'
      follower.style.opacity = '1'
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    animate()

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach(l => {
      l.addEventListener('mouseenter', onMouseEnterLink)
      l.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
