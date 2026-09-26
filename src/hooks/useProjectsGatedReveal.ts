import { useEffect, useRef, useState } from 'react'
import { useProjectsProgress } from '../context/ProjectsProgress'

/**
 * Ties a section's reveal to whether the Projects list has finished typing.
 * The section only ever becomes visible once projects are actually done —
 * but if it scrolls into view *before* that (the visitor scrolled straight
 * past Projects), it asks Projects to fast-forward instead of leaving the
 * visitor waiting on an animation they've already scrolled by.
 */
export function useProjectsGatedReveal<T extends HTMLElement = HTMLElement>(threshold = 0.15) {
  const { projectsDone, requestSkip } = useProjectsProgress()

  const ref = useRef<T>(null)
  const [intersected, setIntersected] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (intersected && !projectsDone) requestSkip()
  }, [intersected, projectsDone, requestSkip])

  return { ref, visible: intersected && projectsDone }
}
