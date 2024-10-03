import { Switch } from "@mui/material";
import React from "react";
import { useThemeContext, useUserContext } from "../../context";
import "./Header.css";

export const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { user } = useUserContext();
  const handleChange = () => {
    toggleTheme();
  };

  return (
    <div
      id="header-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
      }}
    >
      <div>
        <h1>User Name: {user.name}</h1>
        <h2>User Email: {user.email}</h2>
      </div>
      <div>
        <Switch
          onChange={handleChange}
          checked={theme === "dark" ? true : false}
        />
      </div>
    </div>
  );
};
