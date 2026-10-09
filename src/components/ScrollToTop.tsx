import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

export function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    // De inhoud scrolt in <main> (header blijft zichtbaar), dus die
    // scroll-positie resetten bij routewissel, ook na de render van de nieuwe pagina.
    const reset = () => {
      window.scrollTo(0, 0);
      document.querySelector('main')?.scrollTo(0, 0);
    };
    reset();
    const id = requestAnimationFrame(reset);
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
