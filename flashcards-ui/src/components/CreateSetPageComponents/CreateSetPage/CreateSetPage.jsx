import React, { useState, useEffect } from "react";
import CreateSetOverview from "../CreateSetOverview/CreateSetOverview.jsx";
import CreateSetAddCard from "../CreateSetAddCard/CreateSetAddCard.jsx";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../contexts/auth";
import { Flex, Input, Text, Divider, Center } from "@chakra-ui/react";
import { useFlashcardContext } from "../../../../contexts/flashcard.jsx";

export default function CreateSetPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // This variable decides which body of the create page is shown
    const [isCreateOverviewShown, setIsCreateOverviewShown] = useState(true);
    const [userCreatedSet, setUserCreatedSet] = useState({
        title: null,
        description: null,
        flashcards: [],
        isPublic: true
    });


    const { isLoading, isLoggedIn } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, isLoading]);

    return (
        <Flex direction={"column"} align={"center"} justify={"center"}>
            <Input
                type="text"
                className="title"
                name="title"
                w={"30%"}
                mt={"5%"}
                pt={"2%"}
                pb={"2%"}
                bg={"green.200"}
                border={"3px solid"}
                borderColor={"green.300"}
                borderRadius={"35px"}
                color={"green.800"}
                textAlign={"center"}
                fontSize={"45px"}
                fontFamily={"serif"}
                fontWeight={"bold"}
                _hover={{ border: "3px solid", borderColor: "green.500" }}
                _focus={{
                    bg: "green.300",
                    border: "3.5px solid",
                    borderColor: "green.600",
                }}
                value={title}
                placeholder="Add Set Title"
                _placeholder={{
                    opacity: 0.4,
                    color: "gray",
                    fontStyle: "italic",
                }}
                onChange={(e) => {
                    setTitle(e.target.value);
                    userCreatedSet.title = e.target.value;
                }}
            />
            <Divider
                orientation="horizontal"
                width={"80vw"}
                height="22px"
                // borderWidth="22px"
                borderColor={"green"}
                color={"green"}
            />
            <br />
            {isCreateOverviewShown ? (
                <CreateSetOverview
                    description={description}
                    setDescription={setDescription}
                    setIsCreateOverviewShown={setIsCreateOverviewShown}
                    chosenSet={userCreatedSet}
                    userCreatedSet={userCreatedSet}
                    setUserCreatedSet={setUserCreatedSet}
                />
            ) : (
                <CreateSetAddCard
                    setIsCreateOverviewShown={setIsCreateOverviewShown}
                    userCreatedSet={userCreatedSet}
                />
            )}
        </Flex>
    );
}
