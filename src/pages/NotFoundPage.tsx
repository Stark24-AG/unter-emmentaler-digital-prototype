import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="page-section max-w-3xl">
      <p className="section-kicker">404</p>
      <h1 className="section-title mt-2">Seite nicht gefunden</h1>
      <p className="mt-4 text-ink/75">
        Diese Seite ist im statischen Prototyp nicht vorhanden.
      </p>
      <Link className="btn btn-primary mt-6" to="/">
        Zur Startseite
      </Link>
    </main>
  );
}
