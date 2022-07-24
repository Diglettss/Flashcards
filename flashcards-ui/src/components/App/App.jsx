import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import MySetsOverview from "../MySetsOverview/MySetsOverview.jsx";
import UpdateMySetPage from "../UpdateMySetPage/UpdateMySetPage.jsx";
import MySetsPage from "../MySetsPage/MySetsPage.jsx";
import CreateSetPage from "../CreateSetPage/CreateSetPage.jsx";
import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import NotFound from "../NotFound/NotFound";
import apiClient from "../../../services/apiClient";
import { AuthContextProvider, useAuthContext } from "../../../contexts/auth";
import {
    FlashcardContextProvider,
    useFlashcardContext,
} from "../../../contexts/flashcard.jsx";
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
    //TODO keep the sets in a query that's in the users cookies and will trye to send the sets if it returns an error
    //TODO remove id from buttons
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
