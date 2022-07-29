import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";
// import "./Landing.css";
import study1 from "../../assets/study1.jpg";
import study2 from "../../assets/study2.jpg";
import study3 from "../../assets/study3.jpg";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={6} w={"full"} maxW={"lg"}>
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                        <Text
                            as={"span"}
                            position={"relative"}
                            _after={{
                                content: "''",
                                width: "full",
                                height: useBreakpointValue({
                                    base: "20%",
                                    md: "30%",
                                }),
                                position: "absolute",
                                bottom: 1,
                                left: 0,
                                bg: "green.400",
                                zIndex: -1,
                            }}
                        >
                            Flashi
                        </Text>
                        <br />{" "}
                        <Text color={"green.400"} as={"span"}>
                            The study tool for you
                        </Text>{" "}
                    </Heading>
                    <Text
                        fontSize={{ base: "md", lg: "lg" }}
                        color={"gray.500"}
                    >
                        Flashi's mission is to provide a free learning service
                        for students and educators to utilize in order to gain
                        mastery over their learning.
                    </Text>
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        spacing={4}
                    >
                        <Button
                            rounded={"full"}
                            bg={"green.400"}
                            color={"white"}
                            _hover={{
                                bg: "gray.100",
                                color: "green.400",
                            }}
                            onClick={() => {
                                navigate("/register");
                            }}
                        >
                            Get started
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image alt={"Login Image"} objectFit={"cover"} src={study1} />
            </Flex>
        </Stack>
    );
}
