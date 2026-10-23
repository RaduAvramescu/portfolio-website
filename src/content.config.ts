import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { imageMap, type ProjectImageKey } from './utils/imageImports';
import { technologyIconMap, type Technology } from './utils/technologies';

const imageKeys = Object.keys(imageMap) as ProjectImageKey[];
const technologyKeys = Object.keys(technologyIconMap) as Technology[];

const projectURL = z
  .string()
  .trim()
  .min(1)
  .refine(
    value => {
      if (/\s|\\/.test(value) || value.startsWith('//')) {
        return false;
      }

      try {
        // A dummy base allows relative links without making network requests.
        const url = new URL(value, 'https://portfolio.invalid/');
        return url.protocol === 'http:' || url.protocol === 'https:';
      } catch {
        return false;
      }
    },
    { message: 'Expected an HTTP(S) URL or a relative link' }
  );

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string().trim().min(1),
    image: z.enum(imageKeys),
    description: z.string().trim().min(1),
    technologies: z.array(z.enum(technologyKeys)).min(1),
    demoURL: projectURL,
    codeURL: projectURL,
    order: z.number().int().optional(),
  }),
});

export const collections = {
  projects,
};
