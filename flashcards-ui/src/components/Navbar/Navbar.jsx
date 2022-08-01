import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { BsLightningChargeFill } from "react-icons/bs";
import Logo from "../Logo/Logo.jsx";
import NavLinks from "../NavLinks/NavLinks.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
// import UserProfile from "../UserProfile/UserProfile.jsx";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
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
            pt={2}
            pb={2}
        >
            <HStack spacing={20} alignItems={"center"} pl={50}>
                {/* App Logo */}
                <Logo />
                {/* Login/Register & My Sets/Create links */}
                <NavLinks />
                {/* Chakra UI Space component*/}
                <Spacer />
                {/* Searchbar*/}
                <Searchbar />
                {/* User Profile */}
                <HStack
                    spacing={3}
                    display={{ base: "none", md: "flex" }}
                    pr={57}
                >
                    <Avatar
                        // change name prop to user first & last name
                        // change src to user submitted profile pic if available
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                        bg="white"
                        color="green.400"
                    >
                        <AvatarBadge
                            borderColor="white"
                            bg="green.400"
                            boxSize="1.25em"
                        />
                    </Avatar>
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
