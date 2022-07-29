import React from "react";
import { useNavigate } from "react-router-dom";
import { useFlashcardContext } from "../../../../contexts/flashcard";
import FlashcardRow from "../../FlashcardComponents/FlashcardRow/FlashcardRow";

export default function CreateSetOverview({
    description,
    setDescription,
    setIsCreateOverviewShown,
    chosenSet,
    userCreatedSet,
}) {
    
    const { mySets, setMySets } = useFlashcardContext();
    const navigate = useNavigate();
    return (
        <>
            <textarea
                type="text"
                className="description"
                name="description"
                placeholder="enter a description"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                    userCreatedSet.description = e.target.value;
                }}
            />
            <div className="flashcard-row-container">
                {chosenSet.flashcards ? (
                    chosenSet.flashcards.map((e, idx) => (
                        <FlashcardRow
                            key={idx}
                            idx={idx}
                            term={e.term}
                            definition={e.definition}
                            chosenSet={chosenSet}
                        />
                    ))
                ) : (
                    <div className="flashcard-row-empty" />
                )}
            </div>
            <div className="add-buttons">
                {/* <button
                    className="add-cards"
                    onClick={(e) => {
                        setIsCreateOverviewShown(false);
                    }}
                >
                    Add Flashcard cards
                </button> */}
                <button
                    className="add-cards-text"
                    onClick={(e) => {
                        setIsCreateOverviewShown(false);
                    }}
                >
                    ADD CARDS
                </button>
            </div>
            <button
                className="middle-div save-button"
                onClick={() => {
                    if (
                        userCreatedSet.flashcards?.length >= 2 &&
                        userCreatedSet.title
                    ) {
                        mySets.push(userCreatedSet);
                        setMySets([...mySets]);
                        navigate("/mysets");
                    } else {
                        console.error(
                            "The set needs a title and at least 2 flashcards"
                        );
                    }
                }}
            >
                Save
            </button>
        </>
    );
}
