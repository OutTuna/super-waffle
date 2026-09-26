import { Command } from 'lucide-react'
import { profile } from '../data/content'
import { useSequentialTypewriter } from '../hooks/useSequentialTypewriter'

const LINES = [
  { prompt: 'whoami', reveal: `${profile.name} (${profile.handle})` },
  { prompt: 'cat role.txt', reveal: profile.roles.join('  ·  ') },
]

// Flattened: prompt0, reveal0, prompt1, reveal1, tagline — typed in order.
const SEQUENCE = [LINES[0].prompt, LINES[0].reveal, LINES[1].prompt, LINES[1].reveal, profile.tagline]

export default function Hero({ onOpenPalette }: { onOpenPalette: () => void }) {
  const { revealed, activeIndex } = useSequentialTypewriter(SEQUENCE, 24, 380, true)

  const Caret = () => <span className="caret ml-0.5" />

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
            <div className={activeIndex >= 0 ? 'mb-3' : 'mb-3 opacity-0'}>
              <p className="prompt text-bone-300">
                {revealed[0]}
                {activeIndex === 0 && <Caret />}
              </p>
              {activeIndex >= 1 && (
                <p className="mt-1 text-bone-100">
                  {revealed[1]}
                  {activeIndex === 1 && <Caret />}
                </p>
              )}
            </div>

            <div className={activeIndex >= 2 ? 'mb-3' : 'mb-3 opacity-0'}>
              <p className="prompt text-bone-300">
                {revealed[2]}
                {activeIndex === 2 && <Caret />}
              </p>
              {activeIndex >= 3 && (
                <p className="mt-1 text-bone-100">
                  {revealed[3]}
                  {activeIndex === 3 && <Caret />}
                </p>
              )}
            </div>

            <p className="prompt text-bone-300">
              {activeIndex >= 4 ? (
                <span className="text-bone-100">
                  {revealed[4]}
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
