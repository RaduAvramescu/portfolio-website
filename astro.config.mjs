import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  build: {
    assets: '_astro',
  },
  integrations: [icon()],
  vite: {
    plugins: [tailwind()],
  },
});
