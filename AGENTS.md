# Repository Guidelines

## Project Structure & Module Organization

This portfolio uses Astro, strict TypeScript, and Tailwind CSS. Routes live in
`src/pages/`, shared page wrappers in `src/layouts/`, and UI sections in
`src/components/`. Browser behavior belongs in `src/scripts/`; shared registries
and helpers belong in `src/utils/`.

Project entries are JSON files in `src/content/projects/`, validated by
`src/content.config.ts`. Images live in `src/assets/images/`, local icons in
`src/icons/`, and static files such as `robots.txt` and deployment headers in
`public/`. Tailwind theme tokens and animations live in `src/styles/globals.css`.
`dist/` and `.astro/` are generated directories.

## Build, Test, and Development Commands

Use Node.js 22 or newer and the pnpm version pinned in `package.json`.

- `pnpm install --frozen-lockfile`: install dependencies matching the lockfile.
- `pnpm run dev`: start the local development server.
- `pnpm run check`: run Astro diagnostics and TypeScript checks.
- `pnpm run lint`: run ESLint for JavaScript, TypeScript, and Astro files.
- `pnpm run format:check`: check Prettier formatting.
- `pnpm run lint:fix` / `pnpm run format`: apply lint fixes or formatting.
- `pnpm run build`: generate the production site in `dist/`.
- `pnpm run preview`: serve the production build locally.
- `pnpm run deploy`: deploy built assets to Cloudflare using `wrangler.jsonc`;
  build first.

## Coding Style & Naming Conventions

Follow `.prettierrc`: two-space indentation, single quotes, semicolons, an
80-character print width, and LF endings. Use PascalCase for Astro components
(e.g., `ThemeToggle.astro`), camelCase for TypeScript helpers, and kebab-case for
project JSON and image filenames. Follow the existing ESLint configuration and
strict TypeScript settings.

Use shared theme tokens when styling. Register new project image pairs in
`src/utils/imageImports.ts` and technology keys in `src/utils/technologies.ts`
before referencing them in project content.

## Testing Guidelines

No automated test framework, test naming convention, or coverage threshold is
currently configured. Before opening a PR, run lint, format checks, Astro checks,
and a production build. CI runs the first three checks. Review UI changes locally
at mobile and desktop widths, including light/dark themes, keyboard navigation,
reduced motion, and project links.

## Commit & Pull Request Guidelines

Prefer the Conventional Commit style used throughout recent history:
`feat:`, `fix:`, `refactor:`, `chore:`, or `ci:`, with optional scopes such as
`ci(deps):`. Keep subjects concise and imperative.

Keep PRs focused. Describe the change and its purpose, link related issues when
applicable, record validation results, and include screenshots for visual changes.
Commit `pnpm-lock.yaml` alongside dependency updates; exclude generated output
and credentials.
