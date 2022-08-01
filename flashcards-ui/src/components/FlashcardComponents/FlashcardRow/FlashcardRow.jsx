import { Box, HStack, Checkbox, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function FlashcardRow({
    idx, //The location of the flashcard in the set
    term,
    definition,
    chosenSet, //The set this flashcard is in
    checkBox, //Is the checkbox for selecting for trash or visibility
}) {
    ("I pass in choosenSet because this is how I got selected to work");

    let defaultCheckBox;
    if (checkBox == "visibility") {
        defaultCheckBox = true;
    } else {
        defaultCheckBox = false;
    }

    const [checkBoxState, setCheckBoxState] = useState(
        chosenSet.flashcards[idx][checkBox] || defaultCheckBox
    );
    useEffect(() => {
        chosenSet.flashcards[idx].visibility = checkBoxState;
    }, [checkBoxState]);
    
    return (
        <HStack h={"max-content"}>
            <Box
                background={"#a1fbfb"}
                h="100%"
                display={"inline-block"}
                w="40vw"
                onClick={() => {
                    setCheckBoxState(!checkBoxState);
                }}
            >
                <Text align={"center"}>{term}</Text>
            </Box>
            <Checkbox
                isChecked={checkBoxState}
                title={
                    checkBox == "visibility"
                        ? "Flashcard visibility"
                        : "Select for trash"
                }
                onChange={({ target }) => {
                    setCheckBoxState(target.checked);
                }}
            />
            <Box
                background={"#a9f7dd"}
                h="100%"
                w="40vw"
                onClick={() => {
                    setCheckBoxState(!checkBoxState);
                }}
            >
                <Text align={"center"}>
                    {definition} km nrths ngrth s njrgdfthsj dfhjk,frb
                    gsthurdgjrte hgdrfkugth rhesd tg rdsgnrdfjhrg jkrn grjhn
                    grgjtrnb hdhrf{" "}
                </Text>
            </Box>
        </HStack>
    );
}

