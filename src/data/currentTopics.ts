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
      "In der Demo wird daraus ein modernes Digital-Dossier rund um Nachwuchs, Vereine und Perspektiven im Frauensport.",
    image: frauenEishockeyImage,
    imageAlt: "Bildteaser zum Frauen-Eishockey-Beitrag",
  },
  {
    title: "Unterricht mit Erde unter den Fingernägeln",
    label: "Langenthal",
    teaser:
      "Schule, Alltag und Gemeindeentwicklung lassen sich digital gut als Bildergeschichte, Premium-Hintergrund oder Newsletter-Thema weiterführen.",
    image: schulgartenImage,
    imageAlt: "Bildteaser zum Schulgarten-Beitrag",
  },
  {
    title: "Spazieren und Gewerbe entdecken",
    label: "Oberaargau",
    teaser:
      "Lokale Gewerbeformate lassen sich digital gut mit Karten, Kurzporträts und Premium-Hintergründen verbinden.",
    image: gewerbeImage,
    imageAlt: "Bildteaser zum Gewerbe-Beitrag",
  },
  {
    title: "Leise Arbeit mit scharfem Blatt",
    label: "Huttwil",
    teaser:
      "Handwerkliche Nahaufnahmen und lokale Porträts sind starkes Material für eine digitale Lokalzeitung mit Premium-Vertiefung.",
    image: sensenImage,
    imageAlt: "Bildteaser zum Sensen-Beitrag",
  },
  {
    title: "«Ich bin stolz und enttäuscht zugleich»",
    label: "Sport",
    teaser:
      "Interviews funktionieren digital besonders gut mit Abo-Hinweis, Archivbezug und klarer Einordnung für Sportfans aus der Region.",
    image: danielBieriImage,
    imageAlt: "Bildteaser zum Interview-Beitrag",
  },
];
