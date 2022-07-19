import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
import "./Navbar.css";
import { useAuthContext } from "../contexts/Auth";


function Navbar() {
    const {isLoggedIn, setIsLoggedIn} = useAuthContext();

    console.log(`The profile image should have "className={isLoggedIn ? "" : "hidden"}`)
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
                <Searchbar/>
                <span>
                    <img
                        src="https://via.placeholder.com/150"
                        width="50px"
                        alt="profile image"
                        // className={isLoggedIn ? "" : "hidden"}
                    className="profile-image"
                    onClick={()=>{
                            setIsLoggedIn(!isLoggedIn)
                        }}
                    />
                </span>
            </span>
        </nav>
    );
}

export default Navbar;
