import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import { LoremIpsum } from "lorem-ipsum";

const FlashcardContext = createContext(null);

export const FlashcardContextProvider = ({ children }) => {
    const [showSettingsModal, setShowSettingsModal] = useState(false);
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
                    selectedForTrash: false,
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