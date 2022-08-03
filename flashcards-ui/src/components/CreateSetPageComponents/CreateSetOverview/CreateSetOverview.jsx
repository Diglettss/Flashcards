import React from "react"
import {useNavigate} from "react-router-dom"
import {useFlashcardContext} from "../../../../contexts/flashcard"
import {Button,
        Flex,
        Heading,
        Image,
        Input,
        Stack,
        Spacer,
        Text,
        Textarea,
        useBreakpointValue,
        Box
} from "@chakra-ui/react"
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
            <Textarea variant={"filled"}
                w={"50%"} h={"auto"} marginLeft={"26%"} marginBottom={"5%"} paddingBottom={"5px"}
                backgroundColor={"green.200"}
                border={"2.5px solid #97dfb5"} borderRadius={"5px"}
                textAlign={"center"} fontSize={"20px"} fontFamily={"serif"} color={"black"}
                _hover={{backgroundColor: "#97dfb5", border: "2.5px solid", borderColor: "green.300"}}
                _focus={{backgroundColor: "green.300", border: "3.5px solid", borderColor: "green.500"}}
                
                type="text"
                className="description"
                name="description"
                placeholder="Description" _placeholder={{opacity: 0.5, color: "gray", fontStyle: "italic"}}
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
                {/* <button
                    className="add-cards"
                    onClick={(e) => {
                        setIsCreateOverviewShown(false);
                    }}
                >
                    Add Flashcard cards
                </button> */}
                <Button
                    marginLeft={"46%"} marginBottom={"2%"} marginTop={"3%"}
                    backgroundColor={"green.500"}
                    borderRadius={"7px"}
                    textAlign={"center"} fontSize={"15px"} fontFamily={"serif"} color={"black"}
                    
                    className="add-cards-text"
                    onClick={(e) => {
                        setIsCreateOverviewShown(false);
                    }}
                >
                    Add Card
                </Button>
            </div>
            <Button
                className="middle-div save-button"
                marginLeft={"47%"}
                backgroundColor={"black"}
                borderRadius={"20px"}
                textAlign={"center"} fontSize={"15px"} fontFamily={"serif"} color={"white"}
                
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
                Save
            </Button>
        </>
    );
}
