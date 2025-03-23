
import { LibraryItem, getAllTags, getAllMediaTypes } from './types';
import { philosophyBooks } from './philosophy-books';
import { financeBooks } from './finance-books';
import { scienceBooks } from './science-books';
import { technologyBooks } from './technology-books';
import { businessBooks } from './business-books';
import { selfImprovementBooks } from './self-improvement-books';
import { fictionBooks } from './fiction-books';
import { mathematicsBooks } from './mathematics-books';
import { historyBooks } from './history-books';
import { psychologyBooks } from './psychology-books';
import { physicsBooks } from './physics-books';
import { astronomyBooks } from './astronomy-books';
import { biologyBooks } from './biology-books';
import { geographyBooks } from './geography-books';
import { politicsBooks } from './politics-books';
import { engineeringBooks } from './engineering-books';
import { sociologyBooks } from './sociology-books';

// Combine all book categories
export const libraryItems: LibraryItem[] = [
  ...philosophyBooks,
  ...financeBooks,
  ...scienceBooks,
  ...technologyBooks,
  ...businessBooks,
  ...selfImprovementBooks,
  ...fictionBooks,
  ...mathematicsBooks,
  ...historyBooks,
  ...psychologyBooks,
  ...physicsBooks,
  ...astronomyBooks,
  ...biologyBooks,
  ...geographyBooks,
  ...politicsBooks,
  ...engineeringBooks,
  ...sociologyBooks
];

// Export derived data
export const allTags = getAllTags(libraryItems);
export const allMediaTypes = getAllMediaTypes(libraryItems);

// Re-export types and utilities
export * from './types';
