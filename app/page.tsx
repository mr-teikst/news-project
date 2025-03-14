import NewsCard from "@/components/NewsCard/NewsCard";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";

const getData = async (): Promise<NewsData> => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=2805c91d75f34199a0a1d9d6c5fab565"
  );
  const data = await response.json();
  console.log("data is: ", data);
  return data;
};

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string; pageSize?: string };
}) {
  const data = await getData();
  console.log("data is: ", data);
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const pageSize = searchParams.pageSize ? parseInt(searchParams.pageSize) : 4;

  return (
    <>
      <div className="grid grid-cols-5 grid-rows-2 gap-2">
        {data.articles
          .slice(pageSize * (page - 1), pageSize * page)
          .map((article, index) => {
            let className = "bg-custom-primary";

            // Assign classes based on the index
            if (index % 4 === 0) {
              className += " col-span-3";
            } else if (index % 4 === 1) {
              className += " col-start-4 col-span-2";
            } else if (index % 4 === 2) {
              className += " row-start-2 col-span-2";
            } else if (index % 4 === 3) {
              className += " col-span-3 row-start-2";
            }

            return (
              <NewsCard
                key={article.title}
                title={article.title}
                description={article.description}
                imageURL={article.urlToImage}
                className={className}
              />
            );
          })}
      </div>
      <div className="my-5 flex flex-col justify-center">
        <PaginationWithLinks
          page={page}
          pageSize={4}
          totalCount={data.articles.length}
        />
      </div>
    </>
  );
}
