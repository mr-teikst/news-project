import { getArticleById } from "@/lib/api";
import { notFound } from "next/navigation";
import NewsDetailCard from "@/components/NewsDetailCard/NewsDetailCard";

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const article = await getArticleById(params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex justify-center items-start">
      <NewsDetailCard article={article} />
    </div>
  );
}
