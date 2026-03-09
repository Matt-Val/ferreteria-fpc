import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Drill, Wrench, Flame, ShieldCheck } from 'lucide-react';
import '../styles/Catalogos.css';

// Datos de los catálogos

// Boton iluminado abajo del catalog, para enviarlo a catalogos, que sea llamativo
// Herramientas electricas: 

const catalogosData = [
  {
    id: 1,
    titulo: "Catálogo Herramientas Eléctricas",
    descripcion: "..",
    paginas: 11,
    url: "/catalogo/cat-herramientas-electricas.pdf",
    Icon: Drill
  },
  {
    id: 2,
    titulo: "Catálogo Automotriz y Herramientas de Mano",
    descripcion: "..",
    paginas: 77,
    url: "/catalogo/cat-herramientas-mano.pdf",
    Icon: Wrech
  },
  {
    id: 3,
    titulo: "Catálogo Equipos de Soldar",
    descripcion: "..",
    paginas: 20,
    url: "/catalogo/cat-equipos-soldar.pdf",
    Icon: Flame
  },
  {
    id: 4,
    titulo: "Catálogo Artículos de Seguridad Industrial",
    descripcion: "..",
    paginas: 107,
    url: "/catalogo/catalogo-seguridad-industrial.pdf",
    Icon: ShieldCheck
  }
];

const CatalogoCard = ({ titulo, descripcion, paginas, url }) => (
  <div className="catalogo-card">
    <div className="catalogo-icon">📄</div>
    <h3 className="catalogo-titulo">{titulo}</h3>
    <p className="catalogo-descripcion">{descripcion}</p>
    <p className="catalogo-info">{paginas} páginas</p>
    <div className="catalogo-buttons">
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-ver"
      >
         Ver Catálogo
      </a>
      <a 
        href={url} 
        download
        className="btn-descargar"
      >
         Descargar
      </a>
    </div>
  </div>
);

const Catalogos = () => {
  return (
    <div>
      <Header />
      
      <main className="catalogos-page">
        <div className="container">
          <div className="catalogos-header">
            <h1>Nuestros Catálogos</h1>
            <p>Explora nuestra línea completa de productos industriales y profesionales</p>
          </div>

          <div className="catalogos-grid">
            {catalogosData.map((catalogo) => (
              <CatalogoCard key={catalogo.id} {...catalogo} />
            ))}
          </div>

          <div className="catalogos-info">
            <p>💡 <strong>Tip:</strong> Puedes ver los catálogos en tu navegador o descargarlos para consultarlos sin conexión.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalogos;