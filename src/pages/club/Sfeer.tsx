import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

const Sfeer = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Sfeer</h1>
        <p className="text-muted-foreground mb-8">
          Beleef de sfeer en gezelligheid van D-Mon Hockey door onze fotogalerij
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0">
          {selectedImage !== null && (
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sfeer;
