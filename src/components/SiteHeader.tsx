import { useI18n, type Locale } from '../i18n'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Pause, Play, Search } from 'lucide-react'
import { profile } from '../data/content'

export default function SiteHeader({
  route,
  onSearch,
}: {
  route: string
  onSearch: () => void
}) {
  const { t, locale, setLocale } = useI18n()
  const [motionPaused, setMotionPaused] = useState(false)
  useEffect(() => {
    document.documentElement.dataset.motion = motionPaused
      ? 'paused'
      : 'running'
    return () => {
      delete document.documentElement.dataset.motion
    }
  }, [motionPaused])

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <a className="brand" href="#/" aria-label={t('mental. home')}>
          <span className="brand-mark" aria-hidden="true">
            ✳
          </span>
          <span>
            mental<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="navigation" aria-label={t('Main navigation')}>
          {[
            ['/', t('Home')],
            ['/projects', t('Projects')],
            ['/about', t('About')],
          ].map(([path, label]) => (
            <a
              key={path}
              href={`#${path}`}
              aria-current={route === path ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <label className="language-picker">
            <span className="sr-only">{t('Language')}</span>
            <select
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
            >
              <option value="en" lang="en">
                EN
              </option>
              <option value="uk" lang="uk">
                УК
              </option>
              <option value="ru" lang="ru">
                РУ
              </option>
            </select>
          </label>
          <button
            className="search-trigger"
            onClick={onSearch}
            aria-label={t('Search site (Control or Command K)')}
          >
            <Search size={15} />
            <span>{t('Jump to')}</span>
            <kbd>⌘ K</kbd>
          </button>
          <a
            className="button button-small button-outline"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="status-strip">
        <div className="wrap strip-inner">
          <div className="status-ticker">
            <span className="sr-only">
              {t(
                'A personal corner of the internet. Small tools, less friction. Code, curiosity and a little music.',
              )}
            </span>
            <div className="ticker-track" aria-hidden="true">
              {[0, 1].map((copy) => (
                <span className="ticker-copy" key={copy}>
                  <span className="status-dot" />
                  {t('A PERSONAL CORNER OF THE INTERNET')}
                  <span className="ticker-star">✦</span>
                  {t('SMALL TOOLS, LESS FRICTION')}
                  <span className="ticker-star">✦</span>
                  {t('CODE, CURIOSITY & A LITTLE MUSIC')}{' '}
                  <span className="ticker-star">✦</span>
                </span>
              ))}
            </div>
          </div>
          <span className="strip-note">
            {t('CODE, CURIOSITY & A LITTLE MUSIC')}
            <span aria-hidden="true">✦</span>
          </span>
          <button
            className="motion-toggle"
            onClick={() => setMotionPaused((paused) => !paused)}
            aria-label={
              motionPaused ? t('Resume animations') : t('Pause animations')
            }
            aria-pressed={motionPaused}
            title={
              motionPaused ? t('Resume animations') : t('Pause animations')
            }
          >
            {motionPaused ? <Play size={12} /> : <Pause size={12} />}
          </button>
        </div>
      </div>
    </header>
  )
}
