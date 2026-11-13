# Indoor spelregels: nieuwe infographics en review verwerken

Pagina: /sportief/regels/indoor. De basis en de informele toon blijven, de fouten worden rechtgezet en de pagina krijgt de volgorde uit de review.

## Infographics
- De twee oude tabellen worden vervangen door je nieuwe ontwerpen: "Algemene spelregels" bovenaan en "Jeugdregels met PC" bij het jeugdgedeelte.
- Ze komen als gewone bestanden op de site (geen externe opslag), zodat ze ook op www.dmon.be werken.

## Nieuwe paginavolgorde
1. Korte introductie (de voorgestelde tekst uit de review, zonder promotionele zinnen)
2. Algemene indoorregels: eerste infographic plus veld (standaard 44 x 22 m, minimum 36 x 18 m), wedstrijdduur en pauzes, uitrusting
3. De vijf grootste verschillen met outdoor: slaan en hoge bal (alleen pushen, geen hoge pass met flick of scoop), zijbalk en afhouden, liggend spelen en twee steunpunten, bal tegen de voet, forcing
4. Spelhervattingen en straffen: vrije slag (niet rechtstreeks de cirkel in, 3 m of aanraking verdediger), bal over de zijbalk, strafcorner (bredere omschrijving, pas scoren nadat de bal buiten de cirkel was), strafbal, kaarten, keeper binnen en buiten de cirkel
5. Jeugdregels: tweede infographic met alleen de korte tabel met uitzonderingen (U7 tot U14-U19), U9 = geen strafcorner maar wel strafbal, keeper zonder stick bij U9, theoretisch examen verplicht vanaf U9
6. Praktijkvoorbeelden: de vijf situaties uit de review, elk twee of drie zinnen met de juiste beslissing
7. Zelf fluiten bij D-mon: het registratieblok (Twizzit-formulier) verhuist van bovenaan naar hier
8. Officiele documenten: één link naar de spelregelpagina van Hockey Belgium en een link naar "Start to Umpire Indoor"; de verouderde U8-U12-verwijzing verdwijnt

## Inhoudelijke correcties
- Wedstrijdduur: U7-U12 4 x 10 min, U14-U19 4 x 15 min, Eredivisie 4 x 10 min, overige competities 4 x 15 min, Gents/Ladies/Fun League 30 min; pauzes 1 min en 3 min bij de rust.
- U7-U8: indoorstick en volledig beschermende handschoen aanbevolen, niet verplicht; indoorschoenen en mondbescherming wel verplicht. Scheenbeschermers vermeld ik volgens het algemene reglement als verplicht, met verwijzing naar de jeugdregels.
- Eén benaming per begrip: strafcorner (PC), strafbal (stroke), keeper, zijbalk.
- Geen emoji's, korte alinea's, huisstijl (blauwe kop, kaarten, afsluitblok naar de regels assistent) blijft.

Elke regel controleer ik tegen de drie PDF's die je meestuurde. Paginabeschrijving voor Google wordt mee bijgewerkt.

## Controle
Pagina openen op computer en telefoon, beide infographics en alle links nakijken.

## Technisch
- Afbeeldingen naar public/images/indoor/ (algemene-spelregels.png, jeugdregels.png), verkleind voor web; oude src/assets/indoor-rules-table-*.png verwijderen.
- Indoor.tsx herschrijven met bestaande PageHero/PageCta en Card-secties, subnav-ankers per sectie.
