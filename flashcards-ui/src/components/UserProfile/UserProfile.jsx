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
                    title="View Profile"
                    src="https://bit.ly/sage-adebayo"
                    bg="white"
                    color="green.400"
                    cursor="pointer"
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
                        <Heading fontSize={"4xl"} pb={4} textAlign={"center"}>
                            Profile
                        </Heading>
                        <form>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input fontFamily={"serif"}
                                    type="text"
                                    value={user.username}
                                    onChange={() => {}}
                                    isDisabled
                                />
                                <FormLabel pt={2}>First Name</FormLabel>
                                <Input fontFamily={"serif"}
                                    type="text"
                                    value={user.firstName}
                                    onChange={() => {}}
                                    isDisabled
                                />
                                <FormLabel pt={2}>Last Name</FormLabel>
                                <Input fontFamily={"serif"}
                                    type="text"
                                    value={user.lastName}
                                    onChange={() => {}}
                                    isDisabled
                                />
                                <FormLabel pt={2}>Email</FormLabel>
                                <Input fontFamily={"serif"}
                                    type="email"
                                    value={user.email}
                                    onChange={() => {}}
                                    isDisabled
                                />
                                <FormHelperText textAlign={"center"} fontFamily={"serif"} fontWeight="bold">
                                    We keep your account data secure 🔐
                                </FormHelperText>
                            </FormControl>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <IconButton
                            colorScheme="gray"
                            aria-label="Search database"
                            icon={<Icon as={BsFillPencilFill} />}
                            onClick={() => {
                                navigate("/");
                            }}
                            bg={useTheme().colors.brand.green}
                        />
                        <Spacer></Spacer>
                        <Button fontFamily={"serif"}
                            type="submit"
                            onClick={handleOnLogout}
                            bg={useTheme().colors.brand.green}
                        >
                            Log Out
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
