import { useI18n } from '../i18n'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/content'

export default function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const { t } = useI18n()
  return (
    <article className="project-card">
      <div className="project-card-meta">
        <span className="mono">
          {String(index + 1).padStart(2, '0')} / {t(project.category)}
        </span>
        <span
          className={`project-status ${project.status === 'archived' ? 'is-archived' : ''}`}
        >
          <span />
          {project.status === 'shipped'
            ? t('Released')
            : project.status === 'archived'
              ? t('Archived')
              : t('In progress')}
        </span>
      </div>
      <h2>
        <a href={project.href} target="_blank" rel="noreferrer">
          {t(project.name)}
          <ArrowUpRight size={21} />
        </a>
      </h2>
      <p>{t(project.description)}</p>
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
          aria-label={t('{name} source code', { name: t(project.name) })}
        >
          {t('Source')}
          <ArrowUpRight size={13} />
        </a>
      </div>
    </article>
  )
}
