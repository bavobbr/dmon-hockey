import { useState, useEffect, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Camera, Images, Mail, Users } from "lucide-react";

import teamNight from "@/assets/gallery/team-night.png";
import partyGroup from "@/assets/gallery/party-group.png";
import youthTeam from "@/assets/gallery/youth-team.png";
import trainingField from "@/assets/gallery/training-field.png";
import coachingSession from "@/assets/gallery/coaching-session.png";
import coachingSession2 from "@/assets/gallery/coaching-session-2.png";
import hockquiz from "@/assets/gallery/hockquiz.png";
import cakeSale from "@/assets/gallery/cake-sale.png";
import youthGoalkeeper from "@/assets/gallery/youth-goalkeeper.png";
import youthTeamFun from "@/assets/gallery/youth-team-fun.png";
import girlsTeamTrophy from "@/assets/gallery/girls-team-trophy.png";
import girlsSelfie from "@/assets/gallery/girls-selfie.png";
import kidsCircle from "@/assets/gallery/kids-circle.png";
import boysTeam from "@/assets/gallery/boys-team.png";
import youngBoysTeam from "@/assets/gallery/young-boys-team.png";
import girlsTeamHuddle from "@/assets/gallery/girls-team-huddle.png";
import clubFamilyPhoto from "@/assets/gallery/club-family-photo.png";
import kidsMouthguards from "@/assets/gallery/kids-mouthguards.png";
import youthActionShots from "@/assets/gallery/youth-action-shots.png";
import waterFun from "@/assets/gallery/water-fun.png";
import teamCelebration from "@/assets/gallery/team-celebration.png";
import groupPhoto from "@/assets/gallery/group-photo.png";
import youthTraining from "@/assets/gallery/youth-training.png";
import teamGathering from "@/assets/gallery/team-gathering.png";
import kidsPractice from "@/assets/gallery/kids-practice.png";
import fieldAction from "@/assets/gallery/field-action.png";
import teamSpirit from "@/assets/gallery/team-spirit.png";
import clubEvent from "@/assets/gallery/club-event.png";
import youthMatch from "@/assets/gallery/youth-match.png";
import teamPhoto from "@/assets/gallery/team-photo.png";
import boysWithSticks from "@/assets/gallery/boys-with-sticks.png";
import girlsWithTeddy from "@/assets/gallery/girls-with-teddy.png";
import girlsSticksUp from "@/assets/gallery/girls-sticks-up.png";
import girlsGoalkeeperTeam from "@/assets/gallery/girls-goalkeeper-team.png";
import girlsOrangeGuards from "@/assets/gallery/girls-orange-guards.png";
import girlsStickCircle from "@/assets/gallery/girls-stick-circle.png";

const galleryImages = [
  { src: waterFun, alt: "Waterpret" },
  { src: girlsTeamHuddle, alt: "Meisjesteam overleg" },
  { src: youthGoalkeeper, alt: "Jeugd doelverdediger" },
  { src: clubEvent, alt: "Club evenement" },
  { src: teamPhoto, alt: "Teamfoto" },
  { src: coachingSession, alt: "Trainers sessie" },
  { src: girlsWithTeddy, alt: "Meisjes met teddyberen" },
  { src: kidsPractice, alt: "Kinderen oefenen" },
  { src: teamCelebration, alt: "Team viering" },
  { src: girlsStickCircle, alt: "Meisjes in cirkel met sticks" },
  { src: hockquiz, alt: "Hockquiz evenement" },
  { src: youngBoysTeam, alt: "Jong jongensteam" },
  { src: youthTraining, alt: "Jeugdtraining" },
  { src: teamSpirit, alt: "Teamgeest" },
  { src: boysWithSticks, alt: "Jongens met sticks" },
  { src: fieldAction, alt: "Veldactie" },
  { src: girlsSelfie, alt: "Meisjes selfie" },
  { src: partyGroup, alt: "Clubfeest" },
  { src: youthMatch, alt: "Jeugdwedstrijd" },
  { src: kidsCircle, alt: "Kinderen in cirkel" },
  { src: girlsOrangeGuards, alt: "Meisjes met oranje mondkapjes" },
  { src: teamGathering, alt: "Team samenkomen" },
  { src: coachingSession2, alt: "Trainers sessie 2" },
  { src: girlsSticksUp, alt: "Meisjes met sticks omhoog" },
  { src: teamNight, alt: "Team bijeenkomst 's avonds" },
  { src: youthTeamFun, alt: "Jeugdteam plezier" },
  { src: trainingField, alt: "Training op het veld" },
  { src: clubFamilyPhoto, alt: "Club familiefoto" },
  { src: cakeSale, alt: "Cake verkoop" },
  { src: groupPhoto, alt: "Groepsfoto" },
  { src: girlsGoalkeeperTeam, alt: "Meisjesteam met doelverdediger" },
  { src: youthTeam, alt: "Jeugdteam" },
  { src: boysTeam, alt: "Jongensteam" },
  { src: youthActionShots, alt: "Jeugd actie foto's" },
  { src: girlsTeamTrophy, alt: "Meisjesteam met trofee" },
  { src: kidsMouthguards, alt: "Kinderen met mondkapjes" },
];

