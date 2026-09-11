import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const projects = await getCollection('projects');
  projects.sort((a, b) => (a.data.order || 0) - (b.data.order || 0));

  const projectLinks = projects.map(
    ({ data }) =>
      `- [${data.title}](${data.codeURL}): ${data.description} Technologies: ${data.technologies.join(', ')}.`
  );

  const body = [
    '# Radu Avramescu',
    '',
    '> Personal portfolio of Radu Avramescu, a frontend developer interested in modern web technologies and continuous learning.',
    '',
    'The portfolio is a single-page website at https://raduavramescu.com/. Section links below refer to parts of that page. Project links point to their source repositories.',
    '',
    '## Portfolio',
    '',
    '- [Projects](https://raduavramescu.com/#projects): Featured projects, descriptions, technologies, and demo and source links.',
    '- [About](https://raduavramescu.com/#about): Developer introduction and technologies used.',
    '- [Contact](https://raduavramescu.com/#contact): Contact form.',
    '',
    '## Project repositories',
    '',
    ...projectLinks,
    '',
    '## Profiles',
    '',
    '- [GitHub](https://github.com/RaduAvramescu): Public repositories and developer profile.',
    '- [LinkedIn](https://www.linkedin.com/in/radu-a-4863a486/): Professional profile.',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
