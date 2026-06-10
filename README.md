# Unter-Emmentaler Digital Prototype

Statischer Frontend-Prototyp für eine digitale Abo- und Paywall-Version der Schweizer Lokalzeitung **Unter-Emmentaler**.

Der Prototyp ist für eine Kundenpräsentation gedacht und kann direkt über GitHub Pages veröffentlicht werden.

## Was der Prototyp zeigt

- Startseite mit Artikel-Hierarchie, Rubriken und Newsletter-Box
- aktuelle Themen, Rubriken und Bildteaser als Demo
- Artikelliste mit Suche, Kategorie-Filter und Premium-Badges
- Rubrikseiten für Huttwil, Langenthal, Region, Sport, Kultur, Wirtschaft, Politik und Meinung
- Gratis-Artikel mit komplett sichtbarem Text
- Premium-Artikel mit Vorschau und Paywall-Box
- Abo-Seite mit Monatsabo, Jahresabo und Print + Digital
- Login-, Registrieren- und Konto-Demo
- einfache Admin-Demo für Redaktion und Artikel-Erfassung
- Projektseite mit Erklärung für Kundinnen und Kunden

## Bewusst nicht enthalten

- kein echtes Backend
- keine echte Datenbank
- keine echten Benutzerkonten
- keine echte Stripe-Integration
- keine Webhooks
- keine produktionsreife Paywall
- keine kompletten kopierten Artikeltexte der bestehenden Website

## Technologie

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router mit `HashRouter`
- lokale statische Demo-Daten in `src/data/articles.ts`
- GitHub Pages Deployment per GitHub Actions

## Lokal starten

```bash
npm install
npm run dev
```

Danach die lokale URL aus dem Terminal öffnen, typischerweise:

```text
http://localhost:5173/
```

## Build testen

```bash
npm run build
npm run preview
```

## Demo-Artikel bearbeiten

Alle Demo-Artikel liegen in:

```text
src/data/articles.ts
```

Dort können Titel, Lead, Kategorie, Premium-Status, Autor, Datum und Artikeltext angepasst werden. Premium-Artikel zeigen im Prototyp nur die ersten zwei Absätze und danach die Paywall-Box.

## GitHub Repository erstellen und Code pushen

Falls noch kein Repository existiert:

```bash
git init
git add .
git commit -m "Initial frontend prototype"
git branch -M main
gh repo create unter-emmentaler-digital-prototype --public --source=. --remote=origin --push
```

Falls das Repository bereits existiert:

```bash
git remote add origin https://github.com/DEIN-BENUTZERNAME/unter-emmentaler-digital-prototype.git
git branch -M main
git push -u origin main
```

## GitHub Pages aktivieren

1. GitHub Repository öffnen
2. `Settings` öffnen
3. `Pages` wählen
4. Bei `Source` die Option `GitHub Actions` auswählen
5. Auf `main` pushen
6. Workflow `Deploy to GitHub Pages` abwarten
7. Den öffentlichen Link im Bereich `Settings > Pages` kopieren

Der Link hat normalerweise diese Form:

```text
https://DEIN-BENUTZERNAME.github.io/unter-emmentaler-digital-prototype/
```

## Warum HashRouter verwendet wird

GitHub Pages liefert statische Dateien aus und leitet Unterseiten wie `/artikel/example` nicht automatisch an die SPA zurück. Darum verwendet dieses Projekt `HashRouter`. URLs sehen dadurch so aus:

```text
https://DEIN-BENUTZERNAME.github.io/unter-emmentaler-digital-prototype/#/artikel/beispiel
```

Das funktioniert auf GitHub Pages ohne Server-Konfiguration.

## Spätere echte Umsetzung

Für eine produktive Version wären zusätzlich nötig:

- Backend oder CMS-Anbindung für Artikel
- Authentifizierung und Benutzerkonten
- Stripe Checkout oder ein anderes Zahlungssystem
- serverseitige Paywall-Prüfung
- Abo-Status, Rechnungen und Kündigungsprozess
- Datenschutz, Impressum und rechtliche Prüfung
- Artikelmigration oder Import aus dem bestehenden System
- Hosting, Monitoring, Backups und Wartung
