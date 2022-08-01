import React, { useState } from "react";
import { Icon, HStack } from "@chakra-ui/react";
import { BsLightningChargeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Logo() {
    const navigate = useNavigate();

    return (
        <>
            <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
            >
                <Icon
                    as={BsLightningChargeFill}
                    onClick={() => {
                        navigate("/");
                    }}
                    _hover={{
                        cursor: "pointer",
                    }}
                />
            </HStack>
        </>
    );
}
