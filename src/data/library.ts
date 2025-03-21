
export type MediaType = 'book' | 'article' | 'paper' | 'video' | 'podcast';

export interface LibraryItem {
  id: string;
  title: string;
  author: string;
  publishedYear: number;
  link: string;
  tags: string[];
  type: MediaType;
  description?: string;
}

export const libraryItems: LibraryItem[] = [
  {
    id: '1',
    title: "The Beginning of Infinity",
    author: "David Deutsch",
    publishedYear: 2011,
    link: "https://www.goodreads.com/book/show/10483171-the-beginning-of-infinity",
    tags: ["philosophy", "science", "progress", "epistemology", "knowledge"],
    type: "book",
    description: "Explores how human understanding has evolved through an interplay of theories and criticism, leading to an unbounded growth of knowledge."
  },
  {
    id: '2',
    title: "The Psychology of Money",
    author: "Morgan Housel",
    publishedYear: 2020,
    link: "https://www.goodreads.com/book/show/41881472-the-psychology-of-money",
    tags: ["finance", "psychology", "investing", "behavioral economics"],
    type: "book",
    description: "Explores the strange ways people think about money and teaches you how to make better sense of one of life's most important matters."
  },
  {
    id: '3',
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    publishedYear: 2011,
    link: "https://www.goodreads.com/book/show/23692271-sapiens",
    tags: ["history", "anthropology", "evolution", "society", "culture"],
    type: "book",
    description: "A sweeping narrative of humanity's creation and evolution that explores the ways in which biology and history have defined us."
  },
  {
    id: '4',
    title: "Thinking in Systems: A Primer",
    author: "Donella H. Meadows",
    publishedYear: 2008,
    link: "https://www.goodreads.com/book/show/3828902-thinking-in-systems",
    tags: ["systems thinking", "complexity", "sustainability", "modeling"],
    type: "book",
    description: "An accessible introduction to systems thinking that helps readers understand the complex systems that surround us."
  },
  {
    id: '5',
    title: "The Bitcoin Standard",
    author: "Saifedean Ammous",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/36448501-the-bitcoin-standard",
    tags: ["bitcoin", "economics", "cryptocurrency", "money", "finance"],
    type: "book"
  },
  {
    id: '6',
    title: "Meditations",
    author: "Marcus Aurelius",
    publishedYear: 180,
    link: "https://www.goodreads.com/book/show/30659.Meditations",
    tags: ["philosophy", "stoicism", "self-improvement", "wisdom", "ancient"],
    type: "book"
  },
  {
    id: '7',
    title: "Superintelligence: Paths, Dangers, Strategies",
    author: "Nick Bostrom",
    publishedYear: 2014,
    link: "https://www.goodreads.com/book/show/20527133-superintelligence",
    tags: ["artificial intelligence", "futurism", "technology", "existential risk"],
    type: "book"
  },
  {
    id: '8',
    title: "Status as a Service (StaaS)",
    author: "Eugene Wei",
    publishedYear: 2019,
    link: "https://www.eugenewei.com/blog/2019/2/19/status-as-a-service",
    tags: ["social media", "network effects", "status", "technology", "society"],
    type: "article"
  },
  {
    id: '9',
    title: "Inadequate Equilibria",
    author: "Eliezer Yudkowsky",
    publishedYear: 2017,
    link: "https://www.lesswrong.com/s/oLGCcbnvabyibnG9d",
    tags: ["rationality", "economics", "decision making", "institutions"],
    type: "book"
  },
  {
    id: '10',
    title: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    publishedYear: 1962,
    link: "https://www.goodreads.com/book/show/61539.The_Structure_of_Scientific_Revolutions",
    tags: ["philosophy of science", "history of science", "paradigm shifts"],
    type: "book"
  }
];

// Extract all unique tags
export const allTags = Array.from(
  new Set(libraryItems.flatMap(item => item.tags))
).sort();

// Extract all media types
export const allMediaTypes = Array.from(
  new Set(libraryItems.map(item => item.type))
).sort();
