# AGENTS.md

Technical decisions for this repository. One rule per line, with the reason.

- The root header's menu buttons read the sidebar state through `useSidebarSafe()` and plain `Button`s instead of `useSidebar()` / `SidebarTrigger`, because those throw when no `SidebarProvider` renders above them and that single error blanks the whole app.
- Menu-item highlight classes must be produced by calling the shared helper (e.g. `getNavCls({ isActive })`), never by interpolating the function itself into a template string: the function's source text leaks raw utility names into the `class` attribute and silently styles the item.
- Public content density uses the root's `mobile-content-density` scope below tablet width, excluding home, auth and admin, so shared compact spacing never changes desktop or management layouts; membership prices use dedicated row-layout hooks.
- The root layout is a fixed-height column (`h-dvh overflow-hidden`): `<main>` is the scroll container so the header with the menu button stays visible while scrolling; do not restore body-level scrolling. Anchor helpers must scroll `main`, not `window`.
