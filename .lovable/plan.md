# Stick-gids volledig herschrijven

De pagina `/sportief/stick-gids` krijgt de nieuwe inhoud (lengte, kromming, carbon), met de aanbevelingstabel als centraal element bovenaan.

## Nieuwe paginastructuur

1. **Hero** (huisstijl behouden: gradient, links uitgelijnd, sticky sub-nav)
   - Titel "De juiste hockeystick kiezen"
   - Intro: 3 zaken die tellen — lengte, kromming, carbon. Duurder of extremer is niet beter.
   - Stat-blokjes vervangen door de drie factoren (Lengte / Kromming / Carbon)
   - Knop "Direct naar het advies" springt naar de aanbevelingstabel

2. **Wat raden we concreet aan?** — direct onder de hero, visueel het zwaartepunt van de pagina
   - Kaart met accentrand rond een responsive tabel: Speler | Lengte | Kromming | Carbon (7 rijen uit de tekst)
   - Op mobiel wordt elke rij een compacte kaart in plaats van een brede tabel
   - Onder de tabel: "Leeftijd alleen bepaalt niet welke stick je nodig hebt" + voorbeeld U16-beginner vs. technische U14

3. **Vuistregel-strook** — vier korte gevallen (beginner / enkele jaren / ervaren / extreme low bow) als kaartjes

4. **1. Lengte** — uitleg te lang/te kort + richtmaattabel lichaamslengte → stickmaat (8 rijen), met de nuance over kinderen en "erin groeien", en 36.5"/37.5" bij volwassenen

5. **2. Kromming** — uitleg bow point + FIH-limieten (max 25 mm, diepste punt niet onder 200 mm), tabel met Standard/Mid, Pro/Late, Low, Extreme Low (bow point + geschikt voor), plus drie blokjes per spelersniveau (beginnend / groeiend / gevorderd) en de waarschuwing over Extreme Low Bow

6. **3. Carbon** — carbon = stijfheid, voor- en nadelen, merken niet vergelijkbaar; tabel spelersniveau → carbonrichtlijn (6 rijen); twee kaarten "waarom niet meteen veel carbon" / "waarom niet altijd weinig carbon"

7. **Stick nodig? / Advies** — bestaande CTA behouden, aangevuld met "probeer een stick uit" en advies vragen aan trainer of sportieve cel

## Technisch

- Enkel `src/pages/sportief/StickGuide.tsx` wordt herschreven; route en `pageHead` blijven ongewijzigd (eventueel meta-description bijwerken naar de nieuwe inhoud).
- Tabellen als eigen kleine component in hetzelfde bestand, met semantische tokens (geen hardcoded kleuren) en een mobiele kaartweergave.
- Sub-nav ankers worden: Advies, Vuistregel, Lengte, Kromming, Carbon, Stick nodig.
- Geen backend- of datawijzigingen.
