import { Link } from "react-router-dom";
import { AdminTable } from "../components/AdminTable";
import { DemoNotice } from "../components/DemoNotice";
import { sortedArticles } from "../data/articles";

export function AdminPage() {
  return (
    <main className="page-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Admin-Demo</p>
          <h1 className="section-title">Redaktionsoberflaeche</h1>
        </div>
        <Link className="btn btn-primary" to="/admin/artikel-neu">
          Neuer Artikel
        </Link>
      </div>
      <div className="mt-6">
        <DemoNotice>
          In der echten Version koennten Redakteure hier Artikel erfassen,
          bearbeiten und als Premium markieren.
        </DemoNotice>
      </div>
      <div className="mt-8">
        <AdminTable articles={sortedArticles.slice(0, 12)} />
      </div>
    </main>
  );
}
