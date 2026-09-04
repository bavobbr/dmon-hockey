Tactische plannen toevoegen aan /sportief/coaches-info

Doel
Twee PPTX-presentaties toevoegen als download op /sportief/coaches-info, gebruikmakend van de bestaande Cloudflare R2-bucket.

Aanpak
1. Gebruik de door de gebruiker aangeleverde R2-URL's:
   - Spelersversie (korte versie): `https://pub-5b8aee7e2e414ce7b4916802c52b86f6.r2.dev/dmon%20tactisch%20plan%20-%20spelersversie.pptx`
   - Coachversie (uitgebreide versie): `https://pub-5b8aee7e2e414ce7b4916802c52b86f6.r2.dev/dmon%20tactisch%20plan%20v1.pptx`
2. Werk `src/pages/sportief/CoachesInfo.tsx` bij met een nieuwe sectie "Tactische plannen 2026/2027" onder de bestaande "Formaties"-sectie. Gebruik twee downloadknoppen met de R2-URL's.
3. Bouw de site en controleer dat de nieuwe sectie correct verschijnt en de links werken.

Vereisten van gebruiker
- Bevestig dat `v1` de uitgebreide coachversie is.

Niet in scope
- Herwerken van andere documenten op de pagina.
- Wijzigen van bestaande R2- of lokale documentlinks.
