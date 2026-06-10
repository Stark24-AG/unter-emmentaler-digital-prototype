import heroImage from "../assets/local-news-hero.webp";
import cultureImage from "../assets/photo-culture.webp";
import hockeyImage from "../assets/photo-hockey.webp";
import irrigationImage from "../assets/photo-irrigation.webp";
import marketImage from "../assets/photo-market.webp";
import schoolGardenImage from "../assets/photo-school-garden.webp";
import originalDanielBieriImage from "../assets/original/daniel-bieri.webp";
import originalEmmentalischesSchwingfestImage from "../assets/original/emmentalisches-schwingfest.webp";
import originalFeldschiessenAndresImage from "../assets/original/feldschiessen-andres-sommer.webp";
import originalFeldschiessenMartinImage from "../assets/original/feldschiessen-martin-lehmann.webp";
import originalFraumattCityImage from "../assets/original/fraumatt-city.webp";
import originalFrauenEishockeyImage from "../assets/original/frauen-eishockey.webp";
import originalFusionFussballImage from "../assets/original/fusion-fussball-huttwil.webp";
import originalGewerbeImage from "../assets/original/gewerbe-rohrbach.webp";
import originalHeimwehImage from "../assets/original/heimweh-huttwil.webp";
import originalMichelinImage from "../assets/original/michelin-luthern.webp";
import originalMittellaendischesSchwingfestImage from "../assets/original/mittellaendisches-schwingfest.webp";
import originalNaturheilkundeImage from "../assets/original/naturheilkunde.webp";
import originalOberbuehlImage from "../assets/original/oberbuehl-schwinget.webp";
import originalPastaImage from "../assets/original/pasta-luthern.webp";
import originalPublicViewingImage from "../assets/original/public-viewing-huttwil.webp";
import originalSchulgartenImage from "../assets/original/schulgarten-elzmatte.webp";
import originalSensenImage from "../assets/original/sensen-huttwil.webp";
import originalSkorpsImage from "../assets/original/skorps-sumiswald.webp";
import originalTagDerOffenenTuerImage from "../assets/original/tag-der-offenen-tuer.webp";
import type { Category } from "../lib/categories";

export type ArticleStatus = "Entwurf" | "Bereit" | "Veröffentlicht";

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  lead: string;
  category: Category;
  author: string;
  date: string;
  readingTime: string;
  premium: boolean;
  featured?: boolean;
  status: ArticleStatus;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

const sharedImage = heroImage;

