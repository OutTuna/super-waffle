# mental. — portfolio

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

## Project structure

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
- Design inspired by [NullMoth Systems](https://nullmothsystems.com/).
- No external fonts, analytics, background audio or API requests are loaded.
- Deploy anywhere static: Vercel, Netlify, GitHub Pages, Cloudflare Pages.

## Languages

English is the default for first-time visitors. The header language selector also
supports Ukrainian (`uk`) and Russian (`ru`), and remembers the selection in
`localStorage` under `outtuna-language`. If storage is unavailable, switching still
works for the current visit.

`src/i18n.tsx` provides the React context, interpolation and project-count plural
rules. `src/translations.json` maps original English phrases to Ukrainian and
Russian translations (in that order). Project URLs, category identifiers and
technology names stay stable across languages. Keep new UI copy and accessibility
labels in the translation dictionary; the existing font families support Cyrillic.
