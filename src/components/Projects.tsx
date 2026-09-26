import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../data/content'
import { useProjectsProgress } from '../context/ProjectsProgress'
import TypeOnView from './TypeOnView'

const statusStyle: Record<Project['status'], string> = {
  shipped: 'text-accent-400 border-accent-400/30',
  'in progress': 'text-accent-500 border-accent-500/30',
  archived: 'text-bone-500 border-bone-500/30',
}

function ProjectCard({
  project,
  index,
  skip,
  onVisible,
}: {
  project: Project
  index: number
  skip: boolean
  onVisible: () => void
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [visible, setVisible] = useState(false)
  const notifiedRef = useRef(false)

  // Reveals on its own the first time it scrolls into view — no typing,
  // just a plain fade + rise, one card (or row) at a time as you scroll.
  useEffect(() => {
    if (skip) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [skip])

  useEffect(() => {
    if (visible && !notifiedRef.current) {
      notifiedRef.current = true
      onVisible()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  return (
    <a
      ref={ref}
      href={project.href || '#'}
      target={project.href ? '_blank' : undefined}
      rel={project.href ? 'noreferrer' : undefined}
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
      className={`group flex flex-col justify-between rounded-lg border border-ink-700 bg-ink-900/60 p-5 transition-all duration-500 ease-out hover:border-accent-500/40 cursor-pointer ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-mono text-sm text-bone-100">{project.name}</h3>
          {project.href && (
            <ArrowUpRight
              size={16}
              className="mt-0.5 flex-shrink-0 text-bone-500 transition-colors group-hover:text-accent-400"
            />
          )}
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-bone-300">{project.description}</p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span
          className={`rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${statusStyle[project.status]}`}
        >
          {project.status}
        </span>
        {project.stack.map((tech) => (
          <span key={tech} className="font-mono text-[11px] text-bone-500">
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}

export default function Projects() {
  const { markProjectsDone, skipRequested } = useProjectsProgress()
  const revealedCountRef = useRef(0)
  const finishedRef = useRef(false)

  const handleCardVisible = () => {
    revealedCountRef.current += 1
    if (revealedCountRef.current >= projects.length && !finishedRef.current) {
      finishedRef.current = true
      markProjectsDone()
    }
  }

  return (
    <section id="projects" className="scroll-mt-20 px-6 py-6 sm:px-10 sm:py-8">
      <div className="mx-auto max-w-[880px]">
        <p className="prompt font-mono text-sm text-bone-300">
          <TypeOnView text="./projects --list" speed={26} />
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              skip={skipRequested}
              onVisible={handleCardVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
