# Eigen paginatitels per pagina (SSR)

## Wat er aan de hand is

De reviewer heeft gelijk, en ik heb het geverifieerd: de server stuurt voor `/sportief/coaches-info` én voor elke andere pagina exact dezelfde titel:

```text
<title>D-mon Hockey Club Dendermonde - Veldhockey in België</title>
```

Er zijn wél per-pagina titels bedacht (een lijst met titel + beschrijving voor ~40 pagina's), maar die worden gezet met een client-side mechanisme (react-helmet-async) dat pas ná het laden van JavaScript de titel aanpast. Sinds de overstap naar server-rendering wordt de `<head>` door de router zelf opgebouwd, en daar staat alleen de algemene clubtitel in.

Gevolg: de browser toont uiteindelijk de juiste titel, maar Google, LinkedIn, WhatsApp-previews en AI-crawlers zien op elke pagina dezelfde titel en beschrijving. Dat is precies wat de review opmerkte.

## Wat ik ga doen

De bestaande titels en beschrijvingen verhuizen naar het server-mechanisme, zodat ze in de HTML zelf staan.

1. Per pagina (elk routebestand) een eigen `head()` toevoegen met:
   - `title` — de al bestaande titel, in de vorm `Titel | D-mon Hockey Club`
   - `description`
   - `og:title` en `og:description`
   - `canonical` en `og:url` die naar de pagina zelf verwijzen (`https://www.dmon.be/...`)
2. De algemene titel/beschrijving in de root blijft alleen als terugvalwaarde staan; de `og:url` en `og:image` die daar nu hardcoded op de homepage staan haal ik uit de root weg, want die overschrijven nu de previews van alle onderliggende pagina's. De share-afbeelding komt per pagina terecht waar hij hoort.
3. Het oude client-side mechanisme (`AutoPageMeta` / `PageMeta` met Helmet) verwijderen zodat er geen dubbele of conflicterende tags meer zijn. De titellijst blijft als één centrale bron bestaan, zodat teksten op één plek te beheren blijven.
4. Admin- en loginpagina's krijgen `noindex` (die horen niet in Google).
5. Voor de nieuws- en vacaturedetailpagina's komt de titel uit de inhoud zelf (artikeltitel / vacaturetitel) in plaats van een vaste tekst.

## Controle achteraf

Ik haal na de wijziging voor een reeks pagina's de HTML op zoals een crawler dat doet, en check dat elke pagina een eigen `<title>`, `description` en `canonical` heeft — dus geen JavaScript nodig.

## Technisch

- `src/config/pageMeta.ts` blijft de bron; er komt een kleine helper die daaruit een `head()`-object bouwt (meta + canonical link).
- Elk bestand in `src/routes/**` krijgt `head: () => buildPageHead("/pad")`; dynamische routes (`nieuws`, `vacatures/$slug`) gebruiken `head: ({ loaderData })`.
- `src/components/AutoPageMeta.tsx` en `src/components/PageMeta.tsx` worden verwijderd, samen met `HelmetProvider` in `__root.tsx`; `react-helmet-async` is dan ongebruikt.
- Titels blijven <60 tekens, descriptions <160 waar nodig ingekort.
