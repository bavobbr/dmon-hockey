import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

export function ScrollToTop() {
  const { pathname, hash } = useRouterState({
    select: (s) => ({ pathname: s.location.pathname, hash: s.location.hash }),
  });

  useEffect(() => {
    // De inhoud scrolt in <main> (header blijft zichtbaar), dus die
    // scroll-positie resetten bij routewissel, ook na de render van de nieuwe pagina.
    // Staat er een anker (#...) in de link, spring dan net daarheen in plaats van naar boven.
    const apply = () => {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ block: 'start' });
          return;
        }
      }
      window.scrollTo(0, 0);
      document.querySelector('main')?.scrollTo(0, 0);
    };
    apply();
    const id = requestAnimationFrame(apply);
    // Het anker-element kan later verschijnen (data die nog laadt), dus nog eens proberen.
    const retry = window.setTimeout(apply, 200);
    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(retry);
    };
  }, [pathname, hash]);

  return null;
}
