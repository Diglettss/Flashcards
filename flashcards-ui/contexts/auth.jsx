import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import { LoremIpsum } from "lorem-ipsum";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    //TODO put this in its own context file
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

        const create= ()=>{
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
        return flashcardss
        }

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

    const [mysets, setMysets] = useState(randomSet(3));
    console.log(mysets)

    //This is to be changeable by the user
    const [defaultFlashcardState, setDefaultFlashcardState] = useState(true);
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [initialized, setInitialized] = useState();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState();

    //this is called every time isLoggedIn is changed
    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn);
    }, [isLoggedIn]);

    // should make a request to log the user in
    async function loginUser(credentials) {
        setIsProcessing(true);
        setError((e) => ({ ...e, form: null }));

        const { data, error } = await apiClient.loginUser({
            email: credentials.email,
            password: credentials.password,
        });
        if (error) {
            setError((e) => ({ ...e, credentials: error }));
            const message = error?.response?.data?.error?.message;
            setError((e) => ({
                ...e,
                credentials: message ? String(message) : String(error),
            }));
            setIsProcessing(false);
            return false;
        }
        if (data?.user) {
            setUser(data.user);
            apiClient.setToken(data.token);
            setIsProcessing(false);
            return true;
        }
    }

    // should make a request to sign the user up
    async function signupUser(credentials) {
        setIsProcessing(true);
        setError((e) => ({ ...e, credentials: null }));

        if (credentials.passwordConfirm !== credentials.password) {
            setError((e) => ({
                ...e,
                passwordConfirm: "Passwords do not match.",
            }));
            setIsProcessing(false);
            return;
        } else {
            setError((e) => ({ ...e, passwordConfirm: null }));
        }
        const { data, error } = await apiClient.signupUser({
            email: credentials.email,
            password: credentials.password,
            firstName: credentials.firstName,
            lastName: credentials.lastName,
            username: credentials.username,
        });
        if (error) {
            setError((e) => ({ ...e, credentials: error }));
            const message = error?.response?.data?.error?.message;
            setError((e) => ({
                ...e,
                credentials: message ? String(message) : String(error),
            }));
            setIsProcessing(false);
            return false;
        }
        if (data?.user) {
            setUser(data.user);
            apiClient.setToken(data.token);
            setIsProcessing(false);
            return true;
        }
        setIsProcessing(false);
    }

    // should make a request to the `/auth/me` route to get the user's info
    async function fetchUserFromToken() {
        const { data } = await apiClient.fetchUserFromToken();
        if (data) {
            setUser(data.user);
            setError(null);
        }
        setError("");
    }

    // function should remove the `lifetracker_token` from local storage
    // and refresh the page so that all user data is reset
    async function logoutUser() {
        await apiClient.logoutUser();
        setUser({});
        setError(null);
    }

    const authValue = {
        user,
        setUser,
        initialized,
        setInitialized,
        isProcessing,
        setIsProcessing,
        error,
        setError,
        loginUser,
        signupUser,
        fetchUserFromToken,
        logoutUser,
        isLoggedIn,
        setIsLoggedIn,
        showSettingsModal,
        setShowSettingsModal,
        info,
        setInfo,
        defaultFlashcardState,
        setDefaultFlashcardState,
        mysets,
    };

    return (
        <AuthContext.Provider value={authValue}>
            <>{children}</>
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
