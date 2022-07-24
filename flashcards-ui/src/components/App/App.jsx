import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import MySetsPage from "../MySetsPageComponents/MySetsPages.jsx";
import CreateSetPage from "../CreateSetPageComponents/CreateSetPage/CreateSetPage.jsx";
import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import NotFound from "../NotFound/NotFound";
import apiClient from "../../../services/apiClient";
import { AuthContextProvider, useAuthContext } from "../../../contexts/auth";
import { FlashcardContextProvider } from "../../../contexts/flashcard.jsx";
import { useEffect } from "react";

export default function AppContainer() {
    return (
        <AuthContextProvider>
            <FlashcardContextProvider>
                <App />
            </FlashcardContextProvider>
        </AuthContextProvider>
    );
}

function App() {
    //TODO turn index.css into a index.scss
    //TODO keep the UserCreatedSets in a query (that's in the users local storage) that will try to send the sets until successful
    //TODO merge the flashcard branch before working on the mysets/update/*
    //TODO style settings modal
    //TODO make a better settings modal

    //TODO Finish the create page's add button as text, add comments, and then merge
    //!Create Page cuts off the last letter(s) of title and description

    const { user, setUser, error, setError } = useAuthContext();

    useEffect(() => {
        const fetchUser = async () => {
            const { data, err } = await apiClient.fetchUserFromToken();
            if (data) setUser(data.user);
            if (err) setError(err);
        };

        const token = localStorage.getItem("flashcard_token");
        if (token) {
            apiClient.setToken(token);
            fetchUser();
        }
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/create" element={<CreateSetPage />} />
                    <Route path="/mysets/*" element={<MySetsPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
