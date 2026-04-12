# Heyla Coaching – Projektkontext

## Projekt
Statische Website für **Souhaila**, Heilpraktikerin für Psychotherapie in Lüdenscheid & online.
Marke: **Heyla Coaching** (abgeleitet von „Souhaila" = die Sanfte, der helle Stern).

---

## Dateistruktur

```
/
├── index.html                    # Haupt-One-Pager (Startseite)
├── therapeutisches-boxen.html    # Unterseite – Bald verfügbar
├── honorar.html                  # Preisseite
├── pro-bono.html                 # Pro-Bono-Angebot
├── impressum.html                # Pflichtseite (Platzhalter aktiv!)
├── datenschutz.html              # DSGVO-Datenschutzerklärung
├── style.css                     # Einziges Stylesheet – alle Seiten
├── script.js                     # Burger-Menü, Scroll-Effekte, IntersectionObserver
├── Logo.jpg                      # Heyla-Logo (blauer Hintergrund, Kolibri)
└── Bilder/
    ├── Bild 01 Startseite.png         → Hero auf index.html
    ├── Bild mit Laptop.jpg            → Über mich auf index.html
    ├── Bild therapeutisches Boxen.png → Teaser + Hero boxing-Seite
    └── Bild das befreiende Gefühl danach.png → Boxen-Seite, Abschnitt „Danach"
```

---

## Tech-Stack
- Rein statisch: HTML + CSS + Vanilla JS
- Kein Framework, kein Build-Tool, kein npm
- Fonts: Bunny Fonts (Cormorant Garamond, Raleway, Great Vibes) – DSGVO-konform, EU-Server, kein Cookie-Banner nötig
- Deployment: noch offen

---

## Design-System

### Farben
```css
--powder-blue:  #C5DCEF   /* Hero-Hintergrund, Qualifikationen, Seiten-Hero */
--berry:        #7B1B5B   /* Primärfarbe, CTAs, Akzente */
--berry-dark:   #5C1244
--berry-light:  #9B2B75
--white:        #FAFAF8
--cream:        #F3EDE8
--text-dark:    #1E1E1E
--text-mid:     #4A4A4A
```

### Fonts
- Headings: `Cormorant Garamond` (serif, 300–600)
- Body: `Raleway` (sans-serif, 300–600)
- Display: `Great Vibes` (script – nicht aktiv verwendet)

### Designprinzipien
- Warm, professionell, nicht klinisch
- Kursive `<em>`-Elemente in Berry-Farbe als Highlight
- Keine Gedankenstriche (–) in sichtbaren Texten. Stattdessen Komma, Doppelpunkt oder Punkt.
- Abgerundete Ecken (`--radius: 12px`, `--radius-lg: 24px`)

---

## Seitenstruktur index.html

1. **Hero** – „Willkommen bei" + Logo (links, randlos eingeblendet) + Tagline mit Berry-Trennlinie (rechts)
2. **Ich kann dich sehen** – Cream-Hintergrund. Text links: Headline + 2 Absätze + CTA-Button. Foto (Bild 01 Startseite.png) rechts. Kein Eyebrow-Text.
3. **Angebote** – 3 Leistungskarten + Therapeutisches Boxen Teaser
4. **Ablauf** – 3 Schritte (Vorgespräch → Erstgespräch → Persönlicher Weg)
5. **Über mich** – Heyla-Namensbedeutung, Hochsensibilität, Zwischen-zwei-Welten
6. **Qualifikationen** – 6 Kacheln (ersetzt frühere „Warum Heyla"-Sektion)
7. **FAQ** – 5 Fragen mit Links zu honorar.html und pro-bono.html
8. **CTA / Kontakt** – E-Mail + Telefon

> Hinweis: Die frühere separate „Willkommen/Intro"-Sektion (ehemals Nr. 3) wurde entfernt und in Sektion 2 integriert.

---

## Leistungen (Inhalt)

**1. Mentale Stabilität & Krisenberatung**
- Psychologische Beratung (Ängste, Burnout, Blockaden)
- Anti-Mobbing-Training
- Angehörigenberatung & Psychoedukation

**2. Wachstum & Persönlichkeitsentwicklung**
- Identität & Kultur (zwischen zwei Welten)
- Selbstwert-Training
- Selbstfindungsphase / Identitätskrisen

**3. Achtsamkeit & Prävention**
- Autogenes Training mit Weltenwanderung
- Stressmanagement & Resilienz

**4. Therapeutisches Boxen** *(bald verfügbar, Lüdenscheid)*
- 1:1 und Gruppe (max. 5 Personen)
- Dedizierte Unterseite: therapeutisches-boxen.html

---

## Preise (Stand April 2026)

| Angebot | Dauer | Preis |
|---|---|---|
| Vorgespräch | 20 Min. | kostenlos |
| Einzel-Session | 60 Min. | 95 € |
| Doppel-Session | 120 Min. | 190 € |
| Paket „Fokus" | 3 × 60 Min. | 275 € |
| Paket „Entfaltung" | 5 × 60 Min. | 450 € |
| Paket „Transformation" | 10 × 60 Min. | 890 € |
| Boxen Einzel | 60 Min. | 110 € |
| Boxen Kompakt-Kurs | 4 × 60 Min. | 400 € |
| Boxen Gruppe Drop-In | 60 Min. | 30 € / Person |
| Boxen Gruppe 8-Wochen | 8 Einheiten | 220 € / Person |

Kleinunternehmerin § 19 UStG, keine Mehrwertsteuer.
Storno: kostenlos bis 24 h vorher, danach volle Berechnung.

---

## Qualifikationen
- Heilpraktikerin für Psychotherapie (staatl. geprüft, Gesundheitsamt Dortmund)
- Kognitive Verhaltenstherapie (KVT)
- Sokratischer Dialog
- Stressmanagement & Resilienz
- Expertise Mobbing & Ausgrenzung
- Systemische Methoden
- Fortlaufende Supervision & Fortbildung

---

## Navigation (alle Seiten)
```
Logo | Angebote | Über mich | Therapeutisches Boxen [Bald] | Preise | Pro Bono | Termin vereinbaren
```

---

## Deployment

- GitHub Pages aktiv: **https://fathi-m-tech.github.io/heyla-coaching/**
- Branch: `main`, Pfad: `/`
- Stand: 12. April 2026 – zur ersten Kundensichtung freigegeben

---

## Offene Platzhalter (einzutragen vor Go-Live)

| Feld | Ort | Status |
|---|---|---|
| Vollständiger Name | impressum.html, datenschutz.html | offen |
| Praxisadresse Lüdenscheid | impressum.html, datenschutz.html, Footer | offen |
| Telefonnummer | alle Footer, index.html CTA, honorar.html CTA | offen |
| Hosting-Anbieter | datenschutz.html | offen |
| Datum Datenschutzerklärung | datenschutz.html | offen |
| Instagram-URL | ✅ eingetragen | erledigt |

---

## Wichtige Entscheidungen & Konventionen

- **Keine Gedankenstriche** im Fließtext (Kundenwunsch). Ersatz: Komma, Doppelpunkt oder Punkt.
- **Nur Instagram** als Social-Media-Link (kein Facebook, kein LinkedIn).
- Instagram-URL eingetragen: `https://www.instagram.com/heyla_coaching?igsh=MWkzM3N6ZHNwd3JidQ==`
- Instagram-Klick öffnet DSGVO-Consent-Modal (script.js, `data-instagram-consent`-Attribut).
- Bilder aus dem Ordner `Bilder/` – alte Bilder (Souhaila.jpg) werden nicht mehr verwendet.
- Logo.jpg bleibt aktiv (kein Ersatz geliefert).
- `index-aurora.html` wird ignoriert / nicht weiterentwickelt.
- Therapeutisches Boxen: „Bald verfügbar"-Badge in der Navigation.
- Pro-Bono-Plätze: max. 2 pro Monat, formlose E-Mail-Bewerbung.
- Boxing-Teaser-Bild: `object-fit: contain` (nicht cover), damit das Bild vollständig sichtbar ist.
- „Souhaila" im Text: fett (`<strong>`) + Berry-Lila (`color: var(--berry)`).
- Ich-sehe-Sektion hat keinen Eyebrow-Text mehr (wurde entfernt).
- Boxing-Hero und Boxing-CTA: nicht mehr schwarz (`#1c1c1c`), sondern Powder-Blue (Hero) und Berry (CTA).
- `<strong>` in `.ueber__content` erhält automatisch Berry-Farbe via CSS (`.ueber__content strong`).
- Pro-Bono „Für wen"-Kacheln: weiße Karten mit Berry-Balken oben, SVG-Icons (kein Emoji).
- Boxing „Für wen"-Icons: SVG-Icons (kein Emoji), Berry-Hintergrund-Kreis.
- `.price-card--coming.price-card--featured` hat explizit `opacity: 1` + Berry-Hintergrund (verhindert Unsichtbarkeit durch CSS-Kaskade).

## Responsive Design (Stand 12. April 2026)

Alle Breakpoints in `style.css` konsolidiert. Keine doppelten Media Queries.

| Breakpoint | Verhalten |
|---|---|
| ≤1024px (Tablet) | Footer 3 Spalten, Über-mich 2 Spalten, Boxing-Danach stapelt |
| ≤768px (Mobile) | Spacing reduziert, Header 68px, Nav-Overlay, probono-who-grid 1 Spalte, qual-grid 2 Spalten |
| ≤640px (Mittel) | Leistungskarten, Preiskarten, Boxing-Grids → 1 Spalte; CTA-Buttons vollbreit |
| ≤480px (Klein) | Footer 1 Spalte, Headings kleiner (clamp), Spacing weiter reduziert |

---

## Kommunikation
- Sprache: **Deutsch**
- Stil: kurz, präzise, keine Füllwörter
- Bei 3+ Schritten oder Architekturentscheidungen: erst Plan erstellen, auf Freigabe warten
- Alle Unklarheiten gesammelt vorab klären
