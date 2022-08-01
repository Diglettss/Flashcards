import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import "./NavLinks.css";
import { Button } from "@chakra-ui/react";

export default function NavLinks({ isLoggedIn }) {
    const navigate = useNavigate();
    return (
        <>
            <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                    isLoggedIn ? navigate("/mysets") : navigate("/login");
                }}
            >
                {isLoggedIn ? "My Sets" : "Log in"}

            </Button>
            <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                    isLoggedIn ? navigate("/create") : navigate("/register");
                }}
            >
                {isLoggedIn ? "Create" : "Register"}
            </Button>
        </>
    );
}
