import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Gift,
  ShoppingBag,
  Shirt,
  FileText,
  ExternalLink,
  Sparkles,
  CalendarDays,
  HeartHandshake,
  Phone,
  ClipboardCheck,
  CheckCircle2,
  Activity,
  ShieldCheck,
  Footprints,
  Smile,
  Mail,
  ArrowRight,
  Tag,
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { FaqJsonLd } from "@/components/JsonLd";

const MembershipInfo = () => {
  const membershipFees = [
    { category: "Basistarief", description: "2 trainingen + match", fee: "320" },
    { category: "U6", description: "1 training + match vanaf februari", fee: "220" },
    { category: "Dames en heren", description: "Volwassen teams", fee: "320" },
    { category: "Trimmers en Gents", description: "Oudere teams", fee: "285" },
    { category: "G-hockey", description: "Hockey voor jongeren met een beperking", fee: "195" },
  ];

  const discounts = [
    {
      type: "Gezinskorting",
      description:
        "Vanaf elke bijkomende inschrijving binnen een gezin krijg je 25 euro korting op het lidgeld.",
      icon: HeartHandshake,
    },
    {
      type: "Sociaal tarief",
      description:
        "Bij financiële moeilijkheden kan je een beroep doen op een sociaal tarief via de Uitpas Kansentarief.",
      icon: Gift,
    },
  ];

  const requiredEquipment = [
    { item: "Hockeystick", icon: Activity, note: "Geschikt voor leeftijd en niveau" },
    { item: "Beenbeschermers", icon: ShieldCheck, note: "Goed passend voor optimale bescherming" },
    { item: "Bitje", icon: Smile, note: "Verplicht voor alle spelers tijdens trainingen en matches" },
    { item: "Hockeyschoenen", icon: Footprints, note: "Antislip zolen, geschikt voor kunstgras" },
  ];

  const storeDiscounts = [
    { store: "Topsport Dendermonde", discount: "20%", note: "Mogelijk dien je je lidmaatschap aan te tonen" },
    { store: "DNA Boom", discount: "10%", note: "Voor de aankoop van hockeymateriaal" },
  ];

  const steps = [
    {
      title: "Interesse?",
      description:
        "Vul het registratieformulier in. We laten je weten of er nog plaats is in jouw categorie.",
    },
    {
      title: "Vragen of advies?",
      description:
        "Contacteer hoofdtrainer Pierre Samyn, je team manager of coach voor meer info over competitie en niveau.",
      phone: "0477 49 11 89",
    },
    {
      title: "Bevestig en betaal",
      description:
        "De penningmeester stuurt in september/oktober een uitnodiging tot betaling, samen met een mutualiteitsattest.",
    },
  ];

  const sections = [
    { id: "lidgeld", label: "Lidgeld" },
    { id: "nieuwe-leden", label: "Nieuwe leden" },
    { id: "kortingen", label: "Kortingen" },
    { id: "uitrusting", label: "Uitrusting" },
    { id: "kledij", label: "Kledij" },
  ];

  const faqs = [
    {
      question: "Hoeveel kost het lidgeld bij D-mon Hockey Club?",
      answer:
        "Het basistarief is 320 euro per seizoen (2 trainingen + match). U6 betaalt 220 euro, Trimmers en Gents 285 euro, en G-hockey 195 euro. Alles is inbegrepen: training, competitie en clubactiviteiten.",
    },
    {
      question: "Welke kortingen zijn er op het lidgeld?",
      answer:
        "Er is een gezinskorting van 25 euro per bijkomend gezinslid. Bij financiële moeilijkheden kan je beroep doen op een sociaal tarief via de Uitpas Kansentarief.",
    },
    {
      question: "Hoe schrijf ik me in bij D-mon Hockey Club?",
      answer:
        "Vul het registratieformulier in op /lidmaatschap/registratie. We laten je weten of er nog plaats is. De penningmeester stuurt in september/oktober een uitnodiging tot betaling samen met een mutualiteitsattest.",
    },
    {
      question: "Welke uitrusting heb ik nodig om te starten met hockey?",
      answer:
        "Je hebt een hockeystick nodig (geschikt voor je leeftijd en niveau), beenbeschermers, een bitje (verplicht voor alle spelers tijdens trainingen en matches) en hockeyschoenen met antislip zolen geschikt voor kunstgras.",
    },
    {
      question: "Waar koop ik de officiële wedstrijdoutfit?",
      answer:
        "De officiële outfit (T-shirt met naam, rokje of short en kousen) bestel je via de webshop van Topsport — niet in de winkel zelf. Vanaf U14 staat ook het rugnummer op het shirt.",
    },
    {
      question: "Krijgen leden korting bij sportwinkels?",
      answer:
        "Ja, leden krijgen 20% korting bij Topsport Dendermonde (mogelijk dien je je lidmaatschap aan te tonen) en 10% korting bij DNA Boom voor de aankoop van hockeymateriaal.",
    },
  ];

  return (
    <div>
      <FaqJsonLd faqs={faqs} />

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
              Word lid van D-mon
            </h1>
            <p className="mt-4 max-w-2xl text-base lg:text-lg text-primary-foreground/85">
              Van jeugd tot Gents, van eerste training tot competitie — bij D-mon Hockey vind je een plek
              op het veld. Ontdek hieronder hoe je je aansluit en wat het kost.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <RouterLink to="/lidmaatschap/registratie">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Vul registratieformulier in
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </RouterLink>
              <RouterLink to="/lidmaatschap/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Heb je een vraag?
                </Button>
              </RouterLink>
            </div>

          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <div className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full whitespace-nowrap border border-border/60 bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl space-y-16 lg:space-y-24">
        {/* Welkom + Trainingsrooster */}
        <section className="grid gap-6 lg:grid-cols-[2fr_1fr] items-start">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
              Welkom bij D-mon Hockey
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We hebben zowel een jeugd- als volwassenenwerking. Ook jongeren met een beperking zijn welkom
              in onze G-hockey-werking. Of je nu voor het eerst een stick vasthoudt of al jaren competitie
              speelt, je vindt bij ons je niveau.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-primary/5 p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <CalendarDays className="h-4 w-4" />
              Trainingsrooster
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Download het volledige rooster voor seizoen 2025–2026.
            </p>
            <Button variant="outline" size="sm" asChild className="mt-4">
              <a
                href="https://static.twizzit.com/public/v2/chat/message/attachment/3210422/f72e69c96d253fcdc03611b7dc769262d0fd5f8b.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Download PDF
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </section>

        {/* Lidgeld */}
        <section id="lidgeld" className="scroll-mt-20">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                <Tag className="h-3.5 w-3.5" />
                Tarieven
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">Lidgeld</h2>
              <p className="mt-2 text-muted-foreground">
                Eén tarief per seizoen — alles inbegrepen: training, competitie en clubactiviteiten.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {membershipFees.map((fee) => (
              <div
                key={fee.category}
                className="relative rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <h3 className="font-semibold text-foreground">{fee.category}</h3>
                <p className="mt-1 text-sm text-muted-foreground min-h-[2.5rem]">{fee.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">{fee.fee}</span>
                  <span className="text-lg font-semibold text-muted-foreground">€</span>
                  <span className="ml-1 text-sm text-muted-foreground">/ seizoen</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nieuwe leden */}
        <section id="nieuwe-leden" className="scroll-mt-20">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              <ClipboardCheck className="h-3.5 w-3.5" />
              Stappenplan
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Nieuw bij D-mon? Zo werkt het
            </h2>
          </div>

          <div className="relative grid gap-6 md:grid-cols-3">
            <div
              className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-primary/40 via-primary/40 to-primary/40"
              aria-hidden
            />
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-border/60 bg-card p-6"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-xl font-bold shadow-md">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                {step.phone && (
                  <a
                    href={`tel:${step.phone.replace(/\s/g, "")}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {step.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Kortingen */}
        <section id="kortingen" className="scroll-mt-20">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              <Gift className="h-3.5 w-3.5" />
              Toegankelijkheid
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Kortingen op het lidgeld
            </h2>
            <p className="mt-2 text-muted-foreground">
              We doen extra inspanningen zodat hockey voor iedereen bereikbaar blijft.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {discounts.map((discount) => (
              <div
                key={discount.type}
                className="rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <discount.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{discount.type}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{discount.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border-l-4 border-primary bg-muted/50 p-5">
            <p className="text-sm text-foreground">
              <strong className="font-semibold">Betalingsinformatie.</strong>{" "}
              De uitnodiging tot betaling volgt via de penningmeester in september/oktober, samen met een
              attest voor het ziekenfonds. Vragen over betaling of attesten?{" "}
              <a
                href="mailto:penningmeester@dmon.be"
                className="font-medium text-primary underline hover:no-underline"
              >
                penningmeester@dmon.be
              </a>
              .
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Voor vragen over het sociaal tarief:{" "}
              <a href="mailto:info@dmon.be" className="font-medium text-primary underline hover:no-underline">
                info@dmon.be
              </a>
              .
            </p>
          </div>
        </section>

        {/* Uitrusting */}
        <section id="uitrusting" className="scroll-mt-20">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              <ShoppingBag className="h-3.5 w-3.5" />
              Checklist
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Wat heb je nodig om te starten?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Vier essentiële zaken om veilig en comfortabel te kunnen trainen.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {requiredEquipment.map((item) => (
              <div
                key={item.item}
                className="group rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{item.item}</h3>
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-border/60 bg-primary/5 p-6">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground">Onthaalbrochure voor nieuwe leden</h3>
                <p className="text-sm text-muted-foreground">
                  Uitgebreide info over de club, werking en praktische zaken.
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild className="shrink-0">
              <a
                href="https://drive.google.com/file/d/16o-P8Lf5ulHMuVvUnD3BLlYw8IMH_ste/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Download PDF
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </section>

        {/* Kledij */}
        <section id="kledij" className="scroll-mt-20">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              <Shirt className="h-3.5 w-3.5" />
              Outfit
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Wedstrijdoutfit & clubkledij
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Shirt className="h-4 w-4 text-primary" />
                Wedstrijdoutfit
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                De officiële outfit bestaat uit een T-shirt met je naam (rugnummer vanaf U14), rokje of short
                en kousen. Te bestellen via de webshop van Topsport — niet in de winkel zelf.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Hoodies, regenjassen en andere clubkledij zijn optioneel en bestelbaar via dezelfde link.
              </p>
              <Button size="sm" asChild className="mt-5">
                <a
                  href="https://topsport-clubs.be/collections/d-mon-hockey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Bestellen via Topsport
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary" />
                Kortingen bij winkels
              </h3>
              <div className="mt-4 space-y-3">
                {storeDiscounts.map((store) => (
                  <div
                    key={store.store}
                    className="flex items-start justify-between gap-3 rounded-xl border border-border/60 bg-background p-4"
                  >
                    <div>
                      <h4 className="font-medium text-foreground">{store.store}</h4>
                      <p className="text-sm text-muted-foreground">{store.note}</p>
                    </div>
                    <Badge variant="secondary" className="shrink-0 bg-primary/10 text-primary border-primary/20">
                      {store.discount}
                    </Badge>
                  </div>
                ))}
              </div>
              <RouterLink to="/shop" className="mt-5 inline-block">
                <Button variant="outline" size="sm">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Bezoek club shop
                </Button>
              </RouterLink>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-light p-8 lg:p-14 text-primary-foreground">
          <div
            className="absolute inset-0 opacity-20"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.6) 0%, transparent 50%)",
            }}
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
              Klaar om de stick op te pikken?
            </h2>
            <p className="mt-3 text-primary-foreground/85">
              Start vandaag je hockey-avontuur bij D-mon. Vul het registratieformulier in of stel je vraag
              — we helpen je graag verder.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <RouterLink to="/lidmaatschap/registratie">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Vul registratieformulier in
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </RouterLink>
              <RouterLink to="/lidmaatschap/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Stel een vraag
                </Button>
              </RouterLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MembershipInfo;
