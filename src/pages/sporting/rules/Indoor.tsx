import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Flag, AlertCircle, ExternalLink, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import indoorRulesTable1 from "@/assets/indoor-rules-table-1.png";
import indoorRulesTable2 from "@/assets/indoor-rules-table-2.png";

const IndoorRules = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Indoor Hockey: Een Gids voor Beginners</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
          {/* Introduction */}
          <div className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-lg">
              Welkom in de snelle en spannende wereld van het indoor hockey! Als je dit leest, sta je op het punt een dynamische zaal variant van veldhockey te ontdekken. Het spel is razendsnel en technisch, maar geen zorgen: in deze gids leggen we je de basisbeginselen op een eenvoudige en duidelijke manier uit, zodat je snel klaar bent voor je eerste wedstrijd.
            </p>
          </div>

          {/* Registration Card - Highlighted */}
          <Card className="mb-6 border-primary bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <UserCheck className="h-6 w-6" />
                Registreren
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-4">
                Wil je jezelf al registreren bij ons, zodat we je meteen toegang kunnen voorzien tot onder andere Drillster én je mee op het wedstrijdblad kunnen zetten?
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a 
                  href="https://app.twizzit.com/v2/public/form/cea9e8831bead08352918535621cd399" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Registreer via Twizzit
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Core of the Game */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flag className="h-5 w-5" />
                De kern van het spel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Net als bij veel sporten is het doel van indoorhockey simpel: meer doelpunten scoren dan de tegenstander. Het spel onderscheidt zich echter door een paar unieke kenmerken die het ongelooflijk dynamisch maken.
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Klein speelveld</h4>
                  <p className="text-sm text-muted-foreground">
                    In de zaal is het veld een stuk kleiner dan buiten. Dit zorgt voor een razendsnel spel met veel actie, snelle passes en constante betrokkenheid van alle spelers.
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Zijbalken</h4>
                  <p className="text-sm text-muted-foreground">
                    Langs de zijkanten van het veld liggen balken. De bal blijft hierdoor bijna altijd in het spel, wat de snelheid erin houdt en tactische passes mogelijk maakt.
                  </p>
                  <p className="text-sm text-primary font-medium mt-2">
                    💡 Coach's Tip: Zie de balken als een extra teamgenoot! Een slimme pass via de 'boarding' kan een verdediger compleet verrassen.
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Techniek boven kracht</h4>
                  <p className="text-sm text-muted-foreground">
                    De regels zijn ontworpen om behendigheid en slim spel te belonen. Zo is het bijvoorbeeld niet toegestaan om de bal te 'slaan'. Deze regel voorkomt chaos en gevaar in de beperkte ruimte van de zaal en dwingt je om je stickvaardigheid te ontwikkelen. De nadruk ligt dus op een goede push-techniek en balcontrole.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Basic Rules Overview */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Indoor Hockey Spelregels: De Essentie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <img 
                  src={indoorRulesTable1} 
                  alt="Indoor hockey spelregels overzicht" 
                  className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Standaard wedstrijd</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      4 periodes van 15 minuten (Ere divisie en U14-U19) of 4x10 min (U8-U12)
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Rechthoekig veld</h4>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      36-44m lang, 19-22m breed. Maximaal 12 spelers per team, 6 op het veld.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Speciale indoor stick</h4>
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      Slaan is verboden. Enkel pushen, flicken of scopen toegestaan.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team and Players */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Het team en de spelers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Een team bestaat op het veld uit maximaal zes spelers. Deze spelers hebben twee verschillende rollen: de veldspeler en de goalkeeper.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Rol</th>
                      <th className="border border-border p-3 text-left">Belangrijkste Kenmerken</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-semibold">Veldspeler</td>
                      <td className="border border-border p-3 text-sm">
                        De 'standaard' speler op het veld. Veldspelers mogen de bal alleen met de platte kant van hun stick spelen. Het is verboden de bal met de voeten of het lichaam te stoppen of voort te bewegen.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-semibold">Keeper</td>
                      <td className="border border-border p-3 text-sm">
                        De keeper draagt beschermende uitrusting (o.a. helm, legguards, klompen). Binnen de eigen cirkel mag de keeper de bal met elk deel van het lichaam stoppen of wegspelen. Buiten de cirkel gelden voor de goalkeeper dezelfde regels als voor een veldspeler.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mt-4">
                <h4 className="font-semibold mb-2">Vliegend wisselen</h4>
                <p className="text-sm">
                  Een uniek aspect van indoorhockey is het 'vliegend wisselen'. Spelers mogen op elk moment van de wedstrijd (behalve tijdens de uitvoering van een strafcorner) gewisseld worden. Dit gebeurt binnen een wisselzone van 3 meter bij de middenlijn, zonder dat het spel wordt stilgelegd. Strategisch is dit cruciaal: het stelt teams in staat om een heel hoog tempo aan te houden, omdat vermoeide spelers snel vervangen kunnen worden.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Essential Equipment */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                De essentiële uitrusting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Als coach kunnen we het niet genoeg benadrukken: veiligheid is topprioriteit en in België is de volgende uitrusting voor alle jeugdspelers dan ook verplicht:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <span className="font-bold text-primary text-lg">1.</span>
                  <div>
                    <strong>Indoorstick:</strong> Enkel indoorsticks zijn toegestaan. Deze zijn specifiek ontworpen voor het snelle en technische zaalspel en verschillen van een veldstick.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <span className="font-bold text-primary text-lg">2.</span>
                  <div>
                    <strong>Scheenbeschermers:</strong> Onmisbaar om je onderbenen te beschermen tegen ballen en sticks.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <span className="font-bold text-primary text-lg">3.</span>
                  <div>
                    <strong>Mondbeschermer (Bitje):</strong> Een absolute must om je gebit te beschermen.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <span className="font-bold text-primary text-lg">4.</span>
                  <div>
                    <strong>Volledige handbescherming:</strong> Een speciale handschoen die de hand beschermt die laag bij de grond is tijdens het spelen, en zo blessures aan vingers en knokkels voorkomt.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <span className="font-bold text-primary text-lg">5.</span>
                  <div>
                    <strong>Indoorschoenen:</strong> Schoenen met zolen die geen strepen achterlaten op de zaalvloer en goede grip bieden.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Playing Field */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Het speelveld en zijn belangrijke zones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Het indoor hockeyveld is een rechthoekig veld met een harde ondergrond. Voor een beginner zijn er drie zones die je absoluut moet kennen:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">De zijbalken</h4>
                  <p className="text-sm text-muted-foreground">
                    Dit zijn de houten of kunststof balken langs de lange zijden van het veld. Ze houden de bal niet alleen in het spel, maar je kunt ze ook slim gebruiken om de bal naar een medespeler te passen (een pass 'via de balk' of 'via de boarding' genoemd).
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">De cirkel</h4>
                  <p className="text-sm text-muted-foreground">
                    Dit is het halfronde gebied voor elk doel. De cirkel is cruciaal, want een aanvaller kan alleen een geldig doelpunt scoren als de bal vanuit de cirkel wordt gespeeld.
                  </p>
                  <p className="text-sm text-primary font-medium mt-2">
                    💡 Coach's Tip: Onthoud dit goed: de cirkel is de 'gevarenzone' waar de magie gebeurt!
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Het doel</h4>
                  <p className="text-sm text-muted-foreground">
                    Het doel is 3 meter breed en 2 meter hoog. Hier moet de bal volledig over de doellijn om als doelpunt te tellen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Playing the Ball */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>De bal spelen: Wat mag en wat mag niet?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                De manier waarop je de bal speelt, is strikt gereguleerd om het spel technisch en veilig te houden.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                    ✅ Toegestaan
                  </h4>
                  <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                    <li>• De bal pushen over de grond</li>
                    <li>• Een schot op doel waarbij de bal omhoog gaat</li>
                    <li>• De bal met de platte kant van de stick spelen</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                    ❌ Niet Toegestaan
                  </h4>
                  <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                    <li>• De bal slaan (een zwaaiende beweging maken)</li>
                    <li>• De bal opzettelijk omhoog spelen buiten een schot op doel</li>
                    <li>• De bal met de bolle kant ('backstick') van de stick spelen</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4 p-3 bg-muted rounded-lg">
                De reden voor deze regels is simpel: ze maken van indoorhockey een spel dat draait om precisie, controle en slim passen over de grond, in plaats van om harde, hoge ballen. Het dwingt spelers om hun techniek te verfijnen, wat de sport zo uitdagend en leuk maakt.
              </p>
            </CardContent>
          </Card>

          {/* Penalties */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Straffen: Gevolgen van een overtreding
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Wanneer een team nadeel ondervindt van een overtreding door de tegenstander, zal de scheidsrechter een straf toekennen. De belangrijkste straffen zijn:
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">1. De Vrije Slag</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                    <strong>Wanneer?</strong> Dit is de meest voorkomende straf voor een standaard overtreding (bijv. 'voetje' of de bal slaan).
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Wat gebeurt er?</strong> Het niet-overtredende team mag het spel hervatten met een push vanaf de plek van de overtreding. Tegenstanders moeten minimaal 3 meter afstand houden.
                  </p>
                </div>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">2. De Strafcorner</h4>
                  <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
                    <strong>Wanneer?</strong> Voor een zwaardere overtreding van een verdediger in de eigen cirkel, of een opzettelijke overtreding op de eigen helft.
                  </p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Wat gebeurt er?</strong> Dit is een grote doelkans. Een aanvaller pusht de bal vanaf de achterlijn naar teamgenoten die buiten de cirkel wachten. De verdedigers (maximaal vijf veldspelers plus de keeper) starten achter de doellijn en mogen uitlopen zodra de bal is gespeeld.
                  </p>
                </div>
                
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">3. De Strafbal (Penalty Stroke)</h4>
                  <p className="text-sm text-red-800 dark:text-red-200 mb-2">
                    <strong>Wanneer?</strong> De zwaarste straf, toegekend wanneer een verdediger een vrijwel zeker doelpunt voorkomt met een overtreding.
                  </p>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    <strong>Wat gebeurt er?</strong> Een een-tegen-één duel. Een aanvaller probeert vanaf de strafbalstip te scoren op de keeper, die op de doellijn moet blijven staan tot de bal gespeeld is.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Penalties - Cards */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Persoonlijke straffen: de kaarten</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Voor wangedrag of ernstige overtredingen kan een scheidsrechter een speler een persoonlijke straf geven met een kaart.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Kaart</th>
                      <th className="border border-border p-3 text-left">Betekenis</th>
                      <th className="border border-border p-3 text-left">Gevolg voor het Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">
                        <span className="inline-block px-3 py-1 rounded bg-green-500 text-white font-semibold">Groene Kaart</span>
                      </td>
                      <td className="border border-border p-3 text-sm">Een waarschuwing voor een lichte overtreding.</td>
                      <td className="border border-border p-3 text-sm">1 minuut tijdelijke uitsluiting. Het team speelt met een speler minder.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">
                        <span className="inline-block px-3 py-1 rounded bg-yellow-400 text-black font-semibold">Gele Kaart</span>
                      </td>
                      <td className="border border-border p-3 text-sm">Een zwaardere straf voor herhaalde of ernstigere overtredingen.</td>
                      <td className="border border-border p-3 text-sm">Minimaal 2 minuten tijdelijke uitsluiting. Het team speelt met een speler minder.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">
                        <span className="inline-block px-3 py-1 rounded bg-red-600 text-white font-semibold">Rode Kaart</span>
                      </td>
                      <td className="border border-border p-3 text-sm">Voor een zeer ernstige overtreding.</td>
                      <td className="border border-border p-3 text-sm">Permanente uitsluiting voor de rest van de wedstrijd. Het team speelt de rest van de wedstrijd met een speler minder.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Youth Categories */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Spelregels in de jeugdcategorieën</CardTitle>
              <CardDescription>
                De spelregels evolueren met de veiligheid en ontwikkeling, van U8 tot U14-U19
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <img 
                  src={indoorRulesTable2} 
                  alt="Indoor hockey verschillen per leeftijdscategorie" 
                  className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="space-y-4 mt-6">
                {/* U8 */}
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">U8</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Keeper:</strong> Een keeper is niet toegestaan (verboden). Er wordt dus met zes veldspelers gespeeld.</li>
                    <li><strong>Tijdsduur:</strong> 4 periodes van 10 minuten.</li>
                    <li><strong>Strafcorners (PC) en Strafslagen (Stroke):</strong> Beide zijn niet toegestaan.</li>
                    <li><strong>Vrije Slag:</strong> Bij een fout in de cirkel wordt een vrije slag toegekend aan de aanvallende ploeg, te nemen op 3 meter buiten de cirkel. De bal mag WEL rechtstreeks in de cirkel gespeeld worden.</li>
                    <li><strong>Scheidsrechters:</strong> Theoretische scheidsrechter Indoor is niet verplicht.</li>
                  </ul>
                </div>

                {/* U9 */}
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">U9</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Keeper:</strong> De keeper is verplicht in complete uitrusting op het veld gedurende de volledige wedstrijd.</li>
                    <li><strong>Keeper met stick:</strong> De keeper speelt ZONDER stick.</li>
                    <li><strong>Strafcorners (PC) en Strafslagen (Stroke):</strong> Beide zijn niet toegestaan.</li>
                    <li><strong>Vrije Slag:</strong> Bij een fout in de cirkel wordt een vrije slag toegekend op 3 meter buiten de cirkel, en de bal mag WEL rechtstreeks in de cirkel gespeeld worden.</li>
                    <li><strong>Scheidsrechters:</strong> Theoretische scheidsrechter Indoor is verplicht.</li>
                  </ul>
                </div>

                {/* U10 */}
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">U10</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Keeper:</strong> De keeper is verplicht in complete uitrusting op het veld gedurende de volledige wedstrijd.</li>
                    <li><strong>Strafcorners (PC):</strong> Ja. Het verdedigende team verdedigt met drie spelers naast de goal en de keeper in de goal. Alle verdedigers moeten op PC een masker dragen. De overige twee spelers staan op maximaal 9,10 meter van de achterlijn van de tegenstanders.</li>
                    <li><strong>Strafslagen (Stroke):</strong> Ja.</li>
                    <li><strong>Vrije Slag:</strong> De bal mag NIET rechtstreeks in de cirkel gespeeld worden.</li>
                    <li><strong>Scheidsrechters:</strong> Theoretische scheidsrechter Indoor is verplicht.</li>
                  </ul>
                </div>

                {/* U11 en U12 */}
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">U11 en U12</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Keeper:</strong> De keeper is verplicht in complete uitrusting op het veld gedurende de volledige wedstrijd.</li>
                    <li><strong>Strafcorners (PC):</strong> Ja. Het verdedigende team verdedigt met vier spelers naast de goal en de keeper in de goal. Alle verdedigers moeten op PC een masker dragen. De andere speler (de vijfde veldspeler) moet op maximaal 9,10 meter van de achterlijn van de tegenstanders staan.</li>
                    <li><strong>Strafslagen (Stroke):</strong> Ja.</li>
                    <li><strong>Vrije Slag:</strong> De bal mag NIET rechtstreeks in de cirkel gespeeld worden.</li>
                    <li><strong>Scheidsrechters:</strong> Theoretische scheidsrechter Indoor is verplicht.</li>
                  </ul>
                </div>

                {/* U14 tot U19 */}
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">U14 tot U19</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Samenstelling:</strong> Teams spelen met 5 veldspelers en een volledig uitgeruste keeper, óf met 6 veldspelers (waarbij niemand de rechten van een keeper heeft).</li>
                    <li><strong>Tijdsduur:</strong> 4 periodes van 15 minuten.</li>
                    <li><strong>Strafcorners (PC) en Strafslagen (Stroke):</strong> Ja. Alle verdedigers achter de achterlijn moeten op PC een masker dragen.</li>
                    <li><strong>Shoot-out:</strong> Nee, behalve in de halve finale van de Play-Offs bij een gelijke score.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card>
            <CardHeader>
              <CardTitle>Conclusie: veel plezier op het veld!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Oké, team! Dat was een hoop informatie, we weten het. De regels van indoorhockey lijken in het begin misschien wat overweldigend, maar je zult zien dat je de basis snel onder de knie hebt zodra je begint te spelen. Het is een fantastische sport die draait om snelheid, techniek en teamspel.
              </p>
              <p className="font-semibold text-primary">
                Het belangrijkste is niet dat je elke regel meteen perfect kent, maar dat je het veld op gaat en durft te proberen. Nu, hup, het veld op en maak plezier!
              </p>
            </CardContent>
          </Card>

          {/* Official Rules */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Officiële regels</CardTitle>
              <CardDescription>Spelregels - indoor - Hockey Belgium</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a 
                    href="https://hockey.be/nl/competitie/indoor-hockey/spelregels/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    BEL-Indoor-Rules-NL.pdf
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a 
                    href="https://hockey.be/nl/competitie/indoor-hockey/spelregels/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Indoor-Spelregels-U8-U12.pdf
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a 
                    href="https://hockey.be/nl/competitie/indoor-hockey/spelregels/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Indoor-Spelregels-U14-U19.pdf
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IndoorRules;
