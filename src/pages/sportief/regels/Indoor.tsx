import type { ReactNode } from "react";
import { PageHero, PageCta } from "@/components/layout/PageHero";
import { Link } from "@tanstack/react-router";
import { ExternalLink, ZoomIn, Ruler, Timer, Users, Shield, BookOpen, Repeat, Gavel, Baby, MessageCircleQuestion, Megaphone, FileText, ArrowRight, Hand, Footprints, AlertTriangle, MoveHorizontal, CircleDot, Flag, Square, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const algemeneRegels = "/images/indoor/algemene-spelregels.webp";
const jeugdRegels = "/images/indoor/jeugdregels.webp";

const sections = [
  { id: "algemeen", label: "Algemene regels" },
  { id: "verschillen", label: "Verschillen met outdoor" },
  { id: "straffen", label: "Hervattingen en straffen" },
  { id: "jeugd", label: "Jeugdregels" },
  { id: "voorbeelden", label: "Praktijkvoorbeelden" },
  { id: "fluiten", label: "Zelf fluiten" },
  { id: "documenten", label: "Officiële documenten" },
];

const Item = ({ title, icon: Icon, children }: { title: string; icon?: LucideIcon; children: ReactNode }) => (
  <div className="group rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
    <div className="mb-3 flex items-center gap-3">
      {Icon ? (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
      ) : null}
      <h3 className="font-sans text-base font-semibold text-foreground">{title}</h3>
    </div>
    <div className="space-y-2 text-sm text-muted-foreground">{children}</div>
  </div>
);

const Section = ({ id, kicker, icon: Icon, title, description, children }: { id: string; kicker: string; icon: LucideIcon; title: string; description?: string; children: ReactNode }) => (
  <section id={id} className="scroll-mt-20">
    <div className="mb-8">
      <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
        <Icon className="h-3.5 w-3.5" />
        {kicker}
      </div>
      <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">{title}</h2>
      {description ? <p className="mt-2 max-w-3xl text-muted-foreground">{description}</p> : null}
    </div>
    {children}
  </section>
);

const Infographic = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <a href={src} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-lg">
    <img src={src} alt={alt} loading="lazy" className="w-full transition-transform duration-500 group-hover:scale-[1.02]" />
    <div className="flex items-center justify-between gap-2 border-t border-border/60 px-4 py-3 text-sm">
      <span className="font-medium text-foreground">{caption}</span>
      <span className="inline-flex items-center gap-1 text-primary">Vergroot <ZoomIn className="h-4 w-4" /></span>
    </div>
  </a>
);

const youth: [string, string][] = [
  ["U7", "3 spelers, half veld, geen keeper"],
  ["U8", "6 spelers, half veld, geen keeper"],
  ["U9", "Verplichte keeper zonder stick; geen strafcorner, wel strafbal"],
  ["U10", "Keeper met stick; strafcorners ingevoerd"],
  ["U11/U12", "Keeper met stick; andere verdedigingsopstelling bij de strafcorner dan U10"],
  ["U14-U19", "In grote lijnen de normale indoorregels"],
];

const examples: [string, string][] = [
  ["De bal raakt toevallig een voet. Fluiten of doorspelen?", "Doorspelen, tenzij de speler er voordeel uit haalt of de voet bewust gebruikt om de bal tegen te houden. Je beoordeelt de situatie, niet alleen het contact."],
  ["Een aanvaller speelt een hoge bal richting een verdediger.", "Fluiten. De bal mag niet opzettelijk omhoog gespeeld worden, behalve bij een toegelaten schot op doel. Is het gevaarlijk, dan kan ook een kaart volgen."],
  ["Een speler raakt met de knie de grond terwijl hij de bal speelt.", "Overtreding. Wie de bal speelt, mag niet met knie, arm of vrije hand de grond raken. De tegenpartij krijgt een vrije slag."],
  ["Op de aanvallende helft wordt een vrije slag genomen en meteen de cirkel in gespeeld.", "Niet toegestaan. De bal moet eerst minstens 3 meter verplaatst zijn of door een verdediger aangeraakt. Uitzondering: bij U7-U9 mag de bal wel rechtstreeks de cirkel in."],
  ["Een verdediger speelt de bal bewust over de eigen achterlijn.", "Strafcorner voor de aanvallers (niet bij U7-U9, daar worden geen strafcorners genomen)."],
];

