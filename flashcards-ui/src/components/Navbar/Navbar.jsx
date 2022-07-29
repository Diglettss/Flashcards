import React, { useState, ReactNode } from "react";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    // Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
import UserProfile from "../UserProfile/UserProfile.jsx";
import "./Navbar.css";
import { useAuthContext } from "../../../contexts/auth";

function Navbar() {
    const { user } = useAuthContext();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    return (
        <nav className="Navbar">
            <div className="links">
                <Link to="/" className="logo">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="website logo"
                        className="logo"
                    />
                </Link>
                <NavLinks />
            </div>
            <Searchbar />
            <div className="user-profile-img">
                <img
                    src="https://via.placeholder.com/600x600"
                    alt="profile image"
                    className={
                        user.email ? "profile-image" : "profile-image hidden"
                    }
                    onClick={() => {
                        setIsProfileOpen(!isProfileOpen);
                    }}
                />
            </div>
            <div className="user-modal">
                {isProfileOpen ? <UserProfile /> : null}
            </div>
        </nav>
    );
}

export default Navbar;
