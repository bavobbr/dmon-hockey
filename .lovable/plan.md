## Doel

Het aanmaken van een nieuwsbericht eenvoudiger maken. Drie velden verdwijnen uit het admin-formulier: **Excerpt**, **Publish immediately** en **Featured announcement**.

## Wijzigingen

### 1. Admin formulier (`src/pages/admin/AnnouncementForm.tsx`)
- Velden verwijderen: excerpt input, featured switch, published switch.
- Bij opslaan altijd `published: true` sturen (zodat nieuwe berichten meteen zichtbaar zijn).
- `excerpt` niet meer meesturen (blijft leeg / null in de DB).
- `featured` niet meer meesturen (default `false`).

### 2. Admin overzicht (`src/pages/admin/Announcements.tsx`)
- "Featured"-badge weghalen uit de lijst.
- Excerpt-regel weghalen; in plaats daarvan tonen we de eerste ~160 tekens van de content (HTML gestript), net zoals /nieuws al doet als fallback.

### 3. Publieke pagina's — auto-samenvatting i.p.v. excerpt
Overal waar nu `announcement.excerpt || <fallback>` staat, valt de excerpt weg en houden we alleen de fallback (HTML strippen + inkorten):
- `src/pages/Nieuws.tsx` — kaart, hero-card, dialog beschrijving.
- `src/pages/Index.tsx` — featured card en secundaire cards.

### 4. Featured-logica op /nieuws en homepage
Zonder `featured` toggle moeten we kiezen wat er in de "Uitgelicht" hero verschijnt:
- **Voorstel:** het meest recente bericht (op `created_at`) wordt automatisch het uitgelichte artikel, de rest komt onder "Laatste nieuws".
- Op de homepage blijft dezelfde logica: nieuwste = groot, rest = kleiner. De tekst "Uitgelicht/Hoofdartikel" wordt gewoon "Hoofdartikel".

### 5. Database
Geen schema-wijziging nodig. `excerpt`, `featured` en `published` blijven bestaan in de tabel (bestaande data blijft werken); we sturen ze alleen niet meer vanuit het formulier. Nieuwe records krijgen `published=true`, `featured=false`, `excerpt=null`.

*Optioneel later:* de kolommen echt droppen. Voor nu laten we ze staan om niets kapot te maken.

## Vraag ter bevestiging
Klopt het dat "nieuwste bericht = automatisch uitgelicht" de gewenste vervanging is voor de handmatige featured-toggle? Zo niet, dan verdwijnt de hero-sectie op /nieuws helemaal en tonen we alles in één lijst.
