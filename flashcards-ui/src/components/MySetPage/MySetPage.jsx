import React, { useEffect } from "react";
import { useAuthContext } from "../../../contexts/auth";
import { useNavigate } from "react-router-dom";

export default function MySetPage() {
    const { isLoggedIn } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn]);
    return <div>MySetPage</div>;
}
