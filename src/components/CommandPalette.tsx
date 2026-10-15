import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { ArrowUpRight, CornerDownLeft, Search, X } from 'lucide-react'
import { profile, projects } from '../data/content'

export default function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [search, setSearch] = useState('')
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        onOpenChange(!open)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onOpenChange])
  useEffect(() => {
    if (!open) setSearch('')
  }, [open])
  const navigate = (href: string) => {
    if (href.startsWith('#')) window.location.hash = href.slice(1)
    else window.open(href, '_blank', 'noopener,noreferrer')
    onOpenChange(false)
  }
  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Jump to a page or project"
      contentClassName="command-dialog"
      loop
    >
      <div className="command-input">
        <Search size={18} />
        <Command.Input
          value={search}
          onValueChange={setSearch}
          placeholder="Find a page or project…"
        />
        <button onClick={() => onOpenChange(false)} aria-label="Close search">
          <X size={18} />
        </button>
      </div>
      <Command.List>
        <Command.Empty>
          No matches. Try a project name or language.
        </Command.Empty>
        <Command.Group heading="Pages">
          {[
            ['Home', '#/'],
            ['Projects', '#/projects'],
            ['About', '#/about'],
            ['GitHub profile', profile.github],
          ].map(([label, href]) => (
            <Command.Item key={href} onSelect={() => navigate(href)}>
              {label}
              <CornerDownLeft size={14} />
            </Command.Item>
          ))}
        </Command.Group>
        <Command.Group heading="Projects">
          {projects.map((project) => (
            <Command.Item
              key={project.slug}
              value={`${project.name} ${project.stack.join(' ')} ${project.category}`}
              onSelect={() => navigate(project.href)}
            >
              {project.name}
              <ArrowUpRight size={14} />
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
      <div className="command-footer">
        <span>↑ ↓ navigate · Enter to open</span>
        <span>Esc to close</span>
      </div>
    </Command.Dialog>
  )
}
