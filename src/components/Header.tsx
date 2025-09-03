import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Início",
    href: "/"
  }, {
    name: "Quem Somos",
    href: "/about"
  }, {
    name: "Projetos",
    href: "/projects"
  }, {
    name: "Publicações",
    href: "/publications"
  }, {
    name: "Downloads",
    href: "/downloads"
  }, {
    name: "Fale Conosco",
    href: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center transition-smooth hover:scale-105">
                <span className="text-primary-foreground font-bold text-sm">GP</span>
              </div>
            </Link>
            <Link to="/" className="ml-3 text-xl font-semibold text-foreground hover:text-primary transition-smooth">Hydro-UAI
          </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${isActive(item.href) ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>
                  {item.name}
                </Link>)}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border mt-4">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${isActive(item.href) ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;