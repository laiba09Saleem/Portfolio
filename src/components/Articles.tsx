import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Learn how to structure your Node.js applications for scalability and maintainability using best practices and design patterns.",
    date: "2024-12-01",
    readTime: "8 min read",
    tags: ["Node.js", "API", "Backend"],
    link: "#",
  },
  {
    title: "Getting Started with Machine Learning in Python",
    excerpt: "A beginner-friendly guide to understanding machine learning concepts and implementing your first ML model using Python.",
    date: "2024-11-15",
    readTime: "12 min read",
    tags: ["Python", "ML", "AI"],
    link: "#",
  },
  {
    title: "React Performance Optimization Techniques",
    excerpt: "Discover proven strategies to optimize your React applications for better performance and user experience.",
    date: "2024-10-28",
    readTime: "10 min read",
    tags: ["React", "Performance", "Frontend"],
    link: "#",
  },
];

const Articles = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="articles" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest <span className="text-primary">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing my knowledge and experiences through writing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href={article.link}
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
