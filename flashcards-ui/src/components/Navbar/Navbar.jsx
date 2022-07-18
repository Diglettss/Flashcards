import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks.jsx";

function Navbar() {
    return (
        <nav className="Navbar">
            <Link to="/" className="logo">
            <img src="https://via.placeholder.com/150" width='60px' alt="website logo"/>
            </Link>
            <NavLinks/>
            <input type="search" id="site-search" name="q" placeholder="Seach..."/>
            <span>
            <img src="https://via.placeholder.com/150" width='50px' alt="profile image"/>
            </span>

        </nav>
    );
}

export default Navbar;