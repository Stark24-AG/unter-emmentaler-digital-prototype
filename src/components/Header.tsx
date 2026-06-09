import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/original/logo.webp";
import { CategoryNav } from "./CategoryNav";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group min-w-0"
          onClick={closeMenu}
          aria-label="Zur Startseite"
        >
          <img
            alt="Der Unter-Emmentaler"
            className="h-10 w-auto sm:h-12"
            src={logoImage}
          />
          <span className="mt-1 block text-xs font-bold uppercase text-brand-700">
            Digitalabo-Prototyp
          </span>
        </Link>

        <div className="hidden flex-1 justify-center lg:flex">
          <CategoryNav />
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <NavLink
            to="/konto"
            className="text-sm font-bold text-ink/75 hover:text-brand-700"
          >
            Konto
          </NavLink>
          <Link className="btn btn-primary" to="/abo">
            Digitalabo
          </Link>
        </div>

        <button
          type="button"
          className="border border-line px-3 py-2 text-sm font-bold uppercase text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          Menü
        </button>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-white px-4 py-4 shadow-soft md:hidden"
        >
          <CategoryNav compact onNavigate={closeMenu} />
          <div className="mt-5 grid gap-3">
            <Link className="btn btn-secondary justify-center" to="/konto" onClick={closeMenu}>
              Konto
            </Link>
            <Link className="btn btn-primary justify-center" to="/abo" onClick={closeMenu}>
              Digitalabo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
