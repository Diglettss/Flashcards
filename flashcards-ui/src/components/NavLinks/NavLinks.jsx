import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";


export default function NavLinks({isLoggedIn}) {
    return (
        <>
            <Link to="/">HOME</Link>
            <Link to={isLoggedIn ? "/mysets" : "/login"}>
                {isLoggedIn ? "MY SETS" : "LOGIN"}
            </Link>
            <Link to={isLoggedIn ? "create" : "/register"}>
                {isLoggedIn ? "CREATE" : "REGISTER"}
            </Link>
        </>
    );
}
