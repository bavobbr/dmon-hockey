import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, ExternalLink, Calendar } from "lucide-react";

const News = () => {
  // Placeholder news articles - in the future this could be dynamic content
  const newsArticles = [
    {
      id: 1,
      title: "Local Hockey Club Wins Regional Championship",
      publication: "Belgium Sports Daily",
      date: "2024-03-15",
      excerpt: "D-Man Hockey Club's senior team claimed victory in the regional championship, marking their third consecutive win.",
      url: "#",
      category: "Tournament"
    },
    {
      id: 2,
      title: "Youth Development Program Expansion",
      publication: "Community Sports Newsletter",
      date: "2024-02-28",
      excerpt: "The club announces expansion of its youth development program to include players from ages 6-18.",
      url: "#",
      category: "Youth"
    },
    {
      id: 3,
      title: "New Hockey Field Facility Opens",
      publication: "Local News Today",
      date: "2024-01-20",
      excerpt: "State-of-the-art hockey field facility officially opens to serve the growing hockey community.",
      url: "#",
      category: "Facilities"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">In the News</h1>
        
        <div className="mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Newspaper className="h-5 w-5" />
                Media Coverage
              </CardTitle>
              <CardDescription>
                Stay updated with the latest news and articles about our club in local and regional media.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        <div className="space-y-6">
          {newsArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="font-medium">{article.publication}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{article.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <a 
                  href={article.url}
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Article
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <Newspaper className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">
                Have a story about our club? Contact our media team to share news and updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default News;