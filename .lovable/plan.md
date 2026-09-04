Tactische plannen toevoegen aan /sportief/coaches-info

Doel
Twee PPTX-presentaties (5 MB en 7 MB) toevoegen als download op /sportief/coaches-info, opgeslagen in Supabase Storage.

Aanpak
1. Maak een publieke Supabase Storage-bucket `coach-documents` aan met een limiet van minstens 20 MB per bestand.
2. Voeg een RLS-beleid toe op `storage.objects` zodat anonieme gebruikers de bestanden kunnen downloaden.
3. De gebruiker uploadt de twee PPTX-bestanden in deze chat:
   - `Tactisch plan 2026/2027 spelersversie.pptx`
   - `Tactisch plan 2026/2027 coachversie.pptx`
4. Upload de bestanden naar de `coach-documents`-bucket en noteer de publieke URL's.
5. Werk `src/pages/sportief/CoachesInfo.tsx` bij met een nieuwe sectie "Tactische plannen 2026/2027" onder de bestaande "Formaties"-sectie. Gebruik twee downloadknoppen met de Supabase Storage-publieke URL's.
6. Bouw de site en controleer dat de nieuwe sectie correct verschijnt en de links werken.

Vereisten van gebruiker
- Upload beide PPTX-bestanden in deze chat zodat ze beschikbaar komen in /mnt/user-uploads/.

Niet in scope
- Herwerken van andere documenten op de pagina.
- Wijzigen van bestaande R2- of lokale documentlinks.
