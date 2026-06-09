import type { Article } from "../data/articles";
import { ArticleCard } from "./ArticleCard";

interface ArticleGridProps {
  articles: Article[];
  emptyMessage?: string;
  compact?: boolean;
}

export function ArticleGrid({
  articles,
  emptyMessage = "Keine Artikel gefunden.",
  compact = false,
}: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="border border-line bg-white px-6 py-10 text-center text-ink/70">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard
          article={article}
          key={article.slug}
          variant={compact ? "compact" : "default"}
        />
      ))}
    </div>
  );
}
