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

                {products.map((product))}
            </div>
        </section>
    )
}