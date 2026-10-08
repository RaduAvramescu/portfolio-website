import type { CollectionEntry } from 'astro:content';

export function sortProjects(projects: readonly CollectionEntry<'projects'>[]) {
  return [...projects].sort(
    (a, b) => (a.data.order ?? 0) - (b.data.order ?? 0)
  );
}
