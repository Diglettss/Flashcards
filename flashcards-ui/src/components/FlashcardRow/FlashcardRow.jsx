import React from "react";

export default function FlashcardRow({ term, definition, selected, setInfo, info }) {
    return (
        <div className="flashcard-row">
            <div className="term-card card">
                <span className="term">{term}</span>
            </div>
            <input defaultChecked type="checkbox" className="myCheck" onClick={e=>{
                selected = e.target.checked
                setInfo(info)
                console.log("info", info)
            }}></input>
            <div className="definition-card card">
                <span  className="definition">
                {definition}

                </span>
            </div>
        </div>
    );
}
