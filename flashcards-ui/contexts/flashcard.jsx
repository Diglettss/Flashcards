import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import { LoremIpsum } from "lorem-ipsum";

const FlashcardContext = createContext(null);

export const FlashcardContextProvider = ({ children }) => {
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [info, setInfo] = useState({
        title: "Title of set",
        description: "description of set",
        setId: 1,
        flashcard: [
            {
                term: "term1",
                id: "0",
                definition: "Lorem ipsum dolor.",
                selected: true,
            },
            {
                term: "term2",
                id: "1",
                definition: "Lorem ipsum consectetur sint dolores consequatur!",
            },
            {
                term: "term3",
                id: "2",
                definition:
                    "Lorem ipsum condimentum leo in libero pulvinar pellentesque ac eget risus. Aenean rutrum molestie elit, vitae ultricies est facilisis sed. Fusce vitae massa tortor!",
            },
            {
                term: "term4",
                id: "3",
                definition:
                    "Lorem ipsum odio et sodales. Curabitur malesuada luctus dolor ac eleifend. Aliquam erat volutpat. Vivamus tincidunt eu odio at efficitur. Pellentesque lacinia eleifend..",
            },
            {
                term: "term5",
                id: "4",
                definition:
                    "Lorem ipsum  vel aliquam ante. Aenean quis suscipit neque, id maximus risus. Donec a enim vel turpis tincidunt porta a vitae nulla. Nulla in urna efficitur, fringilla felis eu, euismod ligula. Suspendisse bibendum orci vitae finibus lobortis. Phasellus sed sollicitudin tellus. Ut imperdiet mauris quis tempus venenatis. Ut vel rutrum velit.",
            },
        ],
    });
    info.flashcard.forEach((e) => {
        e.selected = true; //Math.random() < 0.5;
    });
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4,
        },
        wordsPerSentence: {
            max: 16,
            min: 4,
        },
    });
    lorem.generateWords(71);

    const randomSet = (numOfSet) => {
        let set = [];

        const create = () => {
            let flashcardss = [];
            let randomInt = Math.floor(Math.random() * 13) + 5;
            for (let k = 0; k < randomInt; k++) {
                flashcardss.push({
                    term: `term${k}`,
                    id: k,
                    definition: lorem.generateWords(
                        Math.floor(Math.random() * 22) + 10
                    ),
                    selected: true,
                });
            }
            return flashcardss;
        };

        for (let i = 0; i < numOfSet; i++) {
            set.push({
                title: "Title of set",
                description: lorem.generateWords(
                    Math.floor(Math.random() * 22) + 10
                ),
                setId: i,
                flashcard: create(),
            });
        }
        return set;
    };

    const [mySets, setmySets] = useState(randomSet(Math.floor(Math.random() * 22) + 2));
    console.log(mySets);

    //This is to be changeable by the user
    const [defaultFlashcardState, setDefaultFlashcardState] = useState(true);

    const [initialized, setInitialized] = useState();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState();

    const flashcardValue = {
        initialized,
        setInitialized,
        isProcessing,
        setIsProcessing,
        error,
        setError,
        showSettingsModal,
        setShowSettingsModal,
        info,
        setInfo,
        defaultFlashcardState,
        setDefaultFlashcardState,
        mySets,
    };

    return (
        <FlashcardContext.Provider value={flashcardValue}>
            <>{children}</>
        </FlashcardContext.Provider>
    );
};

export const useFlashcardContext = () => useContext(FlashcardContext);