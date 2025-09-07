# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- `npm start` - Start development server
- `npm run build` - Build production version
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages (runs predeploy build automatically)

## Project Architecture

This is a personal portfolio website built with React and Create React App. The site is deployed to GitHub Pages and showcases projects, technologies, and contact information.

### Component Structure

The codebase follows a container/view pattern for React components:

- **Container components** (`*.container.js/jsx`) - Handle state and lifecycle methods
- **View components** (`*.view.js/jsx`) - Handle presentation and rendering
- **Index files** (`index.js`) - Export the main component for clean imports

### Key Components

- `App` - Main application container with WOW.js animation initialization
- `NavBar` - Navigation with smooth scrolling
- `Jumbotron` - Hero section with main introduction
- `Projects` - Portfolio projects grid
- `About` - About section with technologies showcase
- `Technologies` - Reusable tech stack component with individual `TechnologyItem` components
- `Contact` - Contact form and information
- `Footer` - Site footer

### Data Management

- `src/data/data.json` - Contains all project data including titles, descriptions, technologies, demo URLs, and code URLs
- Project images are stored in `src/images/` with both `.jpg` and `.webp` formats for optimization

### Styling

- Bootstrap 5 for layout and components
- CSS Modules for component-specific styling (`*.module.css`)
- Global styles in `src/index.css` and `src/components/App/App.css`
- Animate.css and WOW.js for scroll animations

### Technologies Used

- React with functional and class components
- Bootstrap for responsive design
- React Icons for iconography
- React Scroll for smooth navigation
- Animate.css + WOW.js for animations
- Create React App build system