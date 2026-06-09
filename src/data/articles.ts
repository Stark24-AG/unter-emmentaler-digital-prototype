import heroImage from "../assets/local-news-hero.png";
import type { Category } from "../lib/categories";

export type ArticleStatus = "Entwurf" | "Bereit" | "Veroeffentlicht";

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

export const articles: Article[] = [
  {
    slug: "begegnungszone-am-marktplatz-huttwil",
    title: "Neue Begegnungszone soll den Marktplatz beleben",
    subtitle: "Huttwil diskutiert ueber Tempo, Aufenthaltsqualitaet und Gewerbeverkehr.",
    lead:
      "Der Gemeinderat legt einen Vorschlag vor, der den Marktplatz sicherer machen und gleichzeitig die Erreichbarkeit der Geschaefte erhalten soll.",
    category: "Huttwil",
    author: "Nora Gerber",
    date: "2026-06-08",
    readingTime: "5 Min.",
    premium: true,
    featured: true,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktive Schweizer Dorfstrasse als Symbolbild fuer Lokaljournalismus",
    paragraphs: [
      "Der Marktplatz in Huttwil ist seit Jahren ein Ort, an dem sich Einkaufsverkehr, Fussgaengerinnen, Velofahrer und Lieferdienste kreuzen. Nun will der Gemeinderat die Situation neu ordnen. Vorgesehen ist eine Begegnungszone mit klareren Querungen, mehr Sitzgelegenheiten und einer ruhigeren Fuehrung des Verkehrs.",
      "Gewerbetreibende begruessen, dass die Parkplaetze nicht ersatzlos verschwinden sollen. Gleichzeitig fordern sie eine Bauplanung, die den Ladenbetrieb nicht ueber Monate belastet. Die Gemeinde spricht von einer Etappierung, die noch mit den Betroffenen abgestimmt wird.",
      "In der Mitwirkung sollen auch Fragen zur Gestaltung geklaert werden. Zur Diskussion stehen Baumpflanzungen, mobile Gruenelemente und ein einheitliches Beschilderungskonzept. Besonders wichtig ist dem Gemeinderat, dass der Platz nicht nur schoener wirkt, sondern im Alltag einfacher funktioniert.",
      "Bis Ende Sommer werden Rueckmeldungen gesammelt. Danach entscheidet der Gemeinderat, ob ein detailliertes Bauprojekt ausgearbeitet wird. Eine Umsetzung waere fruehestens im kommenden Jahr moeglich.",
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
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer regionalen Vereinssport",
    paragraphs: [
      "Auf dem Trainingsplatz herrscht bereits wieder Betrieb. Die Juniorinnen des SC Huttwil arbeiten an Passspiel, Athletik und Spielaufbau. Der neue Staff will die Trainingswoche klarer strukturieren und gleichzeitig Raum fuer Freude am Spiel lassen.",
      "Besonders erfreulich ist die Breite des Kaders. Mehrere Spielerinnen aus der Region haben sich fuer ein Probetraining angemeldet. Der Verein sieht darin ein Zeichen, dass der Frauen- und Maedchensport lokal weiter an Bedeutung gewinnt.",
      "Das erste Vorbereitungsspiel ist fuer Ende Juni vorgesehen. Bis dahin stehen Grundlagen im Zentrum: saubere Ballannahme, schnelle Entscheidungen und eine stabile defensive Ordnung.",
    ],
  },
  {
    slug: "langenthal-prueft-neues-schulraumkonzept",
    title: "Langenthal prueft neues Schulraumkonzept",
    subtitle: "Wachsende Klassen und Tagesstrukturen stellen die Stadt vor Entscheidungen.",
    lead:
      "Die Stadt Langenthal analysiert, wie Schulraeume, Betreuung und Spezialzimmer in den naechsten Jahren besser zusammenspielen koennen.",
    category: "Langenthal",
    author: "Martina Koenig",
    date: "2026-06-06",
    readingTime: "6 Min.",
    premium: true,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer Bildung und Gemeindeentwicklung",
    paragraphs: [
      "Langenthal waechst nicht sprunghaft, aber stetig. Genau diese Entwicklung bringt die Schulplanung unter Druck. Klassenzimmer, Gruppenraeume und Tagesstrukturen muessen kuenftig flexibler genutzt werden koennen, ohne dass der Unterricht staendig improvisiert werden muss.",
      "Die Stadt laesst deshalb verschiedene Varianten pruefen. Im Fokus stehen bauliche Anpassungen, eine bessere Verteilung der Spezialraeume und die Frage, wie die Betreuung am Mittag organisatorisch entlastet werden kann.",
      "Elternvertreterinnen weisen darauf hin, dass die Wege fuer juengere Kinder kurz bleiben muessen. Lehrpersonen wiederum betonen, dass moderne Lernformen mehr kleine Raeume brauchen. Die Stadt will beide Anliegen in der Planung beruecksichtigen.",
      "Ein Entscheid ist noch nicht gefallen. Bis im Herbst soll ein Bericht vorliegen, der Kosten, Dringlichkeit und moegliche Etappen aufzeigt.",
    ],
  },
  {
    slug: "feuerwehr-uebt-den-ernstfall-im-dorfzentrum",
    title: "Feuerwehr uebt den Ernstfall im Dorfzentrum",
    subtitle: "Mehrere Korps trainierten die Zusammenarbeit bei einem komplexen Einsatz.",
    lead:
      "Eine gross angelegte Uebung zeigte, wie wichtig klare Kommunikation und eingespielte Ablaeufe bei einem Brand im Zentrum sind.",
    category: "Region",
    author: "Sandro Wyss",
    date: "2026-06-05",
    readingTime: "3 Min.",
    premium: false,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer regionale Sicherheitsarbeit",
    paragraphs: [
      "Rauch, gesperrte Zufahrten und mehrere vermisste Personen: Das Szenario der Feuerwehruebung war bewusst anspruchsvoll gewaehlt. Die Einsatzkraefte mussten Wasserbezuege aufbauen, Personen retten und den Verkehr umleiten.",
      "Nach der Uebung zogen die Verantwortlichen ein positives Fazit. Besonders die Kommunikation zwischen Einsatzleitung, Atemschutztrupps und Verkehrsdienst habe gut funktioniert. Einzelne Details sollen in den kommenden Wochen nachbesprochen werden.",
      "Auch Zuschauerinnen und Zuschauer nutzten die Gelegenheit, sich ueber die Arbeit der Feuerwehr zu informieren. Fuer das Korps ist solche Sichtbarkeit wichtig, weil neue Mitglieder gesucht werden.",
    ],
  },
  {
    slug: "sommerbuehne-bringt-musik-auf-den-dorfplatz",
    title: "Sommerbuehne bringt Musik auf den Dorfplatz",
    subtitle: "Ein neues Kulturformat setzt auf lokale Bands und kurze Wege.",
    lead:
      "Mit einer kleinen Open-Air-Reihe sollen Musik, Gastronomie und Begegnung im Dorfzentrum zusammenfinden.",
    category: "Kultur",
    author: "Rahel Steiner",
    date: "2026-06-04",
    readingTime: "5 Min.",
    premium: true,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer lokale Kulturveranstaltungen",
    paragraphs: [
      "Die Sommerbuehne startet mit drei Abenden im Juli. Das Programm reicht von akustischem Folk ueber Blasmusik in kleiner Besetzung bis zu einem jungen Chorprojekt. Der Eintritt bleibt frei, die Finanzierung erfolgt ueber Sponsoren und Kollekte.",
      "Die Organisierenden wollen ein Format schaffen, das ohne grosse Infrastruktur auskommt. Eine mobile Buehne, einfache Beleuchtung und kurze Umbaupausen sollen genuegen. Entscheidend sei, dass die Menschen unkompliziert vorbeikommen koennen.",
      "Fuer lokale Kulturschaffende ist die Reihe eine willkommene Plattform. Gerade kleinere Formationen finden selten Auftrittsorte, die zwischen Vereinsabend und grossem Festival liegen.",
      "Sollte das Pilotprojekt funktionieren, koennte die Sommerbuehne im naechsten Jahr erweitert werden. Denkbar sind Lesungen, Kinderkonzerte und ein Abend fuer Nachwuchsbands.",
    ],
  },
  {
    slug: "baeckerei-investiert-in-neuen-holzofen",
    title: "Baeckerei investiert in neuen Holzofen",
    subtitle: "Ein Familienbetrieb verbindet Handwerk, Energiefragen und regionale Produkte.",
    lead:
      "Die neue Anlage soll effizienter arbeiten und dem Betrieb mehr Spielraum fuer Brote mit langer Teigfuehrung geben.",
    category: "Wirtschaft",
    author: "Fabian Moser",
    date: "2026-06-03",
    readingTime: "4 Min.",
    premium: false,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer lokales Gewerbe",
    paragraphs: [
      "In der Backstube riecht es nach Sauerteig und frischem Holz. Der neue Ofen ist fuer die Baeckerei eine groessere Investition, soll aber langfristig Energie sparen und die Qualitaet stabilisieren.",
      "Der Betrieb setzt vermehrt auf Mehl aus der Region. Fuer die Kundschaft soll sichtbar werden, welche Wege die Zutaten zuruecklegen und weshalb handwerkliche Produkte ihren Preis haben.",
      "Neben klassischen Broten plant die Baeckerei neue Wochenangebote. Dabei sollen auch kleinere Mengen moeglich sein, damit nicht zu viel Ware uebrig bleibt.",
    ],
  },
  {
    slug: "gemeinderat-debattiert-ueber-tempo-30",
    title: "Gemeinderat debattiert ueber Tempo 30 vor Schulwegen",
    subtitle: "Sicherheit, Laerm und Verkehrsfunktion muessen abgewogen werden.",
    lead:
      "Eine Motion verlangt tiefere Geschwindigkeiten auf mehreren Abschnitten. Die Gemeinde will zuerst eine fachliche Pruefung.",
    category: "Politik",
    author: "Nora Gerber",
    date: "2026-06-02",
    readingTime: "6 Min.",
    premium: true,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer kommunale Politik",
    paragraphs: [
      "Tempo 30 ist in vielen Gemeinden ein wiederkehrendes Thema. Auch hier geht es um mehr Sicherheit auf Schulwegen, weniger Laerm in Wohnquartieren und die Frage, wie stark der Durchgangsverkehr eingeschraenkt werden darf.",
      "Im Gemeinderat zeigten sich unterschiedliche Haltungen. Einige Mitglieder sehen eine klare Notwendigkeit, andere warnen vor punktuellen Loesungen ohne Gesamtbild. Die Verwaltung soll nun Grundlagen zu Verkehrsaufkommen, Unfallstellen und baulichen Moeglichkeiten sammeln.",
      "Eltern aus betroffenen Quartieren begruessen den Schritt. Sie berichten von unuebersichtlichen Situationen am Morgen und am Mittag. Gleichzeitig betonen Vertreter des Gewerbes, dass Zufahrten fuer Lieferverkehr weiterhin funktionieren muessen.",
      "Ein Entscheid ueber konkrete Abschnitte wird fruehestens nach der Sommerpause erwartet.",
    ],
  },
  {
    slug: "lokaljournalismus-braucht-naehe-und-distanz",
    title: "Lokaljournalismus braucht Naehe und Distanz",
    subtitle: "Ein Kommentar zur Rolle der Zeitung in kleinen Raeumen.",
    lead:
      "Wer lokal berichtet, kennt viele Beteiligte persoenlich. Gerade deshalb braucht es klare Regeln und transparente Einordnung.",
    category: "Meinung",
    author: "Redaktion",
    date: "2026-06-01",
    readingTime: "3 Min.",
    premium: false,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer eine Redaktion",
    paragraphs: [
      "Lokaler Journalismus lebt von Naehe. Ohne Vertrauen, Anrufe, Hinweise und Gespraeche am Rand einer Versammlung wuerden viele Geschichten gar nie sichtbar. Diese Naehe ist eine Staerke.",
      "Sie ist aber auch eine Verpflichtung. Wer ueber Vereine, Gemeinden und Unternehmen berichtet, muss Interessen offenlegen, sauber nachfragen und Kritik aushalten. Distanz entsteht nicht durch Abwesenheit, sondern durch klare Arbeitsweise.",
      "Eine digitale Zeitung kann diese Arbeit sichtbarer machen. Sie kann Quellen erklaeren, Dossiers buendeln und Rueckmeldungen schneller aufnehmen. Entscheidend bleibt, dass die journalistische Haltung erkennbar ist.",
    ],
  },
  {
    slug: "jugendprojekt-oeffnet-werkstatt-am-samstag",
    title: "Jugendprojekt oeffnet Werkstatt am Samstag",
    subtitle: "Junge Menschen reparieren Velos, bauen Moebel und lernen Verantwortung.",
    lead:
      "Die offene Werkstatt zeigt, wie praktische Arbeit, Freizeit und soziale Begleitung verbunden werden koennen.",
    category: "Huttwil",
    author: "Lea Christen",
    date: "2026-05-31",
    readingTime: "4 Min.",
    premium: false,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer ein Jugendprojekt",
    paragraphs: [
      "Am Samstag stehen die Werkstatttueren offen. Besucherinnen und Besucher koennen sehen, wie alte Velos wieder fahrtuechtig gemacht und einfache Holzmoebel gebaut werden. Das Projekt richtet sich an Jugendliche, die gerne praktisch arbeiten.",
      "Begleitet werden sie von Fachpersonen und Freiwilligen. Neben handwerklichen Faehigkeiten geht es um Puenktlichkeit, Teamarbeit und den Mut, eigene Ideen auszuprobieren.",
      "Die Organisierenden hoffen, dass aus dem Aktionstag neue Kontakte entstehen. Gesucht werden Materialspenden, Mentoren und Betriebe, die Schnuppermoeglichkeiten anbieten.",
    ],
  },
  {
    slug: "stadtpark-erhaelt-mehr-schattenplaetze",
    title: "Stadtpark erhaelt mehr Schattenplaetze",
    subtitle: "Langenthal reagiert auf heisse Sommer und veraenderte Nutzung.",
    lead:
      "Neue Baumpflanzungen und Trinkwasserstellen sollen den Park im Alltag angenehmer machen.",
    category: "Langenthal",
    author: "Martina Koenig",
    date: "2026-05-30",
    readingTime: "4 Min.",
    premium: false,
    status: "Bereit",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer einen Stadtpark",
    paragraphs: [
      "Der Stadtpark wird haeufiger und laenger genutzt als frueher. Familien, Seniorinnen, Schueler und Berufstaetige teilen sich die Flaechen ueber den ganzen Tag. Mit den heisseren Sommern steigt der Bedarf an Schatten.",
      "Die Stadt plant deshalb zusaetzliche Baumpflanzungen und zwei Trinkwasserstellen. Die bestehenden Wege bleiben erhalten, einzelne Sitzbereiche werden neu angeordnet.",
      "Die Arbeiten sollen ausserhalb der Hauptsaison ausgefuehrt werden. Fuer Veranstaltungen im Park wird ein provisorisches Konzept erstellt.",
    ],
  },
  {
    slug: "landwirte-testen-neue-bewaesserung",
    title: "Landwirte testen neue Bewaesserung auf kleinen Parzellen",
    subtitle: "Ein Pilotprojekt untersucht, wie Wasser gezielter eingesetzt werden kann.",
    lead:
      "Mehrere Betriebe aus der Region beteiligen sich an einem Versuch mit Sensoren, Messdaten und einfachen Entscheidungsregeln.",
    category: "Region",
    author: "Sandro Wyss",
    date: "2026-05-29",
    readingTime: "6 Min.",
    premium: true,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer Landwirtschaft in der Region",
    paragraphs: [
      "Trockenperioden treffen nicht alle Kulturen gleich. In einem Pilotprojekt messen Betriebe deshalb Bodenfeuchte, Temperatur und Niederschlag auf kleinen Parzellen. Ziel ist, Wasser nur dann einzusetzen, wenn es den Pflanzen wirklich hilft.",
      "Die Technik ist bewusst einfach gehalten. Sensoren liefern Richtwerte, die Entscheide bleiben bei den Landwirtinnen und Landwirten. Fachleute begleiten den Versuch und vergleichen die Daten mit den Ertraegen.",
      "Neben der Technik geht es auch um Zusammenarbeit. Wenn Wasser knapp wird, braucht es Absprachen zwischen Betrieben, Gemeinden und Kanton. Das Projekt soll zeigen, wo solche Absprachen fruehzeitig noetig sind.",
      "Erste Resultate werden nach der Ernte erwartet. Schon jetzt ist klar, dass lokale Erfahrungswerte eine wichtige Rolle spielen.",
    ],
  },
  {
    slug: "turnverein-reist-mit-grosser-delegation-ans-fest",
    title: "Turnverein reist mit grosser Delegation ans Fest",
    subtitle: "Mehrere Riegen starten in Einzel- und Gruppenwettkaempfen.",
    lead:
      "Der Verein hat in den letzten Wochen intensiv trainiert und setzt auf eine Mischung aus Routine und Nachwuchs.",
    category: "Sport",
    author: "Lukas Baumann",
    date: "2026-05-28",
    readingTime: "5 Min.",
    premium: true,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer regionalen Turnsport",
    paragraphs: [
      "Die Vorfreude ist gross, die Packlisten sind lang. Der Turnverein reist mit einer breiten Delegation ans naechste Fest. Neben den Aktivriegen sind auch Jugendliche und mehrere Einzelturnende angemeldet.",
      "Trainiert wurde in den letzten Wochen vor allem an Uebergaengen und Praezision. Kleine Fehler kosten in Gruppenprogrammen schnell Punkte. Die Verantwortlichen sehen dennoch gute Chancen, die Leistungen aus dem Vorjahr zu bestaetigen.",
      "Fuer den Verein hat der Anlass auch eine soziale Bedeutung. Neue Mitglieder erleben zum ersten Mal, wie ein grosses Turnfest funktioniert, waehrend erfahrene Turnerinnen und Turner Verantwortung in Betreuung und Organisation uebernehmen.",
      "Die Resultate werden am Sonntagabend erwartet. Unabhaengig davon steht fuer den Verein bereits fest, dass der gemeinsame Auftritt den Zusammenhalt staerkt.",
    ],
  },
  {
    slug: "bibliothek-startet-lesesommer-fuer-kinder",
    title: "Bibliothek startet Lesesommer fuer Kinder",
    subtitle: "Stempelkarte, Geschichtenmorgen und kleine Preise sollen zum Lesen motivieren.",
    lead:
      "Das Programm richtet sich an Kinder im Primarschulalter und verbindet Buecher mit Begegnung.",
    category: "Kultur",
    author: "Rahel Steiner",
    date: "2026-05-27",
    readingTime: "3 Min.",
    premium: false,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer Bibliothek und Kinderprogramm",
    paragraphs: [
      "Mit dem Lesesommer will die Bibliothek Kindern zeigen, dass Buecher nicht nur Schulstoff sind. Wer mitmacht, sammelt Stempel fuer gelesene Geschichten und kann an mehreren Geschichtenmorgen teilnehmen.",
      "Die Auswahl reicht von Bilderbuechern bis zu einfachen Sachbuechern. Mitarbeitende helfen bei der Suche nach passenden Titeln und stellen auch Medien fuer Kinder bereit, die noch nicht gerne lesen.",
      "Zum Abschluss gibt es eine kleine Feier. Entscheidend sei nicht, wer am meisten gelesen habe, sondern dass Kinder positive Leseerlebnisse sammeln.",
    ],
  },
  {
    slug: "metallbetrieb-schafft-neue-lehrstellen",
    title: "Metallbetrieb schafft neue Lehrstellen",
    subtitle: "Der Fachkraeftemangel fuehrt zu mehr Engagement in der Ausbildung.",
    lead:
      "Ein regionaler Betrieb baut seine Lehrlingsbetreuung aus und will Jugendliche frueher fuer technische Berufe gewinnen.",
    category: "Wirtschaft",
    author: "Fabian Moser",
    date: "2026-05-26",
    readingTime: "6 Min.",
    premium: true,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer Industrie und Ausbildung",
    paragraphs: [
      "Der Metallbetrieb spuert den Fachkraeftemangel direkt. Offene Stellen bleiben laenger unbesetzt, waehrend Auftraege komplexer werden. Deshalb investiert die Firma in zusaetzliche Lehrstellen und eine engere Begleitung der Lernenden.",
      "Neu sollen Lernende nicht nur in der Produktion mitarbeiten, sondern auch Einblick in Planung, Qualitaetskontrolle und Kundenkontakt erhalten. Der Betrieb erhofft sich dadurch ein besseres Verstaendnis fuer den gesamten Auftrag.",
      "Zusammen mit Schulen sind Schnuppertage geplant. Jugendliche sollen erleben, dass technische Berufe heute digitale Werkzeuge, Praezision und Teamarbeit verbinden.",
      "Die ersten zusaetzlichen Lehrstellen werden im kommenden Sommer ausgeschrieben. Der Betrieb sieht die Ausbildung als langfristige Investition in die Region.",
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
    imageAlt: "Fiktives Symbolbild fuer eine Mehrzweckhalle",
    paragraphs: [
      "Die Halle dient Schule, Vereinen und Gemeindeanlaessen. Nach Jahren intensiver Nutzung sind verschiedene Bauteile sanierungsbeduerftig. Eine Kommission empfiehlt nun ein etappiertes Vorgehen.",
      "Prioritaet haben die Gebaeudetechnik, die Garderoben und Verbesserungen bei der Barrierefreiheit. Eine komplette Neugestaltung steht derzeit nicht im Vordergrund.",
      "Der Gemeinderat will die Vorlage im Herbst beraten. Danach koennte ein Kredit an die Gemeindeversammlung kommen.",
    ],
  },
  {
    slug: "warum-vereinsberichte-mehr-sind-als-routine",
    title: "Warum Vereinsberichte mehr sind als Routine",
    subtitle: "Eine Einordnung zur Bedeutung kleiner Meldungen.",
    lead:
      "Nicht jede lokale Geschichte ist spektakulaer. Trotzdem zeigen Vereinsberichte, was eine Region zusammenhaelt.",
    category: "Meinung",
    author: "Redaktion",
    date: "2026-05-24",
    readingTime: "5 Min.",
    premium: true,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer Vereinsleben und Lokalzeitung",
    paragraphs: [
      "Vereinsberichte werden manchmal unterschaetzt. Sie handeln von Hauptversammlungen, Jubilaeen, Ausfluegen und neuen Vorstandsmitgliedern. Auf den ersten Blick ist das Routine. Auf den zweiten Blick ist es ein Protokoll des Zusammenlebens.",
      "In einer Region entstehen viele Verbindungen nicht in grossen Institutionen, sondern in Musikproben, Trainings, Feuerwehrmagazinen und Kulturgruppen. Wer darueber berichtet, macht sichtbar, wer Verantwortung uebernimmt.",
      "Digital lassen sich solche Berichte neu buendeln. Dossiers, Fotogalerien und Vereinsseiten koennten helfen, laengerfristig auffindbar zu machen, was sonst nach wenigen Tagen verschwindet.",
      "Das ist kein Ersatz fuer kritischen Journalismus. Aber es ist ein Teil davon, weil lokale Oeffentlichkeit auch aus Anerkennung, Erinnerung und Orientierung besteht.",
    ],
  },
  {
    slug: "wanderweg-nach-unwetter-wieder-offen",
    title: "Wanderweg nach Unwetter wieder offen",
    subtitle: "Freiwillige und Werkhof haben Schaeden behoben.",
    lead:
      "Nach mehreren Rutschungen ist ein beliebter Weg wieder passierbar. Einzelne Stellen bleiben markiert.",
    category: "Region",
    author: "Sandro Wyss",
    date: "2026-05-23",
    readingTime: "3 Min.",
    premium: false,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer Wanderwege in der Region",
    paragraphs: [
      "Das Unwetter hatte den Weg an mehreren Stellen beschaedigt. Kies wurde weggespuelt, kleine Rutschungen blockierten die Passage. Der Werkhof und Freiwillige konnten die wichtigsten Arbeiten nun abschliessen.",
      "Die Gemeinde bittet Wandernde, die Markierungen zu beachten und bei starkem Regen auf Alternativrouten auszuweichen. Weitere Unterhaltsarbeiten sind im Sommer geplant.",
      "Der Weg ist fuer den lokalen Tourismus wichtig, weil er mehrere Aussichtspunkte verbindet und haeufig von Familien genutzt wird.",
    ],
  },
  {
    slug: "wochenmarkt-sucht-neue-standbetreiber",
    title: "Wochenmarkt sucht neue Standbetreiber",
    subtitle: "Das Angebot soll breiter werden und junge Produzentinnen ansprechen.",
    lead:
      "Der Marktverein moechte mehr regionale Produkte, einfache Verpflegung und handwerkliche Angebote sichtbar machen.",
    category: "Huttwil",
    author: "Lea Christen",
    date: "2026-05-22",
    readingTime: "4 Min.",
    premium: false,
    status: "Entwurf",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer Wochenmarkt und Gewerbe",
    paragraphs: [
      "Der Wochenmarkt ist ein Treffpunkt, doch das Angebot schwankt. Der Marktverein sucht deshalb neue Standbetreiberinnen und Standbetreiber, die regelmaessig oder punktuell teilnehmen moechten.",
      "Angesprochen sind Produzenten aus Landwirtschaft, Handwerk und Gastronomie. Auch kleine Teststaende sollen moeglich sein, damit neue Angebote ohne grosses Risiko ausprobiert werden koennen.",
      "Die Gemeinde unterstuetzt die Suche mit vereinfachten Informationen zu Bewilligungen und Standkosten. Ziel ist ein Markt, der alltagstauglich bleibt und trotzdem neugierig macht.",
    ],
  },
  {
    slug: "musikschule-plant-gemeinsames-konzert",
    title: "Musikschule plant gemeinsames Konzert",
    subtitle: "Schuelerinnen und Erwachsene treten erstmals im gleichen Programm auf.",
    lead:
      "Das Konzert soll Generationen verbinden und zeigen, wie vielfaeltig musikalische Bildung in der Region ist.",
    category: "Kultur",
    author: "Rahel Steiner",
    date: "2026-05-21",
    readingTime: "4 Min.",
    premium: false,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer Musikschule und Konzert",
    paragraphs: [
      "Die Musikschule bereitet ein Konzert vor, bei dem Kinder, Jugendliche und Erwachsene gemeinsam auftreten. Das Programm kombiniert kurze Einzelbeitraege mit Ensembles.",
      "Lehrpersonen sehen darin eine Chance, Hemmschwellen abzubauen. Wer sieht, dass auch Erwachsene noch lernen, erlebt Musikunterricht weniger als Leistungsdruck und mehr als gemeinsamen Prozess.",
      "Das Konzert findet in der Aula statt. Der Eintritt ist frei, eine Kollekte kommt dem Instrumentenfonds zugute.",
    ],
  },
  {
    slug: "regionalbank-eroeffnet-beratungsfenster-fuer-kmu",
    title: "Regionalbank eroeffnet Beratungsfenster fuer KMU",
    subtitle: "Kleine Betriebe koennen Fragen zu Investitionen und Nachfolge klaeren.",
    lead:
      "Das neue Angebot soll unkomplizierte Erstgespraeche ermoeglichen und Unternehmerinnen besser vernetzen.",
    category: "Wirtschaft",
    author: "Fabian Moser",
    date: "2026-05-20",
    readingTime: "4 Min.",
    premium: false,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer lokale Wirtschaft",
    paragraphs: [
      "Viele kleine Unternehmen stehen vor aehnlichen Fragen: Wie wird eine Investition finanziert, wann lohnt sich eine Erweiterung, und wie kann eine Nachfolge rechtzeitig vorbereitet werden?",
      "Die Regionalbank richtet dafuer ein monatliches Beratungsfenster ein. Es handelt sich nicht um fertige Loesungen, sondern um Erstgespraeche, die weitere Schritte klaeren sollen.",
      "Gewerbevertreter begruessen das Angebot, weil es kurze Wege schafft. Gerade Kleinstbetriebe haetten oft wenig Zeit, sich durch lange Abklaerungen zu arbeiten.",
    ],
  },
  {
    slug: "leserbrief-zur-zukunft-des-dorfkerns",
    title: "Leserbrief: Der Dorfkern braucht Alltag, nicht nur Anlaesse",
    subtitle: "Eine Stimme aus der Leserschaft zur Entwicklung des Zentrums.",
    lead:
      "Ein Leser fordert kleine, verlässliche Verbesserungen statt ausschliesslich grosser Projekte.",
    category: "Meinung",
    author: "Gastbeitrag",
    date: "2026-05-19",
    readingTime: "3 Min.",
    premium: false,
    status: "Veroeffentlicht",
    image: sharedImage,
    imageAlt: "Fiktives Symbolbild fuer einen Dorfkern",
    paragraphs: [
      "Der Dorfkern lebt nicht nur an Markttagen. Er lebt dann, wenn Menschen kurz einkaufen, jemanden treffen, sitzen bleiben oder sicher mit dem Velo durchfahren koennen.",
      "Grosse Projekte sind wichtig, aber sie ersetzen keine einfachen Verbesserungen. Mehr Schatten, klare Wege und ein paar gut platzierte Sitzbaenke wuerden bereits viel bewirken.",
      "Wer den Dorfkern staerken will, sollte deshalb nicht nur an Veranstaltungen denken. Entscheidend ist der normale Dienstagmorgen.",
    ],
  },
];

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
