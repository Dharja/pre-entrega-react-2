import React, { useEffect, useState } from 'react';

    function ItemListContainer() {
    const [products, setProducts] = useState([]);
        
    useEffect(() => {
         // Lógica para obtener todos los productos
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
        <h2>Lista de productos</h2>
        {products.map((product) => (
            <div key={product.id}>
            <h3>{product.title}</h3>
            {/* Otros detalles del producto */}
            </div>
        ))}
        </div>
    );
    }

    export default ItemListContainer;
