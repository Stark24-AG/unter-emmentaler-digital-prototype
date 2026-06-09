import { Link } from "react-router-dom";

const footerLinks = [
  ["Impressum", "/projekt"],
  ["Datenschutz", "/projekt"],
  ["Kontakt", "/projekt"],
  ["Abo", "/abo"],
  ["Redaktion", "/admin"],
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-2xl font-bold">Unter-Emmentaler Digital</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
            Statischer Frontend-Prototyp für eine digitale Lokalzeitung mit
            Premium-Artikeln, Paywall-Vorschau und Digitalabo-Idee.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            {footerLinks.map(([label, href]) => (
              <li key={label}>
                <Link className="text-white/80 hover:text-white" to={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
