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
      excerpt: "D-mon Hockey Club's senior team claimed victory in the regional championship, marking their third consecutive win.",
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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-5xl lg:text-6xl font-bold mb-12 text-foreground fade-in-up">In the News</h1>
        
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
        
        <div className="space-y-8">
          {newsArticles.map((article, index) => (
            <Card key={article.id} className={`group fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{article.title}</CardTitle>
                    <CardDescription className="flex items-center gap-6 text-base">
                      <span className="font-medium text-primary">{article.publication}</span>
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-sm px-3 py-1">
                    {article.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{article.excerpt}</p>
                <a 
                  href={article.url}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light link-underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Article
                  <ExternalLink className="h-4 w-4" />
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