import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserProfile.css";
import { useAuthContext } from "../../../contexts/auth";

export default function UserProfile() {
  const { user, logoutUser } = useAuthContext();
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  
  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setError((e) => ({ ...e, email: "Please enter a valid email. ❌" }));
      } else {
        setError((e) => ({ ...e, email: null }));
      }
    }
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnLogout = async () => {
    logoutUser();
    navigate("/");
  };

  function openForm() {
    document.getElementById("profile-form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("profile-form").style.display = "none";
  }

  return (
    <div className="popup">
      <button class="open-button" onclick="openForm()">Open Form</button>
      <form className="popup-form" id="profile-form">
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="username"
            value={form.username}
            onChange={handleOnInputChange}
          />
          {error?.username && <span className="error">{error?.username}</span>}
        </div>
        <div className="split-input-field">
          <div className="input-field">
            <input
              className="form-input"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleOnInputChange}
            />
            {error?.firstName && (
              <span className="error">{error?.firstName}</span>
            )}
          </div>
          <div className="input-field">
            <input
              className="form-input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleOnInputChange}
            />
            {error?.lastName && (
              <span className="error">{error?.lastName}</span>
            )}
          </div>
        </div>

        <div className="input-field">
          <button
            id="logout"
            className="logoutBtn"
            onClick={handleOnLogout}
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
}
