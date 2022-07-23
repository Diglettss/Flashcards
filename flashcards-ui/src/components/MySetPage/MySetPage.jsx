import React, { useEffect, useState } from "react";
import "./MySetPage.css";
import { useFlashcardContext } from "../../../contexts/flashcard";
import Set from "../FlashcardComponents/Set/Set";

export default function MySetPage() {
    "This takes the varibale mySets fron contexts/flashcard and loops it through the Set component";
    const { mySets } = useFlashcardContext();
    const [sortBy, setSortBy] = useState("Newest");

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate("/login");
    //     }
    // }, [isLoggedIn]);

    //TODO maybe useEffect

    const sortByNewestDate = (array) => {
        array.sort((a, b) => b.date - a.date);
    };
    const sortByOldestDate = (array) => {
        sortByNewestDate(array);
        array.reverse();
    };
    const sortByAlphabeticalOrder = (array) => {
        array.sort((x, y) => {
            return x.title.localeCompare(y.title);
        });
    };
    const sortByReverseAlphabeticalOrder = (array) => {
        sortByAlphabeticalOrder(array);
        array.reverse();
    };
    const sortByNumOfFlashcards = (array) => {
        array.sort((a, b) => b.flashcard.length - a.flashcard.length);
    };

    //TODO bug with useEffect, the sort only takes effect after changing the valu
    useEffect(() => {
        console.log("Change")
        if (sortBy == "Newest") {
            sortByNewestDate(mySets);
        } else if (sortBy == "Oldest") {
            sortByOldestDate(mySets);
        } else if (sortBy == "A-Z") {
            sortByAlphabeticalOrder(mySets);
        } else if (sortBy == "Z-A") {
            sortByReverseAlphabeticalOrder(mySets);
        } else{
            sortByNumOfFlashcards(mySets)
        }
    }, [sortBy]);

    return (
        <div className="my-sets-page">
            <div>
                <label htmlFor="search-input">User's sets</label>
            </div>
            {sortBy}
            <input className="search-input" type="text" />
            <select
                className="drop-down"
                onChange={(e) => {
                    setSortBy(e.target.value);
                    console.log(e.target.value);
                }}
                value={sortBy}
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
