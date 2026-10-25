# Sportief charter en beleid v1.4 op de site

## Wat er nu staat (verouderd)
- /club/waarden toont **drie** waarden (Respect, Fair Play, Inclusiviteit). Het nieuwe charter heeft er **vijf**: Respect, Fun, Fair Play, Enthousiasme, Community.
- Het oude beleid-PDF staat op drie plaatsen: /club/waarden, /sportief/training en (als Word-bestand) /sportief/coaches-info.

## Idee: het charter is de pagina, het beleid is het naslagwerk
Het charter is kort en moet door iedereen gelezen worden (je bevestigt het bij inschrijving). Dus zetten we het **als gewone tekst op de pagina**, leesbaar op een telefoon zonder iets te downloaden. Het lange beleid blijft een PDF voor wie meer wil weten.

### /club/waarden wordt "Ons sportief charter"
1. **Hero**: "Hier groei je, op en naast het veld." met de korte intro (familieclub, ontwikkeling boven resultaat, Hockey 4 Life).
2. **Snelle links**: Waarden · Wat je mag verwachten · Engagementen · Documenten · Integriteit.
3. **Onze vijf waarden**: vijf kaarten met de tekst letterlijk uit het charter.
4. **Wat je van D-mon mag verwachten**: de vijf beloftes (leerlijn, gelijkwaardige speeltijd t/m U12, uitleg bij beslissingen, aanspreekpunt integriteit, democratisch lidgeld).
5. **Wat wij van elkaar verwachten**: vier tabbladen of kaarten **Speler · Ouder · Trainer/coach · Wij allemaal**, zodat ieder meteen zijn eigen deel vindt.
6. **Documenten**: twee duidelijke downloadkaarten
   - Sportief charter (2 pagina's, lokaal op de site)
   - Volledig sportief beleid (35 pagina's, 6 MB, via de externe opslag) met de inhoudstafel in 6 hoofdstukken als korte opsomming, zodat men weet wat erin staat.
   - Vermelding "Versie 1.4, goedgekeurd door het bestuur op 23 oktober 2026".
7. **Aanspreekpunt integriteit**: blijft zoals nu.
8. Afsluitende zin: bij inschrijving bevestig je dat je het charter gelezen hebt; een handtekening is niet nodig.

Het oude waardenbeeld (bord "Respect en afspraken") valt weg, want het past niet meer bij vijf waarden.

### Doorverwijzen per doelgroep
- **Ouders/nieuwe leden**: op /lidmaatschap/info en /lidmaatschap/registratie een korte melding "Bij inschrijving onderschrijf je ons sportief charter" met link naar /club/waarden.
- **Coaches**: op /sportief/coaches-info het oude Word-bestand vervangen door beide nieuwe documenten.
- **Spelers/ouders bij training**: de kaart op /sportief/training wijst naar charter en nieuw beleid.
- Oude PDF en Word-bestand worden verwijderd, zodat niemand nog de oude versie downloadt.

## Technische details
- `public/docs/sportief-charter-dmon-v1.4.pdf` (kopie van upload); beleid via R2-URL `https://pub-5b8aee7e2e414ce7b4916802c52b86f6.r2.dev/sportief%20beleid-dmon%20v1.4.pdf` (gecontroleerd: 200, application/pdf), gedefinieerd als één constante in `src/config` zodat alle pagina's dezelfde link gebruiken.
- `src/pages/club/Values.tsx` herschreven volgens het huisstijl-template; `Training.tsx`, `CoachesInfo.tsx`, `lidmaatschap/Info.tsx`, `Registration.tsx` krijgen de nieuwe links.
- Verwijderen: `public/docs/sportief-beleid-dmon.pdf`, `public/docs/Sportief_beleid_DMON_Hockey.docx`.
- Titel/omschrijving van /club/waarden in `pageMeta.ts` bijgewerkt ("Sportief charter").
- Copy zonder em-dash; merknaam "D-mon Hockey".
