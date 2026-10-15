# Local redesign

The existing React + TypeScript + Vite stack is retained. The redesign does
not need server rendering, authentication, a database or a framework migration.

## Structure

- `src/pages/`: Home, Projects and About.
- `src/components/`: navigation, footer, project cards, project illustrations
  and the accessible cmdk search dialog.
- `src/data/content.ts`: all profile and project data.
- `src/hooks/useRoute.ts`: static-host-compatible hash navigation.
- `src/index.css`: design tokens, layouts, breakpoints and reduced-motion rules.

## Changes

- Replaced the single scrolling page with three navigable pages.
- Rebuilt the visual system around a black starfield, purple panels, Times,
  Courier, Verdana, cyan highlights and bordered buttons, inspired by
  https://nullmothsystems.com/.
- Kept the portfolio's identity and 12 existing projects. Updated the two
  featured descriptions against their repository READMEs.
- Added category filters, text search, archived-project visibility, deep links,
  empty results and a not-found page.
- Reworked keyboard search to navigate pages and open the actual repositories.
- Removed staged typewriter/reveal dependencies, background audio, placeholder
  social links and hardcoded contribution statistics.
- Removed external font requests and old background assets.
- Removed generated TypeScript configuration artifacts; builds now type-check
  without modifying the source tree.

## Validation

- TypeScript checks for the application and Vite configuration.
- Production Vite build.
- Edge browser checks: all three pages, direct links and reloads, Back/Forward,
  filters, search, archive visibility, empty-state reset, Ctrl+K navigation,
  and unknown routes.
- Checked all three pages at 320, 375, 390, 768, 1024 and 1440 CSS pixels for
  horizontal overflow. Reviewed desktop and mobile screenshots.
- No browser JavaScript errors during the checked interactions.

The current work is local. Nothing has been pushed or deployed.
