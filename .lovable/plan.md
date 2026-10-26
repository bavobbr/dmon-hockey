# Review: consistentie van alle pagina's

Ik heb alle 37 publieke pagina's vergeleken met onze huisstijl. Volgorde daarin: blauwe kop met label, titel en tekst, daaronder snelle links, dan kaarten, en onderaan een blauwe afsluiter met knop. De homepage valt hier bewust buiten.

## Wat al goed zit (24 pagina's)
Info, Registratie, Verzekering, Contact, Training, Indoor/winterstop, Spelregels, Hoe speel je, Stick-gids, Waarden, Teams, Sponsors, Privacy, Geschiedenis, Veld, Veldstatus, Sfeer, Media, Nieuws, Evenementen, Vacatures, Socials. Ze gebruiken allemaal dezelfde blauwe kop en dezelfde decoratie.

## Wat afwijkt

### 1. Elf pagina's zitten nog in de oude stijl (grootste verschil)
Geen blauwe kop, alleen een zwarte titel op een witte achtergrond:
- **Sportief:** Coaches-info, Hockeyprincipes, Spelregels-agent
- **Spelregels per leeftijd:** U6-U8, U9, U10-U12, U14+, Indoor-regels
- **Club:** Bestuur
- **Andere:** Shop, Indoor inschrijven

Oplossing: elk krijgt de standaard blauwe kop (label, titel, korte tekst, knop waar dat zinvol is), snelle links als de pagina meerdere delen heeft, en de blauwe afsluiter. De inhoud zelf blijft hetzelfde. De vijf spelregelpagina's krijgen één gedeelde opbouw, zodat ze onderling gelijk zijn.

### 2. Vijf verschillende titelgroottes in de blauwe kop
De grote titels zijn niet overal even groot of in hetzelfde lettertype (sommige zonder Montserrat, sommige tot een ander formaat). Je ziet dit als je tussen pagina's klikt.
Oplossing: één gedeelde titelstijl voor alle koppen, net zoals we dat al voor het label deden.

### 3. Snelle links ontbreken op Media en Socials
Kleine pagina's, dus te overwegen. Voorstel: weglaten waar er maar één onderdeel is (Socials), toevoegen bij Media.

### 4. Afsluiter onderaan ontbreekt op Teams en Indoor/winterstop
Voorstel: Teams krijgt "Word lid / Kom eens proberen", winterstop krijgt "Schrijf je in voor indoor".

### 5. Kleuren die buiten onze clubkleuren vallen
Op Nieuws, Privacy, Indoor-regels en de Spelregels-agent staan nog enkele vaste kleuren (wit/zwart/losse kleurcodes) i.p.v. onze clubkleuren. Bij Sponsors zijn het de bewuste kleuren per sponsorniveau; die blijven.
Oplossing: vervangen door onze vaste clubkleuren, zonder zichtbaar verschil behalve meer eenheid.

### 6. Kleinere punten
- Teams toont "Seizoen 2025–2026" (komt uit de teamgegevens); moet 2026-2027 worden.
- Inloggen en de "pagina niet gevonden"-melding zijn eenvoudig; enkel kleuren en lettertype gelijktrekken, geen blauwe kop.

## Voorgestelde volgorde
1. Gedeelde titelstijl (punt 2) – snel, raakt alles.
2. De elf oude pagina's omzetten (punt 1), te beginnen met Coaches-info, Bestuur en de spelregels.
3. Afsluiters en snelle links (punt 3 en 4).
4. Kleuren opkuisen (punt 5) en seizoenslabel (punt 6).
5. Elke pagina controleren op computer en telefoon met schermafbeeldingen.

## Technische details
- Nieuwe gedeelde utilities in `src/styles.css`: `.hero-title` (font-display, text-4xl md:text-6xl, tracking-tight, leading-tight) en eventueel een herbruikbare `PageHero`-component (label, titel, lead, acties) plus `PageCta`, zodat de omgezette pagina's niet elk hun eigen kopie krijgen.
- Spelregelpagina's (`src/pages/sportief/regels/*`) delen één layoutcomponent.
- Hardcoded kleuren vervangen door semantic tokens; sponsortierkleuren blijven als tokens.
- Na afloop `mem://style/page-template` aanvullen met de gedeelde titelstijl en component, en de regel in AGENTS.md opnemen.
