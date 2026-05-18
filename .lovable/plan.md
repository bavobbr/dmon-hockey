# Plan: /lidmaatschap/info opfrissen

## Probleem
De pagina is nu één lange stapel grijze cards met dezelfde kop-tekst-structuur. Geen visuele hiërarchie, geen hero, en hardgecodeerde kleurtjes (blue-50, amber-50, green-50, red-500) die afwijken van het design system. Het belangrijkste — *lid worden* — staat helemaal onderaan.

## Wat we aanpakken

### 1. Hero in dezelfde stijl als Teams/Waarden/Media
- `bg-gradient-hero` met radial accents, badge ("Seizoen 2025–2026"), grote titel ("Word lid van D-mon"), korte intro, twee CTA's (Registreer / Stel een vraag) bovenaan.
- Drie quick-stats inline: lidgeld vanaf, aantal categorieën, kortingen mogelijk.

### 2. Sticky sub-navigatie
- Anchor-links onder de hero: *Lidgeld · Nieuwe leden · Kortingen · Uitrusting · Kledij*. Zelfde sticky-pattern als de filterbar op /club/teams. Maakt de pagina scanbaar.

### 3. Lidgeld als visuele tarieftabel
- Vervang generieke cards door een prominent grid met grote prijs, categorie-icoon en korte beschrijving. Basistarief krijgt een "Meest gekozen"-accent.

### 4. Nieuwe leden als genummerde stappenflow
- Horizontale stappen (1 → 2 → 3) met connector-lijn op desktop, ipv twee kleine bullets. Voeg stap 3 toe: "Bevestig & betaal". Telefoonnummer als klikbare `tel:` link.

### 5. Kortingen + betalinginfo splitsen
- Gezinskorting / sociaal tarief als twee gelijkwaardige featured tiles met grotere iconen.
- Betalingsinformatie krijgt eigen subtiele callout met `bg-muted` + linker accentbalk in `border-primary` ipv amber.

### 6. Uitrusting als checklist met iconen
- Per item een eigen icoon (stick, scheenbeschermers, bitje, schoen via lucide of emoji). "Verplicht"-badge subtieler. Onthaalbrochure-CTA als afsluitende banner.

### 7. Clubkledij compacter
- Wedstrijdoutfit + winkelkortingen in één sectie met twee kolommen ipv drie geneste blokken. Verwijder achterhaalde tekst over "juni 2025".

### 8. Afsluitende CTA-banner
- Volledige breedte, `bg-gradient-to-br from-primary to-primary-light`, witte tekst, twee knoppen — visueel gelijk aan de CTA onderaan /club/media.

### 9. Design-system opkuis
- Alle `bg-blue-50`, `amber-50`, `green-50`, `red-500`, `text-green-600` enz. vervangen door semantische tokens (`bg-muted`, `bg-primary/5`, `text-primary`, `border-border`, `text-destructive`). Donkere modus werkt dan automatisch.
- Emoji's (📅 🏑 👕 💰 💡) vervangen door Lucide-iconen voor consistentie.

### 10. SEO & a11y
- Eén `<h1>` (in hero), elke sectie krijgt `<section id="…">` met `<h2>`. Nuttige meta-title/description toevoegen.

## Buiten scope
- Geen wijzigingen aan tariefbedragen of teksten over registratieproces (alleen herstructurering).
- Geen wijzigingen aan /lidmaatschap/registratie of /lidmaatschap/contact.
- Alleen frontend/presentatie — geen data of routes.

## Bestanden
- `src/pages/lidmaatschap/Info.tsx` — volledige herstructurering.
