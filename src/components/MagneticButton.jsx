import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * MagneticButton — wraps children in a div that attracts toward the cursor.
 * Props:
 *   strength   : how strong the magnetic pull is (default 0.35)
 *   className  : wrapper classes
 *   children   : content inside button
 *   onClick    : click handler
 *   as         : element type ('button' | 'a' | 'div')
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  onClick,
  href,
  as: Tag = 'button',
  ...props
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    setPos({ x: dx * strength, y: dy * strength })
  }

  const onMouseLeave = () => {
    setPos({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      className={`magnetic-btn ${className}`}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      animate={{ x: pos.x, y: pos.y, scale: hovered ? 1.05 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      onClick={onClick}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      <motion.div
        animate={{ x: pos.x * 0.3, y: pos.y * 0.3 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
