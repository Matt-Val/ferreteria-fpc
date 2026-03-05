import React, { useState } from 'react';
import '../styles/QuoteForm.css';

const categories = [
  "Equipos para Soldar",
  "Ropa Seguridad Industrial",
  "Herramientas de Mano",
  "Otro",
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    categoria: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Solicitud enviada! Nos pondremos en contacto a la brevedad.');
  };

  return (
    <section id="cotizar" className="quote-section">
      <div className="container quote-container">
        {/* Left pane */}
        <div className="quote-info">
          <span className="section-label">Sin Compromiso</span>
          <h2 className="section-title">
            Solicita tu <span>Cotización</span>
          </h2>
          <p className="quote-text">
            Completa el formulario con los productos que necesitas y te enviaremos una cotización
            personalizada a tu correo electrónico. También puedes contactarnos directamente por
            WhatsApp para una respuesta más rápida.
          </p>
          <ul className="quote-benefits">
            <li><CheckIcon /> Cotizaciones sin costo ni compromiso</li>
            <li><CheckIcon /> Respuesta en menos de 24 horas</li>
            <li><CheckIcon /> Precios competitivos para empresas</li>
            <li><CheckIcon /> Despacho a todo Chile</li>
          </ul>
        </div>

        {/* Form card */}
        <div className="quote-form-card">
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo *"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="empresa"
                  placeholder="Empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <select
                name="categoria"
                required
                value={formData.categoria}
                onChange={handleChange}
              >
                <option value="" disabled>Selecciona categoría *</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="mensaje"
                placeholder="Describe los productos que necesitas cotizar... *"
                required
                value={formData.mensaje}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-submit">
              <SendIcon />
              Enviar Cotización
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;