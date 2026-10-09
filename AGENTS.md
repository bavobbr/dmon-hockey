# AGENTS.md

Technical decisions for this repository. One rule per line, with the reason.

- The root header's menu buttons read the sidebar state through `useSidebarSafe()` and plain `Button`s instead of `useSidebar()` / `SidebarTrigger`, because those throw when no `SidebarProvider` renders above them and that single error blanks the whole app.
- Menu-item highlight classes must be produced by calling the shared helper (e.g. `getNavCls({ isActive })`), never by interpolating the function itself into a template string: the function's source text leaks raw utility names into the `class` attribute and silently styles the item.
