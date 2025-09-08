# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- `npm run dev` - Start Astro development server
- `npm run build` - Build production version for deployment
- `npm run preview` - Preview the built site locally
- `npm run deploy` - Deploy to Cloudflare using Wrangler

## Project Architecture

This is a personal portfolio website built with Astro and deployed to Cloudflare. The site showcases projects, technologies, and contact information in a single-page application format.

### Technology Stack

- **Astro** - Static site generator with component-based architecture
- **Bootstrap 5** - CSS framework for responsive design and components
- **Cloudflare** - Deployment platform via Astro's Cloudflare adapter
- **Wrangler** - Cloudflare deployment tool

### Project Structure

The codebase follows Astro's file-based routing and component structure:

- **Pages** (`src/pages/`) - Route-based pages, currently only `index.astro`
- **Components** (`src/components/`) - Reusable Astro components for sections
- **Layouts** (`src/layouts/`) - Base layout template with common HTML structure
- **Data** (`src/data/`) - JSON data files for dynamic content
- **Scripts** (`src/scripts/`) - Client-side JavaScript utilities

### Key Components

- `BaseLayout.astro` - Main layout template with SEO meta tags, Bootstrap CSS/JS, and global styles
- `NavBar.astro` - Navigation with smooth scrolling to sections
- `Jumbotron.astro` - Hero section with main introduction
- `Projects.astro` - Portfolio projects grid using data from `data.json`
- `ProjectItem.astro` - Individual project card component
- `About.astro` - About section with technologies showcase
- `Technologies.astro` - Reusable tech stack component
- `TechnologyItem.astro` - Individual technology item
- `Contact.astro` - Contact form and information
- `Footer.astro` - Site footer

### Data Management

- `src/data/data.json` - Contains all project data including titles, descriptions, technologies, demo URLs, and code URLs
- Project images are referenced in the data and stored in `public/images/` directory

### Styling and Animations

- Bootstrap 5 loaded via CDN for layout and responsive components
- Custom CSS embedded in individual Astro components using `<style>` tags
- Global styles defined in `BaseLayout.astro`
- Custom intersection observer implementation in `intersectionObserver.js` for scroll-triggered animations
- Elements with `data-observe` attribute automatically get fade-in animations
- Use `data-trigger-once="true"` for one-time animations that don't repeat

### Deployment Configuration

- Configured for Cloudflare deployment via `astro.config.mjs`
- Uses `@astrojs/cloudflare` adapter for server-side rendering capabilities
- Deployment handled through `wrangler deploy` command

### Animation System

The site uses a custom intersection observer system that replaces traditional animation libraries:

- Elements with `data-observe` attribute are automatically observed
- Animations trigger when elements enter the viewport
- Use `data-trigger-once="true"` to prevent re-animation on scroll
- CSS classes `.animate-in` are added/removed based on visibility