const differences: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Pushen, niet slaan", icon: Hand, text: "De bal wordt gepusht. Slaan, flatsen en slapshots zijn verboden. Niet opzettelijk hoog spelen, behalve bij een toegelaten schot op doel; een hoge pass met flick of scoop mag dus niet. Bij U7-U9 zijn hoge ballen helemaal verboden." },
  { title: "De zijbalk, maar niet afhouden", icon: MoveHorizontal, text: "Je mag de zijbalk gebruiken om te passen, maar je lichaam of stick niet om een tegenstander af te houden, ook niet als de bal bij de zijbalk wordt vastgezet." },
  { title: "Niet liggend spelen", icon: AlertTriangle, text: "Niet spelen terwijl je op de grond ligt of met knie, arm of vrije hand de grond raakt. Maximaal twee steunpunten tijdens het spelen van de bal." },
  { title: "Bal tegen de voet", icon: Footprints, text: "Niet elk voetcontact is fout. Je wordt bestraft als je er voordeel uit haalt of je lichaam bewust gebruikt om de bal tegen te houden." },
  { title: "Forcing", icon: Shield, text: "Bijvoorbeeld de bal opzettelijk hard richting een laag verdedigende speler spelen, met blessuregevaar. De scheidsrechter beoordeelt gevaar en bedoeling; er is geen vaste 3-meterregel." },
];

const cards = [
  { label: "Groen", time: "1 min", cls: "bg-card-green" },
  { label: "Geel", time: "min. 2 min", cls: "bg-card-yellow" },
  { label: "Rood", time: "definitief", cls: "bg-destructive" },
];

const docs = [
  { href: "https://hockey.be/nl/officials-division/spelregels-indoor/", title: "Spelregels indoor", text: "Algemeen, U7-U12 en U14-U19" },
  { href: "https://hockey.be/nl/hockey-vlaanderen/hockey-academy/umpire-academy/start-to-umpire-indoor/", title: "Start to Umpire: Indoor", text: "Opleiding voor nieuwe scheidsrechters" },
];

