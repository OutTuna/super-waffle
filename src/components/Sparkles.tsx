import { useEffect } from 'react'

const glyphs = ['✦', '✧', '★', '·', '✶']
const colors = ['#ffff66', '#ff99ff', '#66ffff', '#ffffff']

// The cursor sparkle trail every good homepage had. Skipped for touch screens
// and for people who prefer reduced motion.
export default function Sparkles() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(pointer: fine)')
    if (reduce.matches || !finePointer.matches) return
    let last = 0
    const onMove = (event: MouseEvent) => {
      const now = performance.now()
      if (now - last < 45) return
      last = now
      const star = document.createElement('span')
      star.className = 'sparkle'
      star.setAttribute('aria-hidden', 'true')
      star.textContent = glyphs[Math.floor(Math.random() * glyphs.length)]
      star.style.left = `${event.clientX + (Math.random() * 16 - 8)}px`
      star.style.top = `${event.clientY + (Math.random() * 16 - 8)}px`
      star.style.color = colors[Math.floor(Math.random() * colors.length)]
      document.body.appendChild(star)
      star.addEventListener('animationend', () => star.remove())
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return null
}
