import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
    technologies: z.string(),
    demoURL: z.string(),
    codeURL: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects,
};