function distributeToColumns(images: typeof galleryImages, columnCount: number) {
  const columns: (typeof galleryImages)[] = Array.from({ length: columnCount }, () => []);
  images.forEach((img, i) => {
    columns[i % columnCount].push(img);
  });
  return columns;
}

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Sfeer = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [columnCount, setColumnCount] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setColumnCount(2);
      else if (w < 1024) setColumnCount(3);
      else setColumnCount(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const columns = useMemo(
    () => distributeToColumns(galleryImages, columnCount),
    [columnCount]
  );

  const getOriginalIndex = (colIdx: number, rowIdx: number) => rowIdx * columnCount + colIdx;

  const navigate = (dir: -1 | 1) => {
    if (selectedImage === null) return;
    const next = selectedImage + dir;
    if (next >= 0 && next < galleryImages.length) setSelectedImage(next);
  };

  useEffect(() => {
    if (selectedImage === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
              Onze club in beeld
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Sfeer
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Beleef de familiale en speelse sfeer van D-Mon Hockey — op en naast het veld.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection("galerij")}>
                <Images className="h-4 w-4" />
                Bekijk galerij
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={() => scrollToSection("deel-mee")}
              >
                <Camera className="h-4 w-4" />
                Deel je foto's
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border/60">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3">
            <button
              onClick={() => scrollToSection("galerij")}
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/5 hover:text-primary transition-colors whitespace-nowrap"
            >
              Galerij
            </button>
            <button
              onClick={() => scrollToSection("deel-mee")}
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/5 hover:text-primary transition-colors whitespace-nowrap"
            >
              Deel mee
            </button>
          </div>
        </div>
      </nav>

      {/* Galerij */}
      <section id="galerij" className="container mx-auto px-4 py-12 lg:py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Galerij
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Klik op een foto om in groot formaat te bekijken. Navigeer met de pijltjestoetsen.
            </p>
          </div>

          <div className="flex gap-3 sm:gap-4">
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="flex-1 flex flex-col gap-3 sm:gap-4">
                {col.map((image, rowIdx) => {
                  const flatIdx = getOriginalIndex(colIdx, rowIdx);
                  return (
                    <div
                      key={flatIdx}
                      className="group relative overflow-hidden rounded-xl cursor-pointer shadow-card hover:shadow-elegant transition-shadow"
                      onClick={() => setSelectedImage(flatIdx)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deel mee CTA */}
      <section id="deel-mee" className="container mx-auto px-4 py-12 lg:py-16 scroll-mt-20">
        <Card className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground border-0 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                  <Camera className="h-6 w-6" />
                </div>
                <div className="h-12 w-12 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Heb jij mooie clubfoto's?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Stuur ons je beste momenten van trainingen, wedstrijden of clubactiviteiten —
                wij voegen ze graag toe aan onze galerij.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:info@dmon.be?subject=Foto's voor de galerij">
                  <Mail className="h-4 w-4" />
                  Stuur je foto's
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-full p-0 bg-background/95 backdrop-blur-md border-0 overflow-hidden">
          {selectedImage !== null && (
            <div className="relative flex items-center justify-center min-h-[50vh]">
              {selectedImage > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 z-10 h-10 w-10 rounded-full bg-background/80 hover:bg-background text-foreground"
                  onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              )}

              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />

              {selectedImage < galleryImages.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 z-10 h-10 w-10 rounded-full bg-background/80 hover:bg-background text-foreground"
                  onClick={(e) => { e.stopPropagation(); navigate(1); }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              )}

              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/80 px-3 py-1 rounded-full">
                {selectedImage + 1} / {galleryImages.length}
              </span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sfeer;
