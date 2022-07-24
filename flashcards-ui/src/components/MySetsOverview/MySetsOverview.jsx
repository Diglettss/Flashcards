import React, { useEffect, useState } from "react";
import "./MySetsOverview.css";
import { useFlashcardContext } from "../../../contexts/flashcard";
import Set from "../FlashcardComponents/Set/Set";

export default function MySetsOverview() {
    "This takes the varibale mySets fron contexts/flashcard and loops it through the Set component";
    const { mySets } = useFlashcardContext();
    const [sortBy, setSortBy] = useState("Newest");
    const [searchValue, setSearchValue] = useState("");

    const [filteredMySets, setFilteredMySets] = useState([...mySets]);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate("/login");
    //     }
    // }, [isLoggedIn]);

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
        // console.log(JSON.stringify(mySets[0].title.includes(searchValue)))
        // console.log(JSON.stringify(mySets[0].title))
        //if searchValue is in the title or description set it to a variable
        const fillteredSetByTitleDescription = mySets.filter((e) => {
            if (e.title.includes(searchValue)) {
                return true;
            }
            if (e.description.includes(searchValue)) {
                return true;
            }
            console.log(e.title, e.description, "false")
            return false;
        });

        // if the searchValue is empty set the variable to the full mySets
        // if (searchValue == "") {
        //     fillteredSetByTitleDescription = mySets;
        // }

        //set that filtered variable in a useState value
        setFilteredMySets(
            mySets.filter((e) => {
                if (e.title.includes(searchValue)) {
                    return true;
                }
                // if (e.description.includes(searchValue)) {
                //     return true;
                // }
                console.log(e.title, e.description, "false")
                return false;
            })
        );
        console.log(filteredMySets.length, mySets.length, fillteredSetByTitleDescription.length)

        
        //sorts the sets
        if (sortBy == "Newest") {
            sortByNewestDate(fillteredSetByTitleDescription);
        } else if (sortBy == "Oldest") {
            sortByOldestDate(fillteredSetByTitleDescription);
        } else if (sortBy == "A-Z") {
            sortByAlphabeticalOrder(fillteredSetByTitleDescription);
        } else if (sortBy == "Z-A") {
            sortByReverseAlphabeticalOrder(fillteredSetByTitleDescription);
        } else {
            sortByNumOfFlashcards(fillteredSetByTitleDescription);
        }
        //This is needed to rerender the sets
        setFilteredMySets([...fillteredSetByTitleDescription]);
    }, [sortBy, searchValue]);
    return (
        <div className="my-sets-page">
            <div>
                <label htmlFor="search-input">User's sets</label>
            </div>
            {sortBy}
            <input
                className="search-input"
                type="text"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
            />
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
            {filteredMySets.map((e, idx) => (
                <Set set={e} key={idx} />
            ))}
        </div>
    );
}
