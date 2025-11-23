import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import principlesDiagram from "@/assets/hockey-principles.png";

const HockeyPrinciples = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Hockey Principes</h1>
          <p className="text-lg text-muted-foreground">
            Dit document dient als inspiratiebron en verzamelt principes en ideeën van gerespecteerde coaches en gevestigde spelmodellen. 
            Het doel is om je een rijk menu aan concepten te bieden waaruit je kunt kiezen — ze aan te passen en te combineren om ze af te stemmen 
            op de behoeften van je team, speelstijl en de specifieke uitdagingen van elke wedstrijd.
          </p>
        </div>

        {/* Principles Diagram */}
        <Card>
          <CardHeader>
            <CardTitle>Overzicht Vier Fasen van het Spel</CardTitle>
          </CardHeader>
          <CardContent>
            <img 
              src={principlesDiagram} 
              alt="Hockey Principles Diagram" 
              className="w-full h-auto rounded-lg"
            />
          </CardContent>
        </Card>

        <div className="text-muted-foreground">
          <p className="mb-4">
            Deze principes zijn georganiseerd rond de vier fasen van het spel:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Offense</strong> – Hoe we kansen creëren en omzetten wanneer we de bal hebben.</li>
            <li><strong>Defensive Transition</strong> – Hoe we reageren en herstellen direct na balverlies.</li>
            <li><strong>Defense</strong> – Hoe we ons doel beschermen en de aanval van de tegenstander verstoren.</li>
            <li><strong>Offensive Transition</strong> – Hoe we profiteren van kansen direct na het herwinnen van de bal.</li>
          </ul>
        </div>

        {/* 1. Attack Principles */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">1. Offense Principes</CardTitle>
            <CardDescription>Hoe we kansen creëren en omzetten wanneer we de bal hebben</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* A. Off-Ball Movement */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">A. Off-Ball Movement & Positioning</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Break the line</strong> – Positioneer jezelf hoger in een 2v1 om voorbij verdedigende linies te geraken.</li>
                <li><strong>Third man</strong> – Gebruik blinde-kant combinaties via een tussenpersoon om door een verdediger te geraken.</li>
                <li><strong>Post-up play</strong> – Zak af om te ontvangen voor je verdediger, geef dan de bal door naar een speler die naar voren loopt.</li>
                <li><strong>Circular runs</strong> – Loop in een boog om naar voren gericht te ontvangen.</li>
                <li><strong>V-leads</strong> – Start naar de bal om te posten, breek dan diagonaal; indien geblokkeerd, trek terug naar de andere kant.</li>
                <li><strong>Lead inside-outside</strong> – Loop naar centrale ruimte om een buitenzak te creëren, loop dan naar buiten gericht naar voren.</li>
                <li><strong>Drag players away</strong> – Loop weg in man-marking van nuttige banen om ze te openen voor teamgenoten.</li>
                <li><strong>Vital space</strong> – Maximaliseer de ontvangstruimte voor je om ruimte te hebben om te spelen.</li>
                <li><strong>Widen the field</strong> – Spreid de verdediging breed om open kanalen te creëren.</li>
                <li><strong>Double lead</strong> – Fake een loop naar één ruimte, ontvang dan in een andere.</li>
                <li><strong>Axis overload</strong> – Plaats meer spelers langs een verticale lijn dan de oppositie heeft.</li>
                <li><strong>Outnumber levels</strong> – Plaats meer spelers langs een horizontale lijn dan de oppositie heeft.</li>
              </ul>
            </div>

            <Separator />

            {/* B. Passing */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">B. Passing & Combination Play</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Give and go</strong> – Speel de bal en loop direct in een open ruimte om terug te ontvangen.</li>
                <li><strong>2v1 overload</strong> – Creëer numerieke superioriteit om een verdediger te verslaan.</li>
                <li><strong>Wall pass</strong> – Gebruik een teamgenoot als muur om een verdediger te omzeilen.</li>
                <li><strong>Switch play</strong> – Verander het aanvalspunt door breed te spelen.</li>
                <li><strong>Penetrating pass</strong> – Doorbreek verdedigende linies met een voorwaartse pass.</li>
                <li><strong>Support angles</strong> – Bied steun onder een hoek om passopties te creëren.</li>
                <li><strong>Back pass to progress</strong> – Speel terug om ruimte te creëren voor voorwaartse progressie.</li>
              </ul>
            </div>

            <Separator />

            {/* C. Ball Carrying */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">C. Ball Carrying & Decision-Making</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Speed to space</strong> – Gebruik snelheid om in open ruimte te komen.</li>
                <li><strong>Face the play</strong> – Houd je lichaam open naar het veld voor meer opties.</li>
                <li><strong>Draw and eliminate</strong> – Trek verdedigers aan en elimineer ze door te dribbelen of te passen.</li>
                <li><strong>Left foot emphasis</strong> – Gebruik je linkervoet voor betere controle en opties.</li>
                <li><strong>Protect the ball</strong> – Gebruik je lichaam om de bal te beschermen tegen druk.</li>
                <li><strong>Width-depth guard</strong> – Balanceer tussen breedte en diepte om ruimte te behouden.</li>
              </ul>
            </div>

            <Separator />

            {/* D. Finishing */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">D. Finishing & Circle Play</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Stick to stick</strong> – Speel direct naar de stick van een teamgenoot in de cirkel.</li>
                <li><strong>Prescanning</strong> – Scan voor je de cirkel binnenkomt om opties te identificeren.</li>
                <li><strong>Deflections</strong> – Gebruik deflecties om doelkansen te creëren.</li>
                <li><strong>Second touch</strong> – Zoek rebounds en tweede kansen.</li>
                <li><strong>Movement in the circle</strong> – Blijf bewegen om ruimte te vinden.</li>
              </ul>
            </div>

            <Separator />

            {/* E. Structural Concepts */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">E. Structural Concepts</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Create overloads</strong> – Creëer numerieke of positionele superioriteit.</li>
                <li><strong>Break lines</strong> – Doorbreek verdedigende linies systematisch.</li>
                <li><strong>Maintain width</strong> – Houd het veld breed om ruimte te creëren.</li>
                <li><strong>Support depth</strong> – Zorg voor diepte in je aanvalsorganisatie.</li>
                <li><strong>Rotate positions</strong> – Roteer posities om de verdediging te verwarren.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 2. Defensive Transition */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">2. Defensive Transition Principes</CardTitle>
            <CardDescription>Hoe we reageren en herstellen direct na balverlies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* A. Counter-Pressing */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">A. Immediate Reaction After Ball Loss (Counter-Pressing)</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Counter press</strong> – Zet onmiddellijk druk op de bal na verlies.</li>
                <li><strong>Block hotline</strong> – Blokkeer de directe passlijn naar de gevaarlijke ruimte.</li>
                <li><strong>Counter cover</strong> – Dek teamgenoten die drukken.</li>
                <li><strong>Protect the center</strong> – Geef prioriteit aan het beschermen van de centrale zones.</li>
              </ul>
            </div>

            <Separator />

            {/* B. Recovery */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">B. Recovery & Fallback</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Back home</strong> – Keer snel terug naar defensieve posities.</li>
                <li><strong>Behind the ball</strong> – Zorg dat je achter de bal bent voor verdedigende vorm.</li>
                <li><strong>Tackle-back</strong> – Tackle terug als je wordt verslagen.</li>
                <li><strong>Don't get eliminated</strong> – Vermijd uitgeschakeld te worden uit het verdedigen.</li>
                <li><strong>Recovery runs</strong> – Maak snelle herstelruns naar je positie.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 3. Defense */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">3. Defense Principes</CardTitle>
            <CardDescription>Hoe we ons doel beschermen en de aanval van de tegenstander verstoren</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* A. Core Defensive Mindset */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">A. Core Defensive Mindset & Shape</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Stay compact</strong> – Houd de verdedigende vorm compact.</li>
                <li><strong>Protect the center</strong> – Prioriteit aan centrale verdediging.</li>
                <li><strong>Ball and player awareness</strong> – Wees bewust van zowel de bal als spelers.</li>
                <li><strong>Communication</strong> – Communiceer constant met teamgenoten.</li>
              </ul>
            </div>

            <Separator />

            {/* B. Delaying */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">B. Delaying & Containing</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Delay and channel</strong> – Vertraag de aanval en kanaliseer naar minder gevaarlijke zones.</li>
                <li><strong>Deny</strong> – Weiger ruimte en tijd aan de tegenstander.</li>
                <li><strong>Force mistakes</strong> – Dwing de tegenstander tot fouten.</li>
                <li><strong>Jockey</strong> – Begeleid de aanvaller zonder te committeren.</li>
              </ul>
            </div>

            <Separator />

            {/* C. Pressing Triggers */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">C. Pressing Triggers & Patterns</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Press with purpose</strong> – Druk met een duidelijk doel.</li>
                <li><strong>Pressing triggers</strong> – Identificeer momenten om te drukken (slechte touch, pass naar zijkant).</li>
                <li><strong>Trap zones</strong> – Creëer zones om de bal te veroveren.</li>
                <li><strong>Coordinated pressure</strong> – Coördineer druk met het team.</li>
              </ul>
            </div>

            <Separator />

            {/* D. Marking */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">D. Marking & Individual Defending</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Move together</strong> – Beweeg als een eenheid.</li>
                <li><strong>Defensive doubles</strong> – Werk samen om aanvallers onder druk te zetten.</li>
                <li><strong>Disrupt</strong> – Verstoord aanvallende patronen.</li>
                <li><strong>Track runners</strong> – Volg spelers die bewegen.</li>
                <li><strong>1v1 defending</strong> – Wees sterk in individuele duels.</li>
              </ul>
            </div>

            <Separator />

            {/* E. Transition Preparation */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">E. Transition-Preparation During Defense</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Anticipate turnovers</strong> – Anticipeer op balverovering.</li>
                <li><strong>Position for counter</strong> – Positioneer voor counteraanval.</li>
                <li><strong>Quick thinking</strong> – Denk snel na balverovering.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 4. Offensive Transition */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">4. Offensive Transition Principes</CardTitle>
            <CardDescription>Hoe we profiteren van kansen direct na het herwinnen van de bal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* A. Immediate First Actions */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">A. Immediate First Actions</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Act fast</strong> – Handel snel na balverovering.</li>
                <li><strong>Play forward</strong> – Speel direct naar voren wanneer mogelijk.</li>
                <li><strong>Exploit disorganization</strong> – Profiteer van desorganisatie van de tegenstander.</li>
                <li><strong>Quick decision</strong> – Neem snelle beslissingen (spelen, dribbelen, of vasthouden).</li>
              </ul>
            </div>

            <Separator />

            {/* B. Structuring the Counter */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">B. Structuring the Counterattack</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Find your player</strong> – Identificeer open teamgenoten.</li>
                <li><strong>Create width and depth</strong> – Spreid het veld voor opties.</li>
                <li><strong>Escape congestion</strong> – Beweeg uit drukke zones.</li>
                <li><strong>Transfer quickly</strong> – Verplaats de bal snel over het veld.</li>
                <li><strong>Support runs</strong> – Ondersteun met forward runs.</li>
              </ul>
            </div>

            <Separator />

            {/* C. Transition Management */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">C. Transition Game Management</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Recognize the moment</strong> – Herken wanneer te counteren of te behouden.</li>
                <li><strong>Patience when needed</strong> – Wees geduldig als snelle counter niet mogelijk is.</li>
                <li><strong>Build if blocked</strong> – Bouw bezit op als counter geblokkeerd is.</li>
                <li><strong>Balance risk</strong> – Balanceer risico en beloning.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong>Belangrijke opmerking:</strong> Deze principes zijn geen regels die altijd gevolgd moeten worden; 
              ze zijn uitgangspunten voor discussie, reflectie en experimentatie. Ze kunnen helpen ideeën te genereren 
              voor trainingsontwerp, tactische aanpassingen te informeren, of gewoon een gedeelde taal te bieden bij 
              het praten over het spel.
            </p>
            <Separator className="my-4" />
            <p className="text-xs text-muted-foreground">
              <strong>Bronnen:</strong> Tactical Dillemmas (TD) en Small-sided Games (SSG) van Andreu Enrich, 
              Koninklijke Hockeybond België (KBHB), Rijn Van Eijk (RP), Javier Telechea (JT), Dane Kerry (DK) 
              en The Hockeysite (HS).
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Auteur:</strong> Geanalyseerd en samengevat door Bavo Bruylandt voor Hockey Dendermonde.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HockeyPrinciples;
