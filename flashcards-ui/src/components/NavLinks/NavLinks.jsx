import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/auth";
import "./NavLinks.css";

export default function NavLinks({ isLoggedIn }) {
    const { user,} = useAuthContext();

    return (
        <>
            <Link className="text" to="/">
                Home
            </Link>
            <Link className="text" to={user.email ? "/mysets" : "/login"}>
                {user.email ? "My Sets" : "Login"}
            </Link>
            <Link className="text" to={user.email ? "create" : "/register"}>
                {user.email ? "Create" : "Register"}
            </Link>
        </>
    );
}
