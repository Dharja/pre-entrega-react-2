import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Catalog() {

    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

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
    