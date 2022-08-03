import React, { useState, useEffect } from "react";
// import "./CreateSetPage.css";
import CreateSetOverview from "../CreateSetOverview/CreateSetOverview.jsx";
import CreateSetAddCard from "../CreateSetAddCard/CreateSetAddCard.jsx";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../contexts/auth";
import {Button,
    Flex,
    Heading,
    Image,
    Input,
    Stack,
    Spacer,
    Text,
    Textarea,
    useBreakpointValue,
    Box
} from "@chakra-ui/react"


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
        console.log('isLoggedIn', isLoggedIn)
        console.log('isLoading', isLoading)
        if (!isLoading && !isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, isLoading]);

    return (
        <div className="create-set">
            <Input 
                w={"35%"} h={"auto"} marginLeft={"33%"} marginTop={"5%"} marginBottom={"2%"} paddingBottom={"5px"}
                backgroundColor={"green.100"}
                border={"3px solid"} borderColor={"green.200"} borderRadius={"20px"}
                textAlign={"center"} fontSize={"35px"} fontFamily={"serif"} color={"black"}
                _hover={{backgroundColor: "green.100", borderColor: "green.300"}}
                _focus={{backgroundColor: "green.200", border: "3px solid", borderColor: "green.400"}}
                
                className="title"
                type="text"
                name="title"
                placeholder="Title" _placeholder={{opacity: 0.5, color: "gray", fontStyle: "italic"}}
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
