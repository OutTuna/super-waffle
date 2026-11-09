import { useState } from 'react'
import { useI18n, type Locale } from '../i18n'
import { profile } from '../data/content'
import Badges from './Badges'

const links = [
  { href: '#/', route: '/', label: 'Home', icon: '🏠' },
  { href: '#/projects', route: '/projects', label: 'Projects', icon: '💾' },
  { href: '#/about', route: '/about', label: 'About me', icon: '👤' },
  { href: '#/guestbook', route: '/guestbook', label: 'Guestbook', icon: '📖' },
]
const locales: { id: Locale; label: string }[] = [
  { id: 'en', label: 'EN' },
  { id: 'uk', label: 'UA' },
  { id: 'ru', label: 'RU' },
]

// Counts visits from this browser only. There is no server, so no tracking.
// Counted once per page load, outside React, so re-renders never add to it.
let visitCount: number | null = null
function countVisit() {
  if (visitCount !== null) return visitCount
  visitCount = 1
  try {
    visitCount = Number(localStorage.getItem('visits') ?? '0') + 1
    localStorage.setItem('visits', String(visitCount))
  } catch {
    /* Storage may be unavailable; show the first visit. */
  }
  return visitCount
}
function useVisitCount() {
  const [count] = useState(countVisit)
  return count
}

export default function Sidebar({ route }: { route: string }) {
  const { t, locale, setLocale } = useI18n()
  const visits = useVisitCount()
  return (
    <aside className="sidebar">
      <nav className="side-box" aria-label={t('Main navigation')}>
        <p className="side-title">~ {t('Navigation')} ~</p>
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="bevel-button"
                href={link.href}
                aria-current={route === link.route ? 'page' : undefined}
              >
                <span aria-hidden="true">{link.icon}</span> {t(link.label)}
              </a>
            </li>
          ))}
          <li>
            <a
              className="bevel-button"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">🐙</span> GitHub
            </a>
          </li>
        </ul>
      </nav>

      <div className="side-box">
        <p className="side-title">~ {t('Language')} ~</p>
        <div className="lang-row" role="group" aria-label={t('Language')}>
          {locales.map((item) => (
            <button
              key={item.id}
              type="button"
              className="bevel-button small"
              aria-pressed={locale === item.id}
              onClick={() => setLocale(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="side-box counter-box">
        <p className="side-title">~ {t('Your visits')} ~</p>
        <p className="counter" aria-label={String(visits)}>
          {String(visits)
            .padStart(6, '0')
            .split('')
            .map((digit, index) => (
              <span key={index}>{digit}</span>
            ))}
        </p>
        <p className="tiny">{t('counted in your browser only')}</p>
      </div>

      <div className="side-box side-badges">
        <Badges />
      </div>
    </aside>
  )
}
