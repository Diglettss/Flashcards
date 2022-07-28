import React, { useState } from "react";
import "./CreateSetPage.css";
import CreateSetBody from "../CreateSetOverview/CreateSetOverview.jsx";
import CreateSetAddCard from "../CreateSetAddCard/CreateSetAddCard.jsx";

export default function CreateSetPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [bodyView, setBodyView] = useState("create");
    const [userCreatedSet, setUserCreatedSet] = useState({
        title: null,
        description: null,
        flashcard: null,
        selected: true,
        selectedForTrash: false,
    });

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
            {bodyView == "create" ? (
                <CreateSetBody
                    description={description}
                    setDescription={setDescription}
                    setBodyView={setBodyView}
                    chosenSet={userCreatedSet}
                    userCreatedSet={userCreatedSet}
                />
            ) : (
                <CreateSetAddCard
                    setBodyView={setBodyView}
                    userCreatedSet={userCreatedSet}
                />
            )}
        </div>
    );
}
