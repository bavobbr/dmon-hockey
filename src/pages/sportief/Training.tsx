import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Download,
  Users,
  Trophy,
  Mail,
  Sparkles,
  ArrowRight,
  FileText,
  ExternalLink,
  GraduationCap,
  Dumbbell,
  CalendarDays,
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Training = () => {
  const trainingGroups = [
    {
      title: "Jongste spelers & G-hockey",
      description: "Onze jongste spelers (U6) en G-hockeyspelers",
      frequency: "1 training per week",
      focus: "Spelplezier en kennismaking met hockey",
      icon: Users,
    },
    {
      title: "Andere jeugdteams",
      description: "Alle andere jeugdcategorieën",
      frequency: "2 trainingen per week",
      focus: "Techniek, spelinzicht en fysiek",
      icon: GraduationCap,
    },
    {
      title: "Senioren",
      description: "Dames & Heren competitieteams",
      frequency: "2 trainingen per week",
      focus: "Techniek, spelinzicht en fysiek",
      icon: Trophy,
    },
    {
      title: "Trimmers / Gents",
      description: "Startende volwassenen en 35+ spelers",
      frequency: "1 langere training per week",
      focus: "Recreatief en sociaal hockey",
      icon: Dumbbell,
    },
  ];

  const matchSchedule = [
    {
      group: "Jeugd",
      day: "Zaterdag",
      note: "Eén week thuis, één week op verplaatsing",
    },
    {
      group: "Volwassenen",
      day: "Zondag",
      note: "Heren en Dames teams",
    },
    {
      group: "Gents",
      day: "Maandag",
      note: "35+ categorie",
    },
  ];

  const sections = [
    { id: "schema", label: "Schema" },
    { id: "groepen", label: "Trainingsgroepen" },
    { id: "wedstrijden", label: "Wedstrijden" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, hsl(var(--primary-glow) / 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.4) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Seizoen 2025–2026
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-6xl">
              Trainingen
            </h1>
            <p className="mt-4 max-w-2xl text-base lg:text-lg text-primary-foreground/85">
              Van U6 tot Gents — elk team traint op zijn eigen niveau en ritme. Ontdek de
              trainingsmomenten, wedstrijddagen en download het volledige schema.
            </p>
            <div className="mt-8 h-1 w-24 rounded-full bg-accent" />

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" className="font-semibold" asChild>
                <a
                  href="https://static.twizzit.com/public/v2/chat/message/attachment/3210422/f72e69c96d253fcdc03611b7dc769262d0fd5f8b.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download trainingsschema
                </a>
              </Button>
              <RouterLink to="/lidmaatschap/info">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Lid worden
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </RouterLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-primary-foreground/85">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="font-semibold text-primary-foreground">4</span>
                <span>trainingsgroepen</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="font-semibold text-primary-foreground">Za, zo & ma</span>
                <span>wedstrijddagen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <div className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container mx-auto flex gap-2 overflow-x-auto px-4 py-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap rounded-full border border-border/60 bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl space-y-16 px-4 py-12 lg:space-y-24 lg:py-16">
        {/* Schema download */}
        <section id="schema" className="scroll-mt-20">
          <div className="grid items-center gap-6 rounded-2xl border border-border/60 bg-primary/5 p-6 lg:grid-cols-[1fr_auto] lg:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <CalendarDays className="h-6 w-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  <FileText className="h-3.5 w-3.5" />
                  Trainingsschema 2025–2026
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold text-foreground lg:text-3xl">
                  Volledig schema in één PDF
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tijden, velden en groepen — alles overzichtelijk per team.
                </p>
              </div>
            </div>
            <Button asChild className="shrink-0">
              <a
                href="https://static.twizzit.com/public/v2/chat/message/attachment/3210422/f72e69c96d253fcdc03611b7dc769262d0fd5f8b.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download PDF
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </section>

        {/* Trainingsgroepen */}
        <section id="groepen" className="scroll-mt-20">
          <div className="mb-8">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Users className="h-3.5 w-3.5" />
              Trainingsgroepen
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
              Voor elk niveau een aanpak
            </h2>
            <p className="mt-2 text-muted-foreground">
              Onze jeugd- en volwassenenwerking is opgesplitst in vier groepen, elk met eigen
              trainingsmomenten en doelstellingen.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {trainingGroups.map((group) => (
              <div
                key={group.title}
                className="group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <group.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{group.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  {group.frequency}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{group.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wedstrijden */}
        <section id="wedstrijden" className="scroll-mt-20">
          <div className="mb-8">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Trophy className="h-3.5 w-3.5" />
              Wedstrijden
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
              Wanneer wordt er gespeeld?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Een overzicht van de vaste wedstrijddagen per categorie.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {matchSchedule.map((match) => (
              <div
                key={match.group}
                className="rounded-2xl border border-border/60 bg-card p-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Calendar className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{match.group}</h3>
                <p className="mt-2 font-display text-2xl font-bold text-primary">{match.day}</p>
                <p className="mt-2 text-xs text-muted-foreground">{match.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sportief Beleid */}
        <section id="sportief-beleid" className="scroll-mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8 lg:p-10">
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <FileText className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Charter
                </span>
                <h2 className="mt-1 font-display text-2xl font-bold lg:text-3xl">
                  Sportief Beleid
                </h2>
                <p className="mt-2 max-w-2xl text-foreground/80">
                  Onze sportieve visie, opleidingsplan, rol van trainers, coaches en
                  scheidsrechters en de procedures voor ploegsamenstelling.
                </p>
              </div>
              <Button asChild size="lg" className="lg:self-center">
                <a
                  href="/docs/sportief-beleid-dmon.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </section>


        {/* Contact CTA */}
        <section id="contact" className="scroll-mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-primary-foreground lg:p-12">
            <div
              className="absolute inset-0 opacity-30"
              aria-hidden
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 20%, hsl(var(--primary-glow) / 0.6) 0%, transparent 50%)",
              }}
            />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl font-bold lg:text-3xl">
                  Zin om mee te trainen?
                </h2>
                <p className="mt-3 text-primary-foreground/85">
                  Lees meer over lid worden of stuur ons gerust een mailtje — we helpen je graag op
                  weg.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <RouterLink to="/lidmaatschap/info">
                  <Button size="lg" variant="secondary" className="font-semibold">
                    Lid worden
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </RouterLink>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  asChild
                >
                  <a href="mailto:info@dmon.be">
                    <Mail className="mr-2 h-4 w-4" />
                    info@dmon.be
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Training;
