import { Button } from "../../components/button/Button";
import { React, useEffect, useState } from "react";

export const Jokes = () => {
  const [joke, setJoke] = useState("");
  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.log("Error fetching jokes", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2>Random joke generator</h2>
      <div>
        <p>{joke?.setup}</p>
        <p style={{ font: "bolder" }}>{joke?.punchline}</p>
      </div>
      <Button onClick={fetchJoke} style={{ marginTop: 40 }}>
        Get a Joke
      </Button>
    </div>
  );
};
