import React, { useState } from "react";
import "./Form.css";
import { Button } from "../../components/button/Button";

export const Form = () => {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      name: name,
      age: age,
      color: color,
    };

    if (name && age && color) {
      setData([newData]);
    } else {
      alert("Please fill all the fields");
    }

    setName("");
    setAge("");
    setColor("");
  };

  return (
    <div id="container">
      <form id="form">
        <h2>Survey</h2>

        <label>What is your name?</label>
        <input
          type="text"
          onChange={handleChangeName}
          value={name}
          placeholder="name"
        />

        <label>What is your age?</label>
        <input
          type="number"
          onChange={handleChangeAge}
          value={age}
          placeholder="age"
        />

        <label>What is your favorite color?</label>
        <input
          type="text"
          onChange={handleChangeColor}
          value={color}
          placeholder="color"
        />

        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>

        <div id="data">
          {data.map((personalData, index) => (
            <div key={index}>
              <p>Name: {personalData.name}</p>
              <p>Age: {personalData.age}</p>
              <p>Color: {personalData.color}</p>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};
