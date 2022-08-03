import React, { useState } from "react";
import { useFlashcardContext } from "../../../../contexts/flashcard";
import { Box, Button, Center, Text, Textarea } from "@chakra-ui/react";

export default function CreateSetAddCard({
    setIsCreateOverviewShown,
    userCreatedSet,
}) {
    const [textDelimiter, setTextDelimiter] = useState(",");
    const [flashcardDelimiter, setFlashcardDelimiter] = useState("_");
    const [flashcard, setFlashcard] = useState("");
    //This is test data
    const [textInput, setTextinput] = useState(
        "Term1, definition1_ Term2, definition2_ term3, definition 3"
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
        <div className="add-card-as-text">
            <Box className="delimiter-row">
                <Box
                    className="text-delimiter"
                    background={"green.400"}
                    color="white"
                    rounded="10px"
                    padding={"20px"}
                >
                    <Text display={"inline-block"}>
                        Term and definition delimiter:
                    </Text>
                    <input
                        type="text"
                        style={{color: "black"}}
                        name="text delimiter input"
                        className="text-delimiter-input"
                        value={textDelimiter}
                        onChange={(e) => {
                            setTextDelimiter(e.target.value);
                        }}
                    />
                </Box>
                <Box
                    background={"green.400"}
                    rounded="10px"
                    color="white"

                    padding={"20px"}
                    className="flashcard-delimiter"
                >
                    <Text display={"inline-block"}>Flashcard delimiter:</Text>

                    <input
                        type="text"
                        style={{color: "black"}}

                        name="flashcard delimiter input"
                        className="flashcard-delimiter-input"
                        value={flashcardDelimiter}
                        onChange={(e) => {
                            setFlashcardDelimiter(e.target.value);
                        }}
                    />
                </Box>
            </Box>
            <Textarea
                className="card-text-input"
                value={textInput}
                backgroundColor="green.400"
                onChange={(e) => {
                    setTextinput(e.target.value);
                }}
            ></Textarea>
            <div className="button-container">
                <Button
                    className="cancel"
                    onClick={() => {
                        setIsCreateOverviewShown(true);
                    }}
                >
                    Cancel
                </Button>
                <Button
                    className="submit"
                    onClick={() => {
                        turnIntoFlashcards(textInput);
                    }}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}
