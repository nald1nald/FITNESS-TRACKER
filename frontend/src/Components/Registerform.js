import React from "react";
import Form from "react-bootstrap/Form";
import "./Registerform.css";
import logo from "../logo.png";

export default function Registerform() {
  return (
    <div className="container">
      <div>
        <img src={logo} />
      </div>
      <form>
        <h2>
          SIGN UP TO FLEX<span className="header">PULSE</span>
        </h2>
        {/*  */}
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Birthday"></input>
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Password"></input>
        <input type="text" placeholder="Confirm Password"></input>
        <input type="text" placeholder="Gender"></input>
        <input type="text" placeholder="Height"></input>
        <input type="text" placeholder="Weight"></input>
        <button>Sign Up</button>
        <div class="form-section">
          <p>
            Already have an account? <a href="">Log In</a>
          </p>
          <p>
            By continuing you agree with Flex Pulse's{" "}
            <a href="">Terms of services</a> and <a href="">Privacy Policy.</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}
