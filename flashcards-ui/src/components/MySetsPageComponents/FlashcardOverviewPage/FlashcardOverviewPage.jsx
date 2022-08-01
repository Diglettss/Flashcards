import React, { useEffect, useRef, useState } from "react";
import FlashcardRow from "../../FlashcardComponents/FlashcardRow/FlashcardRow.jsx";
import "./FlashcardOverviewPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useFlashcardContext } from "../../../../contexts/flashcard.jsx";
import {
    Box,
    Button,
    HStack,
    IconButton,
    Avatar,
    AvatarBadge,
    useColorModeValue,
    Icon,
    Input,
    Spacer,
    Center,
    Heading,
    useTheme,
    Text,
    Flex,
    VStack,
} from "@chakra-ui/react";

function FlashcardOverviewPageContent({ chosenSet }) {
    const navigate = useNavigate();
    const { globalTheme } = useTheme();
    const startStudying = () => {
        let filteredFlashcards = chosenSet.flashcards.filter(
            (e) => {
                if (e.visibility == true) {
                    return e;
                }
            }
        );
        if (filteredFlashcards.length < 2) {
            filteredFlashcards = chosenSet.flashcards;
            console.error(
                "Please have at least two flashcards"
            );
            navigate(`/mysets/studymode/${chosenSet.id}`);
        } else {
            navigate(`/mysets/studymode/${chosenSet.id}`);
        }

    }
    return (
        <>
            <Center>
                <Heading
                    bgColor={"black"}
                    color="white"
                    paddingTop={"20px"}
                    paddingBottom={"20px"}
                    paddingLeft={"80px"}
                    paddingRight={"80px"}
                    rounded={globalTheme.rounded}
                    marginBottom="20px"
                >
                    {chosenSet.title}
                </Heading>
            </Center>
            <Center>
                <Text
                    bgColor={"black"}
                    color="white"
                    paddingTop={"20px"}
                    paddingBottom={"20px"}
                    paddingLeft={"80px"}
                    paddingRight={"80px"}
                    rounded={globalTheme.rounded}
                >
                    {chosenSet.description}
                </Text>
            </Center>
            <Button
                position="fixed"
                margin="auto"
                bottom={"40px"}
                display="block"
                transform="translateX(-50%)"
                left="50%"
                onClick={startStudying}
            >
                Start Studying
            </Button>

            <Center>
                <VStack w={"80vw"} marginTop="80px">
                {chosenSet.flashcards.map((e, idx) => (
                        <FlashcardRow
                            e={e}
                            key={idx}
                            idx={idx}
                            term={e.term}
                            checkBox={"visibility"}
                            definition={e.definition}
                            chosenSet={chosenSet}
                        />
                    ))}
                </VStack>
            </Center>
        </>
    );
}

export default function FlashcardOverviewPage() {
    const navigate = useNavigate();
    const { mySets } = useFlashcardContext();
    const { setId } = useParams();
    const chosenSet = mySets.find((e) => e.id == setId);

    //if the params setId doesn't exist in mySets send the user to the shadow realm
    useEffect(() => {
        if (!chosenSet || chosenSet == undefined) {
            console.error("sending you to the shadow realm");
            navigate("/notfound");
        }
    }, []);

    //The return statement is written like this, because an undefined chosenSet would cause an error and stop the useEffect from running
    return (
        <>
            {chosenSet ? (
                <FlashcardOverviewPageContent chosenSet={chosenSet} />
            ) : (
                <div />
            )}
        </>
    );
}
