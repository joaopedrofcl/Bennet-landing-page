import React, { useState } from "react";
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Posiciona no topo da seção
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span className="navbar__brand">Desenvolvedor</span>
      </div>
      <div className={`navbar__right ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar__list">
          <li><a href="#" onClick={() => scrollToSection("sobre")}>Sobre</a></li>
          <li><a href="#" onClick={() => scrollToSection("cards")}>Cards</a></li>
          <li><a href="#" onClick={() => scrollToSection("graficos")}>Gráficos</a></li>
        </ul>
      </div>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className="navbar__icon"></span>
      </div>
    </nav>
  );
};

export default Navbar;
