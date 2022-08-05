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
} from "@chakra-ui/react";
import { BsFillPencilFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./UserProfile.css";
import { useAuthContext } from "../../../contexts/auth";

export default function UserProfile() {
    const { user, logoutUser } = useAuthContext();
    const navigate = useNavigate();
    const [showUserProfileModal, setShowUserProfileModal] = useState(false);
    const [form, setForm] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
    });

    //   const handleOnInputChange = (event) => {
    //     if (event.target.name === "email") {
    //       if (event.target.value.indexOf("@") === -1) {
    //         setError((e) => ({ ...e, email: "Please enter a valid email. ❌" }));
    //       } else {
    //         setError((e) => ({ ...e, email: null }));
    //       }
    //     }
    //     setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
    //   };

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
            <Modal isOpen={isOpen} onClose={onClose}>
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

export function updateUserInfo() {}
// return (

//   <div className={`user-profile-modal container`}>
//     <div
//       className="overlay"
//       onClick={() => {
//         setShowUserProfileModal(!showUserProfileModal);
//       }}
//     ></div>
//     <div>
//       <UserInfo/>
//     </div>
//   </div>
// );

// export function UserInfo() {
//   const { user, logoutUser } = useAuthContext();
//   const handleOnLogout = async (e) => {
//     // e.preventDefault()
//     logoutUser();
//     navigate("/");
//   };

//   return (
//     <div className="popup">
//       <div className="header">
//         <div className="user-profile-img">
//           <img
//             src="https://via.placeholder.com/60x60?text=User+Profile+Icon"
//             alt="profile image"
//             className="profile-image"
//           />
//         </div>
//         <div className="update-profile-img">
//           <img
//             src="https://via.placeholder.com/60x60?text=Update+Profile"
//             alt="update profile image"
//             className="user-profile-image"
//           />
//         </div>
//       </div>
//       <div className="content">
//         <form className="popup-form" id="profile-form">
//           <div className="input-field">
//             <label htmlFor="username">USERNAME</label>
//             <input
//               className="form-input"
//               type="text"
//               name="username"
//               value={user.username}
//               onChange={() => {}}
//             />
//           </div>
//           <div className="input-field">
//             <label htmlFor="firstName">FIRST NAME</label>
//             <input
//               className="form-input"
//               type="text"
//               name="firstName"
//               value={user.firstName}
//               onChange={() => {}}
//             />
//           </div>
//           <div className="input-field">
//             <label htmlFor="lastName">LAST NAME</label>
//             <input
//               className="form-input"
//               type="text"
//               name="lastName"
//               value={user.lastName}
//               onChange={() => {}}
//             />
//           </div>
//           <div className="input-field">
//             <label htmlFor="email">EMAIL</label>
//             <input
//               className="form-input"
//               type="text"
//               name="email"
//               value={user.email}
//               onChange={() => {}}
//             />
//           </div>
//           <div className="input-field">
//             <button id="logout" className="logoutBtn" onClick={handleOnLogout}>
//               Logout
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
