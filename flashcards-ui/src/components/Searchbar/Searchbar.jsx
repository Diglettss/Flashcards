import React, { useState } from "react";

export default function Searchbar() {
    const [searchbarValue, setSearchbarValue] = useState("");

    return (
        <input
            type="search"
            name="q"
            placeholder="Seach..."
            className="searchbar"
            onChange={(e) => {
                setSearchbarValue(e);
            }}
            onKeyDown={(e) => {
                if (e.code == "Enter") {
                    console.log("API Request goes here");
                    //TODO set up API Request
                }
            }}
        />
    );
}
