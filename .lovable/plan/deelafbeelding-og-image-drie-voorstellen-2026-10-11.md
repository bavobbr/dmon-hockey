# Deelafbeelding (og:image) — drie voorstellen

## Doel
Een nieuwe share-afbeelding van 1200×630 voor WhatsApp/LinkedIn-kaarten, met het clublogo en de clubkleuren (blauw #06478D, goud #BD9D64, rood #B62C17). Vervangt het huidige saaie vierkante bord.

## Aanpak
1. **Drie concepten genereren** (1200×630), elk een eigen richting:
   - **Sfeerfoto + logo**: een echte sfeerfoto uit `src/assets/gallery/` als basis, met blauwe sluier, het clublogo en "D-mon Hockey" eroverheen.
   - **Strak clubblauw vlak**: diep blauw verloop met gouden/rode accentlijnen, groot clublogo en "D-mon Hockey" als woordmerk (modern, rustig).
   - **Gesplitst ontwerp**: links blauw vlak met logo en naam, rechts een sfeerfoto — gescheiden door een gouden lijn.
2. **Opslaan in `public/images/og/`** (nooit Lovable CDN — werkt niet op www.dmon.be). Elke kandidaat krijgt een eigen bestandsnaam.
3. **Keuze aan jou**: ik toon de drie beelden, jij kiest er een (of vraagt een aanpassing).
4. **Na keuze**: de gekozen afbeelding wordt de standaard `og:image`/`twitter:image` in de paginatags (1200×630-meta toevoegen), zodat elke gedeelde link het nieuwe bord toont.

## Regels die gelden
- Zichtbare naam is "D-mon Hockey" (nooit "Hockey Club").
- Geen em-dash in tekst.
- Beelden lokaal in `public/images/`, geen CDN-assets.

## Technisch
- Bronbeelden: `public/images/dmon-logo-full.png`, `src/assets/gallery/` sfeerfoto's.
- Bestaande tags staan in `src/lib/pageHead.ts` (buildPageHead) — daar wordt na de keuze de nieuwe URL ingesteld.
