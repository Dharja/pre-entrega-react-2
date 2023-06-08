import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Lógica para obtener un producto específico
        fetch(`https://fakestoreapi.com/products/${itemId}`)
        .then((response) => response.json())
        .then((data) => {
            setProduct(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [itemId]);

    return (
        <div>
        {product ? (
            <div>
            <h2>Detalles del producto</h2>
            <h3>{product.title}</h3>
            {/* Otros detalles del producto */}
            </div>
        ) : (
            <p>Cargando...</p>
        )}
        </div>
    );
    }

export default ItemDetailContainer;
