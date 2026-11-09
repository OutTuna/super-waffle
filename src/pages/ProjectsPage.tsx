import { useMemo, useState } from 'react'
import { useI18n } from '../i18n'
import { projects, type Category } from '../data/content'
import Box from '../components/Box'

const categories: Category[] = ['All', 'Desktop', 'Automation', 'Experiments']
const statusLabels = {
  shipped: 'done',
  'in progress': 'in progress',
  archived: 'archived',
} as const

export default function ProjectsPage() {
  const { t } = useI18n()
  const [category, setCategory] = useState<Category>('All')
  const [search, setSearch] = useState('')
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return projects.filter(
      (project) =>
        (category === 'All' || project.category === category) &&
        `${project.name} ${t(project.name)} ${project.description} ${t(project.description)} ${project.stack.join(' ')}`
          .toLowerCase()
          .includes(query),
    )
  }, [category, search, t])

  return (
    <Box title={t('My projects')}>
      <p>
        {t(
          'Desktop apps, helpful scripts and experiments along the way. Click a name to see the code on GitHub.',
        )}
      </p>
      <div className="toolbar">
        <div className="lang-row" role="group" aria-label={t('Category')}>
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className="bevel-button small"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {t(item)}
            </button>
          ))}
        </div>
        <label className="search">
          <span>{t('Search')}:</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t('name or language…')}
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="center empty">
          {t('Nothing found... try another search!')}
        </p>
      ) : (
        <div className="table-wrap">
          <table className="projects">
            <thead>
              <tr>
                <th scope="col">{t('Name')}</th>
                <th scope="col">{t('What is it')}</th>
                <th scope="col">{t('Made with')}</th>
                <th scope="col">{t('Status')}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((project) => (
                <tr key={project.slug}>
                  <td>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {t(project.name)}
                    </a>
                    {project.featured && (
                      <>
                        {' '}
                        <span className="hot">{t('HOT!')}</span>
                      </>
                    )}
                    <div className="tiny">{t(project.category)}</div>
                  </td>
                  <td>{t(project.description)}</td>
                  <td className="stack">{project.stack.join(', ')}</td>
                  <td>
                    <span className={`status status-${project.status.replace(' ', '-')}`}>
                      {t(statusLabels[project.status])}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="tiny center">
        {t('Showing {shown} of {total}', {
          shown: String(filtered.length),
          total: String(projects.length),
        })}
      </p>
    </Box>
  )
}
