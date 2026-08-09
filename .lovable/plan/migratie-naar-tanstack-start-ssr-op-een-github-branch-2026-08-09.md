# Migratie naar TanStack Start (SSR) — op een GitHub-branch

## Doel
De statische inhoudspagina's (regels, training, waarden, lidmaatschap, stick-gids…) server-side renderen zodat AI-crawlers (GPTBot, Perplexity, ClaudeBot) en social-preview-bots (LinkedIn, Slack, Facebook) de echte HTML-content zien in plaats van een lege SPA-shell. Dit lost je SEO-zorg op.

## Aanpak: branch-isolatie + chat-history revert als vangnet

### Stap 0 — Branch aanmaken (jij, in de Lovable UI)
1. Zorg dat **GitHub Branch Switching** aan staat: Account Settings → Labs → "GitHub Branch Switching".
2. Open de branch-picker in de GitHub-connection settings van het project → "+ Create branch" → naam `migrate-tanstack`.
3. Lovable switcht automatisch naar die branch voor syncing. Bevestig me dat je op de branch zit, dan start ik de migratie.

### Stap 1–9 — De migratie (ik, in chat)
De migratie draait het project in-place om naar TanStack Start:
- **Framework swap**: `vite.config.ts`, `tsconfig.json`, `package.json` → TanStack Start + Tailwind v4.
- **Routing**: React Router v6 → TanStack Router. Elk `<Route>` in `src/App.tsx` wordt een bestand onder `src/routes/`. Auth-wrappers (`ProtectedRoute`) blijven behouden.
- **SSR entry**: `src/server.ts`, `src/start.ts`, error-handling wrapper.
- **Supabase**: client patched voor SSR (`localStorage` guard). Edge functions blijven op Supabase staan.
- **SEO/meta**: alle `index.html` meta-tags + `PageMeta`/`AutoPageMeta` → `__root.tsx` `head()` per route.
- **Design tokens**: de custom club-kleuren (blauw #06478D, rood #B62C17, goud #BD9D64), Outfit/Barlow fonts, hero-gradient → overgezet naar `src/styles.css` (Tailwind v4).
- **Build gate**: `bun run build` + `tsc --noEmit` moeten groen zijn.

Tijdens de migratie blijft de preview je huidige app tonen; de gemigreerde versie verschijnt pas als de migratie klaar is.

### Stap 10 — Verifiëren en beslissen (samen)
- Preview controleren op de feature branch.
- GUI-tests (Playwright) draaien via de GitHub-PR-workflow.
- **Als alles goed is**: merge `migrate-tanstack` → `main` → publiceren.
- **Als er iets mis is**: revert deze chat-turn (herstelt code + pipeline-flip automatisch), `main` blijft onaangetast.

## Belangrijke caveats
1. **Pipeline-flip onzekerheid**: de `.lovable/project.json` flip kan project-breed doorbijten ongeacht de branch. Chat-history revert is het gegarandeerde vangnet — daarom blijven we binnen één chat-turn.
2. **Custom scripts**: `test:gui` scripts worden gecheckt; als ze naar oude bestanden (`tsconfig.app.json`, `src/index.css`) verwijzen, herschrijf ik ze.
3. **Edge functions**: blijven op Supabase, worden niet verplaatst.
4. **Tailwind v3 → v4**: breaking changes in class-names worden gesweept en gefixt.
