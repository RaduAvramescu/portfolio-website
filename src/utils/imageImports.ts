// Dynamic image imports for project assets
import armyBuilderWebp from '../assets/images/army-builder.webp?url';
import armyBuilderJpg from '../assets/images/army-builder.jpg?url';
import portfolioWebp from '../assets/images/portfolio.webp?url';
import portfolioJpg from '../assets/images/portfolio.jpg?url';
import wh2JeopardyWebp from '../assets/images/wh2-jeopardy.webp?url';
import wh2JeopardyJpg from '../assets/images/wh2-jeopardy.jpg?url';

export const imageMap: Record<string, { webp: string; jpg: string }> = {
  'images/army-builder': {
    webp: armyBuilderWebp,
    jpg: armyBuilderJpg,
  },
  'images/portfolio': {
    webp: portfolioWebp,
    jpg: portfolioJpg,
  },
  'images/wh2-jeopardy': {
    webp: wh2JeopardyWebp,
    jpg: wh2JeopardyJpg,
  },
};

export function getImageSources(imagePath: string) {
  const images = imageMap[imagePath];
  if (!images) {
    console.warn(`Image not found for path: ${imagePath}`);
    return { webp: '', jpg: '' };
  }
  return images;
}
