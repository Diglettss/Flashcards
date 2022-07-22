import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
import UserProfile from "../UserProfile/UserProfile.jsx";
import "./Navbar.css";
import { useAuthContext } from "../../../contexts/auth";

function Navbar() {
    const { user } = useAuthContext();
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
                <NavLinks/>
            </div>
            {/* <div className="search-and-profile"> */}
            <Searchbar />
            {/* {user.email ? <UserProfile/> : null} */}
            <div>
                    <img
                        src="https://via.placeholder.com/600x600"
                        alt="profile image"
                        className={
                            user.email
                                ? "profile-image"
                                : "profile-image hidden"
                        }
                    />
                
            </div>
        </nav>
    );
}

export default Navbar;
