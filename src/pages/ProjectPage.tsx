import { Link } from "react-router-dom";

const realBuildNeeds = [
  "Zugriff auf aktuelles CMS und Hosting",
  "Klärung des heutigen Artikel-Workflows",
  "Stripe-Konto und Zahlungsabläufe",
  "Datenschutz und Impressum prüfen",
  "Artikelimport und Archivstruktur planen",
  "Hosting, Wartung und Support klären",
];

export function ProjectPage() {
  return (
    <main className="page-section max-w-4xl">
      <p className="section-kicker">Projekt</p>
      <h1 className="section-title mt-2">Was dieser Prototyp zeigt</h1>
      <div className="article-content mt-7">
        <p>
          Diese statische Demo zeigt, wie der Unter-Emmentaler digitaler auftreten
          könnte: mit klarer Artikel-Hierarchie, Premium-Kennzeichnung,
          Paywall-Vorschau, Digitalabo-Seite und einer einfachen Admin-Idee.
        </p>
        <p>
          Es sind keine echten Zahlungen aktiv. Login, Konto und Adminbereich sind
          reine Benutzeroberflächen ohne Backend, Datenbank oder Webhooks.
        </p>
        <p>
          Für eine echte Umsetzung müsste zuerst geprüft werden, wie die
          bestehende Website technisch aufgebaut ist und wie Artikel heute
          erfasst, redigiert und veröffentlicht werden.
        </p>
      </div>

      <section className="mt-10 border-y border-line bg-white py-6">
        <h2 className="font-serif text-2xl font-bold text-ink">
          Für eine echte Umsetzung nötig
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {realBuildNeeds.map((item) => (
            <li className="border-l-4 border-brand-700 bg-paper px-4 py-3 text-sm text-ink" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="btn btn-primary" to="/artikel">
          Demo ansehen
        </Link>
        <Link className="btn btn-secondary" to="/abo">
          Abo-Seite
        </Link>
      </div>
    </main>
  );
}
