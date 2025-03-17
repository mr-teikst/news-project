//business entertainment general health science sports technology
import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import redis from "./redis";

const apiKey = "cbfb1472c5f84c0da3930217c3bfc798";
const baseURL = "https://newsapi.org/v2";

// Create axios instance
const newsApi = axios.create({
  baseURL,
  params: {
    apiKey,
  },
});

// API functions
const getSources = async (): Promise<SourceData> => {
  const { data } = await newsApi.get("/top-headlines/sources");
  return data;
};

const getDomainsWithCategories = async (
  category: Category[]
): Promise<string[]> => {
  const sources = await getSources();
  return sources?.sources
    ?.filter(
      (source: Source) =>
        category.includes(source.category) && source.url.split("www.")[1]
    )
    .map((source: Source) => source.url.split("www.")[1]);
};

async function getData(category?: Category[]): Promise<NewsData> {
  const cacheKey = category ? `news:${category.join(",")}` : "news:default";

  // Try to get from cache first
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  // If not in cache, fetch from API
  let data: NewsData;
  if (category) {
    const domains = await getDomainsWithCategories(category);
    const response = await newsApi.get("/everything", {
      params: { domains: domains?.join(",") },
    });
    data = response.data;
  } else {
    const response = await newsApi.get("/top-headlines", {
      params: { country: "us" },
    });
    data = response.data;
  }

  // Add unique IDs and store individual articles
  data.articles = await Promise.all(
    data.articles.map(async (article) => {
      const id = nanoid();
      const articleWithId = { ...article, id };

      // Store each article individually
      await redis.set(`article:${id}`, JSON.stringify(articleWithId));

      return articleWithId;
    })
  );

  // Store the full response
  await redis.setex(cacheKey, 120, JSON.stringify(data)); // Cache for 1 hour

  return data;
}

async function getArticleById(id: string): Promise<Article | null> {
  const article = await redis.get(`article:${id}`);
  return article ? JSON.parse(article) : null;
}

// React Query hooks
// const useNews = (category?: Category[]) => {
//   return useQuery({
//     queryKey: ["news", category],
//     queryFn: () => getData(category),
//   });
// };

// const useSources = () => {
//   return useQuery({
//     queryKey: ["sources"],
//     queryFn: getSources,
//   });
// };

export { getData, getSources, getArticleById };
