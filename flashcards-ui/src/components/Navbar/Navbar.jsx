import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
import "./Navbar.css";
import { useAuthContext } from "../../../contexts/auth";

function Navbar() {
    const { isLoggedIn } = useAuthContext();
    return (
        <nav className="Navbar">
            <span className="links">
                <Link to="/" className="logo">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="website logo"
                        className="logo"
                    />
                </Link>
                <NavLinks isLoggedIn={isLoggedIn} />
            </span>
            <span className="search-and-profile">
                <Searchbar />
                <span>
                    <img
                        src="https://via.placeholder.com/150"
                        width="50px"
                        alt="profile image"
                        className={
                            isLoggedIn
                                ? "profile-image"
                                : "profile-image hidden"
                        }
                    />
                </span>
            </span>
        </nav>
    );
}

export default Navbar;
