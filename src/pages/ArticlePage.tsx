import { Link, useParams } from "react-router-dom";
import { PaywallBox } from "../components/PaywallBox";
import { PremiumBadge } from "../components/PremiumBadge";
import { getArticleBySlug, sortedArticles } from "../data/articles";
import { categoryToSlug } from "../lib/categories";
import { formatDate } from "../lib/format";
import { ArticleGrid } from "../components/ArticleGrid";

export function ArticlePage() {
  const params = useParams();
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return (
      <main className="page-section">
        <h1 className="section-title">Artikel nicht gefunden</h1>
        <p className="mt-4 text-ink/75">Dieser Demo-Artikel existiert nicht.</p>
        <Link className="btn btn-primary mt-6" to="/artikel">
          Zum Artikelarchiv
        </Link>
      </main>
    );
  }

  const visibleParagraphs = article.premium
    ? article.paragraphs.slice(0, 2)
    : article.paragraphs;
  const relatedArticles = sortedArticles
    .filter(
      (candidate) =>
        candidate.slug !== article.slug && candidate.category === article.category,
    )
    .slice(0, 3);

  return (
    <main>
      <article>
        <header className="border-b border-line bg-paper">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to={`/rubrik/${categoryToSlug(article.category)}`}
                  className="section-kicker text-brand-700"
                >
                  {article.category}
                </Link>
                {article.premium ? <PremiumBadge /> : null}
              </div>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-4 text-lg leading-8 text-ink/75">{article.lead}</p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold uppercase text-ink/55">
                <span>{article.author}</span>
                <span>{formatDate(article.date)}</span>
                <span>{article.readingTime}</span>
              </div>
            </div>
            <img
              className="h-full min-h-[280px] w-full object-cover"
              src={article.image}
              alt={article.imageAlt}
            />
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xl font-semibold leading-8 text-ink">{article.subtitle}</p>
          <div className="article-content mt-7">
            {visibleParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {article.premium ? <PaywallBox /> : null}
        </div>
      </article>

      {relatedArticles.length > 0 ? (
        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Mehr aus {article.category}</p>
                <h2 className="section-title">Weitere Artikel</h2>
              </div>
            </div>
            <ArticleGrid articles={relatedArticles} compact />
          </div>
        </section>
      ) : null}
    </main>
  );
}
