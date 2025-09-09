# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- `npm run dev` - Start Astro development server
- `npm run build` - Build production version for deployment
- `npm run preview` - Preview the built site locally
- `npm run deploy` - Deploy to Cloudflare using Wrangler

## Project Architecture

This is a personal portfolio website built with Astro as a static site and deployed to Cloudflare. The site showcases projects, technologies, and contact information in a single-page application format.

### Technology Stack

- **Astro** - Static site generator with component-based architecture
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Astro Icon** - Icon component system with Iconify integration
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

- **Tailwind CSS** - Utility-first CSS framework configured via Vite plugin
- **Custom CSS** - Global styles in `src/styles/globals.css` and component-specific styles
- **Typography** - Open Sans for body text, Source Code Pro for code/monospace elements
- **Icons** - Astro Icon integration with Iconify collections (@iconify-json/devicon, @iconify-json/mdi)
- **Responsive Design** - Mobile-first approach using Tailwind's responsive utilities

### Deployment Configuration

- Configured as a static site in `astro.config.mjs` with Astro Icon and Tailwind integrations
- Generates static files in the `dist/` directory after build
- Deployment handled through `wrangler deploy` command to Cloudflare

### Configuration Files

- `astro.config.mjs` - Astro configuration with icon and Tailwind integrations
- `tailwind.config.js` - Tailwind CSS configuration
- `package.json` - Dependencies and scripts for development and deployment
