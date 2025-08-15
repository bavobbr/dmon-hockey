import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { History as HistoryIcon, Calendar, Users, Trophy } from "lucide-react";

const History = () => {
  const milestones = [
    {
      year: "2020",
      title: "Club Foundation",
      description: "D-Man Hockey Club was founded by a group of passionate hockey enthusiasts in Belgium.",
      icon: Users
    },
    {
      year: "2021", 
      title: "First Official Season",
      description: "Our first official season with teams competing in local leagues.",
      icon: Calendar
    },
    {
      year: "2022",
      title: "Youth Program Launch",
      description: "Expansion into youth hockey with programs for ages 6-18.",
      icon: Users
    },
    {
      year: "2023",
      title: "Regional Success",
      description: "First regional championship win, establishing the club's competitive reputation.",
      icon: Trophy
    },
    {
      year: "2024",
      title: "Facility Expansion",
      description: "Opening of new training facilities and continued growth of membership.",
      icon: HistoryIcon
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Club History</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HistoryIcon className="h-5 w-5" />
              Our Story
            </CardTitle>
            <CardDescription>The journey of D-Man Hockey Club</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              D-Man Hockey Club was born from a shared passion for field hockey and a vision to create 
              a welcoming community for players of all ages and skill levels. What started as a small group 
              of enthusiasts has grown into a thriving club that represents the best of Belgian hockey culture.
            </p>
            <br />
            <p className="text-muted-foreground leading-relaxed">
              Our club emphasizes not just competitive excellence, but also the values of respect, 
              fair play, and community spirit. We believe hockey is more than a sport—it's a way to 
              build lifelong friendships, develop character, and contribute to our local community.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Key Milestones</h2>
          
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <Card key={milestone.year} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <milestone.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-8 bg-muted/50">
          <CardContent className="p-6 text-center">
            <HistoryIcon className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">
              Our history continues to unfold with every training session, match, and new member who joins our club family.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default History;