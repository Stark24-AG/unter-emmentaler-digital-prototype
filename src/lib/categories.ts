export const categories = [
  "Huttwil",
  "Langenthal",
  "Region",
  "Sport",
  "Kultur",
  "Wirtschaft",
  "Politik",
  "Meinung",
] as const;

export type Category = (typeof categories)[number];

export const categoryDescriptions: Record<Category, string> = {
  Huttwil: "Nachrichten aus Huttwil, den Quartieren und den umliegenden Gemeinden.",
  Langenthal: "Berichte aus Langenthal und dem Oberaargau mit Blick auf Alltag und Politik.",
  Region: "Geschichten aus dem Emmental, dem Luzerner Hinterland und der weiteren Region.",
  Sport: "Resultate, Hintergruende und Vereinsgeschichten aus dem regionalen Sport.",
  Kultur: "Konzerte, Theater, Ausstellungen und Menschen hinter lokalen Kulturprojekten.",
  Wirtschaft: "Gewerbe, Landwirtschaft, Lehrbetriebe und Unternehmen aus der Region.",
  Politik: "Gemeinderat, Kommissionen, Abstimmungen und regionale Entscheidungen.",
  Meinung: "Kommentare und Einordnungen der Redaktion zu lokalen Fragen.",
};

export function categoryToSlug(category: Category): string {
  return category.toLowerCase().replaceAll(" ", "-");
}

export function slugToCategory(slug?: string): Category | undefined {
  return categories.find((category) => categoryToSlug(category) === slug);
}