const demoArticles: Article[] = [
  {
    slug: "begegnungszone-am-marktplatz-huttwil",
    title: "Neue Begegnungszone soll den Marktplatz beleben",
    subtitle: "Huttwil diskutiert über Tempo, Aufenthaltsqualität und Gewerbeverkehr.",
    lead:
      "Der Gemeinderat legt einen Vorschlag vor, der den Marktplatz sicherer machen und gleichzeitig die Erreichbarkeit der Geschäfte erhalten soll.",
    category: "Huttwil",
    author: "Nora Gerber",
    date: "2026-06-08",
    readingTime: "5 Min.",
    premium: true,
    featured: true,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktive Schweizer Dorfstrasse als Symbolbild für Lokaljournalismus",
    paragraphs: [
      "Der Marktplatz in Huttwil ist seit Jahren ein Ort, an dem sich Einkaufsverkehr, Fussgängerinnen, Velofahrer und Lieferdienste kreuzen. Nun will der Gemeinderat die Situation neu ordnen. Vorgesehen ist eine Begegnungszone mit klareren Querungen, mehr Sitzgelegenheiten und einer ruhigeren Führung des Verkehrs.",
      "Gewerbetreibende begrüssen, dass die Parkplätze nicht ersatzlos verschwinden sollen. Gleichzeitig fordern sie eine Bauplanung, die den Ladenbetrieb nicht über Monate belastet. Die Gemeinde spricht von einer Etappierung, die noch mit den Betroffenen abgestimmt wird.",
      "In der Mitwirkung sollen auch Fragen zur Gestaltung geklärt werden. Zur Diskussion stehen Baumpflanzungen, mobile Grünelemente und ein einheitliches Beschilderungskonzept. Besonders wichtig ist dem Gemeinderat, dass der Platz nicht nur schöner wirkt, sondern im Alltag einfacher funktioniert.",
      "Bis Ende Sommer werden Rückmeldungen gesammelt. Danach entscheidet der Gemeinderat, ob ein detailliertes Bauprojekt ausgearbeitet wird. Eine Umsetzung wäre frühestens im kommenden Jahr möglich.",
    ],
  },
  {
    slug: "juniorinnen-des-sc-huttwil-starten-in-die-vorbereitung",
    title: "Juniorinnen des SC Huttwil starten in die Vorbereitung",
    subtitle: "Der Nachwuchs trainiert mit einem neuen Staff und klaren Zielen.",
    lead:
      "Beim SC Huttwil beginnt die Saisonvorbereitung mit mehr Spielerinnen, neuen Trainingsformen und einem Schwerpunkt auf Technik.",
    category: "Sport",
    author: "Lukas Baumann",
    date: "2026-06-07",
    readingTime: "4 Min.",
    premium: false,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für regionalen Vereinssport",
    paragraphs: [
      "Auf dem Trainingsplatz herrscht bereits wieder Betrieb. Die Juniorinnen des SC Huttwil arbeiten an Passspiel, Athletik und Spielaufbau. Der neue Staff will die Trainingswoche klarer strukturieren und gleichzeitig Raum für Freude am Spiel lassen.",
      "Besonders erfreulich ist die Breite des Kaders. Mehrere Spielerinnen aus der Region haben sich für ein Probetraining angemeldet. Der Verein sieht darin ein Zeichen, dass der Frauen- und Mädchensport lokal weiter an Bedeutung gewinnt.",
      "Das erste Vorbereitungsspiel ist für Ende Juni vorgesehen. Bis dahin stehen Grundlagen im Zentrum: saubere Ballannahme, schnelle Entscheidungen und eine stabile defensive Ordnung.",
    ],
  },
  {
    slug: "langenthal-prueft-neues-schulraumkonzept",
    title: "Langenthal prüft neues Schulraumkonzept",
    subtitle: "Wachsende Klassen und Tagesstrukturen stellen die Stadt vor Entscheidungen.",
    lead:
      "Die Stadt Langenthal analysiert, wie Schulräume, Betreuung und Spezialzimmer in den nächsten Jahren besser zusammenspielen können.",
    category: "Langenthal",
    author: "Martina König",
    date: "2026-06-06",
    readingTime: "6 Min.",
    premium: true,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für Bildung und Gemeindeentwicklung",
    paragraphs: [
      "Langenthal wächst nicht sprunghaft, aber stetig. Genau diese Entwicklung bringt die Schulplanung unter Druck. Klassenzimmer, Gruppenräume und Tagesstrukturen müssen künftig flexibler genutzt werden können, ohne dass der Unterricht ständig improvisiert werden muss.",
      "Die Stadt lässt deshalb verschiedene Varianten prüfen. Im Fokus stehen bauliche Anpassungen, eine bessere Verteilung der Spezialräume und die Frage, wie die Betreuung am Mittag organisatorisch entlastet werden kann.",
      "Elternvertreterinnen weisen darauf hin, dass die Wege für jüngere Kinder kurz bleiben müssen. Lehrpersonen wiederum betonen, dass moderne Lernformen mehr kleine Räume brauchen. Die Stadt will beide Anliegen in der Planung berücksichtigen.",
      "Ein Entscheid ist noch nicht gefallen. Bis im Herbst soll ein Bericht vorliegen, der Kosten, Dringlichkeit und mögliche Etappen aufzeigt.",
    ],
  },
  {
    slug: "feuerwehr-uebt-den-ernstfall-im-dorfzentrum",
    title: "Feuerwehr übt den Ernstfall im Dorfzentrum",
    subtitle: "Mehrere Korps trainierten die Zusammenarbeit bei einem komplexen Einsatz.",
    lead:
      "Eine gross angelegte Übung zeigte, wie wichtig klare Kommunikation und eingespielte Abläufe bei einem Brand im Zentrum sind.",
    category: "Region",
    author: "Sandro Wyss",
    date: "2026-06-05",
    readingTime: "3 Min.",
    premium: false,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für regionale Sicherheitsarbeit",
    paragraphs: [
      "Rauch, gesperrte Zufahrten und mehrere vermisste Personen: Das Szenario der Feuerwehrübung war bewusst anspruchsvoll gewählt. Die Einsatzkräfte mussten Wasserbezüge aufbauen, Personen retten und den Verkehr umleiten.",
      "Nach der Übung zogen die Verantwortlichen ein positives Fazit. Besonders die Kommunikation zwischen Einsatzleitung, Atemschutztrupps und Verkehrsdienst habe gut funktioniert. Einzelne Details sollen in den kommenden Wochen nachbesprochen werden.",
      "Auch Zuschauerinnen und Zuschauer nutzten die Gelegenheit, sich über die Arbeit der Feuerwehr zu informieren. Für das Korps ist solche Sichtbarkeit wichtig, weil neue Mitglieder gesucht werden.",
    ],
  },
  {
    slug: "sommerbuehne-bringt-musik-auf-den-dorfplatz",
    title: "Sommerbühne bringt Musik auf den Dorfplatz",
    subtitle: "Ein neues Kulturformat setzt auf lokale Bands und kurze Wege.",
    lead:
      "Mit einer kleinen Open-Air-Reihe sollen Musik, Gastronomie und Begegnung im Dorfzentrum zusammenfinden.",
    category: "Kultur",
    author: "Rahel Steiner",
    date: "2026-06-04",
    readingTime: "5 Min.",
    premium: true,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für lokale Kulturveranstaltungen",
    paragraphs: [
      "Die Sommerbühne startet mit drei Abenden im Juli. Das Programm reicht von akustischem Folk über Blasmusik in kleiner Besetzung bis zu einem jungen Chorprojekt. Der Eintritt bleibt frei, die Finanzierung erfolgt über Sponsoren und Kollekte.",
      "Die Organisierenden wollen ein Format schaffen, das ohne grosse Infrastruktur auskommt. Eine mobile Bühne, einfache Beleuchtung und kurze Umbaupausen sollen genügen. Entscheidend sei, dass die Menschen unkompliziert vorbeikommen können.",
      "Für lokale Kulturschaffende ist die Reihe eine willkommene Plattform. Gerade kleinere Formationen finden selten Auftrittsorte, die zwischen Vereinsabend und grossem Festival liegen.",
      "Sollte das Pilotprojekt funktionieren, könnte die Sommerbühne im nächsten Jahr erweitert werden. Denkbar sind Lesungen, Kinderkonzerte und ein Abend für Nachwuchsbands.",
    ],
  },
  {
    slug: "baeckerei-investiert-in-neuen-holzofen",
    title: "Bäckerei investiert in neuen Holzofen",
    subtitle: "Ein Familienbetrieb verbindet Handwerk, Energiefragen und regionale Produkte.",
    lead:
      "Die neue Anlage soll effizienter arbeiten und dem Betrieb mehr Spielraum für Brote mit langer Teigführung geben.",
    category: "Wirtschaft",
    author: "Fabian Moser",
    date: "2026-06-03",
    readingTime: "4 Min.",
    premium: false,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für lokales Gewerbe",
    paragraphs: [
      "In der Backstube riecht es nach Sauerteig und frischem Holz. Der neue Ofen ist für die Bäckerei eine grössere Investition, soll aber langfristig Energie sparen und die Qualität stabilisieren.",
      "Der Betrieb setzt vermehrt auf Mehl aus der Region. Für die Kundschaft soll sichtbar werden, welche Wege die Zutaten zurücklegen und weshalb handwerkliche Produkte ihren Preis haben.",
      "Neben klassischen Broten plant die Bäckerei neue Wochenangebote. Dabei sollen auch kleinere Mengen möglich sein, damit nicht zu viel Ware übrig bleibt.",
    ],
  },
  {
    slug: "gemeinderat-debattiert-ueber-tempo-30",
    title: "Gemeinderat debattiert über Tempo 30 vor Schulwegen",
    subtitle: "Sicherheit, Lärm und Verkehrsfunktion müssen abgewogen werden.",
    lead:
      "Eine Motion verlangt tiefere Geschwindigkeiten auf mehreren Abschnitten. Die Gemeinde will zuerst eine fachliche Prüfung.",
    category: "Politik",
    author: "Nora Gerber",
    date: "2026-06-02",
    readingTime: "6 Min.",
    premium: true,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für kommunale Politik",
    paragraphs: [
      "Tempo 30 ist in vielen Gemeinden ein wiederkehrendes Thema. Auch hier geht es um mehr Sicherheit auf Schulwegen, weniger Lärm in Wohnquartieren und die Frage, wie stark der Durchgangsverkehr eingeschränkt werden darf.",
      "Im Gemeinderat zeigten sich unterschiedliche Haltungen. Einige Mitglieder sehen eine klare Notwendigkeit, andere warnen vor punktuellen Lösungen ohne Gesamtbild. Die Verwaltung soll nun Grundlagen zu Verkehrsaufkommen, Unfallstellen und baulichen Möglichkeiten sammeln.",
      "Eltern aus betroffenen Quartieren begrüssen den Schritt. Sie berichten von unübersichtlichen Situationen am Morgen und am Mittag. Gleichzeitig betonen Vertreter des Gewerbes, dass Zufahrten für Lieferverkehr weiterhin funktionieren müssen.",
      "Ein Entscheid über konkrete Abschnitte wird frühestens nach der Sommerpause erwartet.",
    ],
  },
  {
    slug: "lokaljournalismus-braucht-naehe-und-distanz",
    title: "Lokaljournalismus braucht Nähe und Distanz",
    subtitle: "Ein Kommentar zur Rolle der Zeitung in kleinen Räumen.",
    lead:
      "Wer lokal berichtet, kennt viele Beteiligte persönlich. Gerade deshalb braucht es klare Regeln und transparente Einordnung.",
    category: "Meinung",
    author: "Redaktion",
    date: "2026-06-01",
    readingTime: "3 Min.",
    premium: false,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für eine Redaktion",
    paragraphs: [
      "Lokaler Journalismus lebt von Nähe. Ohne Vertrauen, Anrufe, Hinweise und Gespräche am Rand einer Versammlung würden viele Geschichten gar nie sichtbar. Diese Nähe ist eine Stärke.",
      "Sie ist aber auch eine Verpflichtung. Wer über Vereine, Gemeinden und Unternehmen berichtet, muss Interessen offenlegen, sauber nachfragen und Kritik aushalten. Distanz entsteht nicht durch Abwesenheit, sondern durch klare Arbeitsweise.",
      "Eine digitale Zeitung kann diese Arbeit sichtbarer machen. Sie kann Quellen erklären, Dossiers bündeln und Rückmeldungen schneller aufnehmen. Entscheidend bleibt, dass die journalistische Haltung erkennbar ist.",
    ],
  },
  {
    slug: "jugendprojekt-oeffnet-werkstatt-am-samstag",
    title: "Jugendprojekt öffnet Werkstatt am Samstag",
    subtitle: "Junge Menschen reparieren Velos, bauen Möbel und lernen Verantwortung.",
    lead:
      "Die offene Werkstatt zeigt, wie praktische Arbeit, Freizeit und soziale Begleitung verbunden werden können.",
    category: "Huttwil",
    author: "Lea Christen",
    date: "2026-05-31",
    readingTime: "4 Min.",
    premium: false,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für ein Jugendprojekt",
    paragraphs: [
      "Am Samstag stehen die Werkstatttüren offen. Besucherinnen und Besucher können sehen, wie alte Velos wieder fahrtüchtig gemacht und einfache Holzmöbel gebaut werden. Das Projekt richtet sich an Jugendliche, die gerne praktisch arbeiten.",
      "Begleitet werden sie von Fachpersonen und Freiwilligen. Neben handwerklichen Fähigkeiten geht es um Pünktlichkeit, Teamarbeit und den Mut, eigene Ideen auszuprobieren.",
      "Die Organisierenden hoffen, dass aus dem Aktionstag neue Kontakte entstehen. Gesucht werden Materialspenden, Mentoren und Betriebe, die Schnuppermöglichkeiten anbieten.",
    ],
  },
  {
    slug: "stadtpark-erhaelt-mehr-schattenplaetze",
    title: "Stadtpark erhält mehr Schattenplätze",
    subtitle: "Langenthal reagiert auf heisse Sommer und veränderte Nutzung.",
    lead:
      "Neue Baumpflanzungen und Trinkwasserstellen sollen den Park im Alltag angenehmer machen.",
    category: "Langenthal",
    author: "Martina König",
    date: "2026-05-30",
    readingTime: "4 Min.",
    premium: false,
    status: "Bereit",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für einen Stadtpark",
    paragraphs: [
      "Der Stadtpark wird häufiger und länger genutzt als früher. Familien, Seniorinnen, Schüler und Berufstätige teilen sich die Flächen über den ganzen Tag. Mit den heisseren Sommern steigt der Bedarf an Schatten.",
      "Die Stadt plant deshalb zusätzliche Baumpflanzungen und zwei Trinkwasserstellen. Die bestehenden Wege bleiben erhalten, einzelne Sitzbereiche werden neu angeordnet.",
      "Die Arbeiten sollen ausserhalb der Hauptsaison ausgeführt werden. Für Veranstaltungen im Park wird ein provisorisches Konzept erstellt.",
    ],
  },
  {
    slug: "landwirte-testen-neue-bewaesserung",
    title: "Landwirte testen neue Bewässerung auf kleinen Parzellen",
    subtitle: "Ein Pilotprojekt untersucht, wie Wasser gezielter eingesetzt werden kann.",
    lead:
      "Mehrere Betriebe aus der Region beteiligen sich an einem Versuch mit Sensoren, Messdaten und einfachen Entscheidungsregeln.",
    category: "Region",
    author: "Sandro Wyss",
    date: "2026-05-29",
    readingTime: "6 Min.",
    premium: true,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für Landwirtschaft in der Region",
    paragraphs: [
      "Trockenperioden treffen nicht alle Kulturen gleich. In einem Pilotprojekt messen Betriebe deshalb Bodenfeuchte, Temperatur und Niederschlag auf kleinen Parzellen. Ziel ist, Wasser nur dann einzusetzen, wenn es den Pflanzen wirklich hilft.",
      "Die Technik ist bewusst einfach gehalten. Sensoren liefern Richtwerte, die Entscheide bleiben bei den Landwirtinnen und Landwirten. Fachleute begleiten den Versuch und vergleichen die Daten mit den Erträgen.",
      "Neben der Technik geht es auch um Zusammenarbeit. Wenn Wasser knapp wird, braucht es Absprachen zwischen Betrieben, Gemeinden und Kanton. Das Projekt soll zeigen, wo solche Absprachen frühzeitig nötig sind.",
      "Erste Resultate werden nach der Ernte erwartet. Schon jetzt ist klar, dass lokale Erfahrungswerte eine wichtige Rolle spielen.",
    ],
  },
  {
    slug: "turnverein-reist-mit-grosser-delegation-ans-fest",
    title: "Turnverein reist mit grosser Delegation ans Fest",
    subtitle: "Mehrere Riegen starten in Einzel- und Gruppenwettkämpfen.",
    lead:
      "Der Verein hat in den letzten Wochen intensiv trainiert und setzt auf eine Mischung aus Routine und Nachwuchs.",
    category: "Sport",
    author: "Lukas Baumann",
    date: "2026-05-28",
    readingTime: "5 Min.",
    premium: true,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für regionalen Turnsport",
    paragraphs: [
      "Die Vorfreude ist gross, die Packlisten sind lang. Der Turnverein reist mit einer breiten Delegation ans nächste Fest. Neben den Aktivriegen sind auch Jugendliche und mehrere Einzelturnende angemeldet.",
      "Trainiert wurde in den letzten Wochen vor allem an Übergängen und Präzision. Kleine Fehler kosten in Gruppenprogrammen schnell Punkte. Die Verantwortlichen sehen dennoch gute Chancen, die Leistungen aus dem Vorjahr zu bestätigen.",
      "Für den Verein hat der Anlass auch eine soziale Bedeutung. Neue Mitglieder erleben zum ersten Mal, wie ein grosses Turnfest funktioniert, während erfahrene Turnerinnen und Turner Verantwortung in Betreuung und Organisation übernehmen.",
      "Die Resultate werden am Sonntagabend erwartet. Unabhängig davon steht für den Verein bereits fest, dass der gemeinsame Auftritt den Zusammenhalt stärkt.",
    ],
  },
  {
    slug: "bibliothek-startet-lesesommer-fuer-kinder",
    title: "Bibliothek startet Lesesommer für Kinder",
    subtitle: "Stempelkarte, Geschichtenmorgen und kleine Preise sollen zum Lesen motivieren.",
    lead:
      "Das Programm richtet sich an Kinder im Primarschulalter und verbindet Bücher mit Begegnung.",
    category: "Kultur",
    author: "Rahel Steiner",
    date: "2026-05-27",
    readingTime: "3 Min.",
    premium: false,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für Bibliothek und Kinderprogramm",
    paragraphs: [
      "Mit dem Lesesommer will die Bibliothek Kindern zeigen, dass Bücher nicht nur Schulstoff sind. Wer mitmacht, sammelt Stempel für gelesene Geschichten und kann an mehreren Geschichtenmorgen teilnehmen.",
      "Die Auswahl reicht von Bilderbüchern bis zu einfachen Sachbüchern. Mitarbeitende helfen bei der Suche nach passenden Titeln und stellen auch Medien für Kinder bereit, die noch nicht gerne lesen.",
      "Zum Abschluss gibt es eine kleine Feier. Entscheidend sei nicht, wer am meisten gelesen habe, sondern dass Kinder positive Leseerlebnisse sammeln.",
    ],
  },
  {
    slug: "metallbetrieb-schafft-neue-lehrstellen",
    title: "Metallbetrieb schafft neue Lehrstellen",
    subtitle: "Der Fachkräftemangel führt zu mehr Engagement in der Ausbildung.",
    lead:
      "Ein regionaler Betrieb baut seine Lehrlingsbetreuung aus und will Jugendliche früher für technische Berufe gewinnen.",
    category: "Wirtschaft",
    author: "Fabian Moser",
    date: "2026-05-26",
    readingTime: "6 Min.",
    premium: true,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für Industrie und Ausbildung",
    paragraphs: [
      "Der Metallbetrieb spürt den Fachkräftemangel direkt. Offene Stellen bleiben länger unbesetzt, während Aufträge komplexer werden. Deshalb investiert die Firma in zusätzliche Lehrstellen und eine engere Begleitung der Lernenden.",
      "Neu sollen Lernende nicht nur in der Produktion mitarbeiten, sondern auch Einblick in Planung, Qualitätskontrolle und Kundenkontakt erhalten. Der Betrieb erhofft sich dadurch ein besseres Verständnis für den gesamten Auftrag.",
      "Zusammen mit Schulen sind Schnuppertage geplant. Jugendliche sollen erleben, dass technische Berufe heute digitale Werkzeuge, Präzision und Teamarbeit verbinden.",
      "Die ersten zusätzlichen Lehrstellen werden im kommenden Sommer ausgeschrieben. Der Betrieb sieht die Ausbildung als langfristige Investition in die Region.",
    ],
  },
  {
    slug: "kommission-empfiehlt-sanierung-der-mehrzweckhalle",
    title: "Kommission empfiehlt Sanierung der Mehrzweckhalle",
    subtitle: "Energie, Garderoben und Barrierefreiheit stehen im Zentrum.",
    lead:
      "Die Mehrzweckhalle ist stark genutzt. Nun soll entschieden werden, welche Sanierungsschritte zuerst kommen.",
    category: "Politik",
    author: "Nora Gerber",
    date: "2026-05-25",
    readingTime: "4 Min.",
    premium: false,
    status: "Bereit",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für eine Mehrzweckhalle",
    paragraphs: [
      "Die Halle dient Schule, Vereinen und Gemeindeanlässen. Nach Jahren intensiver Nutzung sind verschiedene Bauteile sanierungsbedürftig. Eine Kommission empfiehlt nun ein etappiertes Vorgehen.",
      "Priorität haben die Gebäudetechnik, die Garderoben und Verbesserungen bei der Barrierefreiheit. Eine komplette Neugestaltung steht derzeit nicht im Vordergrund.",
      "Der Gemeinderat will die Vorlage im Herbst beraten. Danach könnte ein Kredit an die Gemeindeversammlung kommen.",
    ],
  },
  {
    slug: "warum-vereinsberichte-mehr-sind-als-routine",
    title: "Warum Vereinsberichte mehr sind als Routine",
    subtitle: "Eine Einordnung zur Bedeutung kleiner Meldungen.",
    lead:
      "Nicht jede lokale Geschichte ist spektakulär. Trotzdem zeigen Vereinsberichte, was eine Region zusammenhält.",
    category: "Meinung",
    author: "Redaktion",
    date: "2026-05-24",
    readingTime: "5 Min.",
    premium: true,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für Vereinsleben und Lokalzeitung",
    paragraphs: [
      "Vereinsberichte werden manchmal unterschätzt. Sie handeln von Hauptversammlungen, Jubiläen, Ausflügen und neuen Vorstandsmitgliedern. Auf den ersten Blick ist das Routine. Auf den zweiten Blick ist es ein Protokoll des Zusammenlebens.",
      "In einer Region entstehen viele Verbindungen nicht in grossen Institutionen, sondern in Musikproben, Trainings, Feuerwehrmagazinen und Kulturgruppen. Wer darüber berichtet, macht sichtbar, wer Verantwortung übernimmt.",
      "Digital lassen sich solche Berichte neu bündeln. Dossiers, Fotogalerien und Vereinsseiten könnten helfen, längerfristig auffindbar zu machen, was sonst nach wenigen Tagen verschwindet.",
      "Das ist kein Ersatz für kritischen Journalismus. Aber es ist ein Teil davon, weil lokale Öffentlichkeit auch aus Anerkennung, Erinnerung und Orientierung besteht.",
    ],
  },
  {
    slug: "wanderweg-nach-unwetter-wieder-offen",
    title: "Wanderweg nach Unwetter wieder offen",
    subtitle: "Freiwillige und Werkhof haben Schäden behoben.",
    lead:
      "Nach mehreren Rutschungen ist ein beliebter Weg wieder passierbar. Einzelne Stellen bleiben markiert.",
    category: "Region",
    author: "Sandro Wyss",
    date: "2026-05-23",
    readingTime: "3 Min.",
    premium: false,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für Wanderwege in der Region",
    paragraphs: [
      "Das Unwetter hatte den Weg an mehreren Stellen beschädigt. Kies wurde weggespült, kleine Rutschungen blockierten die Passage. Der Werkhof und Freiwillige konnten die wichtigsten Arbeiten nun abschliessen.",
      "Die Gemeinde bittet Wandernde, die Markierungen zu beachten und bei starkem Regen auf Alternativrouten auszuweichen. Weitere Unterhaltsarbeiten sind im Sommer geplant.",
      "Der Weg ist für den lokalen Tourismus wichtig, weil er mehrere Aussichtspunkte verbindet und häufig von Familien genutzt wird.",
    ],
  },
  {
    slug: "wochenmarkt-sucht-neue-standbetreiber",
    title: "Wochenmarkt sucht neue Standbetreiber",
    subtitle: "Das Angebot soll breiter werden und junge Produzentinnen ansprechen.",
    lead:
      "Der Marktverein möchte mehr regionale Produkte, einfache Verpflegung und handwerkliche Angebote sichtbar machen.",
    category: "Huttwil",
    author: "Lea Christen",
    date: "2026-05-22",
    readingTime: "4 Min.",
    premium: false,
    status: "Entwurf",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für Wochenmarkt und Gewerbe",
    paragraphs: [
      "Der Wochenmarkt ist ein Treffpunkt, doch das Angebot schwankt. Der Marktverein sucht deshalb neue Standbetreiberinnen und Standbetreiber, die regelmässig oder punktuell teilnehmen möchten.",
      "Angesprochen sind Produzenten aus Landwirtschaft, Handwerk und Gastronomie. Auch kleine Teststände sollen möglich sein, damit neue Angebote ohne grosses Risiko ausprobiert werden können.",
      "Die Gemeinde unterstützt die Suche mit vereinfachten Informationen zu Bewilligungen und Standkosten. Ziel ist ein Markt, der alltagstauglich bleibt und trotzdem neugierig macht.",
    ],
  },
  {
    slug: "musikschule-plant-gemeinsames-konzert",
    title: "Musikschule plant gemeinsames Konzert",
    subtitle: "Schülerinnen und Erwachsene treten erstmals im gleichen Programm auf.",
    lead:
      "Das Konzert soll Generationen verbinden und zeigen, wie vielfältig musikalische Bildung in der Region ist.",
    category: "Kultur",
    author: "Rahel Steiner",
    date: "2026-05-21",
    readingTime: "4 Min.",
    premium: false,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für Musikschule und Konzert",
    paragraphs: [
      "Die Musikschule bereitet ein Konzert vor, bei dem Kinder, Jugendliche und Erwachsene gemeinsam auftreten. Das Programm kombiniert kurze Einzelbeiträge mit Ensembles.",
      "Lehrpersonen sehen darin eine Chance, Hemmschwellen abzubauen. Wer sieht, dass auch Erwachsene noch lernen, erlebt Musikunterricht weniger als Leistungsdruck und mehr als gemeinsamen Prozess.",
      "Das Konzert findet in der Aula statt. Der Eintritt ist frei, eine Kollekte kommt dem Instrumentenfonds zugute.",
    ],
  },
  {
    slug: "regionalbank-eroeffnet-beratungsfenster-fuer-kmu",
    title: "Regionalbank eröffnet Beratungsfenster für KMU",
    subtitle: "Kleine Betriebe können Fragen zu Investitionen und Nachfolge klären.",
    lead:
      "Das neue Angebot soll unkomplizierte Erstgespräche ermöglichen und Unternehmerinnen besser vernetzen.",
    category: "Wirtschaft",
    author: "Fabian Moser",
    date: "2026-05-20",
    readingTime: "4 Min.",
    premium: false,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für lokale Wirtschaft",
    paragraphs: [
      "Viele kleine Unternehmen stehen vor ähnlichen Fragen: Wie wird eine Investition finanziert, wann lohnt sich eine Erweiterung, und wie kann eine Nachfolge rechtzeitig vorbereitet werden?",
      "Die Regionalbank richtet dafür ein monatliches Beratungsfenster ein. Es handelt sich nicht um fertige Lösungen, sondern um Erstgespräche, die weitere Schritte klären sollen.",
      "Gewerbevertreter begrüssen das Angebot, weil es kurze Wege schafft. Gerade Kleinstbetriebe hätten oft wenig Zeit, sich durch lange Abklärungen zu arbeiten.",
    ],
  },
  {
    slug: "leserbrief-zur-zukunft-des-dorfkerns",
    title: "Leserbrief: Der Dorfkern braucht Alltag, nicht nur Anlässe",
    subtitle: "Eine Stimme aus der Leserschaft zur Entwicklung des Zentrums.",
    lead:
      "Ein Leser fordert kleine, verlässliche Verbesserungen statt ausschliesslich grosser Projekte.",
    category: "Meinung",
    author: "Gastbeitrag",
    date: "2026-05-19",
    readingTime: "3 Min.",
    premium: false,
    status: "Veröffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild für einen Dorfkern",
    paragraphs: [
      "Der Dorfkern lebt nicht nur an Markttagen. Er lebt dann, wenn Menschen kurz einkaufen, jemanden treffen, sitzen bleiben oder sicher mit dem Velo durchfahren können.",
      "Grosse Projekte sind wichtig, aber sie ersetzen keine einfachen Verbesserungen. Mehr Schatten, klare Wege und ein paar gut platzierte Sitzbänke würden bereits viel bewirken.",
      "Wer den Dorfkern stärken will, sollte deshalb nicht nur an Veranstaltungen denken. Entscheidend ist der normale Dienstagmorgen.",
    ],
  },
];

