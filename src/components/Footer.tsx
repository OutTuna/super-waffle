import { Instagram, ArrowUpRight } from 'lucide-react'
import { profile, socials } from '../data/content'
import TypeOnView from './TypeOnView'
import { useProjectsGatedReveal } from '../hooks/useProjectsGatedReveal'

const icons = { instagram: Instagram }

export default function Footer() {
  const { ref, visible } = useProjectsGatedReveal<HTMLElement>()

  // The footer always types itself out by hand, whether it arrives here
  // naturally or Projects had to fast-forward to catch up.
  const text = (t: string, speed = 30, delay = 0) =>
    visible ? <TypeOnView text={t} speed={speed} delay={delay} /> : <span className="invisible">{t}</span>

  return (
    <footer
      id="contact"
      ref={ref}
      className={`scroll-mt-20 border-t border-ink-700 px-6 py-6 sm:px-10 sm:py-8 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mx-auto max-w-[880px]">
        <p className="prompt font-mono text-sm text-bone-300">{text('./contact --send', 46)}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {socials.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons]
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-ink-700 bg-ink-900 px-4 py-2 font-mono text-sm text-bone-300 transition-colors hover:border-accent-500/50 hover:text-bone-100"
              >
                {Icon && <Icon size={15} className="text-accent-400" />}
                {text(s.label, 34, i * 120)}
                <ArrowUpRight
                  size={13}
                  className="text-bone-500 transition-colors group-hover:text-accent-400"
                />
              </a>
            )
          })}
        </div>

        <p className="mt-8 font-mono text-xs text-bone-500">
          {text(`${profile.name} / ${profile.handle} — ${new Date().getFullYear()}`, 32, 400)}
        </p>
      </div>
    </footer>
  )
}
