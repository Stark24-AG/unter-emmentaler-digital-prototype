import danielBieriImage from "../assets/original/daniel-bieri.webp";
import frauenEishockeyImage from "../assets/original/frauen-eishockey.webp";
import gewerbeImage from "../assets/original/gewerbe-rohrbach.webp";
import schulgartenImage from "../assets/original/schulgarten-elzmatte.webp";
import sensenImage from "../assets/original/sensen-huttwil.webp";

export interface CurrentTopic {
  title: string;
  label: string;
  teaser: string;
  image: string;
  imageAlt: string;
}

export const currentTopics: CurrentTopic[] = [
  {
    title: "Frauen-Eishockey ist weiterhin möglich",
    label: "Sport",
    teaser:
      "Original-Schlagzeile und Originalfoto der aktuellen Referenzseite. In der Demo wird daraus ein modernes Digital-Dossier rund um Nachwuchs, Vereine und Perspektiven im Frauensport.",
    image: frauenEishockeyImage,
    imageAlt: "Originalfoto zum Frauen-Eishockey-Beitrag des Unter-Emmentalers",
  },
  {
    title: "Unterricht mit Erde unter den Fingernägeln",
    label: "Langenthal",
    teaser:
      "Schule, Alltag und Gemeindeentwicklung lassen sich digital gut als Bildergeschichte, Premium-Hintergrund oder Newsletter-Thema weiterführen.",
    image: schulgartenImage,
    imageAlt: "Originalfoto zum Schulgarten-Beitrag des Unter-Emmentalers",
  },
  {
    title: "Spazieren und Gewerbe entdecken",
    label: "Oberaargau",
    teaser:
      "Lokale Gewerbeformate lassen sich digital gut mit Karten, Kurzporträts und Premium-Hintergründen verbinden.",
    image: gewerbeImage,
    imageAlt: "Originalfoto zum Gewerbe-Beitrag des Unter-Emmentalers",
  },
  {
    title: "Leise Arbeit mit scharfem Blatt",
    label: "Huttwil",
    teaser:
      "Handwerkliche Nahaufnahmen und lokale Porträts sind starkes Material für eine digitale Lokalzeitung mit Premium-Vertiefung.",
    image: sensenImage,
    imageAlt: "Originalfoto zum Sensen-Beitrag des Unter-Emmentalers",
  },
  {
    title: "«Ich bin stolz und enttäuscht zugleich»",
    label: "Sport",
    teaser:
      "Interviews funktionieren digital besonders gut mit Abo-Hinweis, Archivbezug und klarer Einordnung für Sportfans aus der Region.",
    image: danielBieriImage,
    imageAlt: "Originalfoto zum Interview-Beitrag des Unter-Emmentalers",
  },
];
