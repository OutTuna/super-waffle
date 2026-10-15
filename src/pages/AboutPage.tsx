import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { about, now, profile, techGroups } from '../data/content'

export default function AboutPage() {
  return (
    <div className="wrap page about-page">
      <header className="page-heading">
        <p className="eyebrow">THE PERSON BEHIND THE CODE</p>
        <h1>
          Hi, I’m Gleb.
          <br />
          <em>OutTuna, online.</em>
        </h1>
      </header>
      <div className="about-intro">
        <div className="about-copy">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            github.com/OutTuna <ArrowUpRight size={16} />
          </a>
        </div>
        <aside className="profile-card">
          <div className="profile-monogram" aria-hidden="true">
            ot<span>✦</span>
          </div>
          <p className="eyebrow">OUTTUNA / GLEB</p>
          <p>
            Part developer.
            <br />
            Part musician.
            <br />
            <em>Entirely curious.</em>
          </p>
          <div className="profile-card-rule" />
          <span className="mono">Making things, figuring things out.</span>
        </aside>
      </div>
      <section className="about-section">
        <p className="eyebrow">RIGHT NOW</p>
        <h2>
          Somewhere between
          <br />
          learning and building.
        </h2>
        <div className="now-grid">
          {now.map((item, index) => (
            <article key={item.title}>
              <span className="mono">
                0{index + 1} / {item.title.toUpperCase()}
              </span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-section">
        <p className="eyebrow">THE TOOLBOX</p>
        <h2>
          Different tools.
          <br />
          The same curiosity.
        </h2>
        <p className="section-description">
          Technologies I use, learn and experiment with. The project decides the
          tool.
        </p>
        <div className="toolbox">
          {techGroups.map((group) => (
            <div className="toolbox-row" key={group.name}>
              <h3>{group.name}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="contact-panel">
        <div>
          <p className="eyebrow">FOLLOW THE THREAD</p>
          <h2>Curious what that looks like?</h2>
          <p>
            The projects are a better introduction than a list of technologies.
          </p>
        </div>
        <a className="button" href="#/projects">
          Browse the archive <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}
