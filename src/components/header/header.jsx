import React from "react";
import "./Header.css";
import img from "" ;
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div className="Header">
        <Link to="/">
        <img src={img} alt="logo" width="400" />
        </Link>
    </div>
    );
};

export default Header;