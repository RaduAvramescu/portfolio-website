import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    demoURL: z.string(),
    codeURL: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects,
};
