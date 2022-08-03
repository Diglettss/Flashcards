import { BsTrash } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import FlashcardRow from "../../FlashcardComponents/FlashcardRow/FlashcardRow.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useFlashcardContext } from "../../../../contexts/flashcard.jsx";
import {
    Box,
    Button,
    HStack,
    IconButton,
    Avatar,
    AvatarBadge,
    useColorModeValue,
    Icon,
    Input,
    Spacer,
    Center,
    Heading,
    useTheme,
    Text,
    Flex,
    VStack,
} from "@chakra-ui/react";
import { useAuthContext } from "../../../../contexts/auth.jsx";
import e from "cors";

function FlashcardOverviewPageContent({ chosenSet, setChosenSet }) {
    const navigate = useNavigate();
    const { globalTheme } = useTheme();

    const minimumVisibleFlashcards = () => {
        let filteredFlashcards = chosenSet.flashcards.filter((e) => {
            if (e.selectedForTrash == false) {
                return e;
            }
        });
        if (filteredFlashcards.length < 2) {
            return true;
        } else {
            return false;
        }
    };

    const startStudying = () => {
        if (minimumVisibleFlashcards)
            navigate(`/mysets/studymode/${chosenSet.id}`);
    };

    const [title, setTitle] = useState(chosenSet.title);

    useEffect(() => {
        chosenSet.title = title;
    }, [title]);

    const [description, setDescription] = useState(chosenSet.description);

    useEffect(() => {
        chosenSet.description = description;
    }, [description]);

    return (
        <>
            <Button
                pos={"fixed"}
                top="80px"
                left="40px"
                title="Delete selected flashcards"
                onClick={() => {
                    chosenSet.flashcards = chosenSet.flashcards.filter(
                        (e) => e.selectedForTrash == false
                    );
                    // chosenSet.flashcards = chosenSet.flashcards.forEach(e=>{
                    //     console.log(e)
                    // })
                    // console.log(t)

                    // console.log(chosenSet)
                    setChosenSet({...chosenSet})
                }}  
            >
                <Icon
                    as={BsTrash}
                    _hover={{
                        cursor: "pointer",
                    }}
                />
            </Button>

            <Center>
                <Input
                    bgColor={"black"}
                    fontSize="80px"
                    color="white"
                    paddingTop={"20px"}
                    paddingBottom={"20px"}
                    paddingLeft={"80px"}
                    paddingRight={"80px"}
                    rounded={globalTheme.rounded}
                    marginBottom="20px"
                    marginTop="20px"
                    textAlign="center"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    width="auto"
                    h
                />
            </Center>
            <Center>
                <Input
                    bgColor={"black"}
                    fontSize="40px"
                    color="white"
                    paddingTop={"20px"}
                    paddingBottom={"20px"}
                    paddingLeft={"80px"}
                    paddingRight={"80px"}
                    rounded={globalTheme.rounded}
                    marginBottom="20px"
                    marginTop="20px"
                    textAlign="center"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    width="auto"
                    h
                />
            </Center>

            <Center>
                <VStack w={"80vw"} marginTop="80px">
                    {chosenSet.flashcards.map((e, idx) => (
                        <FlashcardRow
                            e={e}
                            key={idx}
                            idx={idx}
                            term={e.term}
                            checkBox={"selectedForTrash"}
                            definition={e.definition}
                            chosenSet={chosenSet}
                        />
                    ))}
                </VStack>
            </Center>


            <Button
                position="fixed"
                margin="auto"
                bottom={"40px"}
                display="block"
                transform="translateX(-50%)"
                left="50%"
                onClick={startStudying}
                isDisabled={chosenSet.flashcards.length > 2}
                title="Please select at least two flashcards"
            >
                Save
            </Button>
        </>
    );
}

export default function FlashcardOverviewPage() {
    const navigate = useNavigate();
    const { mySets } = useFlashcardContext();
    const { setId } = useParams();
    const [chosenSet, setChosenSet] = useState(mySets.find((e) => e.id == setId));
    const { isLoading, isLoggedIn } = useAuthContext();

    //if the params setId doesn't exist in mySets send the user to the shadow realm
    useEffect(() => {
        if ((isLoading, isLoggedIn)) {
            if (!chosenSet || chosenSet == undefined) {
                console.error("sending you to the shadow realm");
                navigate("/notfound");
            }
        }
    }, []);

    //The return statement is written like this, because an undefined chosenSet would cause an error and stop the useEffect from running
    return (
        <>
            {chosenSet ? (
                <FlashcardOverviewPageContent chosenSet={chosenSet} setChosenSet={setChosenSet} />
            ) : (
                <div />
            )}
        </>
    );
}
