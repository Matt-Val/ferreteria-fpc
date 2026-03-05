import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-section">
          <h3 className="footer-logo">FPC<span>Ferretería</span></h3>
          <p className="footer-description">
            Líderes en suministros industriales, equipos de soldadura y seguridad. 
            Calidad garantizada para los proyectos más exigentes de Chile.
          </p>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <ul className="footer-links">
            <li>📍 Silvia 23, Quilpué</li>
            <li>📞 +56 9 4854 2010</li>
            <li>📞 +56 9 5427 4397</li>
            <li>✉️ ferreteriafpc@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Navegación</h4>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#cotizar">Solicitar Cotización</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-icons">
            <a href="#" className="social-link">FB</a>
            <a href="#" className="social-link">IG</a>
            <a href="#" className="social-link">WA</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Ferretería FPC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;