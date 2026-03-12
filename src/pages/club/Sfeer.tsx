import { useState, useEffect, useRef, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

// Distribute images across columns for masonry layout
function distributeToColumns(images: typeof galleryImages, columnCount: number) {
  const columns: (typeof galleryImages)[] = Array.from({ length: columnCount }, () => []);
  images.forEach((img, i) => {
    columns[i % columnCount].push(img);
  });
  return columns;
}

const Sfeer = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [columnCount, setColumnCount] = useState(4);

  // Responsive column count
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

  // Map column/row position back to flat index for lightbox
  const getOriginalIndex = (colIdx: number, rowIdx: number) => {
    return rowIdx * columnCount + colIdx;
  };

  const navigate = (dir: -1 | 1) => {
    if (selectedImage === null) return;
    const next = selectedImage + dir;
    if (next >= 0 && next < galleryImages.length) setSelectedImage(next);
  };

  // Keyboard nav
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
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 fade-in-up">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-3">
            Sfeer
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Beleef de familiale en speelse sfeer van D-Mon Hockey — op en naast het veld!
          </p>
        </div>

        {/* Masonry grid */}
        <div className="flex gap-3 sm:gap-4">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 flex flex-col gap-3 sm:gap-4">
              {col.map((image, rowIdx) => {
                const flatIdx = getOriginalIndex(colIdx, rowIdx);
                return (
                  <div
                    key={flatIdx}
                    className="group relative overflow-hidden rounded-xl cursor-pointer fade-in-up"
                    style={{ animationDelay: `${flatIdx * 0.03}s` }}
                    onClick={() => setSelectedImage(flatIdx)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with navigation */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-full p-0 bg-background/95 backdrop-blur-md border-0 overflow-hidden">
          {selectedImage !== null && (
            <div className="relative flex items-center justify-center min-h-[50vh]">
              {/* Previous */}
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

              {/* Next */}
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

              {/* Counter */}
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
