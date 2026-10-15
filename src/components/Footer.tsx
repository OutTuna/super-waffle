import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <a className="footer-signature" href="#/">
          OutTuna<span> / {profile.name}</span>
        </a>
        <div className="web-badges" aria-label="Site information">
          <span>BUILT WITH CURIOSITY</span>
          <span>NO TRACKING</span>
          <span className="badge-highlight">PERSONAL WEB</span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div>
          <a href="#/projects">Projects</a>
          <a href="#/about">About</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={12} />
          </a>
          <a href={profile.source} target="_blank" rel="noreferrer">
            Site source <ArrowUpRight size={12} />
          </a>
          <a
            className="design-credit"
            href="https://nullmothsystems.com/"
            target="_blank"
            rel="noreferrer"
          >
            Design inspired by NullMoth Systems <ArrowUpRight size={12} />
          </a>
        </div>
        <p className="footer-note">Always a work in progress.</p>
      </div>
    </footer>
  )
}
