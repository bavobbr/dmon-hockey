Tactische plannen toevoegen aan /sportief/coaches-info

Doel
Twee PPTX-presentaties (5 MB en 7 MB) toevoegen als download op /sportief/coaches-info.

Keuze opslag
De bestaande grote PPTX-bestanden op deze pagina staan op Cloudflare R2 (bijv. `https://pub-5b8aee7e2e414ce7b4916802c52b86f6.r2.dev/...`). Dat is de huidige standaard voor grote presentaties. Kleinere PDF's staan lokaal in `public/docs`.

Voorgestelde aanpak (R2)
1. De gebruiker uploadt de twee PPTX-bestanden naar de bestaande Cloudflare R2-bucket en geeft de twee publieke URL's door:
   - `Tactisch plan 2026/2027 spelersversie.pptx`
   - `Tactisch plan 2026/2027 coachversie.pptx`
2. Werk `src/pages/sportief/CoachesInfo.tsx` bij met een nieuwe sectie "Tactische plannen 2026/2027" onder de bestaande "Formaties"-sectie. Gebruik twee downloadknoppen met de R2-URL's.
3. Bouw de site en controleer dat de nieuwe sectie correct verschijnt en de links werken.

Alternatief (Supabase Storage)
Indien de gebruiker de bestanden liever in Supabase Storage wil: maak een publieke bucket `coach-documents` aan, voeg een RLS-beleid toe voor publieke downloads, en gebruik de Supabase Storage-URL's in de pagina.

Vereisten van gebruiker
- Upload beide PPTX-bestanden en geef de publieke URL's door (bij R2), of upload de bestanden in deze chat (bij Supabase Storage).
- Bevestig welke opslagmethode je prefereert.

Niet in scope
- Herwerken van andere documenten op de pagina.
- Wijzigen van bestaande R2- of lokale documentlinks.
