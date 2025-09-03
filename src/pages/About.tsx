import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Calendar, MapPin, Target } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Maria Silva",
      role: "Coordenadora do Grupo",
      description: "Doutora em Ciência da Computação com especialização em IA",
      image: "MS"
    },
    {
      name: "Dr. João Santos",
      role: "Pesquisador Sênior",
      description: "PhD em Engenharia de Software e Machine Learning",
      image: "JS"
    },
    {
      name: "Dr. Ana Costa",
      role: "Pesquisadora",
      description: "Especialista em Análise de Dados e Estatística",
      image: "AC"
    }
  ];

  const areas = [
    "Inteligência Artificial",
    "Machine Learning",
    "Análise de Dados",
    "Engenharia de Software",
    "Computação Científica",
    "Sistemas Distribuídos"
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quem Somos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossa história, missão e a equipe dedicada que torna possível 
            o desenvolvimento de pesquisas de excelência.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-6 h-6 mr-2 text-primary" />
                Nossa Missão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolver pesquisa científica de excelência que contribua para o avanço 
                do conhecimento em nossa área de atuação, formando recursos humanos qualificados 
                e transferindo conhecimento para a sociedade através de soluções inovadoras.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                Nossa Visão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecido como um grupo de pesquisa de referência nacional e internacional, 
                contribuindo significativamente para o desenvolvimento científico e tecnológico, 
                e formando pesquisadores de excelência.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Areas of Research */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Áreas de Pesquisa
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {area}
              </Badge>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-elegant text-center">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{member.image}</span>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Publicações</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Estudantes Formados</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;