import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserProfile.css";
import { useAuthContext } from "../../../contexts/auth";

export default function UserProfile() {
  const { user, logoutUser } = useAuthContext();
  const navigate = useNavigate();
  const [showUserProfileModal, setShowUserProfileModal] = React.useState(false);
  const [form, setForm] = React.useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log("userProfile", showUserProfileModal);
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

  //   function openForm() {
  //     document.getElementById("profile-form").style.display = "block";
  //   }

  //   function closeForm() {
  //     document.getElementById("profile-form").style.display = "none";
  //   }

  console.log("something")

  return (
    
    <div className={`user-profile-modal container`}>
      <div
        className="overlay"
        onClick={() => {
            console.log("changing")
          setShowUserProfileModal(!showUserProfileModal);
        }}
      ></div>
      <div>
        <UserInfo/>
      </div>
    </div>
  );
}

export function UserInfo() {
  const { user, logoutUser } = useAuthContext();
  const handleOnLogout = async (e) => {
    // e.preventDefault()
    logoutUser();
    navigate("/");
  };

  return (
    <div className="popup">
      <div className="header">
        <div className="user-profile-img">
          <img
            src="https://via.placeholder.com/60x60?text=User+Profile+Icon"
            alt="profile image"
            className="profile-image"
          />
        </div>
        <div className="update-profile-img">
          <img
            src="https://via.placeholder.com/60x60?text=Update+Profile"
            alt="update profile image"
            className="user-profile-image"
          />
        </div>
      </div>
      <div className="content">
        <form className="popup-form" id="profile-form">
          <div className="input-field">
            <label htmlFor="username">USERNAME</label>
            <input
              className="form-input"
              type="text"
              name="username"
              value={user.username}
              onChange={() => {}}
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              className="form-input"
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={() => {}}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">LAST NAME</label>
            <input
              className="form-input"
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={() => {}}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">EMAIL</label>
            <input
              className="form-input"
              type="text"
              name="email"
              value={user.email}
              onChange={() => {}}
            />
          </div>
          <div className="input-field">
            <button id="logout" className="logoutBtn" onClick={handleOnLogout}>
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}