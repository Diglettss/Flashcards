import React, { useState } from "react";
import {
    HStack,
    Avatar,
    AvatarBadge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    useDisclosure,
    Heading,
    Icon,
    useTheme,
    IconButton,
    Spacer,
    InputRightElement,
    InputGroup,
    Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BsFillPencilFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./UserProfile.css";
import { useAuthContext } from "../../../contexts/auth";

export default function UserProfile() {
    const { user, logoutUser } = useAuthContext();
    const navigate = useNavigate();
    // setUpdate should be set back to false once user submits updated credentials
    const [update, setUpdate] = useState(false);

    const handleOnLogout = async (e) => {
        // e.preventDefault()
        logoutUser();
        navigate("/");
    };

    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>
            {/* User Profile Avatar */}
            <HStack spacing={3} display={{ base: "none", md: "flex" }} pr={57}>
                <Avatar
                    // change name prop to user first & last name
                    // change src to user submitted profile pic if available
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                    bg="white"
                    color="green.400"
                    onClick={onOpen}
                >
                    <AvatarBadge
                        borderColor="white"
                        bg="green.400"
                        boxSize="1.25em"
                    />
                </Avatar>
            </HStack>

            {/* User Profile Modal */}
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                motionPreset="slideInRight"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                    </ModalHeader>
                    <ModalBody>
                        <Heading fontSize={"4xl"} pb={4}>
                            User Profile
                        </Heading>
                        <form>
                            {/* show vs update user infor */}
                            {!update ? <ShowUserInfo /> : <UpdateUserInfo />}
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        {/* Update Button */}
                        <IconButton
                            colorScheme="gray"
                            icon={<Icon as={BsFillPencilFill} />}
                            bg={useTheme().colors.brand.green}
                            onClick={() => {
                                setUpdate((update) => !update);
                            }}
                        />
                        <Spacer></Spacer>
                        {/* Logout Button */}
                        <Button
                            type="submit"
                            onClick={handleOnLogout}
                            bg={useTheme().colors.brand.green}
                        >
                            Logout
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

// function to show User's information
export function ShowUserInfo() {
    const { user } = useAuthContext();
    return (
        <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
                type="text"
                value={user.username}
                onChange={() => {}}
                isDisabled={true}
            />
            <FormLabel pt={2}>First Name</FormLabel>
            <Input
                type="text"
                value={user.firstName}
                onChange={() => {}}
                isDisabled={true}
            />
            <FormLabel pt={2}>Last Name</FormLabel>
            <Input
                type="text"
                value={user.lastName}
                onChange={() => {}}
                isDisabled={true}
            />
            <FormLabel pt={2}>Email</FormLabel>
            <Input
                type="email"
                value={user.email}
                onChange={() => {}}
                isDisabled={true}
            />
            <FormHelperText>We keep your account data secure 🔐</FormHelperText>
        </FormControl>
    );
}

// function to update User's information
export function UpdateUserInfo() {
    const { user, error, setError } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [form, setForm] = React.useState({
        email: `${user.email}`,
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
    });

    const handleOnInputChange = (event) => {
        if (event.target.name === "password") {
            if (
                form.confirmPassword &&
                form.confirmPassword !== event.target.value
            ) {
                setError((e) => ({
                    ...e,
                    confirmPassword: "Passwords don't match ❌",
                }));
            } else {
                setError((e) => ({ ...e, confirmPassword: null }));
            }
        }
        if (event.target.name === "confirm Password") {
            if (form.password && form.password !== event.target.value) {
                setError((e) => ({
                    ...e,
                    confirmPassword: "Passwords don't match ❌ ",
                }));
            } else {
                setError((e) => ({ ...e, confirmPassword: null }));
            }
        }
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
    };

    const handleOnSubmit = async (e) => {
        const valid = await loginUser(form);
        if (valid) {
            navigate("/");
        }
    };

    return (
        <FormControl>
            <FormControl id="userName" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleOnInputChange}
                />
            </FormControl>
            <FormControl id="firstName" isRequired>
                <FormLabel pt={2}>First Name</FormLabel>
                <Input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleOnInputChange}
                />
            </FormControl>
            <FormControl id="lastName" isRequired>
                <FormLabel pt={2}>Last Name</FormLabel>
                <Input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleOnInputChange}
                />
            </FormControl>
            <FormControl id="newPassword" isRequired>
                <FormLabel pt={2}>New Password</FormLabel>
                <InputGroup>
                    <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={form.password}
                        onChange={handleOnInputChange}
                    />
                    <InputRightElement h={"full"}>
                        <Button
                            variant={"ghost"}
                            onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                            }
                        >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id="confirmNewPassword" isRequired>
                <FormLabel pt={2}>Confirm New Password</FormLabel>
                <InputGroup>
                    <Input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleOnInputChange}
                    />
                    <InputRightElement h={"full"}>
                        <Button
                            variant={"ghost"}
                            onClick={() =>
                                setShowConfirmPassword(
                                    (showConfirmPassword) =>
                                        !showConfirmPassword
                                )
                            }
                        >
                            {showConfirmPassword ? (
                                <ViewIcon />
                            ) : (
                                <ViewOffIcon />
                            )}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                {error?.confirmPassword && (
                    <span className="error">{error?.confirmPassword}</span>
                )}
            </FormControl>

            <FormHelperText>We keep your account data secure 🔐</FormHelperText>
        </FormControl>
    );
}
