import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicSetsOverview from "./PublicSetsOverview/PublicSetsOverview.jsx";
import PublicFlashcardOverviewPage from "./PublicFlashcardOverviewPage/PublicFlashcardOverviewPage.jsx";

export default function PublicSetsPage() {
    return (
        <>
            <Routes>
                <Route path="/:setId" element={<PublicFlashcardOverviewPage />} />
                <Route path="search/:searchValue" element={<PublicSetsOverview />} />
            </Routes>
        </>
    );
}
