import type { ReactNode } from 'react'

type Tone = 'blue' | 'purple' | 'green' | 'red'

// A bordered panel with a little title bar, the building block of every page.
export default function Box({
  title,
  tone = 'blue',
  children,
}: {
  title: string
  tone?: Tone
  children: ReactNode
}) {
  return (
    <section className={`box box-${tone}`}>
      <h2 className="box-title">
        <span aria-hidden="true">✦ </span>
        {title}
        <span aria-hidden="true"> ✦</span>
      </h2>
      <div className="box-body">{children}</div>
    </section>
  )
}
