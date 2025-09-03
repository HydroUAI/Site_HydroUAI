import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-3" />
                <span>grupo@universidade.edu.br</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-3" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Universidade, Campus - Cidade, Estado</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-smooth">
                Quem Somos
              </a>
              <a href="/projects" className="block text-muted-foreground hover:text-primary transition-smooth">
                Projetos
              </a>
              <a href="/publications" className="block text-muted-foreground hover:text-primary transition-smooth">
                Publicações
              </a>
              <a href="/downloads" className="block text-muted-foreground hover:text-primary transition-smooth">
                Downloads
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Sobre o Grupo</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Grupo de pesquisa dedicado ao avanço do conhecimento científico e desenvolvimento 
              de soluções inovadoras em nossa área de atuação.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Grupo de Pesquisa. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-muted-foreground text-sm">
                Desenvolvido com ❤️ para a comunidade acadêmica
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;