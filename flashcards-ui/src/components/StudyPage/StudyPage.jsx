import React, { useState } from "react";
import "./StudyPage.css";
import ModalSettings from "./ModalSettings/ModalSettings";
import { useFlashcardContext } from "../../../contexts/flashcard";
import { useNavigate, useParams } from "react-router-dom";

function Flashcard({ flashcard, onClick }) {
    return (
        <div
            className="flashcard"
            onClick={onClick}
            //This is for accessibility
            //The user can use tab to navigate to this element and pressing enter mimics a click
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.code == "Enter") {
                    onClick();
                }
            }}
        >
            <div>{flashcard}</div>
        </div>
    );
}

export default function StudyPage() {
    const {
        showSettingsModal,
        setShowSettingsModal,
        defaultFlashcardState,
        setDefaultFlashcardState,
    } = useFlashcardContext();

    const { setId } = useParams();
    const navigate = useNavigate();

    //fake data
    const { mySets } = useFlashcardContext();
    const chosenSet = mySets[setId];
    let filteredFlashcard = chosenSet.flashcard.filter((e) => {
        if (e.visibility == true) {
            return e;
        }
    });

    if (filteredFlashcard.length < 2) {
        console.error(
            `I don't know how but less than two flashcards are inside of filteredFlashcard, all flashcards will be used`
        );
        filteredFlashcard = chosenSet.flashcard;
    }

    const handleButtonClick = () => {
        //This will allow for the settings button to configure what the default state of flashcards is i.e. if term or definition is up by default
        if (defaultFlashcardState === true) {
            setFlashcardOnTerm(true);
        } else if (defaultFlashcardState === false) {
            setFlashcardOnTerm(false);
        } else {
            //this will let the default state of flashcards to be random
            //to reach this else statement set defaultFlashcardState to null
            const randomBoolean = Math.random() < 0.5;
            setFlashcardOnTerm(randomBoolean);
        }
    };

    //Which side of the flashcard is facing up, if null pick randomly
    const [flashcardOnTerm, setFlashcardOnTerm] = useState(
        defaultFlashcardState || Math.random() < 0.5
    );

    //Which flashcard the user is on
    const [flashcardNumber, setFlashcardNumber] = useState(0);

    return (
        <div className="study-page">
            <ModalSettings />
            <div className="button-container">
                <button
                    className="settings"
                    onClick={() => {
                        setShowSettingsModal(!showSettingsModal);
                    }}
                >
                    Settings
                </button>
                <button
                    className="back-button"
                    onClick={(e) => {
                        navigate(`/mysets/${chosenSet.setId}`);
                    }}
                >
                    Back
                </button>
            </div>
            <div className="title">
                <h1>{chosenSet.title}</h1>
            </div>
            <Flashcard
                flashcard={
                    filteredFlashcard[flashcardNumber][
                        flashcardOnTerm ? "term" : "definition"
                    ]
                }
                onClick={() => {
                    setFlashcardOnTerm(!flashcardOnTerm);
                }}
            />
            <br />
            <div className="prev-next-container">
                <button
                    onClick={() => {
                        if (flashcardNumber > 0) {
                            setFlashcardNumber(flashcardNumber - 1);
                        } else {
                            setFlashcardNumber(filteredFlashcard.length - 1);
                        }
                        handleButtonClick();
                    }}
                >
                    PREV
                </button>
                <button
                    onClick={() => {
                        if (flashcardNumber == filteredFlashcard.length - 1) {
                            setFlashcardNumber(0);
                        } else {
                            setFlashcardNumber(flashcardNumber + 1);
                        }
                        handleButtonClick();
                    }}
                >
                    NEXT
                </button>
            </div>
        </div>
    );
}
