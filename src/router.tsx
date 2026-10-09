import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // De inhoud scrolt in <main>, niet in window: ook die naar boven bij navigatie.
    scrollToTopSelectors: ["main"],
    defaultPreloadStaleTime: 0,
  });

  return router;
};
