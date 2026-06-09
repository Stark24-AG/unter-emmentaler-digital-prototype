import { Link } from "react-router-dom";
import { ArticleCard } from "../components/ArticleCard";
import { ArticleGrid } from "../components/ArticleGrid";
import { CurrentTopics } from "../components/CurrentTopics";
import { NewsletterBox } from "../components/NewsletterBox";
import { articles, getPremiumArticles, sortedArticles } from "../data/articles";

export function HomePage() {
  const hero = articles.find((article) => article.featured) ?? sortedArticles[0];
  const latestArticles = sortedArticles
    .filter((article) => article.slug !== hero.slug)
    .slice(0, 6);
  const premiumArticles = getPremiumArticles().slice(0, 4);
  const regionalArticles = sortedArticles
    .filter((article) =>
      ["Huttwil", "Langenthal", "Region"].includes(article.category),
    )
    .slice(0, 6);

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap gap-2 text-xs font-bold uppercase text-ink/65">
              <span className="border border-line bg-white px-3 py-1">
                Demo-Ausgabe 09.06.2026
              </span>
              <span className="border border-line bg-white px-3 py-1">
                Huttwil · Langenthal · Region
              </span>
            </div>
            <p className="section-kicker">Digitale Lokalzeitung</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Unter-Emmentaler Digital
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink/75">
              Ein Präsentationsprototyp für Premium-Artikel, Paywall,
              Digitalabo, aktuelle Themen und eine einfache Redaktionsidee.
            </p>
            <div className="mt-6 grid gap-3 border-y border-line py-4 text-sm text-ink/75 sm:grid-cols-3">
              <div>
                <strong className="block text-2xl text-brand-700">20</strong>
                fiktive Artikel
              </div>
              <div>
                <strong className="block text-2xl text-brand-700">5</strong>
                neue Fotomotive
              </div>
              <div>
                <strong className="block text-2xl text-brand-700">40%</strong>
                Premium-Demo
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="btn btn-primary" to="/abo">
                Digitalabo ansehen
              </Link>
              <Link className="btn btn-secondary" to="/artikel">
                Alle Artikel
              </Link>
            </div>
          </div>
          <ArticleCard article={hero} variant="featured" />
        </div>
      </section>

      <CurrentTopics />

      <section className="page-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Neu erschienen</p>
            <h2 className="section-title">Aktuelle Artikel</h2>
          </div>
          <Link className="section-link" to="/artikel">
            Alle anzeigen
          </Link>
        </div>
        <ArticleGrid articles={latestArticles} />
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="section-heading">
            <div>
              <p className="section-kicker text-premium-700">Premium</p>
              <h2 className="section-title">Vertiefung für Abonnentinnen und Abonnenten</h2>
            </div>
            <Link className="section-link" to="/abo">
              Digitalabo
            </Link>
          </div>
          <ArticleGrid articles={premiumArticles} compact />
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Nah dran</p>
            <h2 className="section-title">Aus der Region</h2>
          </div>
          <Link className="section-link" to="/rubrik/region">
            Region öffnen
          </Link>
        </div>
        <ArticleGrid articles={regionalArticles} />
      </section>

      <NewsletterBox />
    </>
  );
}
