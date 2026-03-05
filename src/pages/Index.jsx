import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Catalog from '../components/Catalog';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';
import '../styles/index.css';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Navegación y Buscador */}
      <Header />
      
      <main>
        {/* 2. Banner Principal de Impacto */}
        <Hero />
        
        {/* 3. Logos de Marcas Industriales */}
        <Brands />
        
        {/* 4. Catálogo de Productos con Filtros */}
        <Catalog />
        
        {/* 5. Formulario de Cotización Técnica */}
        <QuoteForm />
      </main>
      
      {/* 6. Pie de Página y Contacto */}
      <Footer />
    </div>
  );
};

export default Index;