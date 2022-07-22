import React, { useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";
import "./MySetPage.css";
import { useNavigate } from "react-router-dom";
import { useFlashcardContext } from "../../../contexts/flashcard";
import { useParams } from "react-router-dom";

function Set({ set }) {
    const navigate = useNavigate();
    return (
        <div
            className="set-container"
            id={set.setId}
            onClick={(e) => {
                    navigate(`/mysets/${e.target.id}`);
            }}
        >
            <div className="name-and-term-num">
                <div className="set-name" id={set.setId}>
                    {set.title}
                </div>
                <div className="set-length" id={set.setId}>
                    {set.flashcard.length}
                </div>
            </div>
            <span className="set-description" id={set.setId}>
                {set.description}
            </span>
        </div>
    );
}

export default function MySetPage() {
    const { mySets } = useFlashcardContext();

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate("/login");
    //     }
    // }, [isLoggedIn]);

    //TODO maybe useEffect

    return (
        <div className="my-sets-page">
            <div>
                <label htmlFor="search-input">User's sets</label>
            </div>
            <input className="search-input" type="text" />
            <select
                className="drop-down"
                onChange={(e) => {
                    console.log(e.target.value);
                }}
            >
                <option>Newest</option>
                <option>Oldest</option>
                <option>A-Z</option>
                <option>Z-A</option>
                <option># of flashcards</option>
            </select>
            {mySets.map((e, idx) => (
                <Set set={e} key={idx} />
            ))}
        </div>
    );
}
