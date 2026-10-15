import { useI18n } from './i18n'
import { useEffect, useRef, useState } from 'react'
import SiteHeader from './components/SiteHeader'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import { useRoute } from './hooks/useRoute'

export default function App() {
  const { t } = useI18n()
  const route = useRoute()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const mainRef = useRef<HTMLElement>(null)
  const previousRoute = useRef(route)
  useEffect(() => {
    if (previousRoute.current !== route) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      mainRef.current?.focus({ preventScroll: true })
      previousRoute.current = route
    }
    const title =
      route === '/'
        ? t('Small tools. Less friction.')
        : route === '/projects'
          ? t('Projects')
          : route === '/about'
            ? t('About')
            : t('Page not found')
    document.title = `${title} — OutTuna`
  }, [route, t])
  return (
    <>
      <div className="starfield" aria-hidden="true">
        <div />
        <div />
        <div />
      </div>
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault()
          mainRef.current?.focus()
        }}
      >
        {t('Skip to content')}
      </a>
      <SiteHeader route={route} onSearch={() => setPaletteOpen(true)} />
      <main ref={mainRef} id="main" tabIndex={-1}>
        {route === '/' ? (
          <HomePage />
        ) : route === '/projects' ? (
          <ProjectsPage />
        ) : route === '/about' ? (
          <AboutPage />
        ) : (
          <section className="wrap page not-found">
            <p className="eyebrow">{t('404 / Lost in the stars')}</p>
            <h1>
              {t('Nothing here.')}
              <br />
              <em>{t('Yet.')}</em>
            </h1>
            <p className="lead">
              {t('That page doesn’t exist. There’s still plenty to explore.')}
            </p>
            <a className="button" href="#/">
              {t('Back to home')}
            </a>
          </section>
        )}
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  )
}
