import { useEffect, useRef, useState } from 'react'

/**
 * Types `lines` one at a time, in order — each line only starts once the
 * previous one has finished (plus a short pause). Nothing happens until
 * `start` is true, so a caller can hold the whole sequence until it's ready
 * (e.g. scrolled into view, or a previous block finished).
 */
export function useSequentialTypewriter(
  lines: string[],
  speed = 22,
  pause = 350,
  start = true,
  skip = false,
) {
  const [revealed, setRevealed] = useState<string[]>(() => lines.map(() => ''))
  const [index, setIndex] = useState(-1) // -1 = not started yet
  const reducedRef = useRef(false)
  const skipRef = useRef(skip)

  useEffect(() => {
    skipRef.current = skip
  }, [skip])

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (!start || index !== -1) return
    if (reducedRef.current || skipRef.current) {
      setRevealed(lines)
      setIndex(lines.length)
      return
    }
    setIndex(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start])

  // Skip requested mid-type (e.g. the visitor already scrolled to the
  // bottom) — jump straight to the fully revealed state.
  useEffect(() => {
    if (skip && start && index >= 0 && index < lines.length) {
      setRevealed(lines)
      setIndex(lines.length)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip])

  useEffect(() => {
    if (index < 0 || index >= lines.length || reducedRef.current) return

    const text = lines[index]
    if (skipRef.current) {
      setRevealed(lines)
      setIndex(lines.length)
      return
    }

    let i = 0
    const id = setInterval(() => {
      if (skipRef.current) {
        clearInterval(id)
        setRevealed(lines)
        setIndex(lines.length)
        return
      }
      i += 1
      setRevealed((prev) => {
        const next = [...prev]
        next[index] = text.slice(0, i)
        return next
      })
      if (i >= text.length) {
        clearInterval(id)
        setTimeout(() => setIndex((v) => v + 1), pause)
      }
    }, speed)

    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return { revealed, activeIndex: index, done: index >= lines.length }
}
