import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import { LoremIpsum } from "lorem-ipsum";

const FlashcardContext = createContext(null);

export const FlashcardContextProvider = ({ children }) => {
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [userCreatedSet, setUserCreatedSet] = useState({
        title: null,
        description: null,
        flashcard: null,
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
    function randomDate(start, end) {
        return new Date(
            start.getTime() + Math.random() * (end.getTime() - start.getTime())
        );
    }

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
                    visibility: true,
                    selectedForTrash: false,
                });
            }
            return flashcardss;
        };
        for (let i = 0; i < numOfSet; i++) {
            set.push({
                title: `${lorem.generateWords(1)}`,
                description: lorem.generateWords(
                    Math.floor(Math.random() * 22) + 10
                ),
                setId: i,
                flashcard: create(),
                date: randomDate(new Date(2012, 0, 1), new Date()),
            });
        }
        return set;
    };

    const [mySets, setmySets] = useState(
        randomSet(Math.floor(Math.random() * 15) + 12)
    );
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
        userCreatedSet,
        setUserCreatedSet,
        setmySets,
    };

    return (
        <FlashcardContext.Provider value={flashcardValue}>
            <>{children}</>
        </FlashcardContext.Provider>
    );
};

export const useFlashcardContext = () => useContext(FlashcardContext);
