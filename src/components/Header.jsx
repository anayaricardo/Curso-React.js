// Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef(null);
  const [hideHeader, setHideHeader] = useState(false); // Oculta todo el header
  const lastScrollY = useRef(window.scrollY);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  // Oculta todo el header al hacer scroll hacia abajo
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 60) {
        setHideHeader(true); // Scroll hacia abajo
      } else {
        setHideHeader(false); // Scroll hacia arriba
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${hideHeader ? " hide-header" : ""}`}>
      <div className="header-content">
        <h1 className="header-title">React: Fundamentos </h1>
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
