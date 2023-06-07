import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BiShoppingBag } from 'react-icons/bi';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <BiShoppingBag className="cart-icon" />
            <span className="cart-items badge badge-primary">3</span>
        </div>
    );
};

export default CartWidget;
