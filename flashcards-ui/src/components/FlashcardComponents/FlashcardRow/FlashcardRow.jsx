import React, {useRef} from "react"
import {Checkbox, Container, HStack, Text} from "@chakra-ui/react"


export default function FlashcardRow({
    idx, //The location of the flashcard in the set
    term,
    definition,
    chosenSet, //The set this flashcard is in
    checkBox, //Is the checkbox for selecting for trash or visibility
}) {
    const checkBoxInput = useRef(null);
    ("I pass in choosenSet because this is how I got selected to work");

    return (
        <HStack className="flashcard-row" mt={"5%"} mb={"5%"}>
            <Container centerContent className="term-card"
                w={"100%"} p={"25px"}
                bg={"green.100"}
                boxShadow={"md"}
                border={"3px solid"} borderColor={"green.200"}
                
                onClick={() => {
                    setCheckBoxState(!checkBoxState);
                }}
            >

                <Text className="term"
                    
                    fontFamily={"serif"} fontWeight={"bold"} textAlign={"center"}
                    cursor={"default"}
                >
                    {term}
                </Text>
            </Container>
            <Container centerContent>
                <Checkbox className={`myCheck ${checkBox || "hidden"}`}
                    colorScheme={"green"}
                    size={"lg"}
                    border={"3px solid"} borderColor={"green.200"}

                    ref={checkBoxInput}
                    title={
                        checkBox == "visibility"
                            ? "Flashcard Visibility"
                            : "Delete Card"
                    }
                    onChange={({ target }) => {
                    setCheckBoxState(target.checked);
                }}
                isChecked={checkBoxState}
             
                />
            </Container>
            <Container centerContent className="definition-card" 
                w={"100%"} p={"25px"}
                bg={"green.100"}
                boxShadow={"md"}
                border={"3px solid"} borderColor={"green.200"}

                onClick={() => {
                    setCheckBoxState(!checkBoxState);
                }}
            >
                <Text className="definition"
                    fontSize={"14px"} fontFamily={"serif"} fontWeight={"medium"} textAlign={"center"}
                    cursor={"default"}
                >
                    {definition}
                </Text>
            </Container>
        </HStack>
    )
}