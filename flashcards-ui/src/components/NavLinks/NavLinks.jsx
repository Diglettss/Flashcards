import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/auth";
import "./NavLinks.css";

export default function NavLinks(props) {
    const { user,} = useAuthContext();
  
    return (
        <>
            <Link className="text" to="/">
                HOME
            </Link>
            <Link className="text" to={user.email ? "/mysets" : "/login"}>
                {user.email ? "MY SETS" : "LOGIN"}
            </Link>
            <Link className="text" to={user.email ? "create" : "/register"}>
                {user.email ? "CREATE" : "REGISTER"}
            </Link>
        </>
    );
}
