import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFlashcardContext } from "../../../contexts/flashcard";
import FlashcardRow from "../FlashcardRow/FlashcardRow";

export default function CreateSetBody({
    description,
    setDescription,
    setBodyView,
    set
}) {
    const {setmySets, mySets, userCreatedSet} = useFlashcardContext()
    console.log(mySets)
    const navigate = useNavigate()
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
                    userCreatedSet.description=description
                    console.log(userCreatedSet)
                }}
            />
            <div className="flashcards">
            {set.flashcard?
            set.flashcard.map((e, idx) => (
                <FlashcardRow
                    key={idx}
                    idx={idx}
                    term={e.term}
                    definition={e.definition}
                    set={set}
                />
            )):<div className="flashcard-row-empty"/>
        }
        </div>

            {/* <FlashcardRow set={set} /> */}
            <div className="add-buttons">
                <button
                    className="add-cards"
                    onClick={(e) => {
                        setBodyView("text");
                    }}
                >
                    Add cards
                </button>
                <button
                    className="add-cards-text"
                    onClick={(e) => {
                        setBodyView("text");
                    }}
                >
                    Add cards as text
                </button>
            </div>
            <button onClick={()=>{
                mySets.push(userCreatedSet)
                console.log(mySets)
                navigate("/mysets")

            }}>
                Save
            </button>
        </>
    );
}
