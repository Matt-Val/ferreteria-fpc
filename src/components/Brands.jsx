import React from 'react';
import '../styles/Brands.css';

const Brands = () => {
  // Array de marcas - En el futuro se puede conectar con Jumpseller
  const brands = [
    { id: 1, name: 'Bosch', logo: '/images/brands/logo01.png' },
    { id: 2, name: 'Stanley', logo: '/images/brands/logo02.png' },
    { id: 3, name: '3M', logo: '/images/brands/logo03.png' },
    { id: 4, name: 'Makita', logo: '/images/brands/logo04.png' },
    { id: 5, name: 'DeWalt', logo: '/images/brands/logo05.png' },
    { id: 6, name: 'MSA', logo: '/images/brands/logo06.png' },
  ];

  return (
    <section className="brands">
      <div className="container">
        <div className="brands-header">
          <h2 className="brands-title">Marcas que Confían en Nosotros</h2>
          <div className="brands-divider"></div>
        </div>
        
        <div className="brands-slider">
          <div className="brands-track">
            {/* Mapeo de marcas para crear el carrusel visual */}
            {brands.map((brand) => (
              <div key={brand.id} className="brand-item">
                <img 
                  src={brand.logo} 
                  alt={`Logo de ${brand.name}`} 
                  title={brand.name}
                  className="brand-logo" 
                />
              </div>
            ))}
            {/* Duplicamos para el efecto de scroll infinito si fuera necesario */}
            {brands.map((brand) => (
              <div key={`dup-${brand.id}`} className="brand-item">
                <img 
                  src={brand.logo} 
                  alt={`Logo de ${brand.name}`} 
                  className="brand-logo" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;