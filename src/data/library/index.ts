
import { LibraryItem, getAllTags, getAllMediaTypes } from './types';
import { philosophyBooks } from './philosophy-books';
import { financeBooks } from './finance-books';
import { scienceBooks } from './science-books';
import { technologyBooks } from './technology-books';
import { businessBooks } from './business-books';
import { selfImprovementBooks } from './self-improvement-books';
import { fictionBooks } from './fiction-books';

// Combine all book categories
export const libraryItems: LibraryItem[] = [
  ...philosophyBooks,
  ...financeBooks,
  ...scienceBooks,
  ...technologyBooks,
  ...businessBooks,
  ...selfImprovementBooks,
  ...fictionBooks
];

// Export derived data
export const allTags = getAllTags(libraryItems);
export const allMediaTypes = getAllMediaTypes(libraryItems);

// Re-export types and utilities
export * from './types';
