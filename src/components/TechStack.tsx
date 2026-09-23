import { techStack } from '../data/content'

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-20 px-6 py-6 sm:px-10 sm:py-8">
      <div className="mx-auto max-w-[880px]">
        <p className="prompt font-mono text-sm text-bone-300">ls tech-stack/</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-ink-700 bg-ink-900 px-3 py-1.5 font-mono text-xs sm:text-sm text-bone-300 transition-colors hover:border-accent-400/50 hover:text-bone-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
