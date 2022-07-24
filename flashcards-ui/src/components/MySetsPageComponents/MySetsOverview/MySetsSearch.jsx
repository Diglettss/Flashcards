import { useEffect } from "react";
import { useFlashcardContext } from "../../../../contexts/flashcard";

export default function MySetsSearch({
    setFilteredMySets,
    sortBy,
    searchValue,
    setSearchValue,
    setSortBy,
}) {
    const { mySets } = useFlashcardContext();

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

    useEffect(() => {
        //if searchValue is in the title or description set it to a variable
        const fillteredSetByTitleDescription = mySets.filter((e) => {
            if (e.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
            } else if (
                e.description.toLowerCase().includes(searchValue.toLowerCase())
            ) {
                return true;
            } else {
                return false;
            }
        });

        //set that filtered variable into filteredMySets
        setFilteredMySets(fillteredSetByTitleDescription);

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
        //This is needed to rerender the sets, I think
        // setFilteredMySets([...fillteredSetByTitleDescription]);
    }, [sortBy, searchValue]);

    return (
        <>
            <div className="label-search-input">
                <label htmlFor="search-input">My Sets</label>
            </div>
            <div className="filter-container">

            <input
                className="search-input"
                name="search-input"
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
            </div>

        </>
    );
}
