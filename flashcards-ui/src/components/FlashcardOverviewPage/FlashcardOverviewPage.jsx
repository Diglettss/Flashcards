import React, { useRef, useState } from "react";
import FlashcardRow from "../FlashcardRow/FlashcardRow.jsx";
import "./FlashcardOverviewPage.css";
import { useNavigate } from "react-router-dom";

export default function FlashcardOverviewPage() {
    const navigate = useNavigate()
    const [info, setInfo] = useState({
        title: "Title of set",
        description: "description of set",
        flashcard: [
            {
                term: "term1",
                definition: "Lorem ipsum dolor.",
                selected: true,
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
    });
    info.flashcard.forEach((e) => {
        e.selected = true;
    });
    return (
        <div className="FlashcardOverviewPage">
            <h1 className="title">{info.title}</h1>
            <h3 className="description">{info.description}</h3>
            <div className="flashcards">
                {info.flashcard.map((e, idx) => (
                    <FlashcardRow
                        key={idx}
                        term={e.term}
                        definition={e.definition}
                        selected={e.selected}
                        setInfo={setInfo}
                        info={info}
                    />
                ))}
            </div>
            <div className="start-button">
                <button
                    onClick={() => {
                        const t = info.flashcard.map((e) => {
                            if (e.selected == true) {
                                return e;
                            }
                        });
                        console.log(t);
                        navigate("/flashcard/1")
                        
                    }}
                >
                    START STUDYING
                </button>
            </div>
        </div>
    );
}
