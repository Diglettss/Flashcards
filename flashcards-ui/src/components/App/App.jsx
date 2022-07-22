import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import MySetPage from "../MySetPage/MySetPage.jsx";
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
import FlashcardOverviewPage from "../FlashcardOverviewPage/FlashcardOverviewPage.jsx";
import StudyPage from "../StudyPage/StudyPage.jsx";

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
                    <Route path="/mySets" element={<MySetPage />} />
                    <Route
                        path="/mySets/:setId"
                        element={<FlashcardOverviewPage />}
                    />
                    <Route
                        path="/mySets/studymode/:setId"
                        element={<StudyPage />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
