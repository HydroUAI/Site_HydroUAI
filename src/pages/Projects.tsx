import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, Target } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sistema Inteligente de Análise de Dados",
      description: "Desenvolvimento de plataforma baseada em IA para análise automatizada de grandes volumes de dados científicos.",
      status: "Em andamento",
      period: "2023 - 2025",
      team: "5 pesquisadores",
      technologies: ["Python", "TensorFlow", "Apache Spark", "React"],
      funding: "CNPq"
    },
    {
      title: "Otimização de Algoritmos Distribuídos",
      description: "Pesquisa focada na melhoria de performance de algoritmos em sistemas distribuídos de larga escala.",
      status: "Concluído",
      period: "2021 - 2023",
      team: "3 pesquisadores",
      technologies: ["C++", "MPI", "Docker", "Kubernetes"],
      funding: "FAPESP"
    },
    {
      title: "Machine Learning para Diagnóstico Médico",
      description: "Aplicação de técnicas de aprendizado de máquina para auxiliar no diagnóstico precoce de doenças.",
      status: "Em andamento",
      period: "2022 - 2024",
      team: "7 pesquisadores",
      technologies: ["Python", "PyTorch", "OpenCV", "Flask"],
      funding: "CAPES"
    },
    {
      title: "Blockchain para Gestão de Dados Acadêmicos",
      description: "Implementação de solução blockchain para garantir integridade e transparência de dados acadêmicos.",
      status: "Planejado",
      period: "2024 - 2026",
      team: "4 pesquisadores",
      technologies: ["Solidity", "Ethereum", "Node.js", "Web3.js"],
      funding: "CNPq"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em andamento":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Concluído":
        return "bg-green-100 text-green-800 border-green-200";
      case "Planejado":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Projetos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os projetos de pesquisa em desenvolvimento e concluídos pelo nosso grupo, 
            suas aplicações e impacto na comunidade científica.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-lg transition-smooth">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground font-medium">
                    {project.funding}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Project Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {project.team}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Interessado em Colaborar?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estamos sempre abertos a parcerias e colaborações em pesquisa. 
              Entre em contato para discutir oportunidades de trabalho conjunto.
            </p>
            <Button className="bg-primary hover:bg-primary-dark">
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;