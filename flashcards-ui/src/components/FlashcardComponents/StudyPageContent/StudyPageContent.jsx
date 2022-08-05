import React from "react";
import { Heading, Button, Flex, Center } from "@chakra-ui/react";
import Index from "./Carousel/Index";

import { useFlashcardContext } from "../../../../contexts/flashcard";

export default function StudyPageContent({ chosenSet }) {
    let filteredFlashcard = chosenSet.flashcards.filter((e) => {
        if (e.visibility == true) {
            return e;
        }
    });

    if (filteredFlashcard.length < 2) {
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