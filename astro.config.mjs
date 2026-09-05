import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  build: {
    assets: '_astro',
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Open Sans',
      cssVariable: '--font-open-sans',
      weights: [400],
      styles: ['normal'],
      subsets: [
        'cyrillic-ext',
        'cyrillic',
        'greek-ext',
        'greek',
        'hebrew',
        'math',
        'symbols',
        'vietnamese',
        'latin-ext',
        'latin',
      ],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Source Code Pro',
      cssVariable: '--font-source-code-pro',
      weights: [400, 700],
      styles: ['normal'],
      subsets: [
        'cyrillic-ext',
        'cyrillic',
        'greek-ext',
        'greek',
        'vietnamese',
        'latin-ext',
        'latin',
      ],
      fallbacks: ['monospace'],
    },
  ],
  integrations: [icon()],
  vite: {
    plugins: [tailwind()],
  },
});
