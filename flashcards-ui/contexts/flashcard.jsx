import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import { LoremIpsum } from "lorem-ipsum";
// import { response } from "../../flashcards-api/app";
import { useAuthContext } from "./auth";

const FlashcardContext = createContext(null);

export const FlashcardContextProvider = ({ children }) => {
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [userCreatedSet, setUserCreatedSet] = useState({
        title: null,
        description: null,
        flashcard: null,
    });
    //This is to be changeable by the user
    const [defaultFlashcardState, setDefaultFlashcardState] = useState(true);

    const [initialized, setInitialized] = useState();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState();
    const [mySets, setmySets] = useState([]);
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
    const { user } = useAuthContext();


    useEffect(() => {
        // should make a `GET` request to the `/mysets` endpoint
        // If there is an error with the request, it should set a message as the `error` state variable
        const fetchMySets = async () => {
            const { data, err } = await apiClient.fetchUserSets();
            // If all goes well, should set the data as the `userSet` state variable

            if (data) {
                setmySets(data.mySets);
            }
            // If there is an error with the request, it should set a message as the `error` state variable
            if (err) {
                setError(err);
            }
        };

        fetchMySets();

        setIsProcessing(false);
        setInitialized(true);
    }, [user?.email]);

    // user's sets are created
    async function createSet(credentials) {
        setIsProcessing(true);
        setError((e) => ({ ...e, credentials: null }));
        const create = async () => {
            const { data, err } = await apiClient.createUserSet(credentials);
            if (data) {
                console.warn("data recieved");
                return true;
            } else if (err) {
                return false;
            }
        };
        const valid = await create();
        setIsProcessing(false);
        return valid;
    }

    // method to fetch a user's specific public set by id
    async function getPublicSet(setId) {
        const response = await apiClient.getAPublicSet(setId);
        return response;
    }

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
                title: `Title`,
                description: lorem.generateWords(
                    Math.floor(Math.random() * 8) + 5

                ),
                setId: i,
                flashcard: create(),
                date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
            });
        }
        return set;
    };



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
        setmySets,
    };

    return (
        <FlashcardContext.Provider value={flashcardValue}>
            <>{children}</>
        </FlashcardContext.Provider>
    );
};

export const useFlashcardContext = () => useContext(FlashcardContext);
