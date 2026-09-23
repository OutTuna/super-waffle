import { Instagram, ArrowUpRight } from 'lucide-react'
import { profile, socials } from '../data/content'

const icons = { instagram: Instagram }

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-ink-700 px-6 py-6 sm:px-10 sm:py-8">
      <div className="mx-auto max-w-[880px]">
        <p className="prompt font-mono text-sm text-bone-300">./contact --send</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {socials.map((s) => {
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
                {s.label}
                <ArrowUpRight
                  size={13}
                  className="text-bone-500 transition-colors group-hover:text-accent-400"
                />
              </a>
            )
          })}
        </div>

        <p className="mt-8 font-mono text-xs text-bone-500">
          {profile.name} / {profile.handle} — {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
