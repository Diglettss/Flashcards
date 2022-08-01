import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { useFlashcardContext } from "../../../contexts/flashcard";
import { useNavigate } from "react-router-dom";

import "./NavLinks.css";

export default function NavLinks() {
    const { isLoggedIn } = useFlashcardContext();
    const navigate = useNavigate();

    return (
        <>
            <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
            >
                {isLoggedIn ? (
                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => {
                            navigate("/mysets");
                        }}
                    >
                        My Sets
                    </Button>
                ) : (
                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Login
                    </Button>
                )}
                {isLoggedIn ? (
                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => {
                            navigate("/create");
                        }}
                    >
                        Create
                    </Button>
                ) : (
                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => {
                            navigate("/register");
                        }}
                    >
                        Register
                    </Button>
                )}
            </HStack>
        </>
    );
}
