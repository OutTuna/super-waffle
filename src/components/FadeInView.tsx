import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  duration?: number
  /** 'rise' fades in with a tiny upward slide (default). 'fade' is a plain
   * opacity-only fade with no movement. */
  variant?: 'rise' | 'fade'
  className?: string
  as?: 'div' | 'span'
}

// The first time the element scrolls into view: either a plain fade, or a
// fade + tiny rise. No typing — just used where a typewriter effect would
// be too much.
export default function FadeInView({
  children,
  delay = 0,
  duration = 500,
  variant = 'rise',
  className = '',
  as = 'div',
}: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

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
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Tag = as as any
  const display = as === 'span' ? 'inline-block' : ''
  const rise = variant === 'rise' ? (visible ? 'translate-y-0' : 'translate-y-1.5') : ''

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
      className={`transition-all ease-out ${visible ? 'opacity-100' : 'opacity-0'} ${display} ${rise} ${className}`}
    >
      {children}
    </Tag>
  )
}
