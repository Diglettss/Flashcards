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
} from "@chakra-ui/react";

export default function Set({ set }) {
    const navigate = useNavigate();
    console.log(useTheme().fontSizes);
    return (
        <>
            <HStack
                padding="0"
                spacing="0"
                bg={useTheme().colors.brand.green}
                rounded="20"
                onClick={() => {
                    navigate(`/mysets/${set.id}`);
                }}
                divider={<StackDivider borderColor="white" />}
            >
                <VStack
                    p="5px"
                    paddingTop={"20px"}
                    paddingBottom={"20px"}
                    minH="150px"
                    w="180px"
                >
                    <Heading
                        style={{
                            wordBreak: "break-all",
                        }}
                    >
                        {set.title}
                    </Heading>
                    <Text>{set.flashcards.length} flashcards</Text>
                    <Text>Created: {set.createdAt}</Text>
                </VStack>

                <Box flex="1" p="20px" h="150px">
                    <Text noOfLines={5}>
                        {set.description} grejkhsdiuregbjre bgre gbie g hjgerh
                        jegrh jgreh jgh jgkh jgre jhkgres hjgerjhgresghjreesjkh
                        gesjhrg ejhr gjdshr gjkshrgshjg grejkhsdiuregbjre bgre
                        gbie g hjgerh jegrh jgreh jgh jgkh jgre jhkgres
                        hjgerjhgresghjreesjkh gesjhrg ejhr gjdshr gjkshrgshjg
                        grejkhsdiuregbjre bgre gbie g hjgerh jegrh jgreh jgh
                        jgkh jgre jhkgres hjgerjhgresghjreesjkh gesjhrg ejhr
                        gjdshr gjkshrgshjg grejkhsdiuregbjre bgre gbie g hjgerh
                        jegrh jgreh jgh jgkh jgre jhkgres hjgerjhgresghjreesjkh
                        gesjhrg ejhr gjdshr gjkshrgshjg grejkhsdiuregbjre bgre
                        gbie g hjgerh jegrh jgreh jgh jgkh jgre jhkgres
                        hjgerjhgresghjreesjkh gesjhrg ejhr gjdshr gjkshrgshjg
                        grejkhsdiuregbjre bgre gbie g hjgerh jegrh jgreh jgh
                        jgkh jgre jhkgres hjgerjhgresghjreesjkh gesjhrg ejhr
                        gjdshr gjkshrgshjg grejkhsdiuregbjre bgre gbie g hjgerh
                        jegrh jgreh jgh jgkh jgre jhkgres hjgerjhgresghjreesjkh
                        gesjhrg ejhr gjdshr gjkshrgshjg grejkhsdiuregbjre bgre
                        gbie g hjgerh jegrh jgreh jgh jgkh jgre jhkgres
                        hjgerjhgresghjreesjkh gesjhrg ejhr gjdshr gjkshrgshjg{" "}
                    </Text>
                </Box>
            </HStack>
        </>
    );
}
