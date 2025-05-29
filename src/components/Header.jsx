// Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Curso de React.js</h1>
        <nav className="header-nav" ref={menuRef}>
          <div>
            <button className="menu-button" onClick={toggleMenu}>
              Menú <span className="arrow">{isMenuOpen ? "▲" : "▼"}</span>
            </button>
            <ul className={`dropdown-menu ${isMenuOpen ? "open" : ""}`}>
              <li>
                <a href="#inicio" onClick={toggleMenu}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#hooks" onClick={toggleMenu}>
                  Hooks
                </a>
              </li>
              <li>
                <a href="#componentes" onClick={toggleMenu}>
                  Componentes
                </a>
              </li>
              <li>
                <a href="#rutas" onClick={toggleMenu}>
                  Rutas
                </a>
              </li>
              <li>
                <a href="#estado-global" onClick={toggleMenu}>
                  Estado Global
                </a>
              </li>
            </ul>
          </div>
          <button
            className="theme-toggle-button"
            onClick={toggleTheme}
            aria-label={`Cambiar a modo ${
              theme === "light" ? "oscuro" : "claro"
            }`}
          >
            {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
