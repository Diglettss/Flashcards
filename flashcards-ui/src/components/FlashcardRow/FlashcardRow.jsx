import React from "react";

function CreateRows({ idx, term, definition, set }) {
    return (
        <div className="flashcard-row">
            <div className="term-card card">
                <span className="term">{term}</span>
            </div>
            <input
                defaultChecked={set.flashcard[idx].selected}
                type="checkbox"
                id={idx}
                className="myCheck"
                onClick={(e) => {
                    set.flashcard[e.target.id].selected = e.target.checked;
                }}
            ></input>
            <div className="definition-card card">
                <span className="definition">{definition}</span>
            </div>
        </div>
    );
}

export default function FlashcardRow({ idx, term, definition, set }) {
    return (
        <>
            <CreateRows
                key={idx}
                idx={idx}
                term={term}
                definition={definition}
                set={set}
            />
        </>
    );
}
