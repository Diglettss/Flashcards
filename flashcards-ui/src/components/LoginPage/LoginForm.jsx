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
                    <Heading fontSize={"4xl"}>Welcome Back! 👋🏽</Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="username" isRequired>
                            <FormLabel textAlign={"center"}>Username</FormLabel>
                            <Input
                                type="text"
                                className="form-input"
                                name="username"
                                value={form.username}
                                onChange={handleOnInputChange}
                                textAlign={"center"}
                            />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel textAlign={"center"}>Password</FormLabel>
                            <Input
                                type="password"
                                className="form-input"
                                name="password"
                                value={form.password}
                                onChange={handleOnInputChange}
                                textAlign={"center"}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                align={"start"}
                                justify={"space-between"}
                            >
                                <Text>
                                    Don't have an account yet? Sign up{" "}
                                    <Link
                                        color={"blue.400"}
                                        onClick={() => {
                                            navigate("/register");
                                        }}
                                    >
                                        here!
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
                                Sign In
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
