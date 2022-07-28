import React, { useState } from "react";
import { useFlashcardContext } from "../../../../contexts/flashcard";

export default function CreateSetAddCard({ setBodyView, userCreatedSet }) {
    const [textDelimiter, setTextDelimiter] = useState(",");
    const [flashcardDelimiter, setFlashcardDelimiter] = useState("_");
    const [flashcard, setFlashcard] = useState("");
    const [textInput, setTextinput] = useState(
        "Term1, definition1_ Term2, definition2_ term3, definition 3"
    );
    const { mySets, setmySets } = useFlashcardContext();

    const turnIntoFlashcards = () => {
        let createdSets = [];
        let userError = false;
        if (textDelimiter == flashcardDelimiter) {
            let splitTexts = textInput.split(flashcardDelimiter);
            let singleFlashcardAsOBJ = {};

            if (splitTexts.length % 2 !== 0) {
                userError = true;
            }

            splitTexts.forEach((e, idx) => {
                if (!(idx % 2)) {
                    singleFlashcardAsOBJ.term = e;
                } else {
                    singleFlashcardAsOBJ.definition = e;
                    createdSets.push(singleFlashcardAsOBJ);
                    singleFlashcardAsOBJ = {};
                }
            });
        } else {
            let flashcardsPairs = textInput.split(flashcardDelimiter);
            flashcardsPairs.forEach((e) => {
                let singleFlashcard = e.split(textDelimiter);
                if (
                    singleFlashcard[0] === undefined ||
                    singleFlashcard[1] === undefined
                ) {
                    //TODO send an error message to user
                    userError = true;
                }
                let singleFlashcardAsOBJ = {
                    term: singleFlashcard[0],
                    definition: singleFlashcard[1],
                };
                createdSets.push(singleFlashcardAsOBJ);
            });
        }
        if (userError) {
            alert("You are missing a term or definition");
        } else {
            userCreatedSet.flashcard = createdSets;
            userCreatedSet.selected = true;
            userCreatedSet.setId = mySets.length;
            userCreatedSet.date = new Date().toDateString();

            setBodyView("create");
        }
    };

    return (
        <div className="add-card-as-text">
            <div className="delimiter-row">
                <div className="text-delimiter">
                    Term and definition delimiter:
                    <input
                        type="text"
                        name="text delimiter input"
                        className="text-delimiter-input"
                        value={textDelimiter}
                        onChange={(e) => {
                            setTextDelimiter(e.target.value);
                        }}
                    />
                </div>
                <div className="flashcard-delimiter">
                    Flashcard delimiter:
                    <input
                        type="text"
                        name="flashcard delimiter input"
                        className="flashcard-delimiter-input"
                        value={flashcardDelimiter}
                        onChange={(e) => {
                            setFlashcardDelimiter(e.target.value);
                        }}
                    />
                </div>
            </div>
            <textarea
                className="card-text-input"
                value={textInput}
                onChange={(e) => {
                    setTextinput(e.target.value);
                }}
            ></textarea>
            <div className="button-container">
                <button
                    className="cancel"
                    onClick={() => {
                        setBodyView("create");
                    }}
                >
                    Cancel
                </button>
                <button
                    className="submit"
                    onClick={() => {
                        turnIntoFlashcards(textInput);
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}