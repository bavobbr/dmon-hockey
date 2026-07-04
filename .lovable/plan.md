
# Vacatures op de site

## Datamodel

Nieuwe tabel `public.vacancies`:

- `id` (uuid, pk)
- `title` (text, verplicht)
- `slug` (text, uniek, verplicht) — voor `/vacatures/:slug`
- `category` (enum `vacancy_category`: `bestuur` | `werkgroep` | `sportief`)
- `emoji` (text, optioneel) — bv. 🏑👕, 🌱
- `intro` (text, verplicht) — 1-2 zinnen teaser voor cards/home
- `content` (text/HTML, verplicht) — rich-text met alle secties (Wat ga je doen / Wie zoeken we / Wat bieden we)
- `contact_name` (text, verplicht)
- `contact_email` (text, verplicht)
- `published` (boolean, default `true`)
- `sort_order` (int, default 0)
- `created_at`, `updated_at` (timestamptz, met update-trigger)

**Toegang (RLS):**
- Iedereen (`anon` + `authenticated`) mag `published = true` rijen lezen
- Moderators + admins mogen alles lezen/schrijven (via `has_role`)

## Admin

- Sidebar item **"Vacatures"** onder Content (naast Nieuws)
- `/admin/vacancies` — lijst met titel, categorie, gepubliceerd-toggle, volgorde, edit/delete
- `/admin/vacancies/new` en `/admin/vacancies/:id/edit`
- Formulier (React Hook Form + Zod):
  - Titel → auto slug (bewerkbaar)
  - Categorie (select)
  - Emoji (optioneel)
  - Intro (textarea, max ~240 tekens)
  - Content (React Quill, zelfde config als announcements)
  - Contactnaam + e-mail (email-validatie)
  - Gepubliceerd toggle, Volgorde
- Alleen `moderator`/`admin` (bestaande `ProtectedRoute requireModerator`)

## Publieke pagina's

**`/vacatures`** (nieuwe pagina, huisstijl: hero + sticky sub-nav voor categorie-filter + card grid + CTA):
- Hero "Word vrijwilliger bij D-MON" + intro
- Sub-nav filtert op categorie (Alle / Bestuur / Werkgroep / Sportief)
- Card grid: emoji + titel + category-badge + intro + "Meer info →"
- Kaartkleur per categorie (subtiel, via bestaande token-palette)
- CTA-blok onderaan: "Staat er niets voor jou tussen? Mail info@dmon.be"

**`/vacatures/:slug`** — detailpagina:
- Terug-link, categorie-badge, titel + emoji, intro
- Rich-text content (met DOMPurify, zelfde sanitize als announcements)
- Contact-card: naam + `mailto:` knop

**Homepage** (`src/pages/Index.tsx`):
- Nieuwe sectie "Vacatures" met de 2-3 meest recente gepubliceerde vacatures (compacte cards), link "Alle vacatures →" naar `/vacatures`
- Positie: na Nieuws-blok, vóór CTA

**Navigatie:**
- `AppSidebar`: menu-item "Vacatures" onder **Club** (of los top-level — te kiezen op basis van bestaande volgorde bij implementatie)

## Seeding

Na goedkeuring migratie: de 10 vacatures uit `VACATURES03072026.docx` als seed-inserts toevoegen (via insert-tool, `published = true`) zodat de pagina meteen gevuld is. Categorie-mapping:
- Bestuur: Penningmeester, Administratieve ondersteuning penningmeester, Communicatie
- Werkgroep: Kledij & Merchandising, Duurzaamheid, Fair Play Verantwoordelijke
- Sportief: Sportieve Cel Onderbouw / Bovenbouw / Overkoepelend

## Technische details

- Migratie voegt enum + tabel + GRANTs (`anon` SELECT beperkt tot published via RLS; `authenticated` full; `service_role` ALL) + RLS-policies + `updated_at` trigger toe.
- Slug-uniciteit afgedwongen in DB; client genereert kandidaat, admin kan overschrijven.
- Types komen automatisch in `src/integrations/supabase/types.ts` na migratie — pas dan code die eraan raakt bouwen.
- Geen nieuwe libs nodig (Quill, DOMPurify, Zod, RHF, TanStack Query zijn al aanwezig).
- Sanitize content bij render met DOMPurify (zelfde whitelist als `AnnouncementDetail`).

## Bestanden (indicatief)

- `supabase/migrations/…` (via migration-tool)
- `src/pages/Vacatures.tsx` (overzicht)
- `src/pages/VacatureDetail.tsx`
- `src/pages/admin/Vacancies.tsx` (lijst)
- `src/pages/admin/VacancyForm.tsx`
- `src/components/VacancyCard.tsx`
- Routes in `src/App.tsx`, item in `src/components/AppSidebar.tsx`, teaser in `src/pages/Index.tsx`
