import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Jokes, Profile, Signin, Signup } from "./pages";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/random_jokes" element={<Jokes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
