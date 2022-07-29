import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFlashcardContext } from "../../../../contexts/flashcard";
import FlashcardRow from "../../FlashcardComponents/FlashcardRow/FlashcardRow.jsx";

export default function UpdateMySetPage() {
    const { mySets } = useFlashcardContext();
    const { setId } = useParams();
    const chosenSet = mySets[setId];

    return (
        <div className="flashcard-overview-page">
            <h1 className="title">{chosenSet.title}</h1>
            <h3 className="description">{chosenSet.description}</h3>
            <div className="flashcard-row-container">
                {chosenSet.flashcards.map((e, idx) => (
                    <FlashcardRow
                        key={idx}
                        idx={idx}
                        term={e.term}
                        definition={e.definition}
                        chosenSet={chosenSet}
                        checkBox={"selectedForTrash"}
                    />
                ))}
            </div>
            {/* <div className="start-button"> */}
                <button
                className="start-button"
                    onClick={(e) => {
                        const filteredFlashcard = chosenSet.flashcards.filter(
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
                    Add more cards
                </button>
            </div>
        // </div>
    );
}
