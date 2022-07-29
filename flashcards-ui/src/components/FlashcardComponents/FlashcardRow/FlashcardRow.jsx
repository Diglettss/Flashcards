import React, { useRef } from "react";
import "./FlashcardRow.scss"

export default function FlashcardRow({
    idx, //The location of the flashcard in the set
    term,
    definition,
    chosenSet, //The set this flashcard is in
    checkBox, //Is the checkbox for selecting for trash or visibility
}) {
    const checkBoxInput = useRef(null);
    ("I pass in choosenSet because this is how I got selected to work");
    return (
        <div className="flashcard-row">
            <div
                className="term-card card"
                onClick={(e) => {
                    checkBoxInput.current.checked =
                        !checkBoxInput.current.checked;
                    chosenSet.flashcards[idx].visibility =
                        checkBoxInput.current.checked;
                }}
            >
                <span className="term">{term}</span>
            </div>
            <input
                ref={checkBoxInput}
                title={
                    checkBox == "visibility"
                        ? "Flashcard visibility"
                        : "Select for trash"
                }
                defaultChecked={chosenSet.flashcards[idx][checkBox]}
                type="checkbox"
                className={`myCheck ${checkBox || "hidden"}`}
                onClick={(e) => {
                    chosenSet.flashcards[idx].visibility = e.target[checkBox];
                }}
            ></input>
            <div
                className="definition-card card"
                onClick={(e) => {
                    checkBoxInput.current.checked =
                        !checkBoxInput.current.checked;
                    chosenSet.flashcards[idx].visibility =
                        checkBoxInput.current.checked;
                }}
            >
                <span className="definition">{definition}</span>
            </div>
        </div>
    );
}
