import React, { useState } from "react";

export default function Searchbar() {
    const [searchbarValue, setSearchbarValue] = useState("");

    return (
        <div className="searchbar">
            <input
                type="search"
                name="q"
                placeholder="Search..."
                className="searchbar"
                onChange={(e) => {
                    setSearchbarValue(e);
                }}
                onKeyDown={(e) => {
                    if (e.code == "Enter") {
                        console.warn("API Request goes here");
                        //TODO set up API Request
                    }
                }}
            />
        </div>
    );
}
