import React from "react";
import { useNavigate } from "react-router-dom";
import {
    HStack,
    StackDivider,
    Box,
    VStack,
    useTheme,
    Text,
    Heading,
    Center,
    transform,
} from "@chakra-ui/react";

export default function Set({ set }) {
    const navigate = useNavigate();
    return (
        <>
            <HStack
                padding="0"
                spacing="0"
                color={"white"}
                // color={"black"}
                bg={useTheme().colors.brand.green}
                rounded="20"
                onClick={() => {
                    navigate(`/mysets/${set.id}`);
                }}
                divider={<StackDivider borderColor="white" />}
                mr={5}
                transition="transform .1s ease-in-out"
                _hover={{transform: "scale(1.02)"}}
            >
                <VStack
                    p="5px"
                    paddingTop={"20px"}
                    paddingBottom={"20px"}
                    minH="150px"
                    w="222px"
                >
                    <Center
                        // style={{
                        //     wordBreak: "break-all",
                        // }}
                        fontWeight="bold"
                        fontSize="3xl"
                    >
                        {set.title}
                    </Center>
                    <Center fontWeight="bold">
                        {set.flashcards.length} flashcards
                    </Center>
                    <Center fontWeight="bold">Created: {set.createdAt}</Center>
                </VStack>

                <Box flex="1" p="20px" h="150px">
                    <Text noOfLines={5}>{set.description}</Text>
                </Box>
            </HStack>
        </>
    );
}
