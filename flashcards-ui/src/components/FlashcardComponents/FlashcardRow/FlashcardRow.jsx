import {
    Box,
    HStack,
    Checkbox,
    Text,
    Flex,
    Center,
    useTheme,
} from "@chakra-ui/react";
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
    //This code is used for updated and Flashcard overview and the checkbox needs to be different for different occasions
    if (checkBox == "visibility") {
        defaultCheckBox = true;
    } else {
        defaultCheckBox = false;
    }
    const [checkBoxState, setCheckBoxState] = useState(
        chosenSet.flashcards[idx][checkBox] || defaultCheckBox
    );
    useEffect(() => {
        chosenSet.flashcards[idx][checkBox] = checkBoxState;
    }, [checkBoxState]);

    return (
        <HStack h="400" paddingBottom={"80px"}>
            <Center
                // background={"#a1fbfb"}
                background={useTheme().colors.brand.green}
                w="40vw"
                onClick={() => {
                    setCheckBoxState(!checkBoxState);
                }}
                h="100%"
                align={"center"}
                borderRadius="7"
            >
                <Text fontWeight="bold" fontSize="2xl">{term}</Text>
            </Center>
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
            <Center
                // background={"#a9f7dd"}
                background={useTheme().colors.brand.green}
                h="100%"
                w="40vw"
                align={"center"}
                onClick={() => {
                    setCheckBoxState(!checkBoxState);
                }}
                borderRadius="7"
            >
                <Text fontWeight="bold" fontSize="xl">{definition}</Text>
            </Center>
        </HStack>
    );
}
