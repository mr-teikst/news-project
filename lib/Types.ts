interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  id: string;
}

interface NewsData {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface SourceData {
  status: string;
  sources: Source[];
}

interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  language: string;
  country: string;
}

type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";
