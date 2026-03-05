import React, { useState } from 'react';
import '../styles/Catalog.css';

const productsData = {
  soldadura: [
    {
      name: "Soldadora MIG 200A",
      price: "$189.990",
      image: "/cat-soldadura.jpg",
      description: "Soldadora MIG/MAG profesional con regulación digital.",
      category: "Equipos para Soldar"
    },
    {
      name: "Soldadora TIG AC/DC 250A",
      price: "$349.990",
      image: "/cat-soldadura.jpg",
      description: "Soldadura TIG para aluminio y acero inoxidable.",
      category: "Equipos para Soldar"
    },
    {
      name: "Soldadora Arco Manual 160A",
      price: "$79.990",
      image: "/cat-soldadura.jpg",
      description: "Ideal para trabajos ligeros y reparaciones.",
      category: "Equipos para Soldar"
    },
    {
      name: "Electrodos 6011 (5kg)",
      price: "$24.990",
      image: "/cat-soldadura.jpg",
      description: "Electrodos multipropósito de alta penetración.",
      category: "Equipos para Soldar"
    },
  ],
  seguridad: [
    {
      name: "Casco MSA V-Gard",
      price: "$18.990",
      image: "/cat-seguridad.jpg",
      description: "Casco certificado para industria y construcción.",
      category: "Ropa Seguridad Industrial"
    },
    {
      name: "Overol Ignifugo Talla M",
      price: "$54.990",
      image: "/cat-seguridad.jpg",
      description: "Protección térmica certificada EN 531.",
      category: "Ropa Seguridad Industrial"
    },
    {
      name: "Guantes de Cuero Soldador",
      price: "$9.990",
      image: "/cat-seguridad.jpg",
      description: "Protección de manos para trabajos de soldadura.",
      category: "Ropa Seguridad Industrial"
    },
    {
      name: "Pantalla de Soldadura Auto",
      price: "$34.990",
      image: "/cat-seguridad.jpg",
      description: "Oscurecimiento automático DIN 9-13.",
      category: "Ropa Seguridad Industrial"
    },
  ],
  herramientas: [
    {
      name: "Juego de Llaves 12 pzas",
      price: "$29.990",
      image: "/cat-herramientas.jpg",
      description: "Acero cromo-vanadio, llaves combinadas.",
      category: "Herramientas de Mano"
    },
    {
      name: "Alicate Multipropósito",
      price: "$12.990",
      image: "/cat-herramientas.jpg",
      description: "Alicate de presión profesional resistente.",
      category: "Herramientas de Mano"
    },
    {
      name: "Set Destornilladores 6 pzas",
      price: "$19.990",
      image: "/cat-herramientas.jpg",
      description: "Mango ergonómico, puntas endurecidas.",
      category: "Herramientas de Mano"
    },
    {
      name: "Mazo de Goma 1Kg",
      price: "$7.990",
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