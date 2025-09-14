import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, ExternalLink, BookOpen, Users, Target, Trophy, Play, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import stappenImage from "@/assets/stappen.png";
import scheidsrechterLeerplanImage from "@/assets/scheidsrechter-leerplan.png";

const U14PlusRules = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Spelregels U14 en hoger</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-lg mb-4">
              Je bent vaak op hockey-wedstrijden aanwezig en wilt de club graag meehelpen? Dan is <strong>scheidsrechter</strong> een van de meest zinvolle, interessante én leuke taken die je kan opnemen!
            </p>
            <p className="text-base">
              Je kan als je wenst al bijdragen — met minimale technische kennis — vanaf U6 (kinderen onder 6 jaar) matchen. Vanaf U9 wordt het spel iets uitgebreider qua regels en dan vanaf U14 starten we met de volledige regels. Elke leeftijdscategorie voegt op die manier nieuwe elementen toe zodat kinderen het spel stap voor stap leren, en ouders/supporters kunnen meegroeien aan de zijlijn.
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Registreren
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Wil je jezelf al registreren bij ons, zodat we je meteen toegang kunnen voorzien tot onder andere Drillster én je mee op het wedstrijdblad kunnen zetten?
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

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Progressieve regelkennis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                Een scheidsrechter bij een U8 ploeg hoeft dus geen hockey-technische regels te aan te leren die pas van toepassing zijn vanaf U9, en een scheidsrechter U10 wordt helemaal niet verwacht alle regels te kennen voor groot veld vanaf U14; de basisfouten herkennen voldoet helemaal!
              </p>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Ook op groot veld geldt dat op regionaal niveau het voldoende is theoretische regelkennis te hebben aangetoond, en er geen vereiste is van praktische examens. Dat komt pas later in nationale competitie!
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src={stappenImage} 
                  alt="Aangeraden materiaal per categorie" 
                  className="w-full max-w-lg mx-auto rounded-lg shadow-md"
                />
                <p className="text-sm text-muted-foreground mt-2">Aangeraden materiaal per categorie</p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Hierboven zie je wat je best kan bekijken vooraleer je een match gaat fluiten. Alles hangt dus af van het niveau, en of je iemand bij je hebt staan die helpt (je bent in rol van <em>assistent</em>), of dat je zelf iemand gaat begeleiden (in rol van <em>lead</em>). Want fluiten doe je vanaf U9 steeds met twee. Dat helpt een pak om het te leren, er is altijd iemand die je kan bijstaan en raad geven.
                </p>
              </div>
              
              <div className="text-xs text-muted-foreground p-3 bg-muted rounded-lg">
                <em>Ideaal zijn beide scheidsrechters even ervaren en fluiten ze elk op hun kant van het veld. De aanpak van een assistent en lead maakt aanleren al doende gemakkelijker, al zullen beide nog steeds een eigen kant toegewezen worden.</em>
              </div>
              
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Tip
                </h4>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Als je start, wees niet bang in overleg te gaan. Je kan altijd de tijd stilleggen. Overleg is altijd de juiste keuze bij twijfel.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Hoe begin ik eraan?
              </CardTitle>
              <CardDescription>
                Er zijn een paar stappen waar je doorheen kan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <img 
                  src={scheidsrechterLeerplanImage} 
                  alt="Stappenplan groot veld" 
                  className="w-full max-w-lg mx-auto rounded-lg shadow-md"
                />
                <p className="text-sm text-muted-foreground mt-2">Stappenplan groot veld</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Basisregels hockey
              </CardTitle>
              <CardDescription>
                Het allerbeste overzicht van de basisregels voor een volwaardige hockeymatch
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                Als je helemaal nieuw bent in Hockey, dan kan het interessant zijn om te kijken wat de basisregels zijn van een volwaardige hockeymatch. Het allerbeste overzicht komt van de Nederlandse hockeybond waar ze het spelverloop uitleggen met de basisregels. Die gelden vanaf groot veld, en komen in eenvoudigere vorm ook voor op half veld.
              </p>
              <p className="text-sm text-muted-foreground">
                Voor de allerkleinsten op klein veld is dit niet relevant (je hebt genoeg aan de <em>pictogrammen</em>, zie volgende), al is het zeker goed om weten waar we uiteindelijk naartoe werken!
              </p>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3">Start To Hockey - Spelregels</h4>
                <div className="aspect-video">
                  <iframe 
                    src="//www.slideshare.net/slideshow/embed_code/key/4N3oTp9LQrJj3K" 
                    width="100%" 
                    height="100%" 
                    frameBorder={0} 
                    marginWidth={0} 
                    marginHeight={0} 
                    scrolling="no" 
                    style={{border: "1px solid #CCC", borderWidth: "1px", marginBottom: "5px", maxWidth: "100%"}}
                    allowFullScreen
                    className="rounded"
                  />
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  <strong>
                    <a href="//www.slideshare.net/BavoBruylandt1/start-to-hockey-spelregels" title="Start To Hockey - Spelregels" target="_blank" rel="noopener noreferrer">Start To Hockey – Spelregels</a>
                  </strong> from <strong>
                    <a href="//www.slideshare.net/BavoBruylandt1" target="_blank" rel="noopener noreferrer">BavoBruylandt1</a>
                  </strong>
                </div>
                <p className="text-sm mt-2">
                  We hebben zelf (met dank aan Johan!) een handig overzicht gemaakt van de basisregels groot veld. Blader zeker eens door de slides van DMON Start To Hockey waar alles mooi gevisualiseerd wordt.
                </p>
              </div>
              
              <Button asChild variant="outline">
                <a 
                  href="https://www.knhb.nl/spelregels-hockey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Nederlandse Hockeybond spelregels
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Basisspelregels
              </CardTitle>
              <CardDescription>
                Belangrijkste fouten die gemaakt worden door spelers vanaf U9 (half veld)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                De Belgische hockeybond heeft een handig overzicht van de belangrijkste fouten die gemaakt worden door spelers in een match vanaf U9 (half veld). Als je in die categorie of hoger fluit, is dat waar je extra aandachtig voor wilt zijn!
              </p>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3">Start to Umpire video's</h4>
                <div className="aspect-video mb-3">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/saPV678-3Ik?list=PLag9_tWawv3Q6uOVToLVgb8UixIsBgin2" 
                    title="Start to umpire - Kick (Fr)" 
                    frameBorder={0} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="rounded"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Bekijk de volledige playlist van <strong>Start To Umpire</strong> filmpjes
                </p>
              </div>
              
              <Button asChild variant="outline">
                <a 
                  href="https://hockey.be/nl/competitie/outdoor-hockey/starttoumpire/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Start to Umpire overzicht
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Spelregels vanaf U14 (groot veld)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                De combinatie van kennis over basisregels en basisfouten zorgt ervoor dat je al vlot een match klein- en half-veld kan fluiten. Als je op groot veld wilt fluiten verwacht de Belgische hockeybond dat je de theoretische oefeningen en het (gratis) online examen ervan hebt afgelegd.
              </p>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Drillster</h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                  Dat doen we via de site Drillster op een specifieke pagina voor hockey. Je kan een gratis account daarvoor aanvragen via de club (Sportieve cel of CUC), waarna een email wordt gestuurd met inlog-gegevens.
                </p>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                  Alle spelers vanaf U14 leggen diezelfde online proef af! Dat maakt van elke U14 een erkende scheidsrechter groot veld, en zorgt ervoor dat ze veilig, vlot en correct kunnen spelen.
                </p>
                <Button asChild size="sm">
                  <a 
                    href="https://hockeyumpire.drillster.net/nl/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Drillster Hockey
                  </a>
                </Button>
              </div>
              
              <p className="text-sm">
                De account aanvragen kan je ook zelf direct doen via het Twizzit formulier! We sturen je dan een uitnodiging na controle.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Signalen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Bij kleintjes kan je best gewoon vertellen waarom je een beslissing neemt, en hen begeleiden naar de juiste opvolg-actie. Vanaf half veld gebruiken we signalen. Je kan ze allemaal hier mooi terugvinden, maar weet dat duidelijk fluiten, verbaal aangeven en dan de speelrichting wijzen de eerste stap is. De andere signalen kan je rustig aanleren.
              </p>
              <Button asChild variant="outline">
                <a 
                  href="https://drive.google.com/file/d/1dW1FkgZXMOMH1KQdo2DebP0zPDOJ-_ss/view?usp=share_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Bekijk scheidsrechter signalen
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Technische fouten</CardTitle>
              <CardDescription>
                Voor verdere verdieping in technische fouten
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                Eens je de basis kent en je jezelf wilt verdiepen in technische fouten, dan heeft de Nederlandse hockeybond een resem voorbeelden met uitleg klaar.
              </p>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3">Spelsituaties - Afhouden met het lichaam</h4>
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/xTEipm-lSmY?list=PLF9C3Z36XP1u-yHxYt6DzQ1SdcjHR5396" 
                    title="Spelsituaties - Afhouden met het lichaam" 
                    frameBorder={0} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="rounded"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  KNHB - Nederlandse Hockeybond voorbeelden
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Algemene regels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                De specifieke regels aka het gouden boekje kan je rustig nalezen als je wenst. Je kan ook de internationale regels downloaden op je smartphone via de FIH rules app.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button asChild variant="outline">
                  <a 
                    href="https://hockey.be/nl/competitie/outdoor-hockey/spelregels-1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Belgische spelregels
                  </a>
                </Button>
                
                <Button asChild variant="outline">
                  <a 
                    href="https://play.google.com/store/apps/details?id=ch.fih.rulesofhockey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    FIH Rules App (Android)
                  </a>
                </Button>
              </div>
              
              <Button asChild variant="outline" className="w-full">
                <a 
                  href="https://drive.google.com/viewerng/viewer?url=https://hockey.be/wp-content/uploads/2021/10/Spelregels-Outdoor-2021-22-3.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Download spelregels PDF
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Specifieke situaties</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Natuurlijk zijn er veel situaties waar het antwoord niet eenduidig is. In dat geval kan je steeds terugvallen op de basis: sportief en veilig spel. Als je jezelf toch wilt verdiepen in verdere details, dan heeft de Nederlandse hockeybond een geweldig concept: de spelregelvraag en het spelregelantwoord.
              </p>
              <Button asChild variant="outline">
                <a 
                  href="https://hockey.nl/tag/het-spelregelantwoord/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Het spelregelantwoord
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default U14PlusRules;