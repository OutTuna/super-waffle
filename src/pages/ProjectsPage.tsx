import { useEffect, useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { projects, type Category } from '../data/content'
import ProjectCard from '../components/ProjectCard'

const categories: Category[] = ['All', 'Desktop', 'Automation', 'Experiments']
function initialCategory(): Category {
  const value = new URLSearchParams(window.location.hash.split('?')[1]).get(
    'category',
  ) as Category
  return categories.includes(value) ? value : 'All'
}
export default function ProjectsPage() {
  const [category, setCategory] = useState<Category>(initialCategory)
  const [search, setSearch] = useState('')
  const [showArchived, setShowArchived] = useState(true)
  useEffect(() => {
    const update = () => setCategory(initialCategory())
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (category === 'All' || project.category === category) &&
          (showArchived || project.status !== 'archived') &&
          `${project.name} ${project.description} ${project.stack.join(' ')}`
            .toLowerCase()
            .includes(search.trim().toLowerCase()),
      ),
    [category, search, showArchived],
  )
  const reset = () => {
    setSearch('')
    setCategory('All')
    setShowArchived(true)
    window.history.replaceState(null, '', '#/projects')
  }
  return (
    <section className="wrap page projects-page">
      <header className="page-heading">
        <p className="eyebrow">THE PROJECT ARCHIVE</p>
        <h1>
          A few things
          <br />
          <em>I’ve put together.</em>
        </h1>
        <p className="lead">
          Desktop apps, helpful scripts and experiments along the way.
          <br className="desktop-break" /> Some solve a problem. Some started
          with “what if?”.
        </p>
      </header>
      <div className="project-toolbar">
        <div className="filter-tabs" role="group" aria-label="Project category">
          {categories.map((value) => (
            <button
              key={value}
              aria-pressed={category === value}
              onClick={() => {
                setCategory(value)
                window.history.replaceState(
                  null,
                  '',
                  value === 'All'
                    ? '#/projects'
                    : `#/projects?category=${value}`,
                )
              }}
            >
              {value}
              <span>
                {value === 'All'
                  ? projects.length
                  : projects.filter((project) => project.category === value)
                      .length}
              </span>
            </button>
          ))}
        </div>
        <label className="project-search">
          <Search size={16} />
          <span className="sr-only">
            Search projects by name, description or technology
          </span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Find a project or language…"
            type="search"
          />
          {search && (
            <button onClick={() => setSearch('')} aria-label="Clear search">
              <X size={15} />
            </button>
          )}
        </label>
      </div>
      <div className="results-row">
        <p role="status">
          {String(filtered.length).padStart(2, '0')} PROJECT
          {filtered.length === 1 ? '' : 'S'}
          {category !== 'All' ? ` / ${category.toUpperCase()}` : ' / ALL WORK'}
        </p>
        <label>
          <input
            type="checkbox"
            checked={showArchived}
            onChange={(event) => setShowArchived(event.target.checked)}
          />
          Include archived
        </label>
      </div>
      {filtered.length ? (
        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={projects.indexOf(project)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={28} />
          <h2>No projects in this orbit.</h2>
          <p>Try another search or bring back the other categories.</p>
          <button className="button button-outline" onClick={reset}>
            Reset filters
          </button>
        </div>
      )}
      <p className="archive-note">
        <span aria-hidden="true">✦</span> A personal archive, always growing.
        Every project links to its repository.
      </p>
    </section>
  )
}
