import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/content'

export default function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <article className="project-card">
      <div className="project-card-meta">
        <span className="mono">
          {String(index + 1).padStart(2, '0')} / {project.category}
        </span>
        <span
          className={`project-status ${project.status === 'archived' ? 'is-archived' : ''}`}
        >
          <span />
          {project.status === 'shipped'
            ? 'Released'
            : project.status === 'archived'
              ? 'Archived'
              : 'In progress'}
        </span>
      </div>
      <h2>
        <a href={project.href} target="_blank" rel="noreferrer">
          {project.name}
          <ArrowUpRight size={21} />
        </a>
      </h2>
      <p>{project.description}</p>
      <div className="project-card-bottom">
        <div className="tags">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <a
          href={project.href}
          className="source-link"
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} source code`}
        >
          Source <ArrowUpRight size={13} />
        </a>
      </div>
    </article>
  )
}
