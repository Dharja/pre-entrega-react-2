import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Catalog() {
    // Datos de los productos
    const products = [
        {
            id: 1,
            name: 'Producto 1',
            image: 'ruta-de-la-imagen-1.jpg',
        },
        {
            id: 2,
            name: 'Producto 2',
            image: 'ruta-de-la-imagen-2.jpg',
        },
        {
            id: 3,
            name: 'Producto 2',
            image: 'ruta-de-la-imagen-2.jpg',
        },
        {
            id: 4,
            name: 'Producto 2',
            image: 'ruta-de-la-imagen-2.jpg',
        },
        ];
    
        return (
        <div className="catalog-container">
            <h2>Catálogo de productos</h2>
            <div className="product-list">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <Link to={`/product/${product.id}`}>Ver detalles</Link>
                </div>
            ))}
            </div>
        </div>
        );
    }
    
    export default Catalog;
    