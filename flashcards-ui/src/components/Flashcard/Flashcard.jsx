import React from "react";
import FlashcardRow from "../FlashcardRow/FlashcardRow.jsx";
import "./Flashcard.css"

export default function Flashcard() {
    const info = {
        title: "Title of set",
        description: "description of set",
        flashcard: [
            {
                term: "term1",
                definition: "Lorem ipsum dolor.",
            },
            {
                term: "term2",
                definition: "Lorem ipsum consectetur sint dolores consequatur!",
            },
            {
                term: "term3",
                definition:
                    "Lorem ipsum condimentum leo in libero pulvinar pellentesque ac eget risus. Aenean rutrum molestie elit, vitae ultricies est facilisis sed. Fusce vitae massa tortor!",
            },
            {
                term: "term4",
                definition:
                    "Lorem ipsum odio et sodales. Curabitur malesuada luctus dolor ac eleifend. Aliquam erat volutpat. Vivamus tincidunt eu odio at efficitur. Pellentesque lacinia eleifend..",
            },
            {
                term: "term5",
                definition:
                    "Lorem ipsum  vel aliquam ante. Aenean quis suscipit neque, id maximus risus. Donec a enim vel turpis tincidunt porta a vitae nulla. Nulla in urna efficitur, fringilla felis eu, euismod ligula. Suspendisse bibendum orci vitae finibus lobortis. Phasellus sed sollicitudin tellus. Ut imperdiet mauris quis tempus venenatis. Ut vel rutrum velit.",
            },
        ],
    };
    return (
        <div className="Flashcard">
            <h1 className="title">{info.title}</h1>
            <h3 className="description">{info.description}</h3>
            <div className="flashcards">
                {info.flashcard.map((e) => (
                    <FlashcardRow term={e.term} definition={e.definition} />
                ))}
            </div>
            <div className="start-button">
            <button >START STUDYING</button>
            </div>
        </div>
    );
}
