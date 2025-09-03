import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, FileText, Calendar, Users } from "lucide-react";

const Publications = () => {
  const articles = [
    {
      title: "Advanced Machine Learning Techniques for Big Data Analysis",
      authors: "Silva, M.; Santos, J.; Costa, A.",
      journal: "International Journal of Data Science",
      year: "2023",
      volume: "Vol. 15, No. 3",
      pages: "pp. 245-267",
      type: "Artigo",
      impact: "Q1"
    },
    {
      title: "Distributed Systems Optimization: A Comprehensive Approach",
      authors: "Santos, J.; Silva, M.",
      journal: "IEEE Transactions on Parallel and Distributed Systems",
      year: "2023",
      volume: "Vol. 34, No. 8",
      pages: "pp. 1892-1905",
      type: "Artigo",
      impact: "Q1"
    },
    {
      title: "AI-Driven Medical Diagnosis: Current Trends and Future Perspectives",
      authors: "Costa, A.; Silva, M.; Santos, J.",
      journal: "Medical AI Review",
      year: "2022",
      volume: "Vol. 8, No. 12",
      pages: "pp. 445-462",
      type: "Artigo",
      impact: "Q2"
    }
  ];

  const conferences = [
    {
      title: "Blockchain Applications in Academic Data Management",
      authors: "Silva, M.; Santos, J.",
      event: "International Conference on Educational Technology",
      year: "2023",
      location: "São Paulo, Brasil",
      pages: "pp. 123-130",
      type: "Conferência"
    },
    {
      title: "Performance Analysis of Deep Learning Models in Healthcare",
      authors: "Costa, A.; Silva, M.",
      event: "IEEE International Conference on Healthcare Informatics",
      year: "2023",
      location: "Boston, USA",
      pages: "pp. 87-94",
      type: "Conferência"
    }
  ];

  const books = [
    {
      title: "Fundamentos de Inteligência Artificial Aplicada",
      authors: "Silva, M.; Santos, J.; Costa, A.",
      publisher: "Editora Acadêmica",
      year: "2022",
      isbn: "978-85-7890-123-4",
      pages: "324 páginas",
      type: "Livro"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Q1":
        return "bg-green-100 text-green-800 border-green-200";
      case "Q2":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Q3":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const PublicationCard = ({ publication, showImpact = false }: { publication: any; showImpact?: boolean }) => (
    <Card className="shadow-elegant hover:shadow-lg transition-smooth">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline">
            {publication.type}
          </Badge>
          <div className="flex gap-2">
            {showImpact && publication.impact && (
              <Badge className={getImpactColor(publication.impact)}>
                {publication.impact}
              </Badge>
            )}
            <span className="text-sm text-muted-foreground font-medium">
              {publication.year}
            </span>
          </div>
        </div>
        <CardTitle className="text-lg leading-tight">{publication.title}</CardTitle>
        <CardDescription className="text-primary font-medium">
          {publication.authors}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            {publication.journal && (
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Periódico:</span> {publication.journal}
              </p>
            )}
            {publication.event && (
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Evento:</span> {publication.event}
              </p>
            )}
            {publication.publisher && (
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Editora:</span> {publication.publisher}
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            {publication.volume && (
              <span><span className="font-medium">Volume:</span> {publication.volume}</span>
            )}
            {publication.location && (
              <span><span className="font-medium">Local:</span> {publication.location}</span>
            )}
            {publication.isbn && (
              <span><span className="font-medium">ISBN:</span> {publication.isbn}</span>
            )}
            <span><span className="font-medium">Páginas:</span> {publication.pages}</span>
          </div>

          <div className="pt-3">
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              Acessar Publicação
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Publicações
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossas contribuições científicas em periódicos renomados, 
            conferências internacionais e publicações acadêmicas.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Artigos Publicados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Conferências</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground">Livros</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1200+</div>
            <div className="text-muted-foreground">Citações</div>
          </div>
        </div>

        {/* Publications Tabs */}
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="articles" className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Artigos
            </TabsTrigger>
            <TabsTrigger value="conferences" className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Conferências
            </TabsTrigger>
            <TabsTrigger value="books" className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Livros
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <PublicationCard key={index} publication={article} showImpact={true} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="conferences" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {conferences.map((conference, index) => (
                <PublicationCard key={index} publication={conference} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {books.map((book, index) => (
                <PublicationCard key={index} publication={book} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Acesso Completo às Publicações
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Para acessar o texto completo de nossas publicações ou solicitar informações 
              sobre colaborações acadêmicas, entre em contato conosco.
            </p>
            <Button className="bg-primary hover:bg-primary-dark">
              Solicitar Acesso
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;