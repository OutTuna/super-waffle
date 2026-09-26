import { useEffect, useState } from 'react'

/**
 * Reveals `text` one character at a time once `start` becomes true.
 * Respects prefers-reduced-motion by revealing instantly.
 */
export function useTypewriter(text: string, start: boolean, speed = 20) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setCount(text.length)
      return
    }

    setCount(0)
    let i = 0
    const id = setInterval(() => {
      i += 1
      setCount(i)
      if (i >= text.length) clearInterval(id)
    }, speed)

    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, text, speed])

  return { displayed: text.slice(0, count), done: count >= text.length }
}
