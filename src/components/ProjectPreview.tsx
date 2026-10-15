import { ArrowUpRight, Braces, Folder, GitBranch, Terminal } from 'lucide-react'
import type { Project } from '../data/content'

export default function ProjectPreview({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const native = project.slug === 'dota-config'
  return (
    <a
      className={`project-preview ${native ? 'preview-native' : 'preview-rust'}`}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Explore ${project.name} on GitHub`}
    >
      <div className="preview-chrome">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{native ? 'Dota2CFGChanger' : 'Valorant-Shop-Tauri'}</span>
        <ArrowUpRight size={13} />
      </div>
      <div className="preview-canvas">
        <div className="preview-sidebar" aria-hidden="true">
          <Folder size={16} />
          <Braces size={16} />
          <GitBranch size={16} />
          <Terminal size={16} />
        </div>
        <div className="preview-content">
          <div className="preview-kicker">
            <span>PROJECT / 0{index + 1}</span>
            <span>{native ? 'C++' : 'RUST + TYPESCRIPT'}</span>
          </div>
          <div className="preview-symbol" aria-hidden="true">
            {native ? (
              <span>
                cfg<span className="symbol-cursor">_</span>
              </span>
            ) : (
              <span>
                v<span className="symbol-slash">/</span>s
              </span>
            )}
          </div>
          <h3>{project.name}</h3>
          <p>
            {native
              ? 'Your setup. Another account.'
              : 'Your store. Without the game.'}
          </p>
          <div className="architecture">
            <span>{native ? 'CONFIG' : 'REACT'}</span>
            <span aria-hidden="true">→</span>
            <span>{native ? 'BACKUP' : 'TAURI'}</span>
            <span aria-hidden="true">→</span>
            <span>{native ? 'COPY' : 'RUST'}</span>
          </div>
        </div>
      </div>
      <div className="preview-caption">
        <span>
          {project.category} application ·{' '}
          {project.stack.slice(0, 2).join(' / ')}
        </span>
        <span>
          View source <ArrowUpRight size={12} />
        </span>
      </div>
    </a>
  )
}
