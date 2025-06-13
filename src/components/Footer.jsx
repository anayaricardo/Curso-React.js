import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';

const Footer = ({ githubRepoLink = "https://github.com/tu-usuario/tu-repositorio", linkedinProfileLink = "https://www.linkedin.com/in/tu-perfil-linkedin" }) => {
  const [showFooter, setShowFooter] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < lastScrollY.current) {
        setShowFooter(true); // Scroll hacia arriba
      } else {
        setShowFooter(false); // Scroll hacia abajo
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className={`footer${showFooter ? " show-footer" : ""}`}>
      <div className="footer-content">
        <p>&copy; Creado por Ricardo Anaya</p>
        <div className="footer-links">
          {/* Enlace a GitHub */}
          <a
            href={githubRepoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Conoce el código en GitHub"
          >
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="social-icon">
              <path fillRule="evenodd" fill="#ffffff" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2.0 2.2-.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            Conoce el código aquí
          </a>

          {/* Enlace a LinkedIn */}
          <a
            href={linkedinProfileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Visita mi perfil de LinkedIn"
          >
            <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="social-icon">
              <path fillRule="evenodd" fill="#ffffff" d="M20.447 20.452h-3.513v-5.48c0-1.303-.024-2.977-1.815-2.977-1.816 0-2.094 1.408-2.094 2.879v5.578H9.529V9.248h3.362v1.541h.046c.471-.893 1.618-1.834 3.325-1.834 3.567 0 4.223 2.35 4.223 5.408v6.239zM5.337 7.747c-1.144 0-2.07-.923-2.07-2.058 0-1.132.926-2.056 2.07-2.056 1.143 0 2.07.924 2.07 2.056 0 1.135-.927 2.058-2.07 2.058zM6.924 20.452H3.513V9.248h3.411v11.204z" />
            </svg>
            Mi perfil de LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;