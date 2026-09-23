import { useEffect, useState } from 'react'
import { Command } from 'lucide-react'
import { profile } from '../data/content'

const LINES = [
  { prompt: 'whoami', reveal: `${profile.name} (${profile.handle})` },
  { prompt: 'cat role.txt', reveal: profile.roles.join('  ·  ') },
]

export default function Hero({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisibleLines(LINES.length)
      setDone(true)
      return
    }
    if (visibleLines >= LINES.length) {
      setDone(true)
      return
    }
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 500 + visibleLines * 450)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <header className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 pb-20">
      <div className="mx-auto w-full max-w-[880px]">
        <div className="rounded-lg border border-ink-700 bg-ink-900/70 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex items-center gap-1.5 border-b border-ink-700 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-bone-500/40" />
            <span className="ml-3 font-mono text-xs text-bone-500">
              {profile.name}@portfolio: ~
            </span>
          </div>

          <div className="px-5 py-7 sm:px-8 sm:py-10 font-mono text-sm sm:text-base leading-relaxed">
            {LINES.map((line, i) => (
              <div key={line.prompt} className={i < visibleLines ? 'mb-3' : 'mb-3 opacity-0'}>
                <p className="prompt text-bone-300">{line.prompt}</p>
                {i < visibleLines && <p className="mt-1 text-bone-100">{line.reveal}</p>}
              </div>
            ))}
            <p className="prompt text-bone-300">
              {done ? (
                <span className="text-bone-100">
                  {profile.tagline}
                  <span className="caret ml-1" />
                </span>
              ) : (
                <span className="caret" />
              )}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm text-bone-500">
          <span>{profile.pronouns}</span>
          <span aria-hidden="true">·</span>
          <span>{profile.location}</span>
          <span aria-hidden="true">·</span>
          <span>{profile.utc}</span>
        </div>

        <button
          onClick={onOpenPalette}
          className="mt-12 inline-flex items-center gap-2 rounded-md border border-ink-700 bg-ink-900 px-3.5 py-2 font-mono text-xs text-bone-300 transition-colors hover:border-accent-500/60 hover:text-bone-100"
        >
          <Command size={14} className="text-accent-400" />
          open command palette
          <kbd className="ml-1 rounded border border-ink-600 bg-ink-800 px-1.5 py-0.5 text-[10px] text-bone-500">
            ⌘K
          </kbd>
        </button>
      </div>
    </header>
  )
}
