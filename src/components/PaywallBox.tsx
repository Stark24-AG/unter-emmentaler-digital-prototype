import { Link } from "react-router-dom";

export function PaywallBox() {
  const benefits = [
    "Alle Premium-Artikel freischalten",
    "Jederzeit kündbar",
    "Sicher bezahlen",
    "Lokaljournalismus unterstützen",
  ];

  return (
    <aside className="my-10 border-2 border-brand-700 bg-brand-50 p-6 sm:p-8">
      <p className="section-kicker text-brand-700">Premium</p>
      <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-ink">
        Lesen Sie weiter mit einem Digitalabo
      </h2>
      <p className="mt-4 leading-7 text-ink/80">
        Erhalten Sie Zugriff auf alle Premium-Artikel des Unter-Emmentalers und
        unterstützen Sie unabhängigen Lokaljournalismus aus der Region.
      </p>
      <ul className="mt-5 grid gap-2 text-sm font-semibold text-ink sm:grid-cols-2">
        {benefits.map((benefit) => (
          <li className="border-l-4 border-brand-600 bg-white px-3 py-2" key={benefit}>
            {benefit}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link className="btn btn-primary" to="/abo">
          Monatsabo ansehen
        </Link>
        <Link className="btn btn-secondary" to="/abo">
          Jahresabo ansehen
        </Link>
        <Link className="btn btn-muted" to="/login">
          Einloggen
        </Link>
      </div>
      <p className="mt-5 text-xs leading-5 text-ink/65">
        Im echten System würde der vollständige Artikel serverseitig
        geschützt.
      </p>
    </aside>
  );
}
