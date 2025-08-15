import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Users, Target, Zap, PlayCircle } from "lucide-react";

const CoachesInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Informatie voor Coaches</h1>
        
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
                  href="https://docs.google.com/uc?export=download&id=17Z4mXNJY4WIxH3UCVvToNX-gJ29uzxP-" 
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
                  href="https://docs.google.com/uc?export=download&id=1tqB_qY2Pz-AOhgzOeKT0L7YPZZrv71qN" 
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
              Hockey basisprincipes en spelconcepten
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="h-auto p-4 justify-start" asChild>
              <a 
                href="https://drive.google.com/uc?export=download&id=1uEv33elgKIcvWxUacWOiC--54yWBRBEB" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <Download className="h-4 w-4" />
                    <span className="font-medium">Hockey basisprincipes</span>
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
              Tactische opstellingen en spelprincipes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Basisprincipes</h3>
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
                    <a href="https://drive.google.com/uc?export=download&id=1cL9ZvAZra83yIXVeDc1OF2uDIBYkMm8J" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      PC defense
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1_ECycpOOTNK2mnf5lqrURcjysjaEgObM" target="_blank" rel="noopener noreferrer">
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
                    <a href="https://drive.google.com/uc?export=download&id=1iP-qoEzDQqSHbaKoxH7FUIbrICUxFQDS" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      3232 versus 433
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1xnSoOvf5P9HkdFmr0aedRMJLe_vvdv9N" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      3232 pressing
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1Yw0PwHNNZgFaun7bBZuMoThwy_aYu92l" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      3232 opbouw
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=16E4jzU7_3xbt563kI5N2261pLwA2R4vb" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      3232 lange corners
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1nAK5heu5Dbz083VRMKgyZrgrqw0RPoP0" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      3232 principes
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">4-3-3 Formatie</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1IoE1zrDfdJBxZ-_pM3jZdX5cNnqhbd5R" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      433 verdediging
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1OcwWdJLE68xrGemOJMYDKxJBdmH9w4ou" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      433 opbouw met back-4
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1euvUkqna9pNJUnMAPORjl3fQApBgv7vp" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      433 sideline w-press
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/file/d/1IcHQ8gyFrhxmxQmxF9NDAuWmmOpg0Mrd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      433 principes
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1nQ7K0W3OGB0S3wLMjKpnYWPtvxFGzAp-" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      433 low block
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1gsqlkO2lPZoqmdwrgtKe4nT96qL_L91l" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      433 long corners
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1h5onFZif_ENeWzNUKGT9EEoQQAR3jB1u" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      433 high press man to man
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1Y9C-zmd_hXk-qM1FtII64cnBK6cnB_Ks" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      433 aanval
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Andere Formaties</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=1C8COzd3qxwjshbIwflzkshzVDeun1Iuv" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      343 transitie
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://drive.google.com/uc?export=download&id=18OY1kfjkDc6qXQJ_KdcpKOsJR2PtVAqe" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      4231 transitie
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