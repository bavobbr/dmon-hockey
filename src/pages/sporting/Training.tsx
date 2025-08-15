import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Download, Users, Trophy, Mail } from "lucide-react";

const Training = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Trainingen</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Trainingsschema 2025-2026
            </CardTitle>
            <CardDescription>
              Download het volledige trainingsschema voor het huidige seizoen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <a 
                href="https://static.twizzit.com/public/v2/chat/message/attachment/3210422/f72e69c96d253fcdc03611b7dc769262d0fd5f8b.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Trainingsschema 2025-2026
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Jeugdtrainingen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Jongste spelers & G-hockey</h4>
                  <p className="text-sm text-muted-foreground mb-2">Onze jongste spelers (U6) en G-hockeyspelers</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>1 training per week</span>
                  </div>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-medium mb-2">Andere jeugdteams</h4>
                  <p className="text-sm text-muted-foreground mb-2">Alle andere jeugdcategorieën</p>
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Clock className="h-4 w-4" />
                    <span>2 trainingen per week</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Focus op techniek, spelinzicht en fysiek</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Volwassentrainingen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Senioren</h4>
                  <p className="text-sm text-muted-foreground mb-2">Competitieteams</p>
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Clock className="h-4 w-4" />
                    <span>2 trainingen per week</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Focus op techniek, spelinzicht en fysiek</p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-medium mb-2">Trimmers / Gents</h4>
                  <p className="text-sm text-muted-foreground mb-2">Startende volwassenen en 35+ spelers</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>1 langere training per week</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Wedstrijden
            </CardTitle>
            <CardDescription>
              Wanneer spelen de verschillende teams hun wedstrijden?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Jeugd</h4>
                <p className="text-sm text-muted-foreground mb-2">Zaterdag</p>
                <p className="text-xs text-muted-foreground">
                  Eén week thuis, één week op verplaatsing
                </p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="font-medium mb-2">Volwassenen</h4>
                <p className="text-sm text-muted-foreground mb-2">Zondag</p>
                <p className="text-xs text-muted-foreground">
                  Heren en Dames teams
                </p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-medium mb-2">Gents</h4>
                <p className="text-sm text-muted-foreground mb-2">Maandag</p>
                <p className="text-xs text-muted-foreground">
                  35+ categorie
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Interesse in trainen bij D-MON Hockey?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Lees meer onder 'lid worden' en contacteer ons gerust voor meer info.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" asChild>
                <a href="/membership/info">
                  Lid worden informatie
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:info@dmon.be">
                  <Mail className="h-4 w-4 mr-2" />
                  info@dmon.be
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Training;