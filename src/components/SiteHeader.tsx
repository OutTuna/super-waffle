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
        <a className="brand" href="#/" aria-label="mental. home">
          <span className="brand-mark" aria-hidden="true">
            ✳
          </span>
          <span>
            mental<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          {[
            ['/', 'Home'],
            ['/projects', 'Projects'],
            ['/about', 'About'],
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
          <button
            className="search-trigger"
            onClick={onSearch}
            aria-label="Search site (Control or Command K)"
          >
            <Search size={15} />
            <span>Jump to</span>
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
              A personal corner of the internet. Small tools, less friction.
              Code, curiosity and a little music.
            </span>
            <div className="ticker-track" aria-hidden="true">
              {[0, 1].map((copy) => (
                <span className="ticker-copy" key={copy}>
                  <span className="status-dot" /> A PERSONAL CORNER OF THE
                  INTERNET <span className="ticker-star">✦</span> SMALL TOOLS,
                  LESS FRICTION <span className="ticker-star">✦</span> CODE,
                  CURIOSITY & A LITTLE MUSIC{' '}
                  <span className="ticker-star">✦</span>
                </span>
              ))}
            </div>
          </div>
          <span className="strip-note">
            CODE, CURIOSITY & A LITTLE MUSIC <span aria-hidden="true">✦</span>
          </span>
          <button
            className="motion-toggle"
            onClick={() => setMotionPaused((paused) => !paused)}
            aria-label={motionPaused ? 'Resume animations' : 'Pause animations'}
            aria-pressed={motionPaused}
            title={motionPaused ? 'Resume animations' : 'Pause animations'}
          >
            {motionPaused ? <Play size={12} /> : <Pause size={12} />}
          </button>
        </div>
      </div>
    </header>
  )
}
