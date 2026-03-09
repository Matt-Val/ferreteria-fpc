import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="header-wrapper">
            {/* Top info bar */}
            <div className="top-bar">
                <div className="container top-bar-inner">
                    <div className="top-bar-contacts">
                        <a href="tel:+56948542010">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.55 3.4 2 2 0 0 1 3.52 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            +56 9 4854 2010
                        </a>
                        <a href="tel:+56954274397">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.55 3.4 2 2 0 0 1 3.52 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            +56 9 5427 4397
                        </a>
                        <a href="mailto:ferrreteriafpc@gmail.com">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            ferrreteriafpc@gmail.com
                        </a>
                    </div>
                    <div className="top-bar-badge">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        Servicio en Todo Chile 🔥
                    </div>
                </div>
            </div>

            {/* Main header */}
            <header className="header">
                <div className="container header-container">
                    <a href="/" className="logo">
                        <div className="logo-badge">FPC</div>
                        <div className="logo-text">
                            <span className="logo-top">Abastecimiento</span>
                            <span className="logo-sub">Industrial</span>
                        </div>
                    </a>

                    <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
                        <ul className="nav-list">
                            <li><a href="/" className="nav-link">Inicio</a></li>
                            <li><a href="/catalogos" className="nav-link">Catálogos</a></li>
                            <li><a href="#cotizar" className="nav-link">Cotizar</a></li>
                            <li><a href="#contacto" className="nav-link">Contacto</a></li>
                        </ul>
                    </nav>

                    <div className="header-cta">
                        <a href="#cotizar" className="btn-primary">Cotizar Ahora</a>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;