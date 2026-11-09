import { useI18n } from '../i18n'
import { profile } from '../data/content'

export default function Header() {
  const { t } = useI18n()
  const ticker = [
    t('Welcome to my homepage!'),
    t('Best viewed in any browser at 800x600'),
    t('Thanks for stopping by'),
    t('New projects added all the time'),
    t('Don’t forget to sign my guestbook!'),
  ].join('   ★   ')
  return (
    <header className="site-header">
      <p className="site-kicker">
        <span className="blink" aria-hidden="true">
          ★
        </span>{' '}
        {t('the homepage of')} {profile.name} a.k.a. {profile.handle}{' '}
        <span className="blink" aria-hidden="true">
          ★
        </span>
      </p>
      <h1 className="site-title">
        <a href="#/">~*~ fellfromheaven ~*~</a>
      </h1>
      <p className="site-tagline">“{t(profile.tagline)}”</p>
      <div className="marquee" aria-label={ticker}>
        <div className="marquee-track" aria-hidden="true">
          <span>{ticker}   ★   </span>
          <span>{ticker}   ★   </span>
        </div>
      </div>
    </header>
  )
}
