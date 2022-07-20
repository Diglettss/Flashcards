import React, { useState } from "react";
import "./StudyPage.css";
import ModalSettings from "../ModalSettings/ModalSettings.jsx";
import { useAuthContext } from "../../../contexts/auth";

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
    const { showSettingsModal, setShowSettingsModal } = useAuthContext();
    //fake data
    const { info, setInfo } = useAuthContext();

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

    //This is to be changeable by the user
    const [defaultFlashcardState, setDefaultFlashcardState] = useState(true);

    //Which side of the flashcard is facing up, if null pick randomly
    const [flashcardOnTerm, setFlashcardOnTerm] = useState(
        defaultFlashcardState || Math.random() < 0.5
    );

    //Which flashcard the user is on
    const [flashcardNumber, setFlashcardNumber] = useState(0);

    return (
        <div className="study-page">
            <ModalSettings />
            <button
                className="settings"
                onClick={() => {
                    setShowSettingsModal(!showSettingsModal);
                    console.log(showSettingsModal);
                }}
            >
                Settings
            </button>
            <div className="title">
                <h1>{info.title}</h1>
            </div>
            <Flashcard
                flashcard={
                    info.flashcard[flashcardNumber][
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
                            setFlashcardNumber(info.flashcard.length - 1);
                        }
                        handleButtonClick();
                    }}
                >
                    PREV
                </button>
                <button
                    onClick={() => {
                        console.log(info.flashcard.length);
                        if (flashcardNumber == info.flashcard.length - 1) {
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
