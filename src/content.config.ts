import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { imageMap, type ProjectImageKey } from './utils/imageImports';
import { technologyIconMap, type Technology } from './utils/technologies';

const imageKeys = Object.keys(imageMap) as ProjectImageKey[];
const technologyKeys = Object.keys(technologyIconMap) as Technology[];

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    image: z.enum(imageKeys),
    description: z.string(),
    technologies: z.array(z.enum(technologyKeys)),
    demoURL: z.string(),
    codeURL: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects,
};
