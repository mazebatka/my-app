import React, { useState } from "react";
import "./Signup.css";
import { useThemeContext } from "../../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password
    ) {
      alert("Sign Up Successful");
      navigate("/");
    } else {
      alert("Please enter all fields");
    }
  };

  return (
    <div
      id="sign-up-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
      }}
    >
      <form id="form-container">
        <h1>Sign Up</h1>
        <input
          className="inputClass"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className="inputClass"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          className="inputClass"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="inputClass"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          Sign Up
        </button>

        <Link
          to="/sign-in"
          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
        >
          Already have an account?
        </Link>
      </form>
    </div>
  );
};
