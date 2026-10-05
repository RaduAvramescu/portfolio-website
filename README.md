# Personal Website

## Table of Contents

- [About](#about)
- [Technologies](#technologies)
- [Styling](#styling)
- [Color themes](#color-themes)
- [Images](#images)
- [Validation](#validation)
- [Link](#link)

## About

This is the repository for my personal website.

## Technologies

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- Astro

## Styling

Tailwind CSS v4 is configured in `src/styles/globals.css` through `@theme`
directives. Define fonts, colors, and animations there.

The `--font-sans` and `--font-mono` tokens map to Astro's font variables for Open
Sans and Source Code Pro. Font loading is configured in `astro.config.mjs` and
`src/layouts/BaseLayout.astro`.

## Color themes

Light and dark themes follow the device preference and remember navbar toggle
changes. The neutral palette is defined in `src/styles/globals.css`.

## Images

The hero background uses `image-set()` to prefer WebP with a JPEG fallback.
Browsers without support for format selection in `image-set()` use JPEG. Project
cards use `<picture>` with WebP sources and JPEG fallbacks. Keep both image formats
for the hero and displayed projects.

## Validation

Run these checks before opening a pull request:

```sh
pnpm run lint
pnpm run format:check
pnpm run check
pnpm run build
```

`pnpm run check` runs Astro diagnostics, including TypeScript checks inside
`.astro` components.

## Link

- https://raduavramescu.com/
