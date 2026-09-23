import { useEffect } from 'react'
import { Command } from 'cmdk'
import { ArrowRight, Instagram, Github } from 'lucide-react'
import { commands, socials } from '../data/content'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CommandPalette({ open, onOpenChange }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        onOpenChange(!open)
      }
      if (e.key === 'Escape') onOpenChange(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onOpenChange])

  const goTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    onOpenChange(false)
  }

  const instagram = socials.find((s) => s.label === 'Instagram')

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink-950/70 px-4 pt-[14vh] backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg">
        <Command
          label="Command palette"
          className="overflow-hidden rounded-lg border border-ink-700 bg-ink-900 shadow-2xl shadow-black/60"
        >
          <div className="flex items-center gap-2 border-b border-ink-700 px-4">
            <span className="prompt font-mono text-sm text-bone-300" />
            <Command.Input
              autoFocus
              placeholder="type a command…"
              className="w-full bg-transparent py-3.5 font-mono text-sm text-bone-100 placeholder:text-bone-500 focus:outline-none"
            />
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center font-mono text-xs text-bone-500">
              no matches.
            </Command.Empty>

            <Command.Group heading="navigate" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-bone-500">
              {commands.map((c) => (
                <Command.Item
                  key={c.id}
                  onSelect={() => goTo(c.section)}
                  className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 font-mono text-sm text-bone-300 aria-selected:bg-ink-800 aria-selected:text-bone-100"
                >
                  {c.label}
                  <ArrowRight size={13} className="text-bone-500" />
                </Command.Item>
              ))}
            </Command.Group>

            {instagram && (
              <Command.Group heading="links" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-bone-500">
                <Command.Item
                  onSelect={() => window.open(instagram.href, '_blank')}
                  className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 font-mono text-sm text-bone-300 aria-selected:bg-ink-800 aria-selected:text-bone-100"
                >
                  <span className="flex items-center gap-2">
                    <Instagram size={14} className="text-accent-400" />
                    open instagram
                  </span>
                  <ArrowRight size={13} className="text-bone-500" />
                </Command.Item>
                <Command.Item
                  onSelect={() => window.open('https://github.com', '_blank')}
                  className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 font-mono text-sm text-bone-300 aria-selected:bg-ink-800 aria-selected:text-bone-100"
                >
                  <span className="flex items-center gap-2">
                    <Github size={14} className="text-accent-400" />
                    open github
                  </span>
                  <ArrowRight size={13} className="text-bone-500" />
                </Command.Item>
              </Command.Group>
            )}
          </Command.List>

          <div className="flex items-center justify-between border-t border-ink-700 px-4 py-2.5 font-mono text-[10px] text-bone-500">
            <span>↑↓ navigate</span>
            <span>↵ select</span>
            <span>esc close</span>
          </div>
        </Command>
      </div>
    </div>
  )
}
