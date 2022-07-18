import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavLinks() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="nav-links">
            <Link to="/">HOME</Link>
            <Link to={isLoggedIn ? "/mysets" : "/login"}>
                {isLoggedIn ? "MY SETS" : "LOGIN"}
            </Link>
            <Link to={isLoggedIn ? "create" : "/register"}>
                {isLoggedIn ? "CREATE" : "REGISTER"}
            </Link>
        </div>
    );
}
