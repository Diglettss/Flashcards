import React, { useEffect, useState } from "react";
import "./MySetsOverview.css";
import { useFlashcardContext } from "../../../../contexts/flashcard";
import Set from "../../FlashcardComponents/Set/Set";
import MySetsSearch from "./MySetsSearch";

export default function MySetsOverview() {
    "This takes the varibale mySets fron contexts/flashcard and loops it through the Set component";
    const { mySets, userSets } = useFlashcardContext();
    const [sortBy, setSortBy] = useState("Newest");
    const [searchValue, setSearchValue] = useState("");
    const [filteredMySets, setFilteredMySets] = useState([...mySets]);
    // const [filteredMySets, setFilteredMySets] = useState([...userSets]);

    return (
        <div className="my-sets-page">
            <MySetsSearch
                setFilteredMySets={setFilteredMySets}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            {filteredMySets.map((e, idx) => (
                <Set set={e} key={idx} />
            ))}
        </div>
    );
}
