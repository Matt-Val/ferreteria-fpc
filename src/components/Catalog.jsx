import React, { useState, useEffect } from 'react';
import '../styles/Catalog.css';


const Catalog = () => { 
    const [products, setProducts] = useState([]);


    useEffect( () => {
        if (window.JumpsellerData && window.JumpsellerData.products) { 
            setProducts(window.JumpsellerData.products);
        } else { 
            setProducts([
                {
                    id: 1,
                    name: "Taladro Percutor Industrial",
                    price: 85000,
                    image: "https://via.placeholder.com/250",
                    category: "Herramientas"

                },
                { 
                    id: 2,
                    name: "Soldadura Inverter 200A",
                    price: 120000,
                    image: "https://via.placeholder.com/250",
                    category: "Soldadura"
                }
            ]);
        }
    }, []);

    return (
        <section className="catalog-container">
            <h2 className="catalog-title">Nuestro Catálogo Industrial</h2>

            <div className="product-grid">

                {products.map((product) => ( 
                    <div key={product.id} className="product-card">
                        <div className="product-image-container">
                            <img src={product.image} alt={product.name} className="product-image" />
                        </div>

                        <div className="product-info">
                            <span className="product-category">{product.category}</span>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">${product.price.toLocaleString('es-CL')}</p>
                            <button className="btn-quote">
                                Cotizar Producto
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Catalog;