import React from "react";
import "./Footer.css";
import { useThemeContext } from "../../context";

export const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <div
      id="footer-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
      }}
    >
      Footer component
    </div>
  );
};
