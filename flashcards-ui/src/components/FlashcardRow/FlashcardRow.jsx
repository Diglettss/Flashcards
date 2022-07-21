import React from "react";

export default function FlashcardRow({
    idx,
    term,
    definition,
    selected,
    setInfo,
    info,
}) {
    return (
        <div className="flashcard-row">
            <div className="term-card card">
                <span className="term">{term}</span>
            </div>
            <input
                defaultChecked={info.flashcard[idx].selected}
                type="checkbox"
                id={idx}
                className="myCheck"
                onClick={(e) => {
                    // console.log(e.target.id, e.target.checked);
                    info.flashcard[e.target.id].selected = e.target.checked;
                    // console.log(info.flashcard[e.target.id]);
                    // console.log(info.flashcard);
                }}
            ></input>
            <div className="definition-card card">
                <span className="definition">{definition}</span>
            </div>
        </div>
    );
}
	