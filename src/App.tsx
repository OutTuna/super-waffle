import { useEffect, useRef } from 'react'
import { useI18n } from './i18n'
import { useRoute } from './hooks/useRoute'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Sparkles from './components/Sparkles'
import Box from './components/Box'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import GuestbookPage from './pages/GuestbookPage'

const titles: Record<string, string> = {
  '/': 'Home',
  '/projects': 'Projects',
  '/about': 'About me',
  '/guestbook': 'Guestbook',
}

export default function App() {
  const { t } = useI18n()
  const route = useRoute()
  const mainRef = useRef<HTMLElement>(null)
  const previousRoute = useRef(route)

  useEffect(() => {
    if (previousRoute.current !== route) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      mainRef.current?.focus({ preventScroll: true })
      previousRoute.current = route
    }
    const title = titles[route] ? t(titles[route]) : t('Page not found')
    document.title = `~*~ ${title} ~*~ fellfromheaven`
  }, [route, t])

  let page
  if (route === '/') page = <HomePage />
  else if (route === '/projects') page = <ProjectsPage />
  else if (route === '/about') page = <AboutPage />
  else if (route === '/guestbook') page = <GuestbookPage />
  else
    page = (
      <Box title={t('Error 404')} tone="red">
        <p className="big-404">404</p>
        <p className="center">
          {t('This page fell from heaven and never landed.')}
        </p>
        <p className="center">
          <a href="#/">&lt;&lt; {t('Back to home')}</a>
        </p>
      </Box>
    )

  return (
    <>
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
      <div className="page">
        <Header />
        <div className="layout">
          <Sidebar route={route} />
          <main ref={mainRef} id="main" tabIndex={-1}>
            {page}
          </main>
        </div>
        <Footer />
      </div>
      <Sparkles />
    </>
  )
}
