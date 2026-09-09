export const technologyIconMap = {
  HTML5: 'devicon:html5',
  CSS3: 'devicon:css3',
  JavaScript: 'devicon:javascript',
  Bootstrap: 'devicon:bootstrap',
  'Tailwind CSS': 'devicon:tailwindcss',
  'Material-UI': 'devicon:materialui',
  React: 'devicon:react',
  Astro: 'devicon:astro',
  GraphQL: 'mdi:graphql',
  Git: 'devicon:git',
  npm: 'devicon:npm',
} as const satisfies Record<string, string>;

export type Technology = keyof typeof technologyIconMap;
