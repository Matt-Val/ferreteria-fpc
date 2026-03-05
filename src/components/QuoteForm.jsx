import React, { useState } from 'react';
import '../styles/QuoteForm.css';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    producto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí programaremos la lógica para enviar el correo o conectar con Jumpseller
    console.log('Datos de cotización:', formData);
    alert('Solicitud enviada. Nos pondremos en contacto a la brevedad.');
  };

  return (
    <section id="cotizar" className="quote-section">
      <div className="container quote-container">
        <div className="quote-info">
          <span className="section-label">Contacto Técnico</span>
          <h2 className="section-title">Solicita tu <span>Cotización</span></h2>
          <p className="quote-text">
            ¿Necesitas equipamiento para un proyecto a gran escala? Déjanos tus datos y un especialista técnico de **FPC** te asesorará con los mejores precios del mercado.
          </p>
          <div className="contact-pills">
            <div className="pill">📞 +56 9 4854 2010</div>
            <div className="pill">✉️ ferreteriafpc@gmail.com</div>
          </div>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre Completo</label>
            <input 
              type="text" 
              name="nombre" 
              placeholder="Ej: Juan Pérez" 
              required 
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input 
                type="email" 
                name="email" 
                placeholder="juan@empresa.cl" 
                required 
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input 
                type="tel" 
                name="telefono" 
                placeholder="+56 9 ..." 
                required 
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Producto de Interés</label>
            <input 
              type="text" 
              name="producto" 
              placeholder="Ej: Soldadora MIG 200A" 
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mensaje o Requerimientos Especiales</label>
            <textarea 
              name="mensaje" 
              placeholder="Cuéntanos más sobre tu proyecto..." 
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">Enviar Solicitud</button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;