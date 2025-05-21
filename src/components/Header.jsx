import React, { useState } from 'react';
import './Header.css'; // Vamos a crear este archivo CSS

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Curso de React.js</h1>
        <nav className="header-nav">
          <button className="menu-button" onClick={toggleMenu}>
            Menú <span className="arrow">{isMenuOpen ? '▲' : '▼'}</span>
          </button>
          <ul className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
            <li><a href="#hooks" onClick={toggleMenu}>Hooks</a></li>
            <li><a href="#componentes" onClick={toggleMenu}>Componentes</a></li>
            <li><a href="#rutas" onClick={toggleMenu}>Rutas</a></li>
            <li><a href="#estado-global" onClick={toggleMenu}>Estado Global</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;