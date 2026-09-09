// Project image registry
import armyBuilderWebp from '../assets/images/army-builder.webp?url';
import armyBuilderJpg from '../assets/images/army-builder.jpg?url';
import portfolioWebp from '../assets/images/portfolio.webp?url';
import portfolioJpg from '../assets/images/portfolio.jpg?url';
import wh2JeopardyWebp from '../assets/images/wh2-jeopardy.webp?url';
import wh2JeopardyJpg from '../assets/images/wh2-jeopardy.jpg?url';

export const imageMap = {
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
} satisfies Record<string, { webp: string; jpg: string }>;

export type ProjectImageKey = keyof typeof imageMap;

export function getImageSources(imagePath: ProjectImageKey) {
  if (!Object.prototype.hasOwnProperty.call(imageMap, imagePath)) {
    throw new Error(`Unknown project image key: ${imagePath}`);
  }
  return imageMap[imagePath];
}
