# Produktliste – Filter & Sort (ES6 + DOM)

Ziel: Clientseitiges Filtern und Sortieren einer Produktliste ohne Seiten-Reload.

## Start
- Öffnen Sie `public/index.html` direkt im Browser.
- Oder: `npm install` und `npm run serve` (optional, wenn Node vorhanden ist).

## Aufgaben
- Textfilter (case-insensitive) für `name`
- Sortieren nach `price` (asc/desc)
- Saubere Event-Bindings, Trennung: Daten -> Transform -> Render
- Edge Cases: leerer Filter, 0 Treffer, Sort-Toggle sichtbar

## Use-Cases (Checks)
- UC1: leerer Suchbegriff → alle Produkte sichtbar
- UC2: 0 Treffer → Hinweis "Keine Treffer"
- UC3: Sortierwechsel asc/desc sichtbar
- UC4: Groß-/Kleinschreibung ignorieren

## Dateien
- `public/index.html`
- `public/styles.css`
- `public/data.js`
- `public/app.js`

## Optional
- `.editorconfig`, `.eslintrc.cjs`, `.prettierrc`, `package.json` für Tooling
- `npm run serve` startet einen lokalen Webserver auf `http://localhost:5173`
