import cultureImage from "../assets/photo-culture.webp";
import hockeyImage from "../assets/photo-hockey.webp";
import irrigationImage from "../assets/photo-irrigation.webp";
import marketImage from "../assets/photo-market.webp";
import schoolGardenImage from "../assets/photo-school-garden.webp";

export interface CurrentTopic {
  title: string;
  label: string;
  teaser: string;
  href: string;
  image: string;
  imageAlt: string;
}

export const currentTopics: CurrentTopic[] = [
  {
    title: "Frauen-Eishockey bleibt regional sichtbar",
    label: "Sport",
    teaser:
      "Die Referenzseite setzt aktuell stark auf regionale Sportgeschichten. Für die Demo wird daraus ein modernes Premium-Dossier rund um Nachwuchs, Vereine und Perspektiven im Frauensport.",
    href: "https://unter-emmentaler.ch/news-details/frauen-eishockey-ist-weiterhin-moeglich.html",
    image: hockeyImage,
    imageAlt: "Fiktives Foto eines regionalen Eishockeytrainings",
  },
  {
    title: "Unterricht draussen: Schule wird anschaulich",
    label: "Bildung",
    teaser:
      "Ein Schulgarten-Thema passt sehr gut zu einer Lokalzeitung, weil es Kinder, Eltern, Lehrpersonen und Gemeindeentwicklung zusammenbringt.",
    href: "https://unter-emmentaler.ch/news-details/unterricht-mit-erde-unter-den-fingernaegeln.html",
    image: schoolGardenImage,
    imageAlt: "Fiktives Foto eines Schulgartens mit Unterricht im Freien",
  },
  {
    title: "Gewerbe entdecken statt nur vorbeigehen",
    label: "Wirtschaft",
    teaser:
      "Lokale Gewerbeformate lassen sich digital gut mit Karten, Kurzporträts und Premium-Hintergründen verbinden.",
    href: "https://unter-emmentaler.ch/news-details/spazieren-und-gewerbe-entdecken.html",
    image: marketImage,
    imageAlt: "Fiktives Foto eines Dorfmarkts mit lokalen Ständen",
  },
  {
    title: "Kultur und Dorfleben als wiederkehrendes Dossier",
    label: "Kultur",
    teaser:
      "Veranstaltungen, Vereinsleben und regionale Kultur könnten auf der Digitalplattform mehr Vorlauf, Rückblick und Fotostrecken erhalten.",
    href: "https://unter-emmentaler.ch/news-details/fraumatt-city-geht-in-die-21-auflage.html",
    image: cultureImage,
    imageAlt: "Fiktives Foto eines lokalen Kulturabends",
  },
  {
    title: "Landwirtschaft, Klima und Alltag erklären",
    label: "Region",
    teaser:
      "Themen wie Bewässerung, Wege, Felder und Dorfentwicklung eignen sich für erklärende Lokaljournalismus-Formate mit Grafiken und Bildern.",
    href: "https://unter-emmentaler.ch/index.html",
    image: irrigationImage,
    imageAlt: "Fiktives Foto regionaler Landwirtschaft mit Bewässerung",
  },
];
