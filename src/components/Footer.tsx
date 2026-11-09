import { useI18n } from '../i18n'
import { profile } from '../data/content'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="site-footer">
      <hr className="rainbow" />
      <p>
        <a href="#/">{t('Home')}</a> | <a href="#/projects">{t('Projects')}</a>{' '}
        | <a href="#/about">{t('About me')}</a> |{' '}
        <a href="#/guestbook">{t('Guestbook')}</a> |{' '}
        <a href={profile.source} target="_blank" rel="noreferrer">
          {t('Site source')}
        </a>
      </p>
      <p className="tiny">
        © {new Date().getFullYear()} {t(profile.name)} ·{' '}
        {t('Hand-made with love and Vite. No tracking, no cookies.')}
      </p>
    </footer>
  )
}
