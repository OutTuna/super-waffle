import { useEffect, useRef, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

type Props = {
  text: string
  speed?: number
  delay?: number
  className?: string
}

// Wrap any bit of copy in this and it types itself out, letter by letter,
// the first time it scrolls into view — then stays put on repeat visits.
export default function TypeOnView({ text, speed = 18, delay = 0, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setArmed(true), delay)
    return () => clearTimeout(t)
  }, [visible, delay])

  const { displayed, done } = useTypewriter(text, armed, speed)

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {displayed}
        {armed && !done && <span className="caret" />}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  )
}
