export type Guide = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string; // Markdown
  author: string;
  category: 'Fundamentals' | 'Significant Mastery';
  readingTime: number;
  keyTakeaways: string[];
  datePublished: string;
  featured: boolean;
  order: number;
  coverImage?: string;
  tags: string[];
};

export type PromptCategory = 'Research Design' | 'Literature Review' | 'Data Analysis' | 'Writing' | 'SME Research';

export type Prompt = {
  id: string;
  title: string;
  slug: string;
  useCase: string;
  promptText: string;
  category: PromptCategory;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  dateAdded: string;
  order: number;
  tags: string[];
};

export type Gem = {
  id: string;
  title: string;
  slug: string;
  description: string;
  geminiLink: string;
  type: 'Analyzer' | 'Generator' | 'Outliner' | 'Reviewer';
  dateCreated: string;
  order: number;
  tags: string[];
  featured: boolean;
  tier?: 'Postgraduate/Professional';
};
