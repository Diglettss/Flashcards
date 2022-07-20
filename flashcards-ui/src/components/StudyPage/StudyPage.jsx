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
    const {showSettingsModal, setShowSettingsModal} = useAuthContext()
    //fake data
    const [info, setInfo] = useState({
        title: "Title of set",
        description: "description of set",
        flashcard: [
            {
                term: "term1",
                definition: "Lorem ipsum dolor.",
                selected: true,
            },
            {
                term: "term2",
                definition: "Lorem ipsum consectetur sint dolores consequatur!",
            },
            {
                term: "term3",
                definition:
                    "Lorem ipsum condimentum leo in libero pulvinar pellentesque ac eget risus. Aenean rutrum molestie elit, vitae ultricies est facilisis sed. Fusce vitae massa tortor!",
            },
            {
                term: "term4",
                definition:
                    "Lorem ipsum odio et sodales. Curabitur malesuada luctus dolor ac eleifend. Aliquam erat volutpat. Vivamus tincidunt eu odio at efficitur. Pellentesque lacinia eleifend..",
            },
            {
                term: "term5",
                definition:
                    "Lorem ipsum  vel aliquam ante. Aenean quis suscipit neque, id maximus risus. Donec a enim vel turpis tincidunt porta a vitae nulla. Nulla in urna efficitur, fringilla felis eu, euismod ligula. Suspendisse bibendum orci vitae finibus lobortis. Phasellus sed sollicitudin tellus. Ut imperdiet mauris quis tempus venenatis. Ut vel rutrum velit.",
            },
        ],
    });

    const handleButtonClick = () => {
        //This will allow for the settings button to configure what the default state of flashcards is IE if term or definition is up by default
        if (defaultFlashcardState === true) {
            setFlashcardOnTerm(true);
        } else if (defaultFlashcardState === false) {
            setFlashcardOnTerm(true);
        } else {
            //this will let the default state of flashcards to be random
            //to reach this else statement set defaultFlashcardState to null
            const randomBoolean = Math.random() < 0.5;
            setFlashcardOnTerm(randomBoolean);
        }
    };

    //This is to be changeable by the user
    const [defaultFlashcardState, setDefaultFlashcardState] = useState(null);

    //Which side of the flashcard is facing up, if null pick randomly
    const [flashcardOnTerm, setFlashcardOnTerm] = useState(
        defaultFlashcardState || Math.random() < 0.5
    );

    //Which flashcard the user is on
    const [flashcardNumber, setFlashcardNumber] = useState(0);


    return (
        <div className="study-page">
            <ModalSettings />
            {info.title}
            <br />
            {info.description}
            <br />
            <button
                onClick={() => {
                    setShowSettingsModal(!showSettingsModal);
                    console.log(showSettingsModal);
                }}
            >
                Settings
            </button>
            <br />
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
    );
}
