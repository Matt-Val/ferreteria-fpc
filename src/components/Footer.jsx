import React from 'react';
import '../styles/Footer.css';

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.55 3.4 2 2 0 0 1 3.52 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);

const MapIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contacto">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-col">
          <div className="footer-logo-wrap">
            <div className="footer-logo-badge">FPC</div>
            <div className="footer-logo-text">
              <span className="logo-top">Abastecimiento</span>
              <span className="logo-sub">Industrial</span>
            </div>
          </div>
          <p className="footer-tagline">
            Empresa dedicada al ámbito industrial, 
            especializado en todo tipo de insumos de soldadura, 
            seguridad industrial, refrigeración, máquinas, 
            herramientas y gases con 25 años de experiencia en el rubro.
          </p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#cotizar">Cotizar</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="footer-links">
            <li>
              <PhoneIcon />
              <a href="tel:+56948542010">+56 9 4854 2010</a>
            </li>

            <li>
              <PhoneIcon />
              <a href="tel:+56954274397">+56 9 5427 4397</a>
            </li>
            <li>
              <MailIcon />
              <a href="mailto:ferrreteriafpc@gmail.com">ferrreteriafpc@gmail.com</a>
            </li>
            <li>
              <MapIcon />
              Silvia 23, Quilpué
            </li>
          </ul>
        </div>
      </div>

      <br /> 

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {currentYear} <span>FPC Abastecimiento Industrial</span>. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;