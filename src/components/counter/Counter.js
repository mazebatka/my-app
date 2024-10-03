import React, { useState } from "react";
import { Button } from "../button/Button";
import "./Counter.css";
import { useThemeContext } from "../../context";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const { theme } = useThemeContext();

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div
      id="counter-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
      }}
    >
      <h1>Counter App</h1>
      <div id="counter">
        <span id="count"> {counter}</span>
        <div id="button-container">
          <Button id="increment" onClick={increment}>
            +
          </Button>
          <Button id="decrement" onClick={decrement}>
            -
          </Button>
          <Button id="reset" onClick={reset}>
            reset
          </Button>
        </div>
      </div>
    </div>
  );
};
