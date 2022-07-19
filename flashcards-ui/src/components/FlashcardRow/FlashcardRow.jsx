import React from "react";

export default function FlashcardRow({ term, definition }) {
    return (
        <div>
            <div className="term">{term}</div>
            <input defaultChecked type="checkbox" className="myCheck"></input>
            <div className="definition">{definition}</div>
        </div>
    );
}
