import { Link, useParams } from "react-router-dom";
import { ArticleGrid } from "../components/ArticleGrid";
import { getArticlesByCategory } from "../data/articles";
import { categoryDescriptions, slugToCategory } from "../lib/categories";

export function CategoryPage() {
  const params = useParams();
  const category = slugToCategory(params.category);

  if (!category) {
    return (
      <main className="page-section">
        <h1 className="section-title">Rubrik nicht gefunden</h1>
        <p className="mt-4 text-ink/75">Diese Rubrik ist im Prototyp nicht angelegt.</p>
        <Link className="btn btn-primary mt-6" to="/artikel">
          Alle Artikel anzeigen
        </Link>
      </main>
    );
  }

  return (
    <main className="page-section">
      <div className="max-w-3xl">
        <p className="section-kicker">Rubrik</p>
        <h1 className="section-title mt-2">{category}</h1>
        <p className="mt-4 text-sm leading-6 text-ink/75">
          {categoryDescriptions[category]}
        </p>
      </div>
      <div className="mt-8">
        <ArticleGrid
          articles={getArticlesByCategory(category)}
          emptyMessage="In dieser Rubrik sind noch keine Demo-Artikel vorhanden."
        />
      </div>
    </main>
  );
}
