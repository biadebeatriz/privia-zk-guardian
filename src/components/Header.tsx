
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-privia-petrol">
            Privia<span className="text-privia-blue text-3xl">.</span>
          </h1>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-privia-petrol"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#inicio" className="text-white font-medium hover:text-privia-blue transition-colors">
            Início
          </a>
          <a href="#como-funciona" className="text-white font-medium hover:text-privia-blue transition-colors">
            Como Funciona
          </a>
          <a href="#planos" className="text-white font-medium hover:text-privia-blue transition-colors">
            Planos
          </a>
          <Button asChild className="bg-privia-blue hover:bg-privia-blue/90 text-white">
            <Link to="/hospital">Entrar</Link>
          </Button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 px-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a 
              href="#inicio" 
              className="text-privia-petrol hover:text-privia-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#como-funciona" 
              className="text-privia-petrol hover:text-privia-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#planos" 
              className="text-privia-petrol hover:text-privia-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </a>
            <Link 
              to="/hospital"
              className="bg-privia-blue hover:bg-privia-blue/90 text-white py-2 px-4 rounded w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
