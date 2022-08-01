import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useAuthContext } from "../../../contexts/auth";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

export default function LoginForm(props) {
    const { error, isProcessing, loginUser } = useAuthContext();
    const navigate = useNavigate();
    const [form, setForm] = React.useState({
        username: "",
        password: "",
    });

    const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
    };

    const handleOnSubmit = async (e) => {
        const valid = await loginUser(form);
        if (valid) {
            navigate("/");
        }
    };

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Login to your account</Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="username">
                            <FormLabel>Username</FormLabel>
                            <Input
                                type="text"
                                className="form-input"
                                name="username"
                                placeholder="username"
                                value={form.username}
                                onChange={handleOnInputChange}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                className="form-input"
                                name="password"
                                placeholder="password"
                                value={form.password}
                                onChange={handleOnInputChange}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                align={"start"}
                                justify={"space-between"}
                            >
                                <Text>
                                    Don't have an account?{" "}
                                    <Link
                                        color={"blue.400"}
                                        onClick={() => {
                                            navigate("/register");
                                        }}
                                    >
                                        Sign Up!
                                    </Link>
                                </Text>
                            </Stack>
                            <Button
                                bg={"green.400"}
                                color={"white"}
                                _hover={{
                                    bg: "gray.100",
                                    color: "green.400",
                                }}
                                onClick={() => {
                                    handleOnSubmit();
                                }}
                            >
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
