import { useI18n } from '../i18n'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { about, now, profile, techGroups } from '../data/content'

export default function AboutPage() {
  const { t } = useI18n()
  return (
    <div className="wrap page about-page">
      <header className="page-heading">
        <p className="eyebrow">{t('THE PERSON BEHIND THE CODE')}</p>
        <h1>
          {t('Hi, I’m Gleb.')}
          <br />
          <em>{t('OutTuna, online.')}</em>
        </h1>
      </header>
      <div className="about-intro">
        <div className="about-copy">
          {about.map((paragraph) => (
            <p key={t(paragraph)}>{t(paragraph)}</p>
          ))}
          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            github.com/OutTuna <ArrowUpRight size={16} />
          </a>
        </div>
        <aside className="profile-card">
          <div className="profile-monogram" aria-hidden="true">
            ot<span>✦</span>
          </div>
          <p className="eyebrow">{t('OUTTUNA / GLEB')}</p>
          <p>
            {t('Part developer.')}
            <br />
            {t('Part musician.')}
            <br />
            <em>{t('Entirely curious.')}</em>
          </p>
          <div className="profile-card-rule" />
          <span className="mono">
            {t('Making things, figuring things out.')}
          </span>
        </aside>
      </div>
      <section className="about-section">
        <p className="eyebrow">{t('RIGHT NOW')}</p>
        <h2>
          {t('Somewhere between')}
          <br />
          {t('learning and building.')}
        </h2>
        <div className="now-grid">
          {now.map((item, index) => (
            <article key={item.title}>
              <span className="mono">
                0{index + 1} / {t(item.title).toUpperCase()}
              </span>
              <p>{t(item.text)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-section">
        <p className="eyebrow">{t('THE TOOLBOX')}</p>
        <h2>
          {t('Different tools.')}
          <br />
          {t('The same curiosity.')}
        </h2>
        <p className="section-description">
          {t(
            'Technologies I use, learn and experiment with. The project decides the tool.',
          )}
        </p>
        <div className="toolbox">
          {techGroups.map((group) => (
            <div className="toolbox-row" key={t(group.name)}>
              <h3>{t(group.name)}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="contact-panel">
        <div>
          <p className="eyebrow">{t('FOLLOW THE THREAD')}</p>
          <h2>{t('Curious what that looks like?')}</h2>
          <p>
            {t(
              'The projects are a better introduction than a list of technologies.',
            )}
          </p>
        </div>
        <a className="button" href="#/projects">
          {t('Browse the archive')}
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}
