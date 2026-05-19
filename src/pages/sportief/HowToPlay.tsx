import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Play,
  Shield,
  Target,
  Heart,
  ExternalLink,
  ArrowRight,
  PlayCircle,
  Sparkles,
  Award,
  Smile,
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "regels", label: "Basisregels" },
  { id: "video", label: "Video" },
  { id: "uitrusting", label: "Uitrusting" },
  { id: "veld", label: "Veld & posities" },
  { id: "principes", label: "Principes" },
  { id: "technieken", label: "Technieken" },
  { id: "spelvormen", label: "Spelvormen" },
  { id: "waarom", label: "Waarom hockey" },
];

const basicRules = [
  { title: "Doel van het spel", text: "Twee teams proberen meer doelpunten te maken door de bal met de platte kant van de stick in het doel te spelen." },
  { title: "Teams", text: "Bij jeugd vaak in kleinere formaties (3, 6 of 8 tegen 8), bij senioren 11 tegen 11." },
  { title: "Het veld", text: "91,4 m × 55 m, met aan beide kanten een cirkel waaruit alleen gescoord mag worden." },
  { title: "De bal", text: "Hard en kunststof, alleen speelbaar met de platte kant van de stick." },
  { title: "Regels", text: "Geen gevaarlijk spel, geen voetfouten, hoge ballen alleen als het veilig is." },
  { title: "Fair play", text: "Respect tussen spelers, scheidsrechters en supporters is altijd de norm." },
];

const equipment = [
  { title: "Stick", text: "Tot net onder de navel, platte kant speelbaar." },
  { title: "Bal", text: "Hard, klein en licht gekleurd." },
  { title: "Bescherming", text: "Bitje (verplicht), scheenbeschermers (sterk aanbevolen), handschoen (optioneel), keeperuitrusting voor doelmannen." },
  { title: "Kleding", text: "Clubtenue met shirt, short/rok en kousen. Kunstgrasschoenen voor grip." },
];

const playFormats = [
  { age: "U7–U8", text: "3v3, 1/8ste veld, zonder keeper" },
  { age: "U9", text: "6v6, 1/4de veld, vaak met keeper" },
  { age: "U10–U12", text: "8v8, groter veld, meer posities" },
  { age: "U14 en ouder", text: "11v11, volledig veld" },
];

const reasons = [
  { icon: Users, title: "Teamgevoel", text: "Samen trainen, samen winnen." },
  { icon: Target, title: "Techniek & inzicht", text: "Balgevoel én tactisch denken." },
  { icon: Sparkles, title: "Fysiek", text: "Complete work-out voor het hele lichaam." },
  { icon: Award, title: "Respect", text: "Fair play staat centraal." },
  { icon: Heart, title: "Levenslang", text: "Hockey blijft leuk, van 5 tot 75." },
  { icon: Smile, title: "Plezier", text: "Vrienden maken en samen lachen." },
];

