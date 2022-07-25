import React from "react";
import { Link } from "react-router-dom";

import "./NavLinks.css";

export default function NavLinks({ isLoggedIn }) {
    return (
        <>
            <Link className="text" to="/">
                HOME
            </Link>
            <Link className="text" to={isLoggedIn ? "/mySets" : "/login"}>
                {isLoggedIn ? "MY SETS" : "LOGIN"}
            </Link>
            <Link className="text" to={isLoggedIn ? "create" : "/register"}>
                {isLoggedIn ? "CREATE" : "REGISTER"}
            </Link>
        </>
    );
}
