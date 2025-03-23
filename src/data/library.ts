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
  },
  
  // Finance books
  {
    id: '11',
    title: "How I Made $2,000,000 in the Stock Market",
    author: "Nicolas Darvas",
    publishedYear: 1960,
    link: "https://www.goodreads.com/book/show/832189.How_I_Made_2_000_000_in_the_Stock_Market",
    tags: ["finance", "investing", "stock market", "trading", "memoir"],
    type: "book",
    description: "The remarkable story of Nicolas Darvas, a dancer who made two million dollars in the stock market in less than two years."
  },
  {
    id: '12',
    title: "How to Make Money in Stocks",
    author: "William J. O'Neil",
    publishedYear: 1988,
    link: "https://www.goodreads.com/book/show/762855.How_to_Make_Money_in_Stocks",
    tags: ["finance", "investing", "stock market", "trading", "CANSLIM"],
    type: "book",
    description: "A guide to the famous CANSLIM investing system developed by William O'Neil."
  },
  {
    id: '13',
    title: "Trade Like a Stock Market Wizard",
    author: "Mark Minervini",
    publishedYear: 2013,
    link: "https://www.goodreads.com/book/show/16160309-trade-like-a-stock-market-wizard",
    tags: ["finance", "investing", "stock market", "trading", "technical analysis"],
    type: "book",
    description: "Mark Minervini shares his proven trading system that has allowed him to generate impressive profits in the stock market."
  },
  {
    id: '14',
    title: "Think & Trade Like a Champion",
    author: "Mark Minervini",
    publishedYear: 2015,
    link: "https://www.goodreads.com/book/show/40396348-think-trade-like-a-champion",
    tags: ["finance", "investing", "stock market", "trading", "psychology"],
    type: "book",
    description: "A follow-up to Trade Like a Stock Market Wizard that focuses on the mindset of successful traders."
  },
  {
    id: '15',
    title: "Mindset Secrets for Winning",
    author: "Mark Minervini",
    publishedYear: 2017,
    link: "https://www.goodreads.com/book/show/54523057-mindset-secrets-for-winning",
    tags: ["finance", "investing", "psychology", "trading", "self-improvement"],
    type: "book",
    description: "Strategies for developing the mental edge that leads to investing success."
  },
  {
    id: '16',
    title: "How to Trade in Stocks",
    author: "Jesse Livermore",
    publishedYear: 1940,
    link: "https://www.goodreads.com/book/show/894069.How_to_Trade_In_Stocks",
    tags: ["finance", "investing", "stock market", "trading", "classic"],
    type: "book",
    description: "The classic book by legendary trader Jesse Livermore on his trading methods and philosophy."
  },
  {
    id: '17',
    title: "Reminiscences of a Stock Operator",
    author: "Edwin Lefevre",
    publishedYear: 1923,
    link: "https://www.goodreads.com/book/show/100779.Reminiscences_of_a_Stock_Operator",
    tags: ["finance", "investing", "stock market", "trading", "biography", "classic"],
    type: "book",
    description: "A fictionalized account of the life of legendary trader Jesse Livermore, considered one of the most important books on trading."
  },
  {
    id: '18',
    title: "The Dow Theory",
    author: "Robert Rhea",
    publishedYear: 2013,
    link: "https://www.goodreads.com/book/show/17914908-the-dow-theory",
    tags: ["finance", "investing", "technical analysis", "market theory"],
    type: "book",
    description: "An explanation of the Dow Theory, one of the oldest and most respected methods of technical analysis."
  },
  
  // Continue with more books from different categories
  {
    id: '19',
    title: "Super Stocks",
    author: "Kenneth Fisher",
    publishedYear: 1984,
    link: "https://www.goodreads.com/book/show/630939.Super_Stocks",
    tags: ["finance", "investing", "stock analysis", "value investing"],
    type: "book",
    description: "Ken Fisher's approach to identifying high-potential stocks using the price-to-sales ratio and other metrics."
  },
  {
    id: '20',
    title: "The Only Three Questions That Count",
    author: "Kenneth Fisher",
    publishedYear: 2006,
    link: "https://www.goodreads.com/book/show/97642.The_Only_Three_Questions_That_Count",
    tags: ["finance", "investing", "market psychology", "contrarian investing"],
    type: "book",
    description: "Ken Fisher provides a framework for investment decisions based on three fundamental questions."
  },
  
  // Add psychology books
  {
    id: '21',
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    publishedYear: 2011,
    link: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
    tags: ["psychology", "behavioral economics", "decision making", "cognitive biases"],
    type: "book",
    description: "Nobel Prize winner Daniel Kahneman's groundbreaking work on the two systems that drive the way we think."
  },
  {
    id: '22',
    title: "Noise: A Flaw in Human Judgment",
    author: "Daniel Kahneman, Olivier Sibony, Cass R. Sunstein",
    publishedYear: 2021,
    link: "https://www.goodreads.com/book/show/55339408-noise",
    tags: ["psychology", "decision making", "behavioral economics", "judgment"],
    type: "book",
    description: "An exploration of how noise (random variability) affects our decision-making processes."
  },
  
  // Add astronomy books
  {
    id: '23',
    title: "Cosmos",
    author: "Carl Sagan",
    publishedYear: 1980,
    link: "https://www.goodreads.com/book/show/55030.Cosmos",
    tags: ["astronomy", "science", "physics", "cosmology", "popular science"],
    type: "book",
    description: "Carl Sagan's classic exploration of the universe and humanity's place within it."
  },
  {
    id: '24',
    title: "Pale Blue Dot: A Vision of Human Future in Space",
    author: "Carl Sagan",
    publishedYear: 1994,
    link: "https://www.goodreads.com/book/show/61663.Pale_Blue_Dot",
    tags: ["astronomy", "science", "space exploration", "cosmology"],
    type: "book",
    description: "Inspired by the famous 'pale blue dot' photograph, Sagan reflects on humanity's place in the cosmos."
  },
  {
    id: '25',
    title: "Contact",
    author: "Carl Sagan",
    publishedYear: 1985,
    link: "https://www.goodreads.com/book/show/61666.Contact",
    tags: ["astronomy", "science fiction", "extraterrestrial life", "SETI"],
    type: "book",
    description: "A novel about human's first contact with an extraterrestrial civilization."
  },
  
  // Add technology books
  {
    id: '26',
    title: "AI Superpowers",
    author: "Kai-Fu Lee",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/38242135-ai-superpowers",
    tags: ["technology", "artificial intelligence", "china", "silicon valley", "future"],
    type: "book",
    description: "A perspective on the future of AI and the technological competition between China and the United States."
  },
  {
    id: '27',
    title: "AI 2041",
    author: "Kai-Fu Lee",
    publishedYear: 2021,
    link: "https://www.goodreads.com/book/show/55968563-ai-2041",
    tags: ["technology", "artificial intelligence", "future", "science fiction"],
    type: "book",
    description: "Ten stories set in 2041 exploring how AI might transform our world over the next 20 years."
  },
  {
    id: '28',
    title: "Artificial Intelligence: A Guide for Thinking Humans",
    author: "Melanie Mitchell",
    publishedYear: 2019,
    link: "https://www.goodreads.com/book/show/43565311-artificial-intelligence",
    tags: ["technology", "artificial intelligence", "computer science", "machine learning"],
    type: "book",
    description: "A balanced and accessible overview of AI technologies and their implications."
  },
  
  // Add history books
  {
    id: '29',
    title: "The Singapore Story",
    author: "Lee Kuan Yew (LKY)",
    publishedYear: 1998,
    link: "https://www.goodreads.com/book/show/189599.The_Singapore_Story",
    tags: ["history", "biography", "politics", "singapore", "memoir"],
    type: "book",
    description: "The first volume of Lee Kuan Yew's memoirs, covering Singapore's path to independence."
  },
  {
    id: '30',
    title: "From Third World to First: The Singapore Story: 1965-2000",
    author: "Lee Kuan Yew (LKY)",
    publishedYear: 2000,
    link: "https://www.goodreads.com/book/show/144409.From_Third_World_to_First",
    tags: ["history", "biography", "politics", "singapore", "economics", "development"],
    type: "book",
    description: "Lee Kuan Yew's account of how Singapore developed from a third world country into a modern economic powerhouse."
  },
  
  // Add more finance books
  {
    id: '31',
    title: "Beat the Crowd",
    author: "Kenneth Fisher",
    publishedYear: 2015,
    link: "https://www.goodreads.com/book/show/22571550-beat-the-crowd",
    tags: ["finance", "investing", "contrarian investing", "market psychology"],
    type: "book",
    description: "A guide to contrarian investing and how to profit by going against common market wisdom."
  },
  {
    id: '32',
    title: "The Little Book of Market Myths",
    author: "Kenneth Fisher",
    publishedYear: 2013,
    link: "https://www.goodreads.com/book/show/15824960-the-little-book-of-market-myths",
    tags: ["finance", "investing", "market myths", "contrarian investing"],
    type: "book",
    description: "Exposes common market misconceptions that can harm your portfolio."
  },
  {
    id: '33',
    title: "Value Investing and Behavioral Finance",
    author: "Parag Parikh",
    publishedYear: 2009,
    link: "https://www.goodreads.com/book/show/6915083-value-investing-and-behavioral-finance",
    tags: ["finance", "investing", "value investing", "behavioral finance", "psychology"],
    type: "book",
    description: "Combines value investing principles with insights from behavioral finance."
  },
  {
    id: '34',
    title: "Stock to Riches",
    author: "Parag Parikh",
    publishedYear: 2005,
    link: "https://www.goodreads.com/book/show/2078852.Stocks_to_Riches",
    tags: ["finance", "investing", "stock market", "wealth creation", "indian markets"],
    type: "book",
    description: "Insights into wealth creation through stock market investing with a focus on the Indian context."
  },
  
  // Add books from other categories
  {
    id: '35',
    title: "The Evolution of Biological Information",
    author: "Christoph Adami",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/145491111-the-evolution-of-biological-information",
    tags: ["biology", "evolution", "information theory", "complexity", "science"],
    type: "book",
    description: "An exploration of how information evolves in biological systems."
  },
  {
    id: '36',
    title: "Black Holes & Time Warps",
    author: "Kip Stephen Thorne",
    publishedYear: 1994,
    link: "https://www.goodreads.com/book/show/17362.Black_Holes_Time_Warps",
    tags: ["physics", "cosmology", "black holes", "relativity", "popular science"],
    type: "book",
    description: "An accessible explanation of Einstein's relativity theory and black holes."
  },
  
  // Additional finance books
  {
    id: '37',
    title: "The ANXIOUS Investor",
    author: "Scott Nations",
    publishedYear: 2022,
    link: "https://www.goodreads.com/book/show/60316167-the-anxious-investor",
    tags: ["finance", "investing", "psychology", "behavioral finance", "market psychology"],
    type: "book",
    description: "How to harness your anxiety for better investing decisions."
  },
  {
    id: '38',
    title: "The End of Accounting",
    author: "Baruch Lev, Feng Gu",
    publishedYear: 2016,
    link: "https://www.goodreads.com/book/show/29939557-the-end-of-accounting-and-the-path-forward-for-investors-and-managers",
    tags: ["finance", "accounting", "investing", "financial analysis", "corporate reporting"],
    type: "book",
    description: "Argues that traditional financial statements have lost their relevance for investors and managers."
  },
  {
    id: '39',
    title: "Best Loser Wins",
    author: "Tom Hougaard",
    publishedYear: 2022,
    link: "https://www.goodreads.com/book/show/60221175-best-loser-wins",
    tags: ["finance", "trading", "psychology", "risk management", "mindset"],
    type: "book",
    description: "A psychological approach to trading focusing on the mindset needed to accept losses and still win overall."
  },
  {
    id: '40',
    title: "Stan Weinstein's Secrets for Profiting in Bull and Bear Markets",
    author: "Stan Weinstein",
    publishedYear: 1992,
    link: "https://www.goodreads.com/book/show/966769.Stan_Weinstein_s_Secrets_for_Profiting_in_Bull_and_Bear_Markets",
    tags: ["finance", "investing", "technical analysis", "market timing", "bear markets"],
    type: "book",
    description: "A technical approach to identifying market stages and profiting in both bull and bear markets."
  },
  
  // Add more books to cover all categories
  {
    id: '41',
    title: "The Trading MindWheel",
    author: "Michael Lamothe",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/150255976-the-trading-mindwheel",
    tags: ["finance", "trading", "psychology", "mindset", "technical analysis"],
    type: "book",
    description: "A framework for developing the mental skills needed for successful trading."
  },
  {
    id: '42',
    title: "What I Learnt about Investing from Darwin",
    author: "Pulak Prasad",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/140740571-what-i-learnt-about-investing-from-darwin",
    tags: ["finance", "investing", "evolution", "adaptation", "strategy"],
    type: "book",
    description: "Applies principles of evolution and natural selection to investment strategy."
  },
  
  // Add books on mathematics and statistics
  {
    id: '43',
    title: "Introduction to Bayesian Statistics",
    author: "K.R. Koch",
    publishedYear: 2007,
    link: "https://www.goodreads.com/book/show/2378767.Introduction_to_Bayesian_Statistics",
    tags: ["mathematics", "statistics", "bayesian", "probability", "data analysis"],
    type: "book",
    description: "A comprehensive introduction to Bayesian statistical methods."
  },
  {
    id: '44',
    title: "Linear Algebra and its Applications",
    author: "David C. Lay",
    publishedYear: 2004,
    link: "https://www.goodreads.com/book/show/179699.Linear_Algebra_and_Its_Applications",
    tags: ["mathematics", "linear algebra", "applied mathematics", "textbook"],
    type: "book",
    description: "A comprehensive textbook on linear algebra with applications across various fields."
  },
  
  // Add books on philosophy and history
  {
    id: '45',
    title: "The Lean Startup",
    author: "Eric Ries",
    publishedYear: 2011,
    link: "https://www.goodreads.com/book/show/10127019-the-lean-startup",
    tags: ["startups", "business", "entrepreneurship", "innovation", "product development"],
    type: "book",
    description: "A methodology for developing businesses and products through validated learning and rapid experimentation."
  },
  {
    id: '46',
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedYear: 1954,
    link: "https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings",
    tags: ["fiction", "fantasy", "classic", "adventure", "epic"],
    type: "book",
    description: "An epic high-fantasy novel that has had a profound influence on the genre."
  },
  
  // Add books from the images covering various other topics
  {
    id: '47',
    title: "COVID-19: The Great Reset",
    author: "Klaus Schwab, Thierry Malleret",
    publishedYear: 2023,
    link: "https://www.goodreads.com/book/show/54498122-covid-19",
    tags: ["economics", "politics", "society", "pandemic", "future"],
    type: "book",
    description: "Examines the far-reaching implications of the COVID-19 pandemic on society, economics, and global politics."
  },
  {
    id: '48',
    title: "The Goal: A Process of Ongoing Improvement",
    author: "Eliyahu M. Goldratt, Jeff Cox",
    publishedYear: 1984,
    link: "https://www.goodreads.com/book/show/113934.The_Goal",
    tags: ["business", "management", "productivity", "manufacturing", "operations"],
    type: "book",
    description: "A business novel that introduces the Theory of Constraints for improving process efficiency."
  },
  
  // Add more finance books
  {
    id: '49',
    title: "Complete Guide To Price Action Trading",
    author: "Steve Burns, Holly Burns",
    publishedYear: 2022,
    link: "https://www.goodreads.com/book/show/61308587-complete-guide-to-price-action-trading",
    tags: ["finance", "trading", "technical analysis", "price action", "charts"],
    type: "book",
    description: "A comprehensive guide to price action trading techniques and strategies."
  },
  {
    id: '50',
    title: "Hidden Champions",
    author: "Hermann Simon",
    publishedYear: 2009,
    link: "https://www.goodreads.com/book/show/15843089-hidden-champions-of-the-twenty-first-century",
    tags: ["business", "strategy", "management", "global markets", "competitive advantage"],
    type: "book",
    description: "Analysis of little-known world market leaders and their successful strategies."
  },
  
  // More selections from the provided list
  {
    id: '51',
    title: "The TAO of CHARLIE MUNGER",
    author: "David Clark",
    publishedYear: 2017,
    link: "https://www.goodreads.com/book/show/30199587-tao-of-charlie-munger",
    tags: ["finance", "investing", "wisdom", "value investing", "berkshire hathaway"],
    type: "book",
    description: "A collection of Charlie Munger's wisdom and insights on investing and decision making."
  },
  {
    id: '52',
    title: "Heard on The Street",
    author: "Timothy Falcon Crack",
    publishedYear: 2014,
    link: "https://www.goodreads.com/book/show/22306706-heard-on-the-street",
    tags: ["finance", "quantitative", "interviews", "wall street", "investment banking"],
    type: "book",
    description: "Quantitative questions from Wall Street job interviews with detailed solutions."
  },
  
  // Adding new books from the images
  {
    id: '53',
    title: "Thinking in Bets",
    author: "Annie Duke",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/35957157-thinking-in-bets",
    tags: ["decision making", "psychology", "poker", "uncertainty"],
    type: "book",
    description: "Making smarter decisions when you don't have all the facts."
  },
  {
    id: '54',
    title: "Show Your Work",
    author: "Austin Kleon",
    publishedYear: 2014,
    link: "https://www.goodreads.com/book/show/18290401-show-your-work",
    tags: ["creativity", "art", "career", "self-improvement"],
    type: "book"
  },
  {
    id: '55',
    title: "How To Win Friends and Influence People",
    author: "Dale Carnegie",
    publishedYear: 1936,
    link: "https://www.goodreads.com/book/show/4865.How_to_Win_Friends_and_Influence_People",
    tags: ["self-help", "psychology", "communication", "relationships"],
    type: "book"
  },
  {
    id: '56',
    title: "Atomic Habits",
    author: "James Clear",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/40121378-atomic-habits",
    tags: ["self-improvement", "habits", "psychology", "productivity"],
    type: "book"
  },
  {
    id: '57',
    title: "The One Thing",
    author: "Gary Keller",
    publishedYear: 2013,
    link: "https://www.goodreads.com/book/show/16256798-the-one-thing",
    tags: ["productivity", "focus", "business", "self-improvement"],
    type: "book"
  },
  {
    id: '58',
    title: "Principles",
    author: "Ray Dalio",
    publishedYear: 2017,
    link: "https://www.goodreads.com/book/show/34536488-principles",
    tags: ["business", "leadership", "decision making", "management"],
    type: "book"
  },
  {
    id: '59',
    title: "Digital Gold",
    author: "Nathaniel Popper",
    publishedYear: 2015,
    link: "https://www.goodreads.com/book/show/23546676-digital-gold",
    tags: ["bitcoin", "cryptocurrency", "finance", "technology", "history"],
    type: "book"
  },
  {
    id: '60',
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    publishedYear: 1949,
    link: "https://www.goodreads.com/book/show/106835.The_Intelligent_Investor",
    tags: ["finance", "investing", "value investing", "economics"],
    type: "book"
  },
  {
    id: '61',
    title: "Good to Great",
    author: "Jim Collins",
    publishedYear: 2001,
    link: "https://www.goodreads.com/book/show/76865.Good_to_Great",
    tags: ["business", "leadership", "management", "success"],
    type: "book"
  },
  {
    id: '62',
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    publishedYear: 1997,
    link: "https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad",
    tags: ["finance", "personal finance", "investing", "money management"],
    type: "book"
  },
  {
    id: '63',
    title: "The Way of the Superior Man",
    author: "David Deida",
    publishedYear: 2004,
    link: "https://www.goodreads.com/book/show/79424.The_Way_of_the_Superior_Man",
    tags: ["masculinity", "spirituality", "relationships", "self-help"],
    type: "book"
  },
  {
    id: '64',
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    publishedYear: 2018,
    link: "https://www.goodreads.com/book/show/30257963-12-rules-for-life",
    tags: ["psychology", "self
