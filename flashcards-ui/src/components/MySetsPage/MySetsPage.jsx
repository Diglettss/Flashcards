import React from "react";
import { Routes, Route } from "react-router-dom";
import MySetsOverview from "../MySetsOverview/MySetsOverview.jsx";
import UpdateMySetPage from "../UpdateMySetPage/UpdateMySetPage.jsx";
import FlashcardOverviewPage from "../FlashcardOverviewPage/FlashcardOverviewPage.jsx";
import StudyPage from "../StudyPage/StudyPage.jsx";
import NotFound from "../NotFound/NotFound";

export default function MySetsPage() {
    return (
        <div className="mysets-page">
            <Routes>
                <Route path="/" element={<MySetsOverview />} />
                <Route path="/:setId" element={<FlashcardOverviewPage />} />
                <Route path="/update/:setId" element={<UpdateMySetPage />} />
                <Route path="/studymode/:setId" element={<StudyPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
