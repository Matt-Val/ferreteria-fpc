import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return ( 
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                {/* Aquí se inyectará la variable Liquid de Jumpseller: {{ store.logo }} */}
                <h1 className="logo-text">FPC<span>Ferretería</span></h1>
                </div>

                <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
                    <ul className="nav-list">
                        <li> <a href="/" className="nav-link">Inicio</a> </li>
                        <li> <a href="#catalogo" className="nav-link">Catálogo</a> </li>
                        <li> <a href="#nosotros" className="nav-link">Nosotros</a> </li>
                        <li> <a href="#cotizar" className="nav-link">Cotizar</a> </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <form className="search-form">
                        <input 
                            type="text"
                            placeholder="Buscar Herramientas..."
                            className="search-input" 
                        />
                        <button type="submit" className="search-btn">
                            <i className="search-icon">🔍</i>
                        </button>
                    </form>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;