import React from "react";
import { useNavigate } from "react-router-dom";

export default function Set({ set }) {
    const navigate = useNavigate();
    return (
        <div
            className="set-container"
            onClick={() => {
                navigate(`/mysets/${set.setId}`);
            }}
        >
            <div className="name-and-term-num">
                <div className="set-name">{set.title}</div>
            </div>
            <span className="set-description">{set.description}</span>
            <br/>
            <div className="set-length">{set.flashcard.length} flashcards</div>

            <span className="set-date"><br/>{`Created: ${set.date.toDateString()}`}</span>
        </div>
    );
}
