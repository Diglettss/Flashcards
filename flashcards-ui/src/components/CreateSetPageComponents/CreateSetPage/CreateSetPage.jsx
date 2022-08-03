import React, { useState, useEffect } from "react";
import "./CreateSetPage.css";
import CreateSetOverview from "../CreateSetOverview/CreateSetOverview.jsx";
import CreateSetAddCard from "../CreateSetAddCard/CreateSetAddCard.jsx";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../contexts/auth";
export default function CreateSetPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // This variable decides which body of the create page is shown
    const [isCreateOverviewShown, setIsCreateOverviewShown] = useState(true);
    const [userCreatedSet, setUserCreatedSet] = useState({
        title: null,
        description: null,
        flashcards: null,
        visibility: true,
        selectedForTrash: false,
    });

    const { isLoading, isLoggedIn } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, isLoading]);

    return (
        <div className="create-set">
            <input
                className="title"
                type="text"
                name="title"
                placeholder="enter a title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                    userCreatedSet.title = e.target.value;
                }}
            />
            {isCreateOverviewShown ? (
                <CreateSetOverview
                    description={description}
                    setDescription={setDescription}
                    setIsCreateOverviewShown={setIsCreateOverviewShown}
                    chosenSet={userCreatedSet}
                    userCreatedSet={userCreatedSet}
                />
            ) : (
                <CreateSetAddCard
                    setIsCreateOverviewShown={setIsCreateOverviewShown}
                    userCreatedSet={userCreatedSet}
                />
            )}
        </div>
    );
}