const IndoorRules = () => (
  <>
    <PageHero label="Spelregels" title="Indoor hockey: een gids voor beginners" lead="De belangrijkste zaalregels voor spelers, ouders en beginnende scheidsrechters." />
    <div className="subnav-bar z-20 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-3">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap rounded-full border border-border/60 bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground">{s.label}</a>
          ))}
        </div>
      </div>
    </div>

    <div className="container mx-auto max-w-6xl space-y-16 px-4 py-12 lg:space-y-24 lg:py-16">
      <div className="grid items-center gap-6 rounded-2xl border border-border/60 bg-primary/5 p-6 lg:grid-cols-[auto_1fr] lg:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><BookOpen className="h-6 w-6" /></div>
        <p className="text-lg text-foreground/90">
          Indoorhockey is de snelle zaalvariant van veldhockey. We spelen op een kleiner veld met zijbalken, maximaal zes spelers per ploeg en aangepaste spelregels. Hier vind je de belangrijkste regels, de verschillen per leeftijd en wat je als beginnende scheidsrechter zeker moet weten.
        </p>
      </div>

      <Section id="algemeen" kicker="Algemene regels" icon={BookOpen} title="De basis van indoor" description="Alles op één blad in de infographic; de details vind je ernaast.">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <Infographic src={algemeneRegels} alt="Infographic met de algemene indoorspelregels" caption="Algemene spelregels" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Item title="Veld" icon={Ruler}>
              <p className="font-display text-2xl font-bold text-primary">44 x 22 m</p>
              <p>Met zijbalken langs de lange zijden. Minimum 36 x 18 meter.</p>
            </Item>
            <Item title="Spelers en wissels" icon={Users}>
              <p className="font-display text-2xl font-bold text-primary">6 + 6</p>
              <p>Maximaal 6 spelers op het veld en 12 op het wedstrijdblad. Wisselen mag altijd via de wisselzone bij de middenlijn, behalve tijdens een strafcorner.</p>
            </Item>
            <Item title="Wedstrijdduur" icon={Timer}>
              <ul className="space-y-1">
                <li><strong className="text-foreground">U7-U12:</strong> 4 x 10 min</li>
                <li><strong className="text-foreground">U14-U19:</strong> 4 x 15 min</li>
                <li><strong className="text-foreground">Eredivisie:</strong> 4 x 10 min</li>
                <li><strong className="text-foreground">Overige competities:</strong> doorgaans 4 x 15 min</li>
                <li><strong className="text-foreground">Gents, Ladies, Fun League:</strong> 30 min</li>
              </ul>
              <p>Pauzes: 1 minuut tussen kwart 1-2 en 3-4, 3 minuten bij de rust.</p>
            </Item>
            <Item title="Uitrusting" icon={Shield}>
              <p>Indoorstick, scheenbeschermers, mondbescherming, volledig beschermende handschoen en indoorschoenen die geen strepen achterlaten.</p>
              <p>U7 en U8: indoorschoenen en mondbescherming verplicht; indoorstick en handschoen aanbevolen.</p>
            </Item>
          </div>
        </div>
      </Section>

      <Section id="verschillen" kicker="Verschillen met outdoor" icon={Repeat} title="De vijf grootste verschillen" description="Kom je van het veld? Dit zijn de regels waar nieuwe indoorspelers het vaakst over struikelen.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {differences.map((d, i) => (
            <div key={d.title} className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
              <span className="absolute right-4 top-2 font-display text-6xl font-bold text-primary/10" aria-hidden>{i + 1}</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><d.icon className="h-6 w-6" /></div>
              <h3 className="mt-4 font-sans text-base font-semibold text-foreground">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="straffen" kicker="Hervattingen en straffen" icon={Gavel} title="Wat volgt na een fout?">
        <div className="grid gap-4 md:grid-cols-2">
          <Item title="Vrije slag" icon={ArrowRight}>
            <p>De meest voorkomende straf. De bal wordt gepusht vanaf de plek van de overtreding; tegenstanders houden 3 meter afstand.</p>
            <p>Op de aanvallende helft mag een vrije slag niet rechtstreeks de cirkel in: de bal moet eerst minstens 3 meter verplaatst zijn of door een verdediger aangeraakt. Ook bij een pass via de zijbalk gelden specifieke voorwaarden. Bij U7-U9 mag de bal wel rechtstreeks de scoorzone of cirkel in.</p>
          </Item>
          <Item title="Bal over de zijbalk" icon={MoveHorizontal}>
            <p>De tegenpartij hervat binnen 1 meter van de plaats waar de bal over de balk ging. Vlak bij de cirkel geldt een aangepaste plaats.</p>
          </Item>
          <Item title="Strafcorner (PC)" icon={Flag}>
            <p>Onder andere bij een overtreding van een verdediger in de eigen cirkel die geen waarschijnlijk doelpunt voorkomt, een opzettelijke overtreding buiten de cirkel op de eigen helft, of wanneer een verdediger de bal opzettelijk over de achterlijn speelt.</p>
            <p>Scoren kan pas nadat de bal buiten de cirkel is geweest. Geen strafcorners bij U7-U9; U10 en U11/U12 hebben een aangepaste opstelling.</p>
          </Item>
          <Item title="Strafbal (stroke)" icon={CircleDot}>
            <p>Wanneer een verdediger met een overtreding een waarschijnlijk doelpunt voorkomt. Een aanvaller neemt het vanaf de strafbalstip tegen de keeper.</p>
          </Item>
          <Item title="Keeper" icon={Hand}>
            <p>Binnen de eigen cirkel heeft een volledig uitgeruste keeper bijzondere rechten. Buiten de cirkel enkel met de stick spelen. Niet meespelen op de helft van de tegenstander, behalve om zelf een strafbal te nemen. Bij U9 speelt de keeper zonder stick.</p>
          </Item>
          <Item title="Kaarten" icon={Square}>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {cards.map((c) => (
                <div key={c.label} className="rounded-xl border border-border/60 p-3 text-center">
                  <div className={`mx-auto mb-2 h-8 w-6 rounded-sm shadow-sm ${c.cls}`} />
                  <p className="font-semibold text-foreground">{c.label}</p>
                  <p className="text-xs">{c.time}</p>
                </div>
              ))}
            </div>
            <p>Het team speelt telkens met een speler minder.</p>
          </Item>
        </div>
      </Section>

      <Section id="jeugd" kicker="Jeugdregels" icon={Baby} title="Regels per leeftijd" description="Het volledige overzicht staat in de infographic; ernaast wat je vooral moet onthouden.">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <Infographic src={jeugdRegels} alt="Infographic met de indoor jeugdregels per leeftijd, inclusief strafcorners" caption="Jeugdregels en strafcorners" />
          <div className="space-y-3">
            {youth.map(([age, note]) => (
              <div key={age} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4">
                <span className="flex h-12 min-w-[4.5rem] items-center justify-center rounded-xl bg-primary px-2 font-display text-sm font-bold text-primary-foreground">{age}</span>
                <p className="text-sm text-foreground/90">{note}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-4 text-sm">
              <p className="font-semibold text-foreground">Theoretisch indoor-examen</p>
              <p className="mt-1 text-muted-foreground">Verplicht voor scheidsrechters vanaf U9; niet voor U7 en U8.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="voorbeelden" kicker="Praktijkvoorbeelden" icon={MessageCircleQuestion} title="Wat zou jij fluiten?" description="Vijf situaties die beginnende scheidsrechters vaak tegenkomen.">
        <div className="grid gap-4 md:grid-cols-2">
          {examples.map(([q, a], i) => (
            <div key={q} className="rounded-2xl border border-border/60 bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Situatie {i + 1}</p>
              <p className="mt-2 font-semibold text-foreground">{q}</p>
              <div className="mt-4 border-l-2 border-primary pl-4 text-sm text-muted-foreground">{a}</div>
            </div>
          ))}
        </div>
      </Section>

      <section id="fluiten" className="scroll-mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8 lg:p-10">
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg"><Megaphone className="h-7 w-7" /></div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Zelf fluiten</span>
              <h2 className="mt-1 font-display text-2xl font-bold lg:text-3xl">Fluit indoorwedstrijden bij D-mon</h2>
              <p className="mt-2 max-w-2xl text-foreground/80">Registreer je als scheidsrechter. Dan krijg je toegang tot Drillster voor het theoretisch examen en zetten we je mee op het wedstrijdblad.</p>
            </div>
            <Button asChild size="lg">
              <a href="https://app.twizzit.com/v2/public/form/cea9e8831bead08352918535621cd399" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Registreer via Twizzit <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Section id="documenten" kicker="Officiële documenten" icon={FileText} title="Verder lezen" description="De volledige reglementen bij Hockey Belgium.">
        <div className="grid gap-4 md:grid-cols-2">
          {docs.map((d) => (
            <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"><FileText className="h-6 w-6" /></div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{d.title}</p>
                <p className="text-sm text-muted-foreground">{d.text}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            </a>
          ))}
        </div>
      </Section>
    </div>

    <PageCta title="Twijfel je over een regel?" text="Vraag het aan onze regels assistent of bekijk het overzicht." actions={<Button asChild size="lg" variant="secondary" className="font-semibold"><Link to="/sportief/regels-assistent">Naar de assistent</Link></Button>} />
  </>
);

export default IndoorRules;
