import { Box, HStack, Input, Checkbox, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

export default function FlashcardRow({
    idx, //The location of the flashcard in the set
    term,
    definition,
    chosenSet, //The set this flashcard is in
    checkBox, //Is the checkbox for selecting for trash or visibility
}) {
    ("I pass in choosenSet because this is how I got selected to work");

    const checkBoxInput = useRef(null);
    // console.log(checkBoxInput.current);
    // console.log(chosenSet.flashcards)
    const [checkBoxState, setCheckBoxState] = useState(chosenSet.flashcards[idx][checkBox])
    return (
        <HStack>
            <Box
                background={"#a1fbfb"}
                minH="100%"
                w="40vw"
                onClick={() => {
                    checkBoxInput.current.checked = false;
                }}
            >
                <Text align={"center"}>{term}</Text>
            </Box>
            <Checkbox
                ref={checkBoxInput}
                checked={false}
                title={
                    checkBox == "visibility"
                        ? "Flashcard visibility"
                        : "Select for trash"
                }
                onClick={(e) => {
                    console.log(e)
                    chosenSet.flashcards[idx].visibility = e.target[checkBox];
                }}
            />
            <Box 
            background={"#a9f7dd"} 
            h="100%" 
            w="40vw">
                <Text align={"center"}>{definition} km nrths ngrth s njrgdfthsj dfhjk,frb gsthurdgjrte hgdrfkugth rhesd tg rdsgnrdfjhrg jkrn grjhn grgjtrnb hdhrf </Text>
            </Box>
        </HStack>
    );
}

// onClick={(e) => {
//     checkBoxInput.current.checked =
//         !checkBoxInput.current.checked;
//     chosenSet.flashcards[idx].visibility =
//         checkBoxInput.current.checked;
// }}
