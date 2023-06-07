import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';


function ProductDetail() {
    const { id } = useParams();

    // Datos del producto seleccionado
    const product = {
    id: 1,
    name: 'Producto 1',
    image: 'ruta-de-la-imagen-1.jpg',
    description: 'Descripción del producto 1',
    price: 90.99,
    };

    return (
    <div className="product-detail-container">
        <h2>Detalles del producto</h2>
        <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        </div>
    </div>
    );
}

export default ProductDetail;