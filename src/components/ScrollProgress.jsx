import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = document.querySelector('.scroll-container')
    if (!container) return
    const update = () => {
      const max = container.scrollHeight - container.clientHeight
      setProgress(max > 0 ? (container.scrollTop / max) * 100 : 0)
    }
    container.addEventListener('scroll', update, { passive: true })
    update()
    return () => container.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="comic-progress-track">
      <div className="comic-progress-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
    </div>
  )
}
