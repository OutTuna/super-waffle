# trapmagistr — portfolio

React 18 + TypeScript + Vite 5 + Tailwind CSS 3 + Lucide + cmdk.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Make it yours

Everything content-related lives in **`src/data/content.ts`** — name, bio,
tech stack, GitHub-style stats, and the `projects` array (currently
placeholders, swap in your real ones). No need to touch component files
for text changes.

- `⌘K` / `Ctrl+K` opens the command palette (jump to any section, open links).
- Colors and fonts are tokens in `tailwind.config.js` under `theme.extend`.
- Deploy anywhere static: Vercel, Netlify, GitHub Pages, Cloudflare Pages.
