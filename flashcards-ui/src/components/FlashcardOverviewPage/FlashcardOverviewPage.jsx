import React, { useEffect, useRef, useState } from "react";
import FlashcardRow from "../FlashcardRow/FlashcardRow.jsx";
import "./FlashcardOverviewPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useFlashcardContext } from "../../../contexts/flashcard.jsx";

function FlashcardOverviewPageContent({ info, setInfo }) {
    const navigate = useNavigate();
    return (
        <div className="FlashcardOverviewPage">
            <button className="update-button">Update</button>
            <h1 className="title">{info.title || "You should be here"}</h1>
            <h3 className="description">
                {info.description || "You should be here"}
            </h3>
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
                    id={info.setId}
                    onClick={e => {
                        const filteredFlashcard = info.flashcard.filter((e) => {
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
    const [info, setInfo] = useState(mySets[setId]);

    //if the params setId doesn't exist in mySets send the user to the shadow realm
    useEffect(() => {
        if (setId < 0 || setId >= mySets.length) {
            console.log("sending you to the shadow realm");
            navigate("/notfound");
        }
    });

    return (
        <>
            {info ? (
                <FlashcardOverviewPageContent info={info} setInfo={setInfo} />
            ) : (
                <div />
            )}
        </>
    );
}
