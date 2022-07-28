import React from "react";
import { useNavigate } from "react-router-dom";

export default function Set({ set }) {
    const navigate = useNavigate();
    console.log("Set", set)
    return (
        <div
            className="set-container"
            onClick={() => {
                navigate(`/mysets/${set.setID}`);
            }}
        >
            <div className="name-and-term-num">
                <div className="set-name">{set.title}</div>
                <div className="set-length">{set.flashcards.length}</div>
            </div>
            <span className="set-description">{set.description}</span>
            <span className="set-date"><br/>{JSON.stringify(set.createdAt)}</span>
        </div>
    );
}
