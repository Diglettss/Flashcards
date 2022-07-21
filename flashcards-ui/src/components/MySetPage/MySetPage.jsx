import React, { useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";

import { useAuthContext } from "../../../contexts/auth";
import "./MySetPage.css";
import { useNavigate } from "react-router-dom";

function Set({ info }) {
    console.log(info.setId);
    console.log("info");
    return (
        <div
            className="set-container"
            id={info.setId}
            onClick={(e) => {
                console.log(e.target);
            }}
        >
            <div className="name-and-term-num">
                <div className="set-name" id={info.setId}>
                    {info.title}
                </div>
                <div className="set-length" id={info.setId}>
                    {info.flashcard.length}
                </div>
            </div>
            <span className="set-description" id={info.setId}>
                {info.description}
            </span>
        </div>
    );
}

export default function MySetPage() {
    const { mysets } = useAuthContext();

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
            {mysets.map((e, idx) => (
                <Set info={e} key={idx} />
            ))}
        </div>
    );
}
