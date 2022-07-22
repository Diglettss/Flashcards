import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useFlashcardContext } from "../../../contexts/flashcard";
import FlashcardRow from "../FlashcardRow/FlashcardRow.jsx";


export default function UpdateMySetPage() {
    const { mySets } = useFlashcardContext();
    const { setId } = useParams();
    const [set, setSet] = useState(mySets[setId]);

    return (
        <div className="flashcard-overview-page">
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
            <h3 className="description">{set.description}</h3>
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
                    Add more cards
                </button>
            </div>
        </div>
    );
}
