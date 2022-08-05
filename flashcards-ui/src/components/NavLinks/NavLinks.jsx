import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./NavLinks.css";

export default function NavLinks({ isLoggedIn }) {
    const navigate = useNavigate();
    return (
        <>
            <Button
                variant="ghost"
                size="lg"
                fontSize={"20px"}
                fontFamily="serif"
                onClick={() => {
                    isLoggedIn ? navigate("/mysets") : navigate("/login");
                }}
            >
                {isLoggedIn ? "My Sets" : "Log in"}

            </Button>
            <Button
                variant="ghost"
                size="lg"
                fontFamily="serif"
                fontSize={"20px"}
                onClick={() => {
                    isLoggedIn ? navigate("/create") : navigate("/register");
                }}
            >
                {isLoggedIn ? "Create New Set" : "Register"}
            </Button>
        </>
    );
}
