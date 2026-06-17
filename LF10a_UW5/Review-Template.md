# Heuristik-Review: Mini-Shop UI

## 1. Überblick
- Projekt: Mini-Shop-Prototyp
- Fokus: Liste / Produktkarte / Detail / Interaktion
- Ziel: Mindestens 5 konkrete Befunde mit Heuristik, Wirkung und How-to

---

## 2. Review-Felder

| UI-Stelle | Heuristik | Befund | Wirkung | How-to | Status |
|---|---|---|---|---|---|
| Produktsuche | Sichtbarkeit des Systemstatus | Kein Hinweis, wenn Suche leer ist | Nutzer weiß nicht, ob Filter aktiv ist | Statuszeile immer anzeigen und bei leerem Suchfeld "Alle Produkte anzeigen" schreiben | ToDo |
| Sortierbuttons | Konsistenz/Standards | Pfeile zeigen keine aktive Sortierung klar genug | Unklar, welche Reihenfolge gilt | Aktiven Button hervorheben und Beschriftung aktualisieren | ToDo |
| Ausverkauft-Produkt | Nutzerkontrolle | Button bleibt sichtbar, aber nicht deaktiviert genug | Nutzer könnte versuchen, es zu kaufen | Deaktivierten Button deutlich grau gestalten und Tooltip/Text hinzufügen | ToDo |
| Modal öffnen | Ästhetik/Minimaldesign | Keine Fokus-Rückkehr nach Schließen | Tastaturnutzer verliert Kontext | Fokus auf vorherige Aktion zurücksetzen | ToDo |
| Fehlerstatus | Sichtbarkeit des Systemstatus | Fehlermeldung bei leerer Liste ist zu schwach | Nutzer übersieht Zustand | Deutliche Fehlermeldung und auffällige Farbe | ToDo |

---

## 3. Top-3 Quick Wins
1. Aktiven Sortierbutton deutlich hervorheben
2. Fehlermeldung bei 0 Treffern sichtbarer machen
3. Deaktivierte Buttons für ausverkaufte Produkte klarer gestalten

---

## 4. Reflexion
- Welche Heuristiken erzeugten die meisten Befunde?
- Wo war die Wirkung einer kleinen Änderung besonders spürbar?
- Welche Befunde sind bis zum nächsten Projekt realistisch umsetzbar?
- Wie stellen Sie sicher, dass Status/Feedback künftig sichtbar ist?
- Welche zusätzlichen Prüfpunkte nehmen Sie für PR-Reviews mit?
