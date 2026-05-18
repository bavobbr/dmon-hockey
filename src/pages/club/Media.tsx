import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Newspaper, ExternalLink, Calendar, Tv, Sparkles, Mail } from "lucide-react";

type Article = {
  id: number;
  title: string;
  publication: string;
  date: string;
  excerpt: string;
  url: string;
  category: string;
  type: "article" | "tv";
};

const newsArticles: Article[] = [
  { id: 1, title: "Werk van lange adem eindelijk afgerond", publication: "Het Nieuwsblad", date: "2022-11-14", excerpt: "Het nieuwe hockeyterrein van D-MON Hockey is eindelijk klaar na een lang proces.", url: "https://www.nieuwsblad.be/cnt/dmf20221114_94226298", category: "Terrein", type: "article" },
  { id: 2, title: "D-MON Hockey maakt droom waar", publication: "Het Laatste Nieuws", date: "2022-11-14", excerpt: "Dolgelukkig met nieuw, eigen hockeyveld in gebruik.", url: "#", category: "Terrein", type: "article" },
  { id: 3, title: "L'envol du D-MON", publication: "La Libre Okey", date: "2022-11-14", excerpt: "Franse berichtgeving over de nieuwe ontwikkelingen bij D-MON Hockey.", url: "https://okey.lalibre.be/lenvol-du-d-mon/", category: "Internationaal", type: "article" },
  { id: 4, title: "Rechtbank geeft Dendermonde hockeyclub gelijk", publication: "TV Oost", date: "2022-09-22", excerpt: "Groen licht om het veld af te werken - reportage op TV Oost.", url: "https://www.tvoost.be/nieuws/rechtbank-geeft-dendermondse-hockeyclub-gelijk-groen-licht-om-het-veld-af-te-werken-143870", category: "Rechtzaak", type: "tv" },
  { id: 5, title: "Groen licht voor D-MON Hockey om veld af te werken", publication: "Het Laatste Nieuws", date: "2022-09-22", excerpt: "Rechter oordeelt dat werken onterecht werden stilgelegd - een enorme opluchting.", url: "https://www.hln.be/dendermonde/groen-licht-voor-d-mon-hockey-om-nieuw-hockeyveld-af-te-werken-rechter-oordeelt-dat-werken-onterecht-werden-stilgelegd~a1899dd9/", category: "Rechtzaak", type: "article" },
  { id: 6, title: "Kampioenstitel voor meisjes U14 D-MON Hockey", publication: "Het Laatste Nieuws", date: "2022-05-23", excerpt: "Geweldige prestatie van onze jeugdteams met een kampioenstitel.", url: "#", category: "Sport", type: "article" },
  { id: 7, title: "Dendermonds hockeytalent Noor (13) mag trainingsprogramma volgen", publication: "Het Laatste Nieuws", date: "2022-04-06", excerpt: "Noor mag trainingsprogramma volgen van Koninklijke Belgische Hockeybond.", url: "https://www.hln.be/dendermonde/dendermonds-hockeytalent-noor-13-mag-trainingsprogramma-volgen-van-koninklijke-belgische-hockeybond~a19eaf56/", category: "Talent", type: "article" },
  { id: 8, title: "Spelers vormen menselijke ketting om een oplossing te forceren", publication: "Het Nieuwsblad", date: "2022-01-23", excerpt: "Ludieke actie van de spelers om aandacht te vragen voor de noodzaak van een eigen terrein.", url: "https://www.nieuwsblad.be/cnt/dmf20220123_95646025", category: "Actie", type: "article" },
  { id: 9, title: "1,2 miljoen euro voor nieuwe sporthal en hockeykunstgrasveld", publication: "Het Nieuwsblad", date: "2021-12-20", excerpt: "Het veld wordt een unicum in Vlaanderen - belangrijke subsidie toegekend.", url: "https://www.nieuwsblad.be/cnt/dmf20211220_95491720", category: "Subsidie", type: "article" },
  { id: 10, title: "Hoog bezoek voor hockeyclub: Red Lion Tom Boon", publication: "Het Laatste Nieuws", date: "2021-11-16", excerpt: "Red Lion Tom Boon op veld met spelers D-MON Hockey - bijzonder bezoek.", url: "https://www.hln.be/dendermonde/hoog-bezoek-voor-hockeyclub-red-lion-tom-boon-op-veld-met-spelers-d-mon-hockey~a57d0897/", category: "Special", type: "article" },
  { id: 11, title: "Nieuwe hockeyclub onmiddellijk succes", publication: "Het Laatste Nieuws", date: "2018-05-04", excerpt: "Artikel ter aankondiging van de nieuwe club - D-MON Hockey start met succes.", url: "#", category: "Oprichting", type: "article" },
];

