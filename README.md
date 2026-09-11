# Personal Website

## Table of Contents

- [About](#about)
- [Technologies](#technologies)
- [Color themes](#color-themes)
- [Agent discovery](#agent-discovery)
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

## Color themes

Light and dark themes follow the device preference and remember navbar toggle
changes. The neutral palette is defined in `src/styles/globals.css`.

## Agent discovery

`/llms.txt` provides a concise guide to the portfolio, project repositories, and
public profiles using the [llms.txt proposal](https://llmstxt.org/). Astro generates
it at build time from `src/pages/llms.txt.ts`; project titles, descriptions,
technologies, repository links, and ordering come from `src/content/projects/`.
No runtime service or additional dependency is needed.

The page advertises the guide with a `rel="describedby"` link. Cloudflare serves
it as UTF-8 plain text with revalidation instead of the site's default immutable
cache policy. When changing the introduction, section anchors, profile links, or
domain, update the endpoint's corresponding text and URLs too.

This is an optional convenience for supporting agents. It does not control crawler
access or guarantee better search visibility; [Google's guidance](https://developers.google.com/search/docs/appearance/ai-features)
says AI text files are not required for its AI search features. `robots.txt`
continues to define crawler access. We omit `llms.json`: the llms.txt proposal
defines a Markdown format, and we found no established companion JSON format or
consumer requirement for this site.

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
