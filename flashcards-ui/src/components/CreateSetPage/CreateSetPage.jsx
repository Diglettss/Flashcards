import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFlashcardContext } from "../../../contexts/flashcard";

export default function CreateSetPage() {
    const navigate = useNavigate();

    // const { isLoggedIn } = useFlashcardContext();


    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate("/login");
    //     }
    // }, [isLoggedIn]);


    return <div>CreateSetPage</div>;
}
