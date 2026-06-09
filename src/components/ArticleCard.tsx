import { Link } from "react-router-dom";
import type { Article } from "../data/articles";
import { categoryToSlug } from "../lib/categories";
import { formatDate } from "../lib/format";
import { PremiumBadge } from "./PremiumBadge";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
}

export function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <article
      className={[
        "group border border-line bg-white transition hover:border-brand-600",
        isFeatured ? "grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr]" : "",
      ].join(" ")}
    >
      <Link to={`/artikel/${article.slug}`} className="block overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          className={[
            "w-full object-cover transition duration-500 group-hover:scale-[1.03]",
            isFeatured ? "h-full min-h-[280px]" : isCompact ? "h-36" : "h-48",
          ].join(" ")}
          loading={isFeatured ? "eager" : "lazy"}
        />
      </Link>
      <div className={isFeatured ? "p-6 sm:p-8" : "p-5"}>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to={`/rubrik/${categoryToSlug(article.category)}`}
            className="text-xs font-bold uppercase text-brand-700 hover:text-brand-800"
          >
            {article.category}
          </Link>
          {article.premium ? <PremiumBadge compact /> : null}
        </div>
        <h2
          className={[
            "mt-3 font-serif font-bold leading-tight text-ink group-hover:text-brand-700",
            isFeatured ? "text-3xl sm:text-4xl" : "text-xl",
          ].join(" ")}
        >
          <Link to={`/artikel/${article.slug}`}>{article.title}</Link>
        </h2>
        {!isCompact ? (
          <p className="mt-3 text-sm leading-6 text-ink/75">{article.lead}</p>
        ) : null}
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase text-ink/55">
          <span>{formatDate(article.date)}</span>
          <span aria-hidden="true">|</span>
          <span>{article.readingTime}</span>
        </div>
      </div>
    </article>
  );
}
