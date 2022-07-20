import React, { useRef, useState } from "react";
import FlashcardRow from "../FlashcardRow/FlashcardRow.jsx";
import "./FlashcardOverviewPage.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/auth.jsx";

export default function FlashcardOverviewPage() {
    const navigate = useNavigate();
    useAuthContext;
    const { info, setInfo } = useAuthContext();
    return (
        <div className="FlashcardOverviewPage">
            <h1 className="title">{info.title}</h1>
            <h3 className="description">{info.description}</h3>
            <div className="flashcards">
                {info.flashcard.map((e, idx) => (
                    <FlashcardRow
                        key={idx}
                        idx={idx}
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
                        const t = info.flashcard.filter((e) => {
                            if (e.selected == true) {
                                return e;
                            }
                        });
                        navigate("/flashcard/1");
                    }}
                >
                    START STUDYING
                </button>
            </div>
        </div>
    );
}
