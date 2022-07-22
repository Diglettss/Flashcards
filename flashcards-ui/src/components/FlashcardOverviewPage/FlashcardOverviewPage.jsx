import React, { useEffect, useRef, useState } from "react";
import FlashcardRow from "../FlashcardRow/FlashcardRow.jsx";
import "./FlashcardOverviewPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useFlashcardContext } from "../../../contexts/flashcard.jsx";

function FlashcardOverviewPageContent({ set, setSet, setId }) {
    const navigate = useNavigate();
    return (
        <div className="FlashcardOverviewPage">
            <button
                className="update-button"
                id={setId}
                onClick={(e) => {
                    navigate(`/mysets/update/${e.target.id}`);
                }}
            >
                Update
            </button>
            <h1 className="title">{set.title}</h1>
            <h3 className="description">
                {set.description}
            </h3>
            <div className="flashcards">
                {set.flashcard.map((e, idx) => (
                    <FlashcardRow
                        key={idx}
                        idx={idx}
                        term={e.term}
                        definition={e.definition}
                        selected={e.selected}
                        setSet={setSet}
                        set={set}
                    />
                ))}
            </div>
            <div className="start-button">
                <button
                    id={set.setId}
                    onClick={(e) => {
                        const filteredFlashcard = set.flashcard.filter((e) => {
                            if (e.selected == true) {
                                return e;
                            }
                        });
                        if (filteredFlashcard.length < 2) {
                            console.error(
                                "Please have at least two flashcards"
                            );
                        } else {
                            navigate(`/mysets/studymode/${e.target.id}`);
                        }
                    }}
                >
                    START STUDYING
                </button>
            </div>
        </div>
    );
}

export default function FlashcardOverviewPage() {
    const navigate = useNavigate();
    const { mySets } = useFlashcardContext();
    const { setId } = useParams();
    const [set, setSet] = useState(mySets[setId]);

    //if the params setId doesn't exist in mySets send the user to the shadow realm
    useEffect(() => {
        if (setId < 0 || setId >= mySets.length) {
            console.log("sending you to the shadow realm");
            navigate("/notfound");
        }
    });

    return (
        <>
            {set ? (
                <FlashcardOverviewPageContent
                    setId={setId}
                    set={set}
                    setSet={setSet}
                />
            ) : (
                <div />
            )}
        </>
    );
}