const originalArticleOverrides: Record<string, Partial<Article>> = {
  "begegnungszone-am-marktplatz-huttwil": {
    title: "Huttwil bündelt die Fussballkräfte",
    subtitle: "Ein Originalthema der aktuellen Startseite als Demo-Hero.",
    lead:
      "Der Prototyp zeigt, wie ein grosser Sport- und Vereinsartikel digital als Aufmacher mit Premium-Anschluss, Fototeaser und Abo-Hinweis funktionieren könnte.",
    category: "Sport",
    image: originalFusionFussballImage,
    imageAlt: "Originalfoto zum Beitrag Huttwil bündelt die Fussballkräfte",
  },
  "juniorinnen-des-sc-huttwil-starten-in-die-vorbereitung": {
    title: "Frauen-Eishockey ist weiterhin möglich",
    subtitle: "Original-Schlagzeile aus dem Sportbereich.",
    lead:
      "Aus dem aktuellen Thema wird in der Demo ein Beispiel dafür, wie regionaler Frauensport online stärker sichtbar gemacht und als Premium-Dossier weitergeführt werden kann.",
    category: "Sport",
    image: originalFrauenEishockeyImage,
    imageAlt: "Originalfoto zum Beitrag Frauen-Eishockey ist weiterhin möglich",
  },
  "langenthal-prueft-neues-schulraumkonzept": {
    title: "Unterricht mit Erde unter den Fingernägeln",
    subtitle: "Ein Originalthema aus Langenthal mit starkem Bildbezug.",
    lead:
      "Der Schulgarten eignet sich als digitales Storytelling-Beispiel: Fotos, Kurzvideo, Elternbezug und eine vertiefende Premium-Einordnung könnten zusammenspielen.",
    category: "Langenthal",
    image: originalSchulgartenImage,
    imageAlt: "Originalfoto zum Beitrag Unterricht mit Erde unter den Fingernägeln",
  },
  "feuerwehr-uebt-den-ernstfall-im-dorfzentrum": {
    title: "Leise Arbeit mit scharfem Blatt",
    subtitle: "Handwerk und lokale Menschen im Fokus.",
    lead:
      "Solche Porträts geben der digitalen Zeitung Nähe und Wiedererkennbarkeit. Die Demo zeigt, wie daraus ein ruhiger Premium-Artikel mit Bildwirkung werden kann.",
    category: "Huttwil",
    image: originalSensenImage,
    imageAlt: "Originalfoto zum Beitrag Leise Arbeit mit scharfem Blatt",
  },
  "sommerbuehne-bringt-musik-auf-den-dorfplatz": {
    title: "Naturromantik und Seelenbalsam vereint",
    subtitle: "Kulturthema mit lokalem Veranstaltungscharakter.",
    lead:
      "Die Demo nutzt das Originalthema, um zu zeigen, wie Kulturberichte digital mit Bildergalerie, Vorbericht und Rückblick funktionieren könnten.",
    category: "Kultur",
    image: originalHeimwehImage,
    imageAlt: "Originalfoto zum Beitrag Naturromantik und Seelenbalsam vereint",
  },
  "baeckerei-investiert-in-neuen-holzofen": {
    title: "Montags riecht es in Luthern nach Pasta",
    subtitle: "Regionaler Alltag, Handwerk und Wirtschaft.",
    lead:
      "Ein solches Gewerbe- und Hofporträt passt gut zu einer Digitalabo-Strategie, weil Bild, Herkunft und lokale Geschichte zusammenkommen.",
    category: "Wirtschaft",
    image: originalPastaImage,
    imageAlt: "Originalfoto zum Beitrag Montags riecht es in Luthern nach Pasta",
  },
  "gemeinderat-debattiert-ueber-tempo-30": {
    title: "Spazieren und Gewerbe entdecken",
    subtitle: "Originalthema aus Rohrbach und Auswil.",
    lead:
      "Lokales Gewerbe kann digital mit Karten, Öffnungszeiten, Fotostrecken und kurzen Porträts ergänzt werden. Genau diese Richtung zeigt die Demo.",
    category: "Wirtschaft",
    image: originalGewerbeImage,
    imageAlt: "Originalfoto zum Beitrag Spazieren und Gewerbe entdecken",
  },
  "lokaljournalismus-braucht-naehe-und-distanz": {
    title: "«Ich bin stolz und enttäuscht zugleich»",
    subtitle: "Interviewformat mit Sportbezug.",
    lead:
      "Interviews sind gutes Premium-Material: Leserinnen und Leser bekommen Einordnung, Stimme und Kontext, statt nur ein Resultat zu sehen.",
    category: "Sport",
    image: originalDanielBieriImage,
    imageAlt: "Originalfoto zum Interviewbeitrag",
  },
  "jugendprojekt-oeffnet-werkstatt-am-samstag": {
    title: "Grosses Interesse am Tag der offenen Tür",
    subtitle: "Ein Originalthema aus Huttwil.",
    lead:
      "Besuchstage, Einblicke und lokale Institutionen lassen sich online mit Fotoauswahl, Kontaktboxen und weiterführenden Links besser präsentieren.",
    category: "Huttwil",
    image: originalTagDerOffenenTuerImage,
    imageAlt: "Originalfoto zum Tag der offenen Tür",
  },
  "stadtpark-erhaelt-mehr-schattenplaetze": {
    title: "Luthern auf der Karte der schönsten Dörfer",
    subtitle: "Originalthema mit touristischem Bezug.",
    lead:
      "Regionale Orte und ihre Wahrnehmung lassen sich digital als Dossier mit Karte, Archivbeiträgen und Fotostrecke weitererzählen.",
    category: "Region",
    image: originalMichelinImage,
    imageAlt: "Originalfoto zum Beitrag über Luthern",
  },
  "landwirte-testen-neue-bewaesserung": {
    title: "Leidenschaft für Naturheilkunde",
    subtitle: "Ein Thema aus dem Luzerner Hinterland.",
    lead:
      "Gesundheit, Kurse und regionale Anbieter können digital mit Service-Informationen und redaktioneller Einordnung verbunden werden.",
    category: "Region",
    image: originalNaturheilkundeImage,
    imageAlt: "Originalfoto zum Beitrag Leidenschaft für Naturheilkunde",
  },
  "turnverein-reist-mit-grosser-delegation-ans-fest": {
    title: "Mit Festsieg auf grosse Enttäuschung reagiert",
    subtitle: "Aktueller Schwingfest-Beitrag als Sport-Premium-Beispiel.",
    lead:
      "Regionale Sportgeschichten profitieren online von Resultaten, Hintergrund, Porträts und Archivbezug.",
    category: "Sport",
    image: originalMittellaendischesSchwingfestImage,
    imageAlt: "Originalfoto zum Mittelländischen Schwingfest",
  },
  "bibliothek-startet-lesesommer-fuer-kinder": {
    title: "«Fraumatt City» geht in die 21. Auflage",
    subtitle: "Lokaler Anlass mit Wiedererkennungswert.",
    lead:
      "Wiederkehrende Veranstaltungen lassen sich digital mit Terminen, Archiv, Vorschau und Rückblick stärker begleiten.",
    category: "Kultur",
    image: originalFraumattCityImage,
    imageAlt: "Originalfoto zum Beitrag Fraumatt City",
  },
  "metallbetrieb-schafft-neue-lehrstellen": {
    title: "Umzug ins Forum Sumiswald steht bevor",
    subtitle: "Originalthema aus dem regionalen Sport.",
    lead:
      "Vereins- und Infrastrukturthemen zeigen, wie Digitalartikel nicht nur Resultate, sondern auch Entwicklung und Organisation erklären können.",
    category: "Sport",
    image: originalSkorpsImage,
    imageAlt: "Originalfoto zum Beitrag Umzug ins Forum Sumiswald",
  },
  "kommission-empfiehlt-sanierung-der-mehrzweckhalle": {
    title: "Pistolen-Maximumresultat für Andres Sommer",
    subtitle: "Original-Schlagzeile zum Feldschiessen.",
    lead:
      "Resultatmeldungen können digital um Ranglisten, Archivvergleiche und Vereinskontext ergänzt werden.",
    category: "Sport",
    image: originalFeldschiessenAndresImage,
    imageAlt: "Originalfoto zum Feldschiessen-Beitrag",
  },
  "warum-vereinsberichte-mehr-sind-als-routine": {
    title: "Martin Lehmann schafft 72 Punkte",
    subtitle: "Original-Schlagzeile aus dem Oberaargauer Feldschiessen.",
    lead:
      "Die Demo zeigt, wie kurze Sportmeldungen in einer digitalen Zeitung schnell auffindbar und klar kategorisiert werden können.",
    category: "Sport",
    image: originalFeldschiessenMartinImage,
    imageAlt: "Originalfoto zum Beitrag Martin Lehmann schafft 72 Punkte",
  },
  "wanderweg-nach-unwetter-wieder-offen": {
    title: "Walterswiler Brüder-Trio mit Kranzjubel",
    subtitle: "Originalthema vom Emmentalischen Schwingfest.",
    lead:
      "Lokale Sporterfolge lassen sich digital gut mit Personenbezug, Fotogalerie und Premium-Hintergrund bündeln.",
    category: "Sport",
    image: originalEmmentalischesSchwingfestImage,
    imageAlt: "Originalfoto zum Emmentalischen Schwingfest",
  },
  "wochenmarkt-sucht-neue-standbetreiber": {
    title: "Fabio Hiltbrunner meldet sich stark zurück",
    subtitle: "Originalthema vom Oberbühl-Schwinget.",
    lead:
      "Ein Sport-Comeback eignet sich für schnelle News, aber auch für eine vertiefende digitale Einordnung.",
    category: "Sport",
    image: originalOberbuehlImage,
    imageAlt: "Originalfoto zum Oberbühl-Schwinget",
  },
  "musikschule-plant-gemeinsames-konzert": {
    title: "Mit dem Sportclub an die Fussball-WM",
    subtitle: "Originalthema zum Public Viewing in Huttwil.",
    lead:
      "Anlässe rund um Fussball und Vereinsleben können digital mit Terminen, Abo-Hinweisen und Community-Elementen kombiniert werden.",
    category: "Sport",
    image: originalPublicViewingImage,
    imageAlt: "Originalfoto zum Public-Viewing-Beitrag",
  },
};

