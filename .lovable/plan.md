## Doel

De huidige homepage hero (gecentreerd, vlakke blauwe gradient, generieke SaaS-look) vervangen door een editorial sport-hero met:
- Asymmetrische links-uitgelijnde compositie
- Massieve italic display-typografie "D-MON / HOCKEY" (rood accent)
- Hockey field-lijnen als subtiel decor (SVG)
- High-contrast action photography als achtergrond-layer mask
- Goud/rood accent-strip onderaan + verticale "SINDS 2023" watermark
- Behoud van bestaande CTAs ("Word Lid van Onze Club" + "Leden Login")

## Wijzigingen

### 1. Action photography asset genereren
- Nieuw bestand: `src/assets/hero-action.jpg`
- Premium hockey-action foto (silhouet/dynamisch), monochrome blauw getint zodat het samenvalt met het navy hero-blok
- Wordt als achtergrondlaag gebruikt met `mix-blend-mode: luminosity` of `multiply` + lage opacity (~25–35%), zodat het de compositie versterkt zonder de typografie te storen

### 2. Hero opnieuw opbouwen in `src/pages/Index.tsx`
Vervang de huidige hero-sectie door de gekozen 'Dynamic Editorial' layout:
- Container: full-bleed sectie, navy `bg-primary`, rounded `rounded-3xl` met margin op desktop, full-width op mobile
- Layer-stack (van achter naar voor):
  1. Action photo (lazy=false, het is above-the-fold) met blend-mode en opacity
  2. Radial gradient highlight rechtsboven
  3. SVG hockey-pitch lijnen (cirkel + shooting circles + middenlijn), opacity ~0.12
  4. Content grid (12 cols): logo + eyebrow "Welkom bij de Club" (goud, tracked uppercase) + H1 ("D-MON" wit / "HOCKEY" rood, black italic uppercase) + paragraph + CTAs
  5. Verticaal watermark "SINDS …" rechts (hidden lg:flex)
  6. Onderaan goud/rood accent-strip
- H1 blijft semantisch één `<h1>` voor SEO (met visuele line-break)

### 3. Design tokens
Alle kleuren via bestaande semantische tokens (`bg-primary`, `text-secondary`, `text-accent`, etc.) — geen hex codes in de component. Indien nodig één nieuwe utility-class in `index.css` voor de blend-mode laag.

### 4. Typografie
Bestaande `font-display` (Montserrat) is geschikt. Voor de italic black variant gewicht 900 italic toevoegen aan de Google Fonts import in `index.html` als deze nog niet geladen is.

### 5. Responsiveness
- Mobile (<lg): gestapeld, kleinere H1 (`text-6xl`), verticaal watermark verborgen, action photo behouden
- Desktop (≥lg): asymmetrische grid, watermark zichtbaar, H1 `text-8xl`

### 6. SEO en a11y
- H1 blijft "D-mon Hockey Club" (gesplitst via `<br>`, geen sr-only trucs)
- Alt-tekst op de action photo: `"Veldhockey actie — D-mon Hockey Club"`
- Goud op donker getest voor WCAG AA contrast

## Wat ongewijzigd blijft

- Sidebar, header, alle secties onder de hero
- Routes, content, business logic, edge functions
- Meta tags / page meta config

## Bestanden

- nieuw: `src/assets/hero-action.jpg`
- gewijzigd: `src/pages/Index.tsx` (alleen de hero-sectie)
- mogelijk gewijzigd: `index.html` (Montserrat 900 italic gewicht), `src/index.css` (één blend utility indien nodig)
