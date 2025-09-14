import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import stappenImage from "@/assets/stappen.png";
import scheidsrechterPadImage from "@/assets/scheidsrechter-pad.png";

const U6U8Rules = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Spelregels U6 tot U8</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-lg mb-4">
              Je bent vaak op hockey-wedstrijden aanwezig en wilt de club graag meehelpen? Dan is <strong>spelbegeleider</strong> een van de meest zinvolle, interessante én leuke taken die je kan opnemen!
            </p>
            <p className="text-base">
              Je kan als je wenst bijdragen — met minimale hockey kennis — vanaf U6 (kinderen onder 6 jaar) matchen.
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Wat doen spelbegeleiders?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">je kijkt of het veld correct opgesteld staat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">je zorgt dat elk team het juiste aantal spelers op het veld heeft staan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">je start en stopt de wedstrijd op aangegeven tijd</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">je helpt de kinderen wanneer de bal buiten spel gaat: waar de bal terug kan gespeeld worden en dat er veilige afstand wordt gegeven bij herstart</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">je zorgt via mondelinge feedback dat de wedstrijd veilig verloopt, dat de kinderen rustig blijven en hun stick niet gevaarlijk inzetten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">als er kinderen vallen, zich bezeren of andere hulp vragen zet je de match stil en zorg je voor hervatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">je telt de goals en herstart de match na goal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">samen met de coach/manager registreer je de uitslag en dien je het wedstrijdblad in via de Hockey app</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Belangrijke punten
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Is het belangrijk dat de goals perfect geteld zijn?
                </h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Neen, op de leeftijd tot U9 worden scores wel geregistreerd maar is er geen rangschikking. 
                  De focus ligt op spelplezier voor elke deelnemer! Een score wordt door VHL gebruikt om een indicatie te hebben 
                  of de teams op zelfde niveau spelen. Een goal meer of minder maakt in dat perspectief weinig uit.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  Leren voor iedereen
                </h4>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Dus helemaal geen erg als een beslissing eens juist of onjuist is, dit is een fase van leren voor iedereen. 
                  Zolang het ter goeder trouw is, en in het belang van veiligheid en spelplezier. De kinderen zouden niet kunnen 
                  spelen mochten wij als enthousiaste ouders het spel niet omkaderen.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Spelregels U6 tot U8 (klein veld)</CardTitle>
              <CardDescription>
                Voor de allerkleinsten zijn de pictogrammen erg informatief, ook te vinden op de VHL website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="mb-4">
                <a 
                  href="https://hockey.be/nl/competitie/outdoor-hockey/spelregels-1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Bekijk op VHL website
                </a>
              </Button>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Signalen</h4>
                  <p className="text-sm text-muted-foreground">
                    Bij onze jongste spelers kan je best gewoon vertellen waarom je een beslissing neemt, en hen begeleiden 
                    naar de juiste opvolg-actie. Vanaf half veld gebruiken we signalen. De eerste stap is duidelijk fluiten, 
                    verbaal aangeven en dan de speelrichting wijzen. De andere signalen kan je rustig aanleren.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="text-center">
                    <img 
                      src={scheidsrechterPadImage} 
                      alt="Scheidsrechter signalen en pad" 
                      className="w-full max-w-md mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-muted-foreground mt-2">Scheidsrechter signalen</p>
                  </div>
                  
                  <div className="text-center">
                    <img 
                      src={stappenImage} 
                      alt="Stappen in scheidsrechteren" 
                      className="w-full max-w-md mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-muted-foreground mt-2">Stappen voor beginners</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Registreren</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Wil je jezelf al registreren bij ons, zodat we je ook persoonlijk toegang kunnen voorzien tot onder andere 
                de Twizzit app én je mee op het wedstrijdblad kunnen zetten?
              </p>
              <Button asChild>
                <a 
                  href="https://app.twizzit.com/v2/public/form/cea9e8831bead08352918535621cd399" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Registreer via Twizzit formulier
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default U6U8Rules;