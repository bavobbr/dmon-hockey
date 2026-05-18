## Doel
Agenda sneller scanbaar maken: minder herhaling, duidelijker onderscheid tussen wedstrijden / trainingen / events, en een rustigere visuele hiërarchie.

## Wat verandert er visueel

### 1. Dag-gegroepeerde lijst i.p.v. losse kaarten
Binnen elke sectie (Vandaag, Morgen, Deze Week, …) groeperen we events per dag. De datum staat één keer als sticky daghoofd ("Maandag 18 mei — 6 events"). Daaronder compacte rijen met enkel het uur. Scheelt veel ruimte en herhaling.

```text
─ Vandaag ───────────────────────────────
  MAANDAG 18 MEI                6 events
  ─────────────────────────────────────
  │ 18:00  Training   U10G2, U10G3, U10G1, U11G1
  │ 19:15  Training   U16G1, U16G2          · Hockey Veld
  │ 20:30  Training   G1, G2, TRM           · Hockey veld
  ▌ 20:30  WEDSTRIJD  Lokeren G-1  vs  Dendermonde G-1   [Uit]
  ▌ 20:30  WEDSTRIJD  Lokeren G-2  vs  Dendermonde G-2   [Uit]
```

### 2. Visuele typering per event
- Linker accentbalk + icoon in een eigen kleur per type:
  - Wedstrijd: `primary` (donkerblauw) — meest prominent, lichte achtergrond-tint
  - Training: neutraal grijs, dunne balk
  - Event: accentkleur
- Thuis/Uit als kleine pill rechts i.p.v. tussen de andere badges
- Score, indien aanwezig, rechts uitgelijnd in mono-font zodat het direct opvalt

### 3. Compactere rij-layout
- Uur links (vast 56px), type-label (vast 90px), titel volledig leesbaar daarnaast
- Locatie en serie als secundaire regel onder de titel in kleinere muted tekst
- Hoogte ~56px voor trainings, ~72px voor wedstrijden (iets meer adem)
- Max-breedte van content beperken (`max-w-3xl` binnen kolom) zodat tekst niet over het hele scherm uitloopt op grote schermen

### 4. Sectie-koppen rustiger
- "Vandaag", "Morgen", "Deze Week" als typografische headers (geen grote gekleurde pill meer), met onderstreep-accent en het aantal events in muted tekst
- Sticky bij scrollen zodat je altijd weet waar je bent

### 5. Lege/onbenoemde events
"Event zonder naam" tonen als italic muted "Naamloos event" met type-label ervoor, zodat het minder schreeuwt.

### 6. Kalender-sidebar
Ongewijzigd qua functie, maar visueel iets compacter en met dezelfde type-kleurpunten als de lijst zodat er consistentie is.

## Technische opzet
- Alles in `src/components/events/EventCard.tsx`, `EventGroup.tsx`, en `EventFilters.tsx` (geen schema-wijzigingen)
- Nieuwe helper in `EventGroup` die events per dag subgroepeert
- Type-kleuren via bestaande semantic tokens (`primary`, `muted`, `accent`) — geen nieuwe kleuren toevoegen
- Daghoofd en sectiehoofd `position: sticky` met `top` offset rekening houdend met `AppHeader`
- Geen backend- of data-wijzigingen

## Niet inbegrepen
- Geen nieuwe filters of functies
- Geen wijzigingen aan de data of edge functions
- Mobile layout blijft single-column zoals nu, gewoon met de nieuwe rij-stijl