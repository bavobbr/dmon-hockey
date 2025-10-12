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

const galleryImages = [
  { src: teamNight, alt: "Team bijeenkomst 's avonds" },
  { src: partyGroup, alt: "Clubfeest" },
  { src: youthTeam, alt: "Jeugdteam" },
  { src: trainingField, alt: "Training op het veld" },
  { src: coachingSession, alt: "Trainers sessie" },
  { src: coachingSession2, alt: "Trainers sessie 2" },
  { src: hockquiz, alt: "Hockquiz evenement" },
  { src: cakeSale, alt: "Cake verkoop" },
  { src: youthGoalkeeper, alt: "Jeugd doelverdediger" },
  { src: youthTeamFun, alt: "Jeugdteam plezier" },
  { src: girlsTeamTrophy, alt: "Meisjesteam met trofee" },
  { src: girlsSelfie, alt: "Meisjes selfie" },
  { src: kidsCircle, alt: "Kinderen in cirkel" },
  { src: boysTeam, alt: "Jongensteam" },
  { src: youngBoysTeam, alt: "Jong jongensteam" },
  { src: girlsTeamHuddle, alt: "Meisjesteam overleg" },
  { src: clubFamilyPhoto, alt: "Club familiefoto" },
  { src: kidsMouthguards, alt: "Kinderen met mondkapjes" },
  { src: youthActionShots, alt: "Jeugd actie foto's" },
  { src: waterFun, alt: "Waterpret" },
  { src: teamCelebration, alt: "Team viering" },
  { src: groupPhoto, alt: "Groepsfoto" },
  { src: youthTraining, alt: "Jeugdtraining" },
  { src: teamGathering, alt: "Team samenkomen" },
  { src: kidsPractice, alt: "Kinderen oefenen" },
  { src: fieldAction, alt: "Veldactie" },
  { src: teamSpirit, alt: "Teamgeest" },
  { src: clubEvent, alt: "Club evenement" },
  { src: youthMatch, alt: "Jeugdwedstrijd" },
  { src: teamPhoto, alt: "Teamfoto" },
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
