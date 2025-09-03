import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-research.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hydro-UAI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Integrando hidráulica, hidrologia e inteligência artificial para revolucionar 
            a gestão de recursos hídricos e enfrentar os desafios da água no século XXI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/projects">Conheça Nossos Projetos</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/publications">Ver Publicações</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hydro-UAI Research Group
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pioneiros na aplicação de inteligência artificial para resolver problemas complexos em 
              hidráulica e hidrologia, desenvolvendo soluções inteligentes para a gestão sustentável da água.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-elegant transition-smooth hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Expertise Multidisciplinar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Especialistas em hidráulica, hidrologia e IA trabalhando em soluções inovadoras para recursos hídricos
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant transition-smooth hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>IA para Recursos Hídricos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Modelos preditivos e algoritmos de ML para otimização de sistemas hidráulicos e hidrológicos
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant transition-smooth hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Pesquisa de Impacto</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Publicações em revistas de hidráulica, hidrologia e inteligência artificial de alto impacto
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant transition-smooth hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Inovação Reconhecida</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pioneirismo na integração de IA com ciências hídricas reconhecido pela comunidade científica
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Junte-se à Nossa Pesquisa
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interessado em colaborar ou saber mais sobre nossos projetos? Entre em contato conosco 
            e descubra as oportunidades de pesquisa disponíveis.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark" asChild>
            <Link to="/contact">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
