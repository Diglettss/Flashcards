import React from "react"
import {useNavigate} from "react-router-dom"
import {useFlashcardContext} from "../../../../contexts/flashcard"
import {Button, Flex, Textarea} from "@chakra-ui/react"
import FlashcardRow from "../../FlashcardComponents/FlashcardRow/FlashcardRow"


export default function CreateSetOverview({
    description,
    setDescription,
    setIsCreateOverviewShown,
    chosenSet,
    userCreatedSet,
}) {
    
    const { mySets, setMySets } = useFlashcardContext();
    const navigate = useNavigate();

    
    return (
        <>
        <Flex direction={"column"} p={3} align={"center"} justify={"center"}>
            <Textarea
                w={"150%"}
                marginBottom={"10%"}
                variant={"filled"} bg={"green.200"}
                border={"2.5px solid #a0e2bb"} borderRadius={"17px"}
                textAlign={"center"} fontSize={"18px"} fontFamily={"serif"} fontStyle={"italic"} color={"green.800"}
                _hover={{border: "3px solid", borderColor: "green.300"}}
                _focus={{bg: "green.300", border: "3.5px solid", borderColor: "green.500"}}
                
                type="text"
                className="description"
                name="description"
                placeholder="Description" _placeholder={{opacity: 0.4, color: "gray", fontStyle: "italic"}}
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                    userCreatedSet.description = e.target.value;
                }}
            />
            <div className="flashcard-row-container">
                {chosenSet.flashcards ? (
                    chosenSet.flashcards.map((e, idx) => (
                        <FlashcardRow
                            key={idx}
                            idx={idx}
                            term={e.term}
                            definition={e.definition}
                            chosenSet={chosenSet}
                        />
                    ))
                ) : (
                    <div className="flashcard-row-empty" />
                )}
            </div>
            <div className="add-buttons">
                <Button
                    bg={"green.400"}
                    borderRadius={"5px"}
                    textAlign={"center"} fontSize={"18px"} fontFamily={"serif"} fontWeight={"medium"} color={"black"}
                    _hover={{bg: "black", color: "green.400"}}
                    
                    className="add-cards-text"
                    onClick={(e) => {
                        setIsCreateOverviewShown(false);
                    }}
                >
                    Add Cards
                </Button>
            </div>
            <Button
                className="middle-div save-button" title="Save & Exit"
                w={"45%"}
                marginTop={"3%"}
                bg={"green.900"}
                borderRadius={"22px"}
                textAlign={"center"} fontSize={"21px"} fontFamily={"serif"} fontWeight={"bold"} color={"green.100"}
                _hover={{color: "green.900", bg: "green.100"}}
                _active={{translate: ""}}
                
                onClick={() => {
                    if (
                        userCreatedSet.flashcards?.length >= 2 &&
                        userCreatedSet.title
                    ) {
                        mySets.push(userCreatedSet);
                        setMySets([...mySets]);
                        navigate("/mysets");
                    } else {
                        console.error(
                            "The set needs a title and at least 2 flashcards"
                        );
                    }
                }}
            >
                Save Your Work
            </Button>
        </Flex>
        </>
    );
}