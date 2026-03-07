import React, { useState } from 'react';
import '../styles/Catalog.css';

const productsData = {
  soldadura: [
    {
      name: "Máquina de Soldar MIG 250 ",
      image: "public/soldadura-mig.jpg",
      description: "Soldadora inversora semi-industrial con doble proceso MIG y MMA",
      category: "Equipos para Soldar"
    },
    {
      name: "Soldadora TIG AC/DC 250A",
      image: "/cat-soldadura.jpg",
      description: "Soldadura TIG para aluminio y acero inoxidable.",
      category: "Equipos para Soldar"
    },
    {
      name: "Soldadora Arco Manual 160A",
      image: "/cat-soldadura.jpg",
      description: "Ideal para trabajos ligeros y reparaciones.",
      category: "Equipos para Soldar"
    },
    {
      name: "Electrodos 6011 (5kg)",
      image: "/cat-soldadura.jpg",
      description: "Electrodos multipropósito de alta penetración.",
      category: "Equipos para Soldar"
    },
  ],
  seguridad: [
    {
      name: "Guante Cabritilla",
      image: "public/guante-cabritilla.png",
      description: "Guante de cuero suave y flexible, ideal para trabajos que requieren destreza y protección.",
      category: "Ropa Seguridad Industrial"
    },
    {
      name: "Coleto Soldador de Cuero",
      image: "public/coleto-soldador.png",
      description: "Coleto de cuero profesional con alta resistencia al calor, chispas y salpicaduras.",
      category: "Ropa Seguridad Industrial"
    },
    {
      name: "Overol Poplin con Reflectante",
      image: "public/overol-poplin.jpg",
      description: "Overol de trabajo con cintas reflectantes para mayor visibilidad y seguridad.",
      category: "Ropa Seguridad Industrial"
    },
    {
      name: "Zapatos de Seguridad Punta Acero",
      image: "public/zapato-seguridad.jpg",
      description: "Calzado de seguridad con punta de acero y suela antideslizante.",
      category: "Ropa Seguridad Industrial"
    },
  ],
  herramientas: [
    {
      name: "Taladro Percutor Inalámbrico Makita",
      image: "public/taladro-percutor-makita.jpg",
      description: "Taladro percutor inalámbrico de alta potencia para trabajos exigentes.",
      category: "Herramientas de Mano"
    },
    {
      name: "Llave de Impacto Inalámbrico TOTAL",
      image: "public/llave-impacto.jpg",
      description: "..",
      category: "Herramientas de Mano"
    },
    {
      name: "Juego Llaves Punta Corona 12PCS",
      image: "public/juego-llaves.jpg",
      description: "Juego de llaves de punta corona para tuercas y pernos de difícil acceso.",
      category: "Herramientas de Mano"
    },
    {
      name: "Mazo de Goma 1Kg",
      image: "/cat-herramientas.jpg",
      description: "Sin daño a superficies delicadas.",
      category: "Herramientas de Mano"
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
      </div>
    </section>
  );
};

export default Catalog;