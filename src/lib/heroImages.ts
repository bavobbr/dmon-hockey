// Sfeerfoto's die als grote hero-achtergrond op de homepagina dienen.
// Afgeleid van src/assets/gallery: brede crops, als webp gecomprimeerd zodat
// het beeld snel laadt. De homepagina kiest er bij elke pagina-lading één.
const wide = import.meta.glob<{ default: string }>("@/assets/hero/*-wide.webp", {
  eager: true,
});
const small = import.meta.glob<{ default: string }>("@/assets/hero/*-small.webp", {
  eager: true,
});

export interface HeroImage {
  src: string;
  srcSet: string;
}

export const HERO_IMAGES: HeroImage[] = Object.keys(wide)
  .sort()
  .map((key) => {
    const wideEntry = wide[key];
    const smallEntry = small[key.replace(/-wide\.webp$/, "-small.webp")];
    if (!wideEntry) return undefined;
    const src = wideEntry.default;
    return {
      src,
      srcSet: smallEntry ? `${src} 1440w, ${smallEntry.default} 768w` : src,
    };
  })
  .filter((entry): entry is HeroImage => entry !== undefined);

export const HERO_COUNT = HERO_IMAGES.length;
