import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Catalog.css';

const productsData = {
  soldadura: [
    {
      name: "Máquina de Soldar MIG 250 ",
      image: "public/soldadura-mig.jpg",
      description: "Máquina de soldar diseñada para uso semi-industrial con doble proceso MIG y MMA."
    },
    {
      name: "Compresor de Aire Huracan 220v",
      image: "public/compresor-indura.jpg",
      description: "Diseñado para acumular y aumentar presión de aire dentro de su tanque mediante compresión del mismo."
    },
    {
      name: "Soldadura Indura",
      image: "public/caja-indura.png",
      description: "Electrodos de alta calidad para soldadura de acero."
    },
    {
      name: "Alambre MIG 15KG",
      image: "public/alambre-mig.jpg",
      description: "Alambre perfecto para lograr uniones fuertes y duraderas en tus proyectos de soldadura."
    },
  ],
  seguridad: [
    {
      name: "Guante Cabritilla",
      image: "public/guante-cabritilla.png",
      description: "Guante de cuero suave y flexible, ideal para trabajos que requieren destreza y protección."
    },
    {
      name: "Coleto Soldador de Cuero",
      image: "public/coleto-soldador.png",
      description: "Coleto de cuero profesional con alta resistencia al calor, chispas y salpicaduras."
    },
    {
      name: "Overol Poplin con Reflectante",
      image: "public/overol-poplin.jpg",
      description: "Overol de trabajo con cintas reflectantes para mayor visibilidad y seguridad."
    },
    {
      name: "Zapatos de Seguridad Punta Acero",
      image: "public/zapato-seguridad.jpg",
      description: "Calzado de seguridad con punta de acero y suela antideslizante."
    },
  ],
  herramientas: [
    {
      name: "Taladro Atornillador Inalámbrico",
      image: "public/taladro-harden.jpg",
      description: "Taladro inalámbrico de alto rendimiento, incluye 1 batería y cargador."
    },
    {
      name: "Sierra Circular 185mm",
      image: "public/sierra-circular-harden.jpg",
      description: "Sierra circular de alta calidad para cortes precisos en diversos materiales."
    },
    {
      name: "Rotomartillo",
      image: "public/rotomartillo-makita.jpg",
      description: "Rotomartillo de potencia y durabilidad, ideal para perforación en concreto y piedra."
    },
    {
      name: "Esmeril Angular",
      image: "public/esmeril-angular-makita.jpg",
      description: "Esmeril angular de alta calidad para pulido y corte en diversos materiales."
    },
  ],
};

const categories = [
  { key: "soldadura", label: "Equipos para Soldar" },
  { key: "seguridad", label: "Ropa Seguridad Industrial" },
  { key: "herramientas", label: "Herramientas de Mano" },
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("soldadura");

  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <div className="catalog-header">
          <span className="section-label">Nuestros Productos</span>
          <h2 className="section-title">Catálogo</h2>
          <div className="section-divider" />
        </div>

        <div className="catalog-tabs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`catalog-tab ${activeCategory === cat.key ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {productsData[activeCategory].map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-card-img-wrap">
                <img className="product-card-img" src={product.image} alt={product.name} />
                <div className="product-card-badge">{product.category}</div>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-desc">{product.description}</p>
                <p className="product-card-price">{product.price}</p>
                <a href="#cotizar" className="btn-primary">Cotizar</a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Botón CTA hacia página de Catálogos ── */}
        <div className="catalog-cta-wrapper">
          <Link to="/catalogos" className="btn-ver-catalogos">
            <svg
              className="btn-ver-catalogos-icon"
              width="20" height="20"
              viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
            Ver Catálogos Completos
            <span className="btn-ver-catalogos-arrow">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Catalog;