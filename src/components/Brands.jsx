import React from 'react';
import '../styles/Brands.css';

const brands = [
  { id: 1, name: 'HELA', logo: '/brands/logo01.png' },
  { id: 2, name: '3M', logo: '/brands/logo02.png' },
  { id: 3, name: 'DeWalt', logo: '/brands/logo03.jpg' },
  { id: 4, name: 'Lincoln', logo: '/brands/logo04.jpeg' },
  { id: 5, name: 'Harden', logo: '/brands/logo05.png' },
  { id: 6, name: 'Indura', logo: '/brands/logo06.png' },
  { id: 7, name: 'Krafter', logo: '/brands/logo07.png' },
  { id: 8, name: 'Makita', logo: '/brands/logo08.png' },
  { id: 9, name: 'Total', logo: '/brands/logo09.png' },
  { id: 10, name: 'Würth', logo: '/brands/logo10.png' },
  { id: 11, name: 'Linde', logo: '/brands/logo11.jfif' },
];

const Brands = () => (
  <section className="brands">
    <div className="container">
      <div className="brands-header">
        <span className="section-label">Confianza y Calidad</span>
        <h2 className="section-title">Nuestras Marcas</h2>
        <div className="section-divider" />
      </div>

      <div className="brands-grid">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img
              src={brand.logo}
              alt={brand.name}
              title={brand.name}
              className="brand-logo"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Brands;