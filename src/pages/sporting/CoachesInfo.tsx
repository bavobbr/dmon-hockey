import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Users, Target, Zap, PlayCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CoachesInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Informatie voor Coaches</h1>
        
        {/* Hockey Principles Link */}
        <Link to="/sporting/hockey-principles">
          <Card className="mb-8 hover:shadow-lg transition-shadow cursor-pointer border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Hockey Principes</h3>
                    <p className="text-muted-foreground text-sm">
                      Uitgebreide gids over de vier fasen van het spel: Offense, Defensive Transition, Defense en Offensive Transition
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </Link>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Algemene informatie
            </CardTitle>
            <CardDescription>
              Basismateriaal voor trainers en coaches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a 
                  href="/docs/Sportief_beleid_DMON_Hockey.docx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <Download className="h-4 w-4" />
                      <span className="font-medium">Sportief beleid</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Club filosofie en doelstellingen</p>
                  </div>
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a 
                  href="/docs/Hockey_is_geen_voetbal_is_geen_hockey_v2_1.docx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <Download className="h-4 w-4" />
                      <span className="font-medium">Hockey is geen voetbal is geen hockey</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Verschillen tussen sporten</p>
                  </div>
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a 
                  href="https://docs.google.com/presentation/d/1gqGNaH4dTf7Gs7_PXOAxLnN-k_Pb4DV9/export/pptx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <PlayCircle className="h-4 w-4" />
                      <span className="font-medium">Coach fundamentals onderbouw</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Basisprincipes voor jeugdtrainers</p>
                  </div>
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a 
                  href="https://docs.google.com/presentation/d/1wMCV4aotmIu8bA-bSJc11ypPHwOzjIGk/export/pptx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <PlayCircle className="h-4 w-4" />
                      <span className="font-medium">Coach fundamentals bovenbouw</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Gevorderde trainingsmethoden</p>
                  </div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Technieken
            </CardTitle>
            <CardDescription>
              Technische vaardigheden en oefeningen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a 
                  href="https://docs.google.com/presentation/d/1EHJzdGfRRBGcnwlDCafCR-YrQ1HAUviS/edit?usp=drive_link&ouid=115910454372893949468&rtpof=true&sd=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <PlayCircle className="h-4 w-4" />
                      <span className="font-medium">Basistechnieken: tackling and dribbling</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Verdediging en balcontrole</p>
                  </div>
                </a>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a 
                  href="https://docs.google.com/presentation/d/1cioswx4jL4AMpXzzaSs6Y-okl302Twm6/edit?usp=sharing&ouid=115910454372893949468&rtpof=true&sd=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <PlayCircle className="h-4 w-4" />
                      <span className="font-medium">Basistechnieken: passing, receiving and scoring</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Aanvallende technieken</p>
                  </div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Principes
            </CardTitle>
            <CardDescription>
              Hockey principes en spelconcepten
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="h-auto p-4 justify-start" asChild>
              <a 
                href="/docs/Hockey_Principles_Dmon_-_gids.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <Download className="h-4 w-4" />
                    <span className="font-medium">Hockey principes</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Fundamentele spelconcepten</p>
                </div>
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Formaties
            </CardTitle>
            <CardDescription>
              Tactische opstellingen en strategie
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Algemeen</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://docs.google.com/presentation/d/1_5bnHr6FoyXdjdHPJzXlfq-mylNiTlWO/export/pptx" target="_blank" rel="noopener noreferrer">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Formaties op groot veld
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://docs.google.com/presentation/d/1EzMBH3kUTb3UUP7jNw5aobmnV7H2phs2/export/pptx" target="_blank" rel="noopener noreferrer">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Defensieve basisprincipes
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://docs.google.com/presentation/d/1LHWwbo4UT2zISVsOaMOm77PSu-q_Fj48/export/pptx" target="_blank" rel="noopener noreferrer">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Pressing groot veld
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://docs.google.com/presentation/d/1Pg3CowM_MB5naGQ8LzmgsFs7ckyE1SWD/export/pptx" target="_blank" rel="noopener noreferrer">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Uitspelen back-3 en back-4
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/PC_defense_-_principes.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      PC defense
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/PC_aanval_-_varianten_en_option_select.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      PC aanval
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">3-2-3-2 Formatie</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232_formatie_-_principes_en_overzicht.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Principes en overzicht
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232_formatie_-_opbouw_met_back3.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Opbouw met back-3
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232_formatie_-_pressing_opties.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Pressing opties
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232_formatie_-_low-block_m2mpress.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Low-block M2M press
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232_formatie_-_lange_corners.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Lange corners
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232_formatie_-_rol_van_CCB_en_CB.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Rol van CCB en CB
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232___rol_van_CDM.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Rol van CDM
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232_formatie___rol_van_CAM.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Rol van CAM
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232_formatie___rol_van_striker.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Rol van Striker
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232_formatie___rol_van_winger.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Rol van Winger
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232_formatie_-_strategie_vs_433-diamond.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Strategie vs 4-3-3 diamond
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/3232_formatie_-_strategie_vs_433-flat.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Strategie vs 4-3-3 flat
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">4-3-3 Formatie</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/433_-_principes_en_overzicht.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Principes en overzicht
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/433_uitspelen_met_back_4.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Uitspelen met back-4
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/433_verdediging.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Verdediging
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/433_high_press.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      High press
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/433_low_block_press.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Low block press
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/433_lange_corners.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Lange corners
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/433_aanval.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Aanval
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/433_sideline_w-press.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Sideline W-press
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Andere Formaties</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/343_formatie.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      3-4-3 formatie
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/docs/4231_formatie.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      4-2-3-1 formatie
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>Toegang tot materiaal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Deze pagina bevat trainingsmateriaal en tactische informatie voor coaches van D-MON Hockey. 
              Alle documenten en presentaties zijn beschikbaar voor download en gebruik tijdens trainingen.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoachesInfo;