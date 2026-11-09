import { useI18n } from '../i18n'
import { about, featuredProjects, news, profile } from '../data/content'
import Box from '../components/Box'
import UnderConstruction from '../components/UnderConstruction'

function formatDate(date: string) {
  const [year, month, day] = date.split('-')
  return `${day}.${month}.${year}`
}

export default function HomePage() {
  const { t } = useI18n()
  return (
    <>
      <Box title={t('Welcome!!!')} tone="purple">
        <p className="welcome">
          {t('Hi and welcome to my little corner of the web!')}{' '}
          <span aria-hidden="true">👋</span>
        </p>
        <p>{t(about[0])}</p>
        <p>
          {t('Here you can check out the')}{' '}
          <a href="#/projects">{t('stuff I made')}</a>
          {t(', read')} <a href="#/about">{t('more about me')}</a>{' '}
          {t('or leave a note in the')}{' '}
          <a href="#/guestbook">{t('guestbook')}</a>.
        </p>
        <ul className="star-list">
          {profile.roles.map((role) => (
            <li key={role}>{t(role)}</li>
          ))}
        </ul>
      </Box>

      <Box title={t('What’s new?')} tone="green">
        <dl className="news">
          {news.map((item) => (
            <div key={item.text}>
              <dt>
                <span className="new-tag">{t('NEW!')}</span>{' '}
                {formatDate(item.date)}
              </dt>
              <dd>{t(item.text)}</dd>
            </div>
          ))}
        </dl>
      </Box>

      <Box title={t('Cool stuff I made')}>
        <ul className="featured">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <a href={project.href} target="_blank" rel="noreferrer">
                <strong>{t(project.name)}</strong>
              </a>{' '}
              <span className="hot">{t('HOT!')}</span>
              <p>{t(project.description)}</p>
              <p className="tiny">[ {project.stack.join(' · ')} ]</p>
            </li>
          ))}
        </ul>
        <p className="center">
          <a href="#/projects">&gt;&gt; {t('See all my projects')} &lt;&lt;</a>
        </p>
      </Box>

      <UnderConstruction
        text={t('This site is always under construction!')}
      />
    </>
  )
}
