import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Register from "./Components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
