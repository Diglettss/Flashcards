import React, { useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";

import { useAuthContext } from "../../../contexts/auth";
import "./MySetPage.css";
import { useNavigate } from "react-router-dom";

function Set({ info }) {
    // console.log(info.setId)
    // console.log("info")
    return (
        <div
            className="set-container"
            id={info.setId}
            onClick={(e) => {
                console.log(e.target);
            }}
        >
            <div className="set-name">{info.title}</div>
            <div className="set-length">{info.flashcard.length}</div>
            <div className="set-description">{info.description}</div>
        </div>
    );
}

export default function MySetPage() {
    const { mysets } = useAuthContext();
    console.log(mysets);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate("/login");
    //     }
    // }, [isLoggedIn]);

    return (
        <div className="my-sets-page">
            <div>
                <label htmlFor="search-input">User's sets</label>
            </div>
            <input className="search-input" type="text" />
            {mysets.flashcards.map((e, idx) => (
                <Set info={e} key={idx} />
            ))}
        </div>
    );
}
