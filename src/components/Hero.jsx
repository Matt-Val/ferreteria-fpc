import React from 'react';
import '../styles/Hero.css';

const Hero = () => { 
    const scrollToCatalog = () => { 
        const catalogSection = document.getelementById('catalogo');
        if (catalogSection) { 
            catalogSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return ( 
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-container">
                    <span className="hero-badge">Expertos en Suministros Industriales</span>
                    <h1 className="hero-title">
                        Potencia tus Proyectos con la mejor <span>Ferretería Industrial</span>
                    </h1>
                    <p className="hero-description">
                        Especialistas en equipos de soldadura, seguridad industrial y herramientas de alta gama. 
                        Servicio profesional y despacho en todo Chile.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary" onClick={scrollToCatalog}>
                            Ver Catálogo
                        </button>
                        <a href="#cotizar" className="btn-secondary">
                            Solicitar Cotización
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;    