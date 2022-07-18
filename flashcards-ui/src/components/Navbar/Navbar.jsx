import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks.jsx";
import "./Navbar.css";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    console.log(`The profile image should have "className={isLoggedIn ? "" : "hidden"}`)
    return (
        <nav className="Navbar">
            <span className="links">
                <Link to="/" className="logo">
                    <img
                        src="https://via.placeholder.com/150"
                        width="60px"
                        alt="website logo"
                    />
                </Link>
                <NavLinks isLoggedIn={isLoggedIn} />
            </span>
            <span className="search-and-profile">
                <input
                    type="search"
                    id="site-search"
                    name="q"
                    placeholder="Seach..."
                    style={{ width: "440px" }}
                />
                <span>
                    <img
                        src="https://via.placeholder.com/150"
                        width="50px"
                        alt="profile image"
                        // className={isLoggedIn ? "" : "hidden"}
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
