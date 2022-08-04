import React, {useState} from "react"
import {useFlashcardContext} from "../../../../contexts/flashcard"
import {Box, Button, Flex, FormLabel, HStack, Input, Spacer, Stack, Text, Textarea} from "@chakra-ui/react"


export default function CreateSetAddCard({
    setIsCreateOverviewShown,
    userCreatedSet,
}) {
    const [textDelimiter, setTextDelimiter] = useState(":");
    const [flashcardDelimiter, setFlashcardDelimiter] = useState("•");
    const [flashcard, setFlashcard] = useState("");
    //This is test data
    const [textInput, setTextinput] = useState(
        "Term 1: Definition 1     •     Term 2: Definition 2     •     Term 3: Definition 3"
    );
    const { mySets, setMySets } = useFlashcardContext();

    const turnIntoFlashcards = () => {
        let createdSets = [];
        let userError = false;

        if (textDelimiter == flashcardDelimiter) {
            //If the delimiters are the same split the text
            let splitTexts = textInput.split(flashcardDelimiter);
            //Varible to hold and term and definition
            let singleFlashcardAsOBJ = {};

            //check to see if the amount of terms and definition are the same
            if (splitTexts.length % 2 !== 0) {
                userError = true;
            }

            //variable that decides if the user see the flashcard when they are studying
            singleFlashcardAsOBJ.visibility = true;

            splitTexts.forEach((e, idx) => {
                if (!(idx % 2)) {
                    //old string will me terms
                    singleFlashcardAsOBJ.term = e;
                } else {
                    //even strings will be definitions, add the term and definition to a list and reset singleFlashcardAsOBJ so it can be done again
                    singleFlashcardAsOBJ.definition = e;
                    createdSets.push(singleFlashcardAsOBJ);
                    singleFlashcardAsOBJ = {};
                }
            });
        } else {
            //If the textDelimiter and flashcardDelimiter are different
            //split them into a list so term and definition are in one string
            let flashcardsPairs = textInput.split(flashcardDelimiter);
            flashcardsPairs.forEach((e) => {
                //Splits the terms from the definition
                let singleFlashcard = e.split(textDelimiter);
                //if the term or definition is missing run an error
                if (
                    singleFlashcard[0] === undefined ||
                    singleFlashcard[1] === undefined
                ) {
                    //TODO send an error message to user
                    userError = true;
                }
                //Put the term and definition into an object and push it into createdSets
                let singleFlashcardAsOBJ = {
                    //variable that decides if the user see the flashcard when they are studying

                    visibility: true,
                    term: singleFlashcard[0],
                    definition: singleFlashcard[1],
                };
                createdSets.push(singleFlashcardAsOBJ);
            });
        }

        //If the flashcards are not formatted correctly make an alert
        if (userError) {
            alert("You are missing a term or definition");
        } else {
            //pass the info the userCreatedSet so the CreateSetOverview can access it
            userCreatedSet.flashcards = createdSets;
            userCreatedSet.id = mySets.length;
            userCreatedSet.createdAt = new Date().toDateString();
            setIsCreateOverviewShown(true);
        }
    };

    return (
        <Flex direction={"column"} align={"center"} justify={"center"}>
            <div className="add-card-as-text">
                <Box as="delimiters">
                    <HStack className="delimiter-row" mt={"5%"} spacing={"-10"}>
                        <Stack align={"center"}>
                            <FormLabel fontFamily={"serif"} fontWeight={"bold"} textAlign={"center"}>
                                Term/Definition Delimiter
                            </FormLabel>
                            <Input
                                w={"75%"}
                                color={"black"} fontFamily={"serif"} fontSize={"22px"} textAlign={"center"}
                                border={"1px solid"} borderColor={"green.600"}
                                _hover={{bg: "green.100", border: "1px solid", borderColor: "green.600"}}
                                _focus={{bg: "green.100", border: "2px solid", borderColor: "green.600"}}

                                type="text"
                                name="text delimiter input"
                                className="text-delimiter-input"
                                title="seperates each term from its definition"
                                value={textDelimiter}
                                placeholder=":" _placeholder={{opacity: 0.8, color: "gray", fontStyle: "italic"}}
                                onChange={(e) => {
                                    setTextDelimiter(e.target.value);
                                }}
                            />
                        </Stack>
                        <Stack align={"center"}>
                            <FormLabel fontFamily={"serif"} fontWeight={"bold"} textAlign={"center"}>
                                Card Delimiter
                            </FormLabel>
                            <Input
                                w={"75%"}
                                border={"1px solid"} borderColor={"green.600"}
                                color={"black"} fontFamily={"serif"} fontSize={"22px"} textAlign={"center"}
                                _hover={{bg: "green.100", border: "1px solid", borderColor: "green.600"}}
                                _focus={{bg: "green.100", border: "2px solid", borderColor: "green.600"}}

                                type="text"
                                name="flashcard delimiter input"
                                className="flashcard-delimiter-input"
                                title="seperates term/definition pairs into individual cards"
                                value={flashcardDelimiter}
                                placeholder="•" _placeholder={{opacity: 0.8, color: "gray", fontStyle: "italic"}}
                                onChange={(e) => {
                                    setFlashcardDelimiter(e.target.value);
                                }}
                            />
                        </Stack>
                    </HStack>
                </Box>
                <Stack mt={"6%"}>
                    <Box as="card-text">
                        <FormLabel fontFamily={"serif"} fontWeight={"bold"} textAlign={"center"} fontStyle={"oblique"} > 
                            Type or paste up to 3 terms & their definitions:
                        </FormLabel>
                        <Textarea
                            bg={"green.200"}
                            border={"2px solid"} borderColor={"green.600"}
                            color={"black"} fontFamily={"serif"} fontSize={"15px"}
                            _hover={{bg: "green.300", border: "2px solid", borderColor: "green.600"}}
                            _focus={{bg: "green.300", border: "3px solid", borderColor: "green.600"}}

                            className="card-text-input"
                            value={textInput}
                            placeholder="Term 1: Definition 1     •     Term 2: Definition 2     •     Term 3: Definition 3" _placeholder={{opacity: 0.8, color: "gray", fontStyle: "italic"}}
                            onChange={(e) => {
                                setTextinput(e.target.value);
                            }}
                        />
                    </Box>
                </Stack>
                <Stack mt={"6%"} mb={"15%"} align={"center"}>
                    <HStack className="button-container" spacing={"8"}>
                        <Button
                            bg={"green.900"}
                            borderRadius={"22px"}
                            fontSize={"20px"} fontFamily={"serif"} color={"green.100"}
                            _hover={{bg: "black", color: "green.400"}}

                            className="cancel"
                            onClick={() => {
                                setIsCreateOverviewShown(true);
                            }}
                        >
                            Back
                        </Button>
                        <Spacer/>
                        <Button
                           bg={"green.400"}
                           borderRadius={"25px"}
                           fontSize={"20px"} fontFamily={"serif"} color={"green.900"}
                           _hover={{bg: "green.100"}}

                            className="submit"
                            title="Create Cards"
                            onClick={() => {
                                turnIntoFlashcards(textInput);
                            }}
                        >
                            Save
                        </Button>
                    </HStack>
                </Stack>
            </div>
        </Flex>
    );
}
