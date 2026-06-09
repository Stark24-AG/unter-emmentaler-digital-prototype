import { useMemo, useState } from "react";
import { ArticleGrid } from "../components/ArticleGrid";
import { sortedArticles } from "../data/articles";
import { categories, type Category } from "../lib/categories";
import { classNames } from "../lib/format";

type CategoryFilter = "Alle" | Category;

export function ArticlesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("Alle");

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return sortedArticles.filter((article) => {
      const matchesCategory =
        category === "Alle" || article.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [article.title, article.subtitle, article.lead, article.category]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const filters: CategoryFilter[] = ["Alle", ...categories];

  return (
    <main className="page-section">
      <div className="max-w-3xl">
        <p className="section-kicker">Archiv</p>
        <h1 className="section-title mt-2">Alle Demo-Artikel</h1>
        <p className="mt-4 text-sm leading-6 text-ink/75">
          Die Artikel sind fiktive lokale Beispiele und zeigen Gratis- sowie
          Premium-Inhalte in einer Kartenansicht.
        </p>
      </div>

      <div className="mt-8 grid gap-4 border-y border-line bg-white py-5 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              onClick={() => setCategory(filter)}
              className={classNames(
                "border px-3 py-2 text-sm font-bold transition",
                category === filter
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-line bg-white text-ink hover:border-brand-700",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
        <div>
          <label className="sr-only" htmlFor="article-search">
            Artikel suchen
          </label>
          <input
            className="form-input"
            id="article-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Suchen nach Titel, Thema oder Rubrik"
          />
        </div>
      </div>

      <div className="mt-8">
        <ArticleGrid articles={filteredArticles} />
      </div>
    </main>
  );
}