const categoryStyles: Record<string, string> = {
  Terrein: "bg-primary/10 text-primary border-primary/20",
  Sport: "bg-primary/10 text-primary border-primary/20",
  Rechtzaak: "bg-secondary/10 text-secondary border-secondary/20",
  Subsidie: "bg-accent/15 text-accent-foreground border-accent/30",
  Talent: "bg-accent/15 text-accent-foreground border-accent/30",
  Special: "bg-secondary/10 text-secondary border-secondary/20",
  Actie: "bg-secondary/10 text-secondary border-secondary/20",
  Oprichting: "bg-primary/10 text-primary border-primary/20",
  Internationaal: "bg-accent/15 text-accent-foreground border-accent/30",
};

const Media = () => {
  const grouped = useMemo(() => {
    const map = new Map<string, Article[]>();
    [...newsArticles]
      .sort((a, b) => b.date.localeCompare(a.date))
      .forEach((a) => {
        const y = a.date.slice(0, 4);
        if (!map.has(y)) map.set(y, []);
        map.get(y)!.push(a);
      });
    return Array.from(map.entries());
  }, []);

  const totalCount = newsArticles.length;
  const publications = new Set(newsArticles.map((a) => a.publication)).size;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 30%, hsl(var(--primary-glow) / 0.6) 0%, transparent 50%), radial-gradient(circle at 85% 70%, hsl(var(--accent) / 0.4) 0%, transparent 50%)",
          }}
        />
        <div className="container relative mx-auto px-4 py-16 lg:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Persoverzicht
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-6xl">
                D-mon Hockey in de media
              </h1>
              <p className="mt-4 max-w-2xl text-base lg:text-lg text-primary-foreground/85">
                Van de eerste aankondiging tot ons eigen veld — een chronologisch overzicht van
                artikels en reportages over onze club.
              </p>
              <div className="mt-8 h-1 w-24 rounded-full bg-accent" />
            </div>
            <div className="flex gap-6 lg:gap-10">
              <div>
                <div className="font-display text-4xl font-bold lg:text-5xl">{totalCount}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
                  Artikels
                </div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold lg:text-5xl">{publications}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
                  Media
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary lg:left-1/2 lg:-translate-x-1/2" />

          {grouped.map(([year, articles]) => (
            <div key={year} className="mb-16 last:mb-0">
              {/* Year marker */}
              <div className="relative mb-10 flex items-center lg:justify-center">
                <div className="absolute left-4 -translate-x-1/2 lg:left-1/2">
                  <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                </div>
                <div className="ml-12 lg:ml-0 lg:rounded-full lg:bg-primary lg:px-6 lg:py-2">
                  <span className="font-display text-3xl font-bold text-foreground max-lg:text-primary lg:text-xl lg:text-primary-foreground">
                    {year}
                  </span>
                </div>
              </div>

              {/* Articles */}
              <div className="space-y-6">
                {articles.map((article, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div
                      key={article.id}
                      className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                        isLeft ? "" : ""
                      }`}
                    >
                      {/* Dot on the line */}
                      <div className="absolute left-4 top-6 -translate-x-1/2 lg:left-1/2">
                        <div className="h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                      </div>

                      <div
                        className={`ml-12 lg:ml-0 ${
                          isLeft ? "lg:col-start-1 lg:pr-8 lg:text-right" : "lg:col-start-2 lg:pl-8"
                        }`}
                      >
                        <article className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant lg:p-7">
                          <div
                            className={`flex flex-wrap items-center gap-3 ${
                              isLeft ? "lg:justify-end" : ""
                            }`}
                          >
                            <Badge
                              variant="outline"
                              className={`${categoryStyles[article.category] ?? "bg-muted text-muted-foreground"} text-xs font-semibold uppercase tracking-wider`}
                            >
                              {article.category}
                            </Badge>
                            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                              <Calendar className="h-3.5 w-3.5" />
                              {new Date(article.date).toLocaleDateString("nl-BE", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>

                          <h3 className="mt-4 font-display text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary lg:text-2xl">
                            {article.title}
                          </h3>

                          <div
                            className={`mt-2 flex items-center gap-2 text-sm font-medium text-primary ${
                              isLeft ? "lg:justify-end" : ""
                            }`}
                          >
                            {article.type === "tv" ? (
                              <Tv className="h-4 w-4" />
                            ) : (
                              <Newspaper className="h-4 w-4" />
                            )}
                            {article.publication}
                          </div>

                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
                            {article.excerpt}
                          </p>

                          {article.url !== "#" && (
                            <div className={`mt-5 ${isLeft ? "lg:text-right" : ""}`}>
                              <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
                              >
                                {article.type === "tv"
                                  ? "Bekijk de reportage"
                                  : "Lees het volledige artikel"}
                                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                              </a>
                            </div>
                          )}
                        </article>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-light p-10 text-primary-foreground lg:p-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
                Pers & Media
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold lg:text-3xl">
                Heb je een verhaal over onze club?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/85">
                Neem contact op met ons media team om nieuws, beeldmateriaal of een interview-aanvraag
                te delen.
              </p>
            </div>
            <a
              href="mailto:info@dmon.be"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Contacteer ons
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
