import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Drill, Wrench, Flame, Hand } from 'lucide-react';
import '../styles/Catalogos.css';

// Realizar boton para ver mas que sea llamativo (con luces)
// Hacer una animacion ???
const catalogosData = [
  {
    id: 1,
    titulo: "Herramientas Eléctricas",
    descripcion: "Taladros, amoladoras, sierras y más",
    paginas: 11,
    url: "/catalogo/cat-herramientas-electricas.pdf",
    Icon: Drill,
    color: "#3182ce"
  },
  {
    id: 2,
    titulo: "Automotriz y Herramientas de Mano",
    descripcion: "Llaves, dados, herramientas manuales",
    paginas: 77,
    url: "/catalogo/cat-herramientas-mano.pdf",
    Icon: Wrench,
    color: "#e53e3e"
  },
  {
    id: 3,
    titulo: "Equipos para Soldar",
    descripcion: "Soldadoras, electrodos y accesorios",
    paginas: 20,
    url: "/catalogo/cat-equipos-soldar.pdf",
    Icon: Flame,
    color: "#dd6b20"
  },
  {
    id: 4,
    titulo: "Artículos Seguridad Industrial",
    descripcion: "EPP, señalética y equipamiento",
    paginas: 107,
    url: "/catalogo/catalogo-seguridad-industrial.pdf",
    Icon: Hand,
    color: "#38a169"
  }
];

const CatalogoCard = ({ titulo, descripcion, paginas, url, Icon, color }) => (
  <div className="catalogo-card">
    <div className="catalogo-icon" style={{ color }}>
      <Icon size={48} strokeWidth={2} />
    </div>
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