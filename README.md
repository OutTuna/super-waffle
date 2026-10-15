# trapmagistr — portfolio

React 18 + TypeScript + Vite 5 + Tailwind CSS 3 + Lucide + cmdk.

## Run it

### Local preview on Windows

After installing dependencies, run from PowerShell:

```powershell
.\start-local.ps1
```

Open http://127.0.0.1:5173. The server reloads the page when source files change.
Keep the terminal running; press Ctrl+C to stop. To use another port, run
`.\start-local.ps1 -Port 5174`.

The preview binds to this computer only. No deployment is involved.

### Standard setup

```bash
npm ci
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Make it yours

Content lives in **`src/data/content.ts`**: profile links, biography, current
interests, technology groups and projects. Set `featured: true` on a project
to feature it on the home page. Categories and project counts are derived
from this data; no external API or credentials are required.

- `⌘K` / `Ctrl+K` opens the keyboard-accessible page and project search.
- Pages are in `src/pages/`; shared components are in `src/components/`.
- Home (`#/`), Projects (`#/projects`) and About (`#/about`) use hash routes
  so direct links and reloads work on static hosts without rewrite rules.
- Projects support category filters, text search and an archive toggle.
  A category can be linked directly: `#/projects?category=Desktop`.
- Design tokens and responsive styles live in `src/index.css`.
- The visual direction draws on NullMoth Systems: a black starfield,
  purple panels, system serif and monospace fonts, cyan accents and
  early-web button borders. Branding, copy and project illustrations are
  specific to this portfolio. Preview panels are diagrams, not app screenshots.
- No external fonts, analytics, background audio or API requests are loaded.
- Deploy anywhere static: Vercel, Netlify, GitHub Pages, Cloudflare Pages.
