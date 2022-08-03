import React, { useState } from "react";
import { Input, HStack, FormControl } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFlashcardContext } from "../../../contexts/flashcard";

export default function Searchbar() {
    const [searchbarValue, setSearchbarValue] = useState("");
    const navigate = useNavigate()

    return (
        <>
            <HStack pr={4}>
                <FormControl>
                    <Input
                        value={searchbarValue}
                        onChange={(e)=>{
                            setSearchbarValue(e.target.value)
                        }}
                        type="search"
                        placeholder="search..."
                        variant="ghost"
                        onKeyDown={(e) => {
                            if (e.code == "Enter") {
                                navigate(`/publicsets/search/${searchbarValue}`)
                                // console.warn("API Request goes here");
                                //TODO set up API Request
                            }
                        }}
                    />
                </FormControl>
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