const HowToPlay = () => {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
              Start met hockey
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hoe speel je hockey?
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-3xl mx-auto">
              Hockey is een snelle, technische en vooral ontzettend leuke teamsport op kunstgras.
              Twee ploegen proberen de bal in elkaars doel te krijgen door slim samen te spelen.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild variant="secondary">
                <Link to="/lidmaatschap/info">Word lid</Link>
              </Button>
              <Button variant="outline" asChild className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/sportief/hockey-principes">
                  Hockey principes <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border/60">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md whitespace-nowrap transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Intro */}
          <section id="intro" className="scroll-mt-24">
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Een sport voor iedereen</h2>
                <p className="text-muted-foreground">
                  Hockey is in België enorm populair en onze nationale teams – de <strong>Red Lions</strong> en{" "}
                  <strong>Red Panthers</strong> – behoren tot de wereldtop.
                </p>
                <p className="text-muted-foreground">
                  Het mooiste aan hockey vind je niet alleen op het hoogste niveau: het is een sport voor alle
                  leeftijden, van 5 tot 75 jaar. Iedereen kan het leren.
                </p>
              </div>
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Bij D-mon staat centraal</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { icon: Smile, label: "Plezier" },
                      { icon: Users, label: "Teamgevoel" },
                      { icon: Award, label: "Fair play" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex flex-col items-center text-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Of je nu fitter wilt worden, nieuwe vrienden wilt maken of droomt van tophockey — er is altijd een plek voor jou.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Basisregels */}
          <section id="regels" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Basisregels</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {basicRules.map((r) => (
                <Card key={r.title} className="border-border/60 bg-card">
                  <CardContent className="p-5">
                    <h4 className="font-semibold mb-2">{r.title}</h4>
                    <p className="text-sm text-muted-foreground">{r.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Video */}
          <section id="video" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <Play className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Hockey in 1 video</h2>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-border/60 shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/p8OF9JyiBC0"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
                title="Basisregels hockey"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Bron: Hockey Belgium</p>
          </section>

          {/* Uitrusting */}
          <section id="uitrusting" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Uitrusting & veiligheid</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {equipment.map((e) => (
                <Card key={e.title} className="border-border/60 bg-card">
                  <CardContent className="p-5 flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{e.title}</h4>
                      <p className="text-sm text-muted-foreground">{e.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Veld & posities */}
          <section id="veld" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Het veld & de posities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/60">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Veldafmetingen</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">Afmetingen:</strong> 91,4 m × 55 m</li>
                    <li><strong className="text-foreground">Cirkel:</strong> halfronde lijn voor het doel – alleen van hieruit scoren</li>
                    <li><strong className="text-foreground">23-meterlijnen:</strong> belangrijk bij spelhervattingen</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Posities</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {["Keeper", "Verdedigers", "Middenvelders", "Aanvallers"].map((p) => (
                      <div key={p} className="bg-muted/50 p-3 rounded-md font-medium">{p}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Principes (link card) */}
          <section id="principes" className="scroll-mt-24">
            <Link to="/sportief/hockey-principes">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-0.5 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Hockey Principes</h3>
                      <p className="text-muted-foreground text-sm">
                        De vier fasen: Offense, Defensive Transition, Defense en Offensive Transition.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-primary flex-shrink-0" />
                </CardContent>
              </Card>
            </Link>
          </section>

          {/* Technieken */}
          <section id="technieken" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <PlayCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Technieken</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-5 justify-start" asChild>
                <a
                  href="https://docs.google.com/presentation/d/1EHJzdGfRRBGcnwlDCafCR-YrQ1HAUviS/edit?usp=drive_link&ouid=115910454372893949468&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <PlayCircle className="h-4 w-4" />
                      <span className="font-medium">Tackling & dribbling</span>
                      <ExternalLink className="h-3 w-3 ml-auto" />
                    </div>
                    <p className="text-xs text-muted-foreground">Verdediging en balcontrole</p>
                  </div>
                </a>
              </Button>
              <Button variant="outline" className="h-auto p-5 justify-start" asChild>
                <a
                  href="https://docs.google.com/presentation/d/1cioswx4jL4AMpXzzaSs6Y-okl302Twm6/edit?usp=sharing&ouid=115910454372893949468&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <PlayCircle className="h-4 w-4" />
                      <span className="font-medium">Passing, receiving & scoring</span>
                      <ExternalLink className="h-3 w-3 ml-auto" />
                    </div>
                    <p className="text-xs text-muted-foreground">Aanvallende technieken</p>
                  </div>
                </a>
              </Button>
            </div>
          </section>

          {/* Spelvormen */}
          <section id="spelvormen" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Spelvormen per leeftijd</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {playFormats.map((f) => (
                <Card key={f.age} className="border-border/60 bg-card">
                  <CardContent className="p-5">
                    <div className="text-2xl font-bold text-primary mb-1">{f.age}</div>
                    <p className="text-sm text-muted-foreground">{f.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Waarom hockey */}
          <section id="waarom" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Waarom hockey?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reasons.map(({ icon: Icon, title, text }) => (
                <Card key={title} className="border-border/60 bg-card">
                  <CardContent className="p-5">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-1">{title}</h4>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section>
            <Card className="bg-gradient-to-br from-primary to-primary/80 border-0 text-primary-foreground overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Zin om te starten met hockey?</h2>
                <p className="opacity-90 mb-6 max-w-2xl mx-auto">
                  Kom een gratis proeftraining meedoen of word meteen lid. Meer info voor coaches en trainers vind je in onze coaches sectie.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button variant="secondary" asChild>
                    <Link to="/lidmaatschap/info">Word lid</Link>
                  </Button>
                  <Button variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <Link to="/sportief/coaches-info">
                      <ExternalLink className="h-4 w-4 mr-2" /> Info voor coaches
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
