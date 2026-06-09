import { Link } from "react-router-dom";
import type { Article } from "../data/articles";
import { PremiumBadge } from "./PremiumBadge";

interface AdminTableProps {
  articles: Article[];
}

export function AdminTable({ articles }: AdminTableProps) {
  return (
    <div className="overflow-x-auto border border-line bg-white">
      <table className="min-w-full divide-y divide-line text-left text-sm">
        <thead className="bg-paper text-xs font-bold uppercase text-ink/70">
          <tr>
            <th className="px-4 py-3">Titel</th>
            <th className="px-4 py-3">Kategorie</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Premium</th>
            <th className="px-4 py-3">Aktion</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {articles.map((article) => (
            <tr key={article.slug}>
              <td className="max-w-sm px-4 py-4 font-semibold text-ink">
                {article.title}
              </td>
              <td className="px-4 py-4 text-ink/75">{article.category}</td>
              <td className="px-4 py-4 text-ink/75">{article.status}</td>
              <td className="px-4 py-4">
                {article.premium ? <PremiumBadge compact /> : "Nein"}
              </td>
              <td className="px-4 py-4">
                <Link className="font-bold text-brand-700 hover:text-brand-800" to="/admin/artikel-neu">
                  Bearbeiten
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
