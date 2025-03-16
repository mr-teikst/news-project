export default function NewsDetailCard({ article }: { article: Article }) {
  return (
    <div className="bru-card container p-4 bg-custom-primary flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full max-w-3xl mx-auto mb-4"
        />
      )}
      <h2 className="font-bold text-2xl">post description:</h2>
      <p className="mb-4 text-xl">{article.description}</p>
      <div className="max-w-none text-xl">{article.content}</div>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 self-center"
      >
        <button className="bru-btn bg-custom-secondary text-black text-xl px-4 py-2 rounded-md w-full ">
          View Source
        </button>
      </a>
    </div>
  );
}
