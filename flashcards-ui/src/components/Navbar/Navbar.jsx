import React, { useState } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
    Icon,
} from "@chakra-ui/react";
import { BsLightningChargeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
import UserProfile from "../UserProfile/UserProfile.jsx";
import { useNavigate } from "react-router-dom";
// import "./Navbar.css";
import { useAuthContext } from "../../../contexts/auth";

function Navbar() {
    const { user } = useAuthContext();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <Box
            as="nav"
            bg="green.300"
            boxShadow={useColorModeValue("lg", "sm-dark")}
            pt={6}
            pb={2}
        >
            <HStack spacing={20} alignItems={"center"} pl={50}>
                <Icon
                    as={BsLightningChargeFill}
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <HStack
                    as={"nav"}
                    spacing={4}
                    display={{ base: "none", md: "flex" }}
                >
                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Register
                    </Button>
                </HStack>
            </HStack>
        </Box>
    );

    // return (
    //     <nav className="Navbar">
    //         <div className="links">
    //             <Link to="/" className="logo">
    //                 <img
    //                     src="https://via.placeholder.com/64"
    //                     alt="website logo"
    //                     className="logo"
    //                 />
    //             </Link>
    //             <NavLinks />
    //         </div>
    //         <Searchbar />
    //         <div className="user-profile-img">
    //             <img
    //                 src="https://via.placeholder.com/600x600"
    //                 alt="profile image"
    //                 className={
    //                     user.email ? "profile-image" : "profile-image hidden"
    //                 }
    //                 onClick={() => {
    //                     setIsProfileOpen(!isProfileOpen);
    //                 }}
    //             />
    //         </div>
    //         <div className="user-modal">
    //             {isProfileOpen ? <UserProfile /> : null}
    //         </div>
    //     </nav>
    // );
}

export default Navbar;
