import { useI18n } from '../i18n'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <a className="footer-signature" href="#/">
          OutTuna<span> / {t('Gleb')}</span>
        </a>
        <div className="web-badges" aria-label={t('Site information')}>
          <span>{t('BUILT WITH CURIOSITY')}</span>
          <span>{t('NO TRACKING')}</span>
          <span className="badge-highlight">{t('PERSONAL WEB')}</span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {t('Gleb')}
        </p>
        <div>
          <a href="#/projects">{t('Projects')}</a>
          <a href="#/about">{t('About')}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={12} />
          </a>
          <a href={profile.source} target="_blank" rel="noreferrer">
            {t('Site source')}
            <ArrowUpRight size={12} />
          </a>
          <a
            className="design-credit"
            href="https://nullmothsystems.com/"
            target="_blank"
            rel="noreferrer"
          >
            {t('Design inspired by NullMoth Systems')}
            <ArrowUpRight size={12} />
          </a>
        </div>
        <p className="footer-note">{t('Always a work in progress.')}</p>
      </div>
    </footer>
  )
}
