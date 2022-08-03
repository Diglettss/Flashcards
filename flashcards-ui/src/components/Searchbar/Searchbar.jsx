import React, { useState } from "react";
import { Input, HStack } from "@chakra-ui/react";

export default function Searchbar() {
    const [searchbarValue, setSearchbarValue] = useState("");

    return (
        <>
            <HStack pr={4}>
                <Input type="search" placeholder="Search..." _placeholder={{opacity: 0.7, color: "gray", fontStyle: "italic"}}
                    variant="ghost" textAlign={"center"} fontFamily={"serif"}
                    border={"2px solid"} borderColor={"green.600"} borderRadius={"15px"}
                    _hover={{backgroundColor: "green.100"}}
                    _focus={{backgroundColor: "green.100"}}
                />
            </HStack>
        </>
        // <div className="searchbar">
        //     <input
        //         type="search"
        //         name="q"
        //         placeholder="Search..."
        //         className="searchbar"
        //         onChange={(e) => {
        //             setSearchbarValue(e);
        //         }}
        //         onKeyDown={(e) => {
        //             if (e.code == "Enter") {
        //                 console.warn("API Request goes here");
        //                 //TODO set up API Request
        //             }
        //         }}
        //     />
        // </div>
    );
}
