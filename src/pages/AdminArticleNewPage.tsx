import { FormEvent, useState } from "react";
import { DemoNotice } from "../components/DemoNotice";
import { DemoToast } from "../components/DemoToast";
import { categories } from "../lib/categories";

export function AdminArticleNewPage() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Demo gespeichert. In der echten Version wuerde dieser Artikel in einer Datenbank gespeichert.",
    );
  }

  return (
    <main className="page-section max-w-4xl">
      <p className="section-kicker">Admin-Demo</p>
      <h1 className="section-title mt-2">Artikel erfassen</h1>
      <div className="mt-6">
        <DemoNotice>
          Dieses Formular speichert nichts dauerhaft. Es zeigt nur, wie eine
          einfache Redaktionsmaske aussehen koennte.
        </DemoNotice>
      </div>

      <form className="mt-8 grid gap-5 border border-line bg-white p-6" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="article-title">
            Titel
          </label>
          <input className="form-input mt-2" id="article-title" type="text" required />
        </div>
        <div>
          <label className="form-label" htmlFor="article-subtitle">
            Untertitel
          </label>
          <input className="form-input mt-2" id="article-subtitle" type="text" />
        </div>
        <div>
          <label className="form-label" htmlFor="article-lead">
            Lead
          </label>
          <textarea className="form-input mt-2 min-h-28" id="article-lead" />
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="form-label" htmlFor="article-category">
              Kategorie
            </label>
            <select className="form-input mt-2" id="article-category">
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="form-label" htmlFor="article-author">
              Autor
            </label>
            <input className="form-input mt-2" id="article-author" type="text" />
          </div>
          <div>
            <label className="form-label" htmlFor="article-date">
              Veroeffentlichungsdatum
            </label>
            <input className="form-input mt-2" id="article-date" type="date" />
          </div>
        </div>
        <label className="flex items-center gap-3 border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink">
          <input className="h-4 w-4 accent-brand-700" type="checkbox" />
          Premium ja/nein
        </label>
        <div>
          <label className="form-label" htmlFor="article-preview">
            Vorschau-Absaetze
          </label>
          <textarea className="form-input mt-2 min-h-32" id="article-preview" />
        </div>
        <div>
          <label className="form-label" htmlFor="article-body">
            Artikeltext
          </label>
          <textarea className="form-input mt-2 min-h-48" id="article-body" />
        </div>
        <button className="btn btn-primary justify-center sm:w-fit" type="submit">
          Demo speichern
        </button>
      </form>
      <DemoToast message={message} onClose={() => setMessage("")} />
    </main>
  );
}
