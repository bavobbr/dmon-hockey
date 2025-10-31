import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, ExternalLink, Calendar, Tv } from "lucide-react";

const Media = () => {
  // Real news articles from the D-mon Hockey website
  const newsArticles = [
    {
      id: 1,
      title: "Werk van lange adem eindelijk afgerond",
      publication: "Het Nieuwsblad",
      date: "2022-11-14",
      excerpt: "Het nieuwe hockeyterrein van D-MON Hockey is eindelijk klaar na een lang proces.",
      url: "https://www.nieuwsblad.be/cnt/dmf20221114_94226298",
      category: "Terrein",
      type: "article"
    },
    {
      id: 2,
      title: "D-MON Hockey maakt droom waar",
      publication: "Het Laatste Nieuws",
      date: "2022-11-14",
      excerpt: "Dolgelukkig met nieuw, eigen hockeyveld in gebruik.",
      url: "#",
      category: "Terrein",
      type: "article"
    },
    {
      id: 3,
      title: "L'envol du D-MON",
      publication: "La Libre Okey",
      date: "2022-11-14",
      excerpt: "Franse berichtgeving over de nieuwe ontwikkelingen bij D-MON Hockey.",
      url: "https://okey.lalibre.be/lenvol-du-d-mon/",
      category: "Internationaal",
      type: "article"
    },
    {
      id: 4,
      title: "Rechtbank geeft Dendermonde hockeyclub gelijk",
      publication: "TV Oost",
      date: "2022-09-22",
      excerpt: "Groen licht om het veld af te werken - reportage op TV Oost.",
      url: "https://www.tvoost.be/nieuws/rechtbank-geeft-dendermondse-hockeyclub-gelijk-groen-licht-om-het-veld-af-te-werken-143870",
      category: "Rechtzaak",
      type: "tv"
    },
    {
      id: 5,
      title: "Groen licht voor D-MON Hockey om veld af te werken",
      publication: "Het Laatste Nieuws",
      date: "2022-09-22",
      excerpt: "Rechter oordeelt dat werken onterecht werden stilgelegd - een enorme opluchting.",
      url: "https://www.hln.be/dendermonde/groen-licht-voor-d-mon-hockey-om-nieuw-hockeyveld-af-te-werken-rechter-oordeelt-dat-werken-onterecht-werden-stilgelegd~a1899dd9/?cb=16ecd70bcc49c1f7cc5f6835e29fdddd&auth_rd=1",
      category: "Rechtzaak",
      type: "article"
    },
    {
      id: 6,
      title: "Kampioenstitel voor meisjes U14 D-MON Hockey",
      publication: "Het Laatste Nieuws",
      date: "2022-05-23",
      excerpt: "Geweldige prestatie van onze jeugdteams met een kampioenstitel.",
      url: "#",
      category: "Sport",
      type: "article"
    },
    {
      id: 7,
      title: "Dendermonds hockeytalent Noor (13) mag trainingsprogramma volgen",
      publication: "Het Laatste Nieuws",
      date: "2022-04-06",
      excerpt: "Noor mag trainingsprogramma volgen van Koninklijke Belgische Hockeybond.",
      url: "https://www.hln.be/dendermonde/dendermonds-hockeytalent-noor-13-mag-trainingsprogramma-volgen-van-koninklijke-belgische-hockeybond~a19eaf56/",
      category: "Talent",
      type: "article"
    },
    {
      id: 8,
      title: "Spelers vormen menselijke ketting om een oplossing te forceren",
      publication: "Het Nieuwsblad",
      date: "2022-01-23",
      excerpt: "Ludieke actie van de spelers om aandacht te vragen voor de noodzaak van een eigen terrein.",
      url: "https://www.nieuwsblad.be/cnt/dmf20220123_95646025",
      category: "Actie",
      type: "article"
    },
    {
      id: 9,
      title: "1,2 miljoen euro voor nieuwe sporthal en hockeykunstgrasveld",
      publication: "Het Nieuwsblad",
      date: "2021-12-20",
      excerpt: "Het veld wordt een unicum in Vlaanderen - belangrijke subsidie toegekend.",
      url: "https://www.nieuwsblad.be/cnt/dmf20211220_95491720",
      category: "Subsidie",
      type: "article"
    },
    {
      id: 10,
      title: "Hoog bezoek voor hockeyclub: Red Lion Tom Boon",
      publication: "Het Laatste Nieuws",
      date: "2021-11-16",
      excerpt: "Red Lion Tom Boon op veld met spelers D-MON Hockey - bijzonder bezoek.",
      url: "https://www.hln.be/dendermonde/hoog-bezoek-voor-hockeyclub-red-lion-tom-boon-op-veld-met-spelers-d-mon-hockey~a57d0897/",
      category: "Special",
      type: "article"
    },
    {
      id: 11,
      title: "Nieuwe hockeyclub onmiddellijk succes",
      publication: "Het Laatste Nieuws",
      date: "2018-05-04",
      excerpt: "Artikel ter aankondiging van de nieuwe club - D-MON Hockey start met succes.",
      url: "#",
      category: "Oprichting",
      type: "article"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Terrein": "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
      "Sport": "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
      "Rechtzaak": "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800",
      "Subsidie": "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800",
      "Talent": "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800",
      "Special": "bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-800",
      "Actie": "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800",
      "Oprichting": "bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800",
      "Internationaal": "bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-400 dark:border-cyan-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800";
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-5xl lg:text-6xl font-bold mb-12 text-foreground fade-in-up">Hockey Dendermonde in de media!</h1>
        
        <div className="mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Newspaper className="h-5 w-5" />
                Hockey Dendermonde in de media!
              </CardTitle>
              <CardDescription>
                Blijf op de hoogte van het laatste nieuws en artikelen over onze club in lokale en regionale media.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        <div className="space-y-8">
          {newsArticles.map((article, index) => (
            <Card key={article.id} className={`group fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{article.title}</CardTitle>
                    <CardDescription className="flex items-center gap-6 text-base flex-wrap">
                      <span className="font-medium text-primary flex items-center gap-2">
                        {article.type === "tv" ? <Tv className="h-4 w-4" /> : <Newspaper className="h-4 w-4" />}
                        {article.publication}
                      </span>
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString("nl-BE")}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${getCategoryColor(article.category)} text-sm px-3 py-1 whitespace-nowrap`}
                  >
                    {article.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{article.excerpt}</p>
                {article.url !== "#" && (
                  <a 
                    href={article.url}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-light link-underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.type === "tv" ? "Bekijk de reportage" : "Lees het volledige artikel"}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <Newspaper className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">
                Heb je een verhaal over onze club? Neem contact op met ons media team om nieuws en updates te delen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Media;