import React, { useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";

import { useAuthContext } from "../../../contexts/auth";
import { useNavigate } from "react-router-dom";

export default function MySetPage() {
    const { mysets } = useAuthContext();
    console.log(mysets)
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate("/login");
    //     }
    // }, [isLoggedIn]);


    return <div>MySetPage</div>;
}
