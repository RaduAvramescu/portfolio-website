/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'mono': ['Source Code Pro', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease forwards',
        'slide-up': 'slideUp 1s ease forwards',
        'typewriter': 'text-animation 2s steps(29, end) 1s 1 normal both, cursor-animation 600ms steps(29, end) infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'text-animation': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'cursor-animation': {
          'from': { borderRightColor: 'red' },
          'to': { borderRightColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}