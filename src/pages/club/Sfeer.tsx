import { useState, useEffect, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Camera, Images, Mail, Users } from "lucide-react";

// Alle foto's uit src/assets/gallery worden automatisch ingeladen.
// Een nieuwe foto in die map toevoegen is voldoende: ze verschijnt vanzelf.
const galleryModules = import.meta.glob<{ default: string }>(
  "@/assets/gallery/*.{png,jpg,jpeg,webp,avif}",
  { eager: true }
);

// Optionele Nederlandse omschrijvingen per bestandsnaam (voor alt-teksten).
const altOverrides: Record<string, string> = {
  "team-night": "Team bijeenkomst 's avonds",
  "party-group": "Clubfeest",
  "youth-team": "Jeugdteam",
  "training-field": "Training op het veld",
  "coaching-session": "Trainers sessie",
  "coaching-session-2": "Trainers sessie 2",
  hockquiz: "Hockquiz evenement",
  "cake-sale": "Cake verkoop",
  "youth-goalkeeper": "Jeugd doelverdediger",
  "youth-team-fun": "Jeugdteam plezier",
  "girls-team-trophy": "Meisjesteam met trofee",
  "girls-selfie": "Meisjes selfie",
  "kids-circle": "Kinderen in cirkel",
  "boys-team": "Jongensteam",
  "young-boys-team": "Jong jongensteam",
  "girls-team-huddle": "Meisjesteam overleg",
  "club-family-photo": "Club familiefoto",
  "kids-mouthguards": "Kinderen met mondkapjes",
  "youth-action-shots": "Jeugd actie foto's",
  "water-fun": "Waterpret",
  "team-celebration": "Team viering",
  "group-photo": "Groepsfoto",
  "youth-training": "Jeugdtraining",
  "team-gathering": "Team samenkomen",
  "kids-practice": "Kinderen oefenen",
  "field-action": "Veldactie",
  "team-spirit": "Teamgeest",
  "club-event": "Club evenement",
  "youth-match": "Jeugdwedstrijd",
  "team-photo": "Teamfoto",
  "boys-with-sticks": "Jongens met sticks",
  "girls-with-teddy": "Meisjes met teddyberen",
  "girls-sticks-up": "Meisjes met sticks omhoog",
  "girls-goalkeeper-team": "Meisjesteam met doelverdediger",
  "girls-orange-guards": "Meisjes met oranje mondkapjes",
  "girls-stick-circle": "Meisjes in cirkel met sticks",
};

const galleryImages = Object.entries(galleryModules)
  .map(([path, mod]) => {
    const slug = path.split("/").pop()!.replace(/\.[^.]+$/, "");
    const label =
      altOverrides[slug] ??
      slug.replace(/[-_]+/g, " ").replace(/^\w/, (c) => c.toUpperCase());
    return { slug, src: mod.default, alt: `${label} - D-mon Hockey Club` };
  })
  .sort((a, b) => a.slug.localeCompare(b.slug, "nl"));


function distributeToColumns(images: typeof galleryImages, columnCount: number) {
  const columns: (typeof galleryImages)[] = Array.from({ length: columnCount }, () => []);
  images.forEach((img, i) => {
    columns[i % columnCount]?.push(img);
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
      <section className="overflow-hidden relative bg-gradient-hero text-primary-foreground">
        <div className="hero-decor" aria-hidden />
        <div className="hero-rule" aria-hidden />
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
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
                src={galleryImages[selectedImage]?.src ?? ''}
                alt={galleryImages[selectedImage]?.alt ?? ''}
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
