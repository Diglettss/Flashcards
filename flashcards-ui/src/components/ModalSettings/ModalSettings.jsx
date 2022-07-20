import React from "react";
import { useAuthContext } from "../../../contexts/auth";
import "./ModalSettings.css";

export default function ModalSettings({}) {
    const { showSettingsModal, setShowSettingsModal } = useAuthContext();
    console.log("showSettingsModal", showSettingsModal);

    return (
        <div
            className={`settings-modal container ${
                showSettingsModal ? "" : "hidden"
            }`}
        >
            <div
                className="overlay"
                onClick={() => {
                    setShowSettingsModal(!showSettingsModal);
                }}
            ></div>
            <div className="settings-box">Time: System:</div>
        </div>
    );
}