function pickArticleImage(article: Article): string {
  if (article.category === "Sport") {
    return hockeyImage;
  }

  if (article.category === "Kultur") {
    return cultureImage;
  }

  if (article.category === "Wirtschaft" || article.slug.includes("gewerbe")) {
    return marketImage;
  }

  if (
    article.slug.includes("schule") ||
    article.slug.includes("schul") ||
    article.slug.includes("jugend") ||
    article.slug.includes("stadtpark")
  ) {
    return schoolGardenImage;
  }

  if (
    article.slug.includes("landwirte") ||
    article.slug.includes("bewässerung") ||
    article.slug.includes("wanderweg")
  ) {
    return irrigationImage;
  }

  return sharedImage;
}

function pickArticleImageAlt(article: Article): string {
  if (article.category === "Sport") {
    return "Fiktives Foto einer regionalen Eishockey-Trainingssituation";
  }

  if (article.category === "Kultur") {
    return "Fiktives Foto eines lokalen Kulturabends auf einem Dorfplatz";
  }

  if (article.category === "Wirtschaft" || article.slug.includes("gewerbe")) {
    return "Fiktives Foto eines Schweizer Wochenmarkts mit lokalem Gewerbe";
  }

  if (
    article.slug.includes("schule") ||
    article.slug.includes("schul") ||
    article.slug.includes("jugend") ||
    article.slug.includes("stadtpark")
  ) {
    return "Fiktives Foto eines Schulgartens und lokaler Bildungsarbeit";
  }

  if (
    article.slug.includes("landwirte") ||
    article.slug.includes("bewässerung") ||
    article.slug.includes("wanderweg")
  ) {
    return "Fiktives Foto regionaler Landwirtschaft mit Bewässerungstechnik";
  }

  return "Fiktives Foto einer Schweizer Dorfstrasse als Symbolbild für Lokaljournalismus";
}

export const articles: Article[] = demoArticles.map((article) => ({
  ...article,
  ...originalArticleOverrides[article.slug],
})).map((article) => ({
  ...article,
  image: article.image || pickArticleImage(article),
  imageAlt: article.imageAlt || pickArticleImageAlt(article),
}));

export const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getArticleBySlug(slug?: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return sortedArticles.filter((article) => article.category === category);
}

export function getPremiumArticles(): Article[] {
  return sortedArticles.filter((article) => article.premium);
}
