import React from "react"
import {useNavigate} from "react-router-dom"
import {useFlashcardContext} from "../../../../contexts/flashcard"
import {Box, Button, Textarea, VStack} from "@chakra-ui/react"
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
            <Box w={"45%"}>
                <VStack align={"center"}>
                    <Textarea type="text" className="description" name="description"
                        bg={"green.200"}
                        border={"3px solid"} borderColor={"green.300"} borderRadius={"10px"}
                        color={"green.800"} textAlign={"center"} fontSize={"20px"} fontFamily={"serif"} fontStyle={"italic"}
                        _hover={{border: "3px solid", borderColor: "green.500"}}
                        _focus={{bg: "green.300", border: "3.5px solid", borderColor: "green.600"}}
                        
                        value={description}
                        placeholder="Add Description"
                        _placeholder={{opacity: 0.6, color: "gray", fontStyle: "italic"}}
                        
                        onChange={(e) => {
                            setDescription(e.target.value)
                            userCreatedSet.description = e.target.value
                        }}
                    />
                </VStack>
            </Box>
            <br/>
            <Box className="flashcard-row-container">
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
                ) : (<Box className="empty-flashcard-row"/>)}
            </Box>
            <br/><br/>
            <Box>
                <VStack align={"center"} justify={"center"}>
                    <Button className="add-cards-button"
                        bg={"green.900"}
                        borderRadius={"22px"}
                        fontSize={"16px"} fontFamily={"serif"} fontWeight={"medium"} color={"green.100"}
                        _hover={{bg: "black", color: "green.400"}}
                        
                        onClick={(e) => {
                            setIsCreateOverviewShown(false)
                        }}
                    >
                        Add Cards
                    </Button>
                    <br/>
                    <Button className="save-button"
                        bg={"green.400"}
                        borderRadius={"25px"}
                        fontSize={"20px"} fontFamily={"serif"} fontWeight={"bold"} color={"green.900"}
                        _hover={{bg: "green.100"}}
                        
                        title="Add to My Sets"

                        onClick={() => {
                            if (
                                userCreatedSet.flashcards?.length >= 2 &&
                                userCreatedSet.title
                            ) {
                                mySets.push(userCreatedSet);
                                setMySets([...mySets]);
                                navigate("/mysets");
                            } else {
                                console.error("The set needs a title and at least 2 flashcards")
                            }
                        }}
                    >
                        Save This Set
                    </Button>
                </VStack>
            </Box>
            <br/><br/>
        </>
    );
}