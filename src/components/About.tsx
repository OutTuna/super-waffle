import { about } from '../data/content'
import TypeOnView from './TypeOnView'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-6 sm:px-10 sm:py-8">
      <div className="mx-auto max-w-[720px]">
        <p className="prompt font-mono text-sm text-bone-300">
          <TypeOnView text="cat about.md" speed={26} />
        </p>
        <ul className="mt-4 space-y-3">
          {about.map((line, i) => (
            <li key={line} className="flex gap-3 text-[15px] sm:text-base leading-relaxed text-bone-300">
              <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400" />
              <span>
                <TypeOnView text={line} speed={12} delay={i * 150} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
