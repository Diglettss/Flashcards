import React, { useEffect } from 'react'
import { useAuthContext } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";

export default function CreateSetPage() {
    const { isLoggedIn } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn]);
  return (
    <div>CreateSetPage</div>
  )
}
