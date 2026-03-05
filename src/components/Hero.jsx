import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg" />
            <div className="hero-overlay" />

            <div className="hero-content">
                <span className="hero-badge">Expertos Ferreteros Industriales</span>

                <h1 className="hero-title">
                    Abastecimiento
                    <span className="orange">Industrial</span>
                </h1>

                <p className="hero-description">
                    Equipos de soldadura, seguridad industrial y herramientas de mano.
                    Servicio en todo Chile con las mejores marcas del mercado.
                </p>

                <div className="hero-actions">
                    <a href="#catalogo" className="btn-primary">Ver Catálogo</a>
                    <a href="#cotizar" className="btn-secondary">Solicitar Cotización</a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;