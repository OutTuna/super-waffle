import { useI18n } from '../i18n'
import { ArrowRight, ArrowUpRight, Code2, Music2, Terminal } from 'lucide-react'
import { featuredProjects, profile, projects } from '../data/content'
import ProjectPreview from '../components/ProjectPreview'

export default function HomePage() {
  const { t } = useI18n()
  return (
    <>
      <section className="wrap hero">
        <p className="eyebrow">
          <span className="tiny-star" aria-hidden="true">
            ✦
          </span>{' '}
          {t('INDEPENDENT DEVELOPER / OUTTUNA')}
        </p>
        <h1>
          {t('Small tools.')}
          <br />
          <em>{t('Less friction.')}</em>
        </h1>
        <p className="lead">
          {t('I’m Gleb. I build apps, automate the repetitive,')}
          <br className="desktop-break" />{' '}
          {t('and figure out how things work. Sometimes I make music.')}
        </p>
        <div className="button-row">
          <a className="button" href="#/projects">
            {t('Explore my projects')}
            <ArrowRight size={16} />
          </a>
          <a className="button button-outline" href="#/about">
            {t('A little about me')}
          </a>
        </div>
        <div className="hero-divider">
          <span>{t('SELECTED BUILDS')}</span>
          <span aria-hidden="true">↓</span>
          <span>01 — 02</span>
        </div>
        <div className="preview-grid">
          {featuredProjects.map((project, index) => (
            <ProjectPreview
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
      <div className="facts-band">
        <div className="wrap facts-grid">
          <div>
            <b>{String(projects.length).padStart(2, '0')}</b>
            <span>{t('projects in the archive')}</span>
          </div>
          <div>
            <b>
              C++ <span>/</span> Rust
            </b>
            <span>{t('closer to the machine')}</span>
          </div>
          <div>
            <b>
              {t('Code')} <span>&</span> {t('music')}
            </b>
            <span>{t('two ways to make things')}</span>
          </div>
          <div>
            <b className="fact-star" aria-hidden="true">
              ✳
            </b>
            <span>{t('always something to learn')}</span>
          </div>
        </div>
      </div>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t('WHAT I MAKE')}</p>
            <h2>
              {t('Useful things.')}
              <br className="mobile-break" /> {t('Built out of curiosity.')}
            </h2>
          </div>
          <a className="text-link" href="#/projects">
            {t('All projects')}
            <ArrowRight size={15} />
          </a>
        </div>
        <div className="interest-grid">
          <a className="interest-card" href="#/projects?category=Desktop">
            <Terminal size={22} />
            <h3>{t('Desktop software')}</h3>
            <p>
              {t(
                'Native utilities and small apps that solve a specific problem and get out of your way.',
              )}
            </p>
            <span>
              {t('Explore the apps')}
              <ArrowUpRight size={14} />
            </span>
          </a>
          <a className="interest-card" href="#/projects?category=Automation">
            <Code2 size={22} />
            <h3>{t('Less manual work')}</h3>
            <p>
              {t(
                'Bots, scripts and little bridges between the tools I already use. Repetition is optional.',
              )}
            </p>
            <span>
              {t('See the automations')}
              <ArrowUpRight size={14} />
            </span>
          </a>
          <a className="interest-card" href="#/about">
            <Music2 size={22} />
            <h3>{t('Beyond the editor')}</h3>
            <p>
              {t(
                'Low-level rabbit holes, university experiments and music. Not everything needs a release.',
              )}
            </p>
            <span>
              {t('Meet the person')}
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
      </section>
      <section className="wrap section section-last">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">{t('COMPARE NOTES')}</p>
            <h2>{t('Have a look under the hood.')}</h2>
            <p>
              {t(
                'The code, the experiments and the occasional unfinished idea — all in one place.',
              )}
            </p>
          </div>
          <a
            className="button"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            {t('Find me on GitHub')}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  )
}
