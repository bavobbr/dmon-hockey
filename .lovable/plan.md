## Probleem
Een nieuwsbericht dat enkel een YouTube-video bevat heeft (a) geen afbeelding om als cover te tonen — de kaart valt terug op een generieke gradient — en (b) geen tekst voor de samenvatting (na HTML strippen blijft er niets over). Zowel de hero-card als de bento-cards op /nieuws en de featured/side cards op de homepage zien er daardoor leeg uit.

## Voorstel
YouTube-video's als volwaardige "media" behandelen: haal de YouTube-ID uit de content, gebruik de officiële thumbnail als cover, en leg er een play-overlay op zodat het duidelijk een video is.

### 1. Nieuwe helper `extractMedia(html)`
In `src/lib/newsMedia.ts` (nieuw bestand):
- Zoek eerst naar een `<iframe src="...youtube..."|youtube-nocookie|youtu.be|/shorts/...">` en extract de video-ID.
- Zo ja: return `{ type: "video", thumbnail: "https://i.ytimg.com/vi/<id>/hqdefault.jpg", videoId }`.
- Anders val terug op de bestaande `<img>` regex: return `{ type: "image", thumbnail: <src> }`.
- Anders `null`.

### 2. Kaartweergave (`NewsCard` en `HeroCard` in `src/pages/Nieuws.tsx`)
- Gebruik `extractMedia` i.p.v. `extractFirstImage`.
- Als er een thumbnail is → toon die als cover (zelfde styling als nu).
- Als `type === "video"` → toon rechtsboven een kleine badge "Video" en een centraal wit play-icoon (Lucide `PlayCircle`) met subtiele shadow. Op hover licht het icoon iets op.
- Excerpt-fallback: als de gestripte content leeg is en `type === "video"`, toon "🎬 Bekijk de video" (of "Video bericht") in plaats van een lege lijn.

### 3. Homepage (`src/pages/Index.tsx`)
Zelfde behandeling voor de featured card en de twee side-cards: `extractMedia` gebruiken, play-icoon overlay tonen bij video's, en dezelfde excerpt-fallback.

### 4. Geen wijziging aan de dialog zelf
De volledige video blijft afspelen in de dialog (dat werkt al goed sinds de responsive iframe CSS).

## Waarom geen design directions?
Dit is een concrete, functionele fix (thumbnail + play-icoon overlay volgens bestaande stijl). De rest van de kaart-styling blijft ongewijzigd, dus er valt weinig visueel te kiezen. Als je wil dat ik alsnog varianten voor het play-icoon (bv. groot centraal vs. kleine badge, kleuraccent) laat zien, zeg dat er even bij.
