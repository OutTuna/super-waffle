import { Flame } from 'lucide-react'
import { stats } from '../data/content'

const metrics = [
  { label: 'total contributions', value: stats.totalContributions },
  { label: 'commits, last year', value: stats.commitsLastYear },
  { label: 'stars earned', value: stats.starsEarned },
  { label: 'open PRs', value: stats.totalPRs },
]

export default function Stats() {
  return (
    <section id="stats" className="scroll-mt-20 px-6 py-6 sm:px-10 sm:py-8">
      <div className="mx-auto max-w-[880px]">
        <p className="prompt font-mono text-sm text-bone-300">curl stats.json</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-ink-700 bg-ink-900/60 p-6">
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-mono text-2xl sm:text-3xl text-bone-100">{m.value}</p>
                  <p className="mt-1 text-xs text-bone-500">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-ink-700 pt-5">
              <Flame size={16} className="text-accent-400" />
              <p className="font-mono text-sm text-bone-300">
                current streak <span className="text-bone-100">{stats.currentStreak}d</span>
                <span className="mx-2 text-bone-500">·</span>
                longest <span className="text-bone-100">{stats.longestStreak}d</span>
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-ink-700 bg-ink-900/60 p-6">
            <p className="text-xs text-bone-500">most used languages</p>

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
              {stats.languages.map((lang) => (
                <li key={lang.name} className="flex items-center gap-2 font-mono text-xs text-bone-300">
                  <span
                    className="h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  {lang.name}
                  <span className="text-bone-500">{lang.pct}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
