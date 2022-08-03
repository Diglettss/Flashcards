import React, { useState, useEffect } from "react";
import { useFlashcardContext } from "../../../contexts/flashcard";
import { useNavigate, useParams } from "react-router-dom";
import { Heading, Button, Flex, Center } from "@chakra-ui/react";
import Index from "./Carousel/Index";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import { useAuthContext } from "../../../contexts/auth";

function StudyPageContent({ chosenSet }) {
    let filteredFlashcard = chosenSet.flashcards.filter((e) => {
        if (e.visibility == true) {
            return e;
        }
    });

    if (filteredFlashcard.length < 2) {
        console.error(
            `I don't know how but less than two flashcards are inside of filteredFlashcard, all flashcards will be used`
        );
        // console.log(filteredFlashcard)
        filteredFlashcard = chosenSet.flashcards;
    }
    const { defaultFlashcardState } = useFlashcardContext();

    return (
        <>
            <Flex justifyContent={"space-between"}>
                <Button>Settings</Button>
                <Button>Back</Button>
            </Flex>
            <Center>
                <Heading>{chosenSet.title}</Heading>
            </Center>
            <Index
                flashcards={filteredFlashcard}
                defaultFlashcardState={defaultFlashcardState}
            />
        </>
    );
}

export default function StudyPage() {
    const {
        showSettingsModal,
        setShowSettingsModal,
        defaultFlashcardState,
        setDefaultFlashcardState,
    } = useFlashcardContext();
    const { isLoading, isLoggedIn } = useAuthContext();

    const { setId } = useParams();
    const navigate = useNavigate();

    const { mySets } = useFlashcardContext();
    const chosenSet = mySets.find((e) => e.id == setId);



    useEffect(() => {
        if ((isLoading, isLoggedIn)) {
            if (!chosenSet || chosenSet == undefined) {
                console.error("sending you to the shadow realm");
                navigate("/notfound");
            }
        }
    }, []);

    return (
        <>
            {/* <Alert
                status="error"
                w={"50vw"}
                pos="fixed"
                top="0"
                right={"0"}
                zIndex="9"
                display={"none"}
            >
                <AlertIcon />
                <AlertTitle>Your browser is outdated!</AlertTitle>
                <AlertDescription>
                    Your Chakra experience may be degraded.
                </AlertDescription>
            </Alert> */}
            {chosenSet ? (
                <StudyPageContent
                    chosenSet={chosenSet}
                />
            ) : (
                <div />
            )}
        </>
    );
}
