import React from 'react';
import CartWidget from '../cartwidget';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to={"/"}>D-Shop
            <img src={img} alt="logo" width="400" />
            </Link>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/Catalog"}>Catalogue</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Log In</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Contact Us</Link>
            </li>
            <li>
                <CartWidget />
            </li>
            </ul>
        </nav>
    );
}

export default NavBar;
