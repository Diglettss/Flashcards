import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
import "./Navbar.css";
import { useAuthContext } from "../../../contexts/auth";


function Navbar() {
    const  isLoggedIn  = true;
    return (
        <nav className="Navbar">
            <div className="links">
                <Link to="/" className="logo">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="website logo"
                        className="logo"
                    />
                </Link>
                <NavLinks isLoggedIn={isLoggedIn} />
            </div>
            {/* <div className="search-and-profile"> */}
            <Searchbar />
            {/* <div>
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
                </div>
            </div> */}
        </nav>
    );
}

export default Navbar;
