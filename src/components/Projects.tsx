import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../data/content'

const statusStyle: Record<Project['status'], string> = {
  shipped: 'text-accent-400 border-accent-400/30',
  'in progress': 'text-accent-500 border-accent-500/30',
  archived: 'text-bone-500 border-bone-500/30',
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-6 sm:px-10 sm:py-8">
      <div className="mx-auto max-w-[880px]">
        <p className="prompt font-mono text-sm text-bone-300">./projects --list</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href || '#'}
              target={project.href ? '_blank' : undefined}
              rel={project.href ? 'noreferrer' : undefined}
              className="group flex flex-col justify-between rounded-lg border border-ink-700 bg-ink-900/60 p-5 transition-colors hover:border-accent-500/40 cursor-pointer"
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
                <p className="mt-2.5 text-sm leading-relaxed text-bone-300">
                  {project.description}
                </p>
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
          ))}
        </div>
      </div>
    </section>
  )
}
