import type { ReactNode } from "react";
import { PageHero, PageCta } from "@/components/layout/PageHero";
import { Link } from "@tanstack/react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
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

const Item = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="rounded-lg bg-muted p-4">
    <h3 className="mb-1 font-semibold">{title}</h3>
    <div className="space-y-2 text-sm text-muted-foreground">{children}</div>
  </div>
);

const Section = ({ id, title, description, children }: { id: string; title: string; description?: string; children: ReactNode }) => (
  <Card id={id} className="scroll-mt-20">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {description ? <CardDescription>{description}</CardDescription> : null}
    </CardHeader>
    <CardContent className="space-y-3">{children}</CardContent>
  </Card>
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

const IndoorRules = () => (
  <>
    <PageHero label="Spelregels" title="Indoor hockey: een gids voor beginners" lead="De belangrijkste zaalregels voor spelers, ouders en beginnende scheidsrechters." />
    <div className="subnav-bar relative z-30 border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-3">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap rounded-full border px-3 py-1 text-sm font-medium hover:bg-muted">{s.label}</a>
          ))}
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl space-y-6">
        <p className="text-lg">
          Indoorhockey is de snelle zaalvariant van veldhockey. We spelen op een kleiner veld met zijbalken, maximaal zes spelers per ploeg en aangepaste spelregels. In deze gids ontdek je de belangrijkste regels, de verschillen per leeftijd en wat je als beginnende scheidsrechter zeker moet weten.
        </p>

        <Section id="algemeen" title="Algemene indoorregels">
          <img src={algemeneRegels} alt="Infographic met de algemene indoorspelregels" loading="lazy" className="mx-auto w-full max-w-xl rounded-lg shadow-md" />
          <Item title="Veld">
            <p>Standaard 44 x 22 meter, met zijbalken langs de lange zijden. Kleinere velden zijn toegelaten, met een minimum van 36 x 18 meter.</p>
          </Item>
          <Item title="Wedstrijdduur">
            <ul className="list-disc space-y-1 pl-5">
              <li>U7-U12: 4 x 10 minuten</li>
              <li>U14-U19: 4 x 15 minuten</li>
              <li>Eredivisie dames en heren: 4 x 10 minuten</li>
              <li>Overige reguliere competities: doorgaans 4 x 15 minuten</li>
              <li>Gents, Ladies en Fun League: 30 minuten</li>
            </ul>
            <p>Pauzes: 1 minuut tussen kwart 1 en 2 en tussen kwart 3 en 4, 3 minuten bij de rust.</p>
          </Item>
          <Item title="Spelers en wissels">
            <p>Maximaal 6 spelers op het veld en 12 op het wedstrijdblad. Wisselen mag op elk moment, behalve tijdens een strafcorner, via de wisselzone bij de middenlijn zonder het spel stil te leggen.</p>
          </Item>
          <Item title="Uitrusting">
            <p>Indoorstick, scheenbeschermers, mondbescherming, volledig beschermende handschoen en indoorschoenen die geen strepen achterlaten.</p>
            <p>Voor U7 en U8 gelden bijzondere bepalingen. Een indoorstick en volledig beschermende handschoen zijn voor deze categorieën aanbevolen; indoorschoenen en mondbescherming zijn verplicht. Raadpleeg de jeugdregels voor de precieze verplichtingen.</p>
          </Item>
        </Section>

        <Section id="verschillen" title="De vijf grootste verschillen met outdoor">
          <Item title="1. Pushen, niet slaan">
            <p>In indoorhockey wordt de bal met een push gespeeld. Slaan, flatsen en slapshots zijn verboden. De bal mag niet opzettelijk omhoog gespeeld worden, behalve bij een toegelaten schot op doel. Een hoge pass met een flick of scoop is dus niet toegestaan. Bij U7-U9 zijn hoge ballen helemaal niet toegestaan.</p>
          </Item>
          <Item title="2. De zijbalk, maar niet afhouden">
            <p>De zijbalk mag gebruikt worden om te passen. Je mag echter je lichaam of stick niet gebruiken om een tegenstander die de bal reglementair kan spelen af te houden. Dat geldt ook wanneer de bal bij de zijbalk wordt vastgezet.</p>
          </Item>
          <Item title="3. Niet liggend spelen">
            <p>Je mag de bal niet spelen wanneer je op de grond ligt of met een knie, arm of vrije hand de grond raakt. Tijdens het spelen van de bal zijn dus maximaal twee steunpunten toegestaan.</p>
          </Item>
          <Item title="4. Bal tegen de voet">
            <p>Niet ieder balcontact met een voet is een fout. Een veldspeler wordt bestraft wanneer hij er voordeel uit haalt of zijn lichaam bewust gebruikt om de bal tegen te houden.</p>
          </Item>
          <Item title="5. Forcing">
            <p>Forcing ontstaat bijvoorbeeld wanneer een aanvaller de bal opzettelijk hard richting een laag verdedigende speler speelt, met gevaar voor blessures. De scheidsrechter beoordeelt het gevaar en de bedoeling van de actie. Er geldt geen vaste 3-meterregel.</p>
          </Item>
        </Section>

        <Section id="straffen" title="Spelhervattingen en straffen">
          <Item title="Vrije slag">
            <p>De meest voorkomende straf. De bal wordt gepusht vanaf de plek van de overtreding; tegenstanders houden 3 meter afstand.</p>
            <p>Op de aanvallende helft mag een vrije slag niet rechtstreeks de cirkel in. De bal moet eerst minstens 3 meter verplaatst zijn of door een verdediger zijn aangeraakt. Ook bij een pass via de zijbalk gelden specifieke voorwaarden. Bij U7-U9 mag de bal bij de voorgeschreven vrije slag wel rechtstreeks de scoorzone of cirkel in.</p>
          </Item>
          <Item title="Bal over de zijbalk">
            <p>Gaat de bal over de zijbalk, dan hervat de tegenpartij het spel binnen 1 meter van de plaats waar de bal over de balk ging. Vlak bij de cirkel geldt een aangepaste plaats voor de hervatting.</p>
          </Item>
          <Item title="Strafcorner (PC)">
            <p>Wordt onder andere toegekend bij een overtreding van een verdediger in de eigen cirkel wanneer daardoor geen waarschijnlijk doelpunt wordt voorkomen, bij een opzettelijke overtreding door een verdediger buiten de cirkel op de eigen helft, of wanneer een verdediger de bal opzettelijk over de achterlijn speelt.</p>
            <p>Er kan pas gescoord worden nadat de bal eerst buiten de cirkel is geweest. Bij U7-U9 worden geen strafcorners genomen; U10 en U11/U12 hebben een aangepaste opstelling.</p>
          </Item>
          <Item title="Strafbal (stroke)">
            <p>Toegekend wanneer een verdediger met een overtreding een waarschijnlijk doelpunt voorkomt. Een aanvaller neemt het vanaf de strafbalstip tegen de keeper.</p>
          </Item>
          <Item title="Keeper">
            <p>Binnen de eigen cirkel heeft een volledig uitgeruste keeper bijzondere rechten om de bal te stoppen en weg te spelen. Buiten de cirkel mag de keeper de bal uitsluitend met de stick spelen. Een volledig uitgeruste keeper mag niet deelnemen aan het spel op de helft van de tegenstander, behalve om zelf een strafbal te nemen. Bij U9 speelt de keeper zonder stick.</p>
          </Item>
          <Item title="Kaarten">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Groen:</strong> 1 minuut tijdelijke uitsluiting.</li>
              <li><strong>Geel:</strong> minstens 2 minuten tijdelijke uitsluiting.</li>
              <li><strong>Rood:</strong> definitieve uitsluiting voor de rest van de wedstrijd.</li>
            </ul>
            <p>In al die gevallen speelt het team met een speler minder.</p>
          </Item>
        </Section>

        <Section id="jeugd" title="Jeugdregels per leeftijd" description="Het overzicht staat in de infographic; hieronder enkel wat je vooral moet onthouden.">
          <img src={jeugdRegels} alt="Infographic met de indoor jeugdregels per leeftijd, inclusief strafcorners" loading="lazy" className="mx-auto w-full max-w-xl rounded-lg shadow-md" />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Leeftijd</th>
                  <th className="border border-border p-3 text-left">Wat vooral onthouden?</th>
                </tr>
              </thead>
              <tbody>
                {youth.map(([age, note]) => (
                  <tr key={age}>
                    <td className="border border-border p-3 font-semibold">{age}</td>
                    <td className="border border-border p-3">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Item title="Theoretisch indoor-examen">
            <p>Vanaf U9 is het theoretische indoor-examen voor scheidsrechters verplicht. Voor U7 en U8 is dit niet verplicht.</p>
          </Item>
        </Section>

        <Section id="voorbeelden" title="Praktijkvoorbeelden voor beginnende scheidsrechters">
          {examples.map(([q, a]) => (
            <Item key={q} title={q}><p>{a}</p></Item>
          ))}
        </Section>

        <Section id="fluiten" title="Zelf indoorwedstrijden fluiten bij D-mon">
          <p className="text-sm">Registreer je als scheidsrechter. Dan krijg je toegang tot onder andere Drillster voor het theoretisch examen en zetten we je mee op het wedstrijdblad.</p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="https://app.twizzit.com/v2/public/form/cea9e8831bead08352918535621cd399" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Registreer via Twizzit <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </Section>

        <Section id="documenten" title="Officiële reglementen" description="Voor wie verder wil lezen, bij Hockey Belgium.">
          <div className="space-y-2">
            <Button asChild variant="outline" className="w-full justify-start">
              <a href="https://hockey.be/nl/officials-division/spelregels-indoor/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" /> Spelregels indoor (algemeen, U7-U12 en U14-U19)
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <a href="https://hockey.be/nl/hockey-vlaanderen/hockey-academy/umpire-academy/start-to-umpire-indoor/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" /> Start to Umpire: Indoor
              </a>
            </Button>
          </div>
        </Section>
      </div>
    </div>

    <PageCta title="Twijfel je over een regel?" text="Vraag het aan onze regels assistent of bekijk het overzicht." actions={<Button asChild size="lg" variant="secondary" className="font-semibold"><Link to="/sportief/regels-assistent">Naar de assistent</Link></Button>} />
  </>
);

export default IndoorRules;
