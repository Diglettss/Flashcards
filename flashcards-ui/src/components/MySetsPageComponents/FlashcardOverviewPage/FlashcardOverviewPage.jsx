import React, { useEffect, useRef, useState } from "react";
import FlashcardRow from "../../FlashcardComponents/FlashcardRow/FlashcardRow.jsx";
import "./FlashcardOverviewPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useFlashcardContext } from "../../../../contexts/flashcard.jsx";

function FlashcardOverviewPageContent({ chosenSet }) {
    const navigate = useNavigate()
    return (
        <div className="flashcard-overview-page">
            {/* <button
                className="update-button"
                onClick={(e) => {
                    navigate(`/mysets/update/${chosenSet.setId}`);
                }}
            >
                Update
            </button> */}
            <h1 className="title">{chosenSet.title}</h1>
            <h3 className="description">{chosenSet.description}</h3>
            <div className="flashcard-row-container">
                {chosenSet.flashcard.map((e, idx) => (
                    <FlashcardRow
                        e={e}
                        key={idx}
                        idx={idx}
                        term={e.term}
                        checkBox={"visibility"}
                        definition={e.definition}
                        chosenSet={chosenSet}
                    />
                ))}
            </div>
            {/* <div className="start-button"> */}
                <button
                className="start-button"
                    onClick={(e) => {
                        const filteredFlashcard = chosenSet.flashcard.filter(
                            (e) => {
                                if (e.visibility == true) {
                                    return e;
                                }
                            }
                        );
                        if (filteredFlashcard.length < 2) {
                            console.error(
                                "Please have at least two flashcards"
                            );
                        } else {
                            navigate(`/mysets/studymode/${chosenSet.setId}`);
                        }
                    }}
                >
                    START STUDYING
                </button>
            {/* </div> */}
        </div>
    );
}

export default function FlashcardOverviewPage() {
    const navigate = useNavigate();
    const { mySets } = useFlashcardContext();
    const { setId } = useParams();
    const chosenSet = mySets[setId];

    //if the params setId doesn't exist in mySets send the user to the shadow realm
    useEffect(() => {
        if (!chosenSet || chosenSet == undefined) {
            console.error("sending you to the shadow realm");
            navigate("/notfound");
        }
    }, []);

    //The return statement is written like this, because an undefined chosenSet would cause an error and stop the useEffect from running
    return (
        <>
            {chosenSet ? (
                <FlashcardOverviewPageContent chosenSet={chosenSet} />
            ) : (
                <div />
                // test()
            )}
        </>
    );
}
