import React, { useState, useEffect } from "react";
import CreateSetOverview from "../CreateSetOverview/CreateSetOverview.jsx";
import CreateSetAddCard from "../CreateSetAddCard/CreateSetAddCard.jsx";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../../../../contexts/auth";
import {Flex, Input, Text, Stack} from "@chakra-ui/react"


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
        <Flex direction={"column"} align={"center"} justify={"center"}>
            <Stack className="create-set" align={"center"}>
                <Input
                    w={"50%"} h={"50%"}
                    mt={"15%"}
                    bg={"green.100"}
                    border={"3px solid"} borderColor={"green.200"} borderRadius={"22px"}
                    textAlign={"center"} fontSize={"50px"} fontFamily={"serif"} fontWeight={"bold"} color={"green.800"}
                    _hover={{bg: "green.100", borderColor: "green.300"}}
                    _focus={{bg: "green.200", border: "3px solid", borderColor: "green.400"}}
                    
                    className="title"
                    type="text"
                    name="title"
                    placeholder="Add Set Title" _placeholder={{opacity: 0.3, color: "gray", fontStyle: "italic"}}
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        userCreatedSet.title = e.target.value;
                    }}
                /> 
                <Text color={"green.600"} cursor={"default"}> ____________________________________________________________________________ </Text>
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
            </Stack>
        </Flex>
    );
}