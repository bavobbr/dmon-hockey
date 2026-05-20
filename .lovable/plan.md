## Wat we doen

De huidige sectie op de homepage (`src/pages/Index.tsx`, regels 289–367) — drie gelijke cards met icoon-tegel, tekst en foto onderaan — vervangen door de gekozen **"Compact pillars"** richting: foto's eruit, drie strakke kolommen met een groot icoon in clubkleur, een korte "proof"-badge en een paragraaf. Asymmetrische koptekst met een accent-kleur en een tekstuele "Bekijk meer" CTA rechts.

## Layout

```text
┌──────────────────────────────────────────────────────────┐
│ WAT WE BIEDEN                                Bekijk meer→│
│ Hockey op JOUW NIVEAU  ──────────────────────────────────│
│                                                          │
│  ◎ Target       │  🏆 Trophy        │  👥 Users         │
│  TRAININGEN     │  COMPETITIEVE…    │  FAMILIECLUB      │
│  [3× per week]  │  [Reg. & nat.]    │  [Hechte familie] │
│  Coaching tekst │  Competitietekst  │  Communitytekst   │
└──────────────────────────────────────────────────────────┘
```

## Concrete wijzigingen

1. **Header**
   - Eyebrow "Wat we bieden" in `text-secondary` (rood), `font-display`, tracking-widest.
   - H2 "Hockey op **jouw niveau**" — "jouw niveau" in `text-accent` (goud), rest in `text-primary` (blauw). Groter formaat: `text-5xl md:text-6xl`.
   - "Bekijk Meer"-knop wordt een tekstuele link met pijl, in `text-primary` met `hover:text-secondary`. Link bestemming wijzigt van `/club/sfeer` → `/sportief/training` (inhoudelijk logischer).
   - Onderscheidende `border-b-2 border-border/60 pb-8` onder de header.

2. **Drie pijlers in een grid met `divide-x`**
   - Geen `Card`-component meer; gewoon padding + verticale scheidingslijntjes via `divide-border/60`.
   - Geen foto's. Groot Lucide-icoon (`w-14 h-14`, `strokeWidth=1.5`) in clubkleur per pijler: `Target` (primary), `Trophy` (secondary), `Users` (accent).
   - Hover: icoon `scale-110` (origin-left), achtergrond licht naar `bg-background`.
   - Per pijler: titel (uppercase, font-display), proof-badge (`bg-{kleur}/10 text-{kleur}`), beschrijving in `text-foreground/80`.

3. **Proof-badges (tekst, geen verzonnen cijfers)**
   - Trainingen → "Tot 3× per week training"
   - Competitie → "Regionaal & nationaal niveau"
   - Familieclub → "Een hechte hockeyfamilie"

4. **Design-system opkuis**
   - Alle kleuren via semantische tokens (`primary`, `secondary`, `accent`, `border`, `foreground`, `background`) — geen hardgecodeerde hex.
   - Imports `trainingImage`, `competitiveImage`, `familyImage` en de `Card`-imports (indien verder ongebruikt) worden opgeruimd.

## Buiten scope

- Geen wijzigingen aan andere homepage-secties (hero, agenda, nieuws, sponsors).
- Geen nieuwe routes of data.
- Geen verzonnen statistieken; badges blijven beschrijvend totdat we echte cijfers hebben.

## Bestanden

- `src/pages/Index.tsx` — sectie regels 289–367 vervangen, imports opschonen.
