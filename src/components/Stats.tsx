import { Flame } from 'lucide-react'
import { stats } from '../data/content'
import { useProjectsGatedReveal } from '../hooks/useProjectsGatedReveal'

const metrics = [
  { label: 'total contributions', value: stats.totalContributions },
  { label: 'commits, last year', value: stats.commitsLastYear },
  { label: 'stars earned', value: stats.starsEarned },
  { label: 'open PRs', value: stats.totalPRs },
]

export default function Stats() {
  const { ref, visible } = useProjectsGatedReveal<HTMLDivElement>()

  // Stats just fade in as a whole once projects are done — no typing here,
  // that's reserved for the footer.
  const text = (t: string, _speed?: number, _delay?: number) =>
    visible ? <span>{t}</span> : <span className="invisible">{t}</span>

  return (
    <section
      id="stats"
      ref={ref}
      className={`scroll-mt-20 px-6 py-6 sm:px-10 sm:py-8 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mx-auto max-w-[880px]">
        <p className="prompt font-mono text-sm text-bone-300">{text('curl stats.json', 26)}</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-ink-700 bg-ink-900/60 p-6">
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((m, i) => (
                <div key={m.label}>
                  <p className="font-mono text-2xl sm:text-3xl text-bone-100">
                    {text(String(m.value), 30, i * 100)}
                  </p>
                  <p className="mt-1 text-xs text-bone-500">{text(m.label, 12, i * 100 + 120)}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-ink-700 pt-5">
              <Flame size={16} className="text-accent-400" />
              <p className="font-mono text-sm text-bone-300">
                {text(`current streak ${stats.currentStreak}d · longest ${stats.longestStreak}d`, 16, 450)}
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-ink-700 bg-ink-900/60 p-6">
            <p className="text-xs text-bone-500">{text('most used languages', 16)}</p>

            <div className="mt-4 flex h-2 w-full overflow-hidden rounded-full bg-ink-800">
              {stats.languages.map((lang) => (
                <span
                  key={lang.name}
                  style={{ width: `${lang.pct}%`, backgroundColor: lang.color }}
                  title={`${lang.name} ${lang.pct}%`}
                />
              ))}
            </div>

            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {stats.languages.map((lang, i) => (
                <li key={lang.name} className="flex items-center gap-2 font-mono text-xs text-bone-300">
                  <span
                    className="h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  {text(`${lang.name} ${lang.pct}%`, 14, 200 + i * 90)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
