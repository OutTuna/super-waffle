import { createContext, useCallback, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type Ctx = {
  projectsDone: boolean
  markProjectsDone: () => void
  skipRequested: boolean
  requestSkip: () => void
}

const ProjectsProgressContext = createContext<Ctx | null>(null)

export function ProjectsProgressProvider({ children }: { children: ReactNode }) {
  const [projectsDone, setProjectsDone] = useState(false)
  const [skipRequested, setSkipRequested] = useState(false)
  const markProjectsDone = useCallback(() => setProjectsDone(true), [])
  // A section further down the page (Stats/Footer) scrolled into view before
  // the project cards finished typing — fast-forward them instantly instead
  // of leaving the visitor waiting on an animation they've already passed.
  const requestSkip = useCallback(() => setSkipRequested(true), [])

  return (
    <ProjectsProgressContext.Provider
      value={{ projectsDone, markProjectsDone, skipRequested, requestSkip }}
    >
      {children}
    </ProjectsProgressContext.Provider>
  )
}

export function useProjectsProgress() {
  const ctx = useContext(ProjectsProgressContext)
  if (!ctx) throw new Error('useProjectsProgress must be used within ProjectsProgressProvider')
  return ctx
}
