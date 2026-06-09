import { NavLink } from "react-router-dom";
import { categories, categoryToSlug } from "../lib/categories";

interface CategoryNavProps {
  onNavigate?: () => void;
  compact?: boolean;
}

export function CategoryNav({ onNavigate, compact = false }: CategoryNavProps) {
  return (
    <nav aria-label="Rubriken">
      <ul
        className={
          compact
            ? "grid gap-2"
            : "flex flex-wrap items-center gap-x-5 gap-y-2"
        }
      >
        {categories.map((category) => (
          <li key={category}>
            <NavLink
              to={`/rubrik/${categoryToSlug(category)}`}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  "text-sm font-bold uppercase transition-colors",
                  isActive
                    ? "text-brand-700"
                    : "text-ink/75 hover:text-brand-700",
                ].join(" ")
              }
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
