import React from "react";

export default function FlashcardRow({ term, definition }) {
    return (
        <div className="flashcard-row">
            <div className="term-card card">
                <span className="term">{term}</span>
            </div>
            <input defaultChecked type="checkbox" className="myCheck"></input>
            <div className="definition-card card">
                <span  className="definition">
                {definition}

                </span>
            </div>
        </div>
    );
}
