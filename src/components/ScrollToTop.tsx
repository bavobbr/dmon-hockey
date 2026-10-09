import { useEffect } from 'react';
import { useLocation } from '@/lib/router-compat';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // De inhoud scrolt in <main> (header blijft zichtbaar), dus ook die
    // scroll-positie resetten bij routewissel.
    window.scrollTo(0, 0);
    document.querySelector('main')?.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
