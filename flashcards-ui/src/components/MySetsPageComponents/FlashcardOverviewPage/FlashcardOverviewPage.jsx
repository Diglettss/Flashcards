import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFlashcardContext } from "../../../../contexts/flashcard.jsx";
import { useAuthContext } from "../../../../contexts/auth.jsx";
import FlashcardOverviewPageContent from "../../FlashcardComponents/FlashcardOverviewPageContent/FlashcardOverviewPageContent.jsx";
import { Switch, Box, FormLabel, HStack } from "@chakra-ui/react";

export default function FlashcardOverviewPage() {
    const navigate = useNavigate();
    const { mySets } = useFlashcardContext();
    const { setId } = useParams();
    const chosenSet = mySets.find((e) => e.id == setId);
    const { isLoading, isLoggedIn } = useAuthContext();

    //if the params setId doesn't exist in mySets send the user to the shadow realm
    useEffect(() => {
        if ((isLoading, isLoggedIn)) {
            if (!chosenSet || chosenSet == undefined) {
                console.error("sending you to the shadow realm");
                navigate("/notfound");
            }
        }
    }, []);

    //The return statement is written like this, because an undefined chosenSet would cause an error and stop the useEffect from running
    return (
        <>
            {chosenSet ? (
                <Box>
                    <FlashcardOverviewPageContent
                        chosenSet={chosenSet}
                        buttonText=""
                        startStudyingNavigation="mysets/studymode"
                        onButtonClick={() => {
                            console.warn("set up update");
                        }}
                    />
                    <HStack>
                        <FormLabel
                            htmlFor="email-alerts"
                            mb="0"
                            pos={"fixed"}
                            top="80px"
                            left="110px"
                            fontSize={"lg"}
                        >
                            Public
                        </FormLabel>
                        <Switch
                            pos={"fixed"}
                            top="80px"
                            left="40px"
                            size="lg"
                            colorScheme='green'
                            id="email-alerts"
                            isChecked
                        />
                    </HStack>
                </Box>
            ) : (
                <div />
            )}
        </>
    );
}
