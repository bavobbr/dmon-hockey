import type { ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  lead?: ReactNode | undefined;
  actions?: ReactNode | undefined;
}

/** Standaard blauwe kop voor contentpagina's (huisstijl). */
export const PageHero = ({ label, title, lead, actions }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
    <div className="hero-decor" aria-hidden />
    <div className="hero-rule" aria-hidden />
    <div className="container mx-auto px-4 py-16 lg:py-24 relative">
      <div className="max-w-3xl">
        <div className="inline-flex items-center rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-xs">
          {label}
        </div>
        <h1 className="hero-title mt-6">{title}</h1>
        {lead ? (
          <p className="mt-4 max-w-2xl text-base lg:text-lg text-primary-foreground/85">{lead}</p>
        ) : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </div>
  </section>
);

interface PageCtaProps {
  title: string;
  text?: string | undefined;
  actions: ReactNode;
}

/** Blauwe afsluiter onderaan een contentpagina. */
export const PageCta = ({ title, text, actions }: PageCtaProps) => (
  <section className="container mx-auto px-4 pb-16">
    <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-8 text-primary-foreground lg:p-12">
      <div className="hero-decor" aria-hidden />
      <div className="relative max-w-2xl">
        <h2 className="font-display text-2xl font-bold lg:text-3xl">{title}</h2>
        {text ? <p className="mt-3 text-primary-foreground/85">{text}</p> : null}
        <div className="mt-6 flex flex-wrap gap-3">{actions}</div>
      </div>
    </div>
  </section>
);
