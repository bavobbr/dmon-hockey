# AGENTS.md

Technical decisions for this repository. One rule per line, with the reason.

- The root header's menu buttons read the sidebar state through `useSidebarSafe()` and plain `Button`s instead of `useSidebar()` / `SidebarTrigger`, because those throw when no `SidebarProvider` renders above them and that single error blanks the whole app.
- Menu-item highlight classes must be produced by calling the shared helper (e.g. `getNavCls({ isActive })`), never by interpolating the function itself into a template string: the function's source text leaks raw utility names into the `class` attribute and silently styles the item.
- Public content density uses the root's `mobile-content-density` scope below tablet width, excluding home, auth and admin, so shared compact spacing never changes desktop or management layouts; membership prices use dedicated row-layout hooks.
- The root layout is a fixed-height column (`h-dvh overflow-hidden`): `<main>` is the scroll container so the header with the menu button stays visible while scrolling; do not restore body-level scrolling. Anchor helpers must scroll `main`, not `window`.
- Values-page photos live outside the auto-published gallery and use a scoped six-track grid with content-driven minimum tile heights, so the photo layout cannot clip charter text or add unintended gallery entries.
- Content-page heroes use the shared `hero-title` utility, and pages without a bespoke hero use `PageHero` / `PageCta` from `src/components/layout/PageHero.tsx`, so title sizing and hero/CTA markup stay identical across pages.
