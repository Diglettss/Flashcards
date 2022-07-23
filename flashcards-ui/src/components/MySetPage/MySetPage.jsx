import React, { useEffect } from "react";
import "./MySetPage.css";
import { useFlashcardContext } from "../../../contexts/flashcard";
import Set from "../FlashcardComponents/Set/Set";

export default function MySetPage() {
    "This takes the varibale mySets fron contexts/flashcard and loops it through the Set component";
    const { mySets } = useFlashcardContext();

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate("/login");
    //     }
    // }, [isLoggedIn]);

    //TODO maybe useEffect

    return (
        <div className="my-sets-page">
            <div>
                <label htmlFor="search-input">User's sets</label>
            </div>
            <input className="search-input" type="text" />
            <select
                className="drop-down"
                onChange={(e) => {
                    console.log(e.target.value);
                }}
            >
                <option>Newest</option>
                <option>Oldest</option>
                <option>A-Z</option>
                <option>Z-A</option>
                <option># of flashcards</option>
            </select>
            {mySets.map((e, idx) => (
                <Set set={e} key={idx} />
            ))}
        </div>
    );
}
