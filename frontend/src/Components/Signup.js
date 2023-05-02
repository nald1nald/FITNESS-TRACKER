import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";
import logo from "./logo.png";
import "./Signup.css";

function Signup() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues(Validation(values));
    setErrors(Validation(values));
  };

  return (
    <div className="form flex-column d-flex justify-content-center align-items-center base-ft">
      <div className="form-ft">
        <div className="text-center">
          <img className="img-login-logo-small-ft" src={logo} alt="" />
        </div>
        <div className="border bg-white rounded-ft w-24 rectangle-ft">
          <h2 className="text-center text-ft">
            Sign up for Flex<span className="text-yellow-ft">Pulse</span>
          </h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="input-login-ft"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="input-login-ft"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                
                className="btn btn-warning btn-orange-ft w-80 rounded-5 btn-login-ft"
              >
                <span>SIGN UP FOR FREE</span>
                <span className="arrow-ft">&#10132;</span>
              </button>
            </div>
            <div className="p-options-login-ft">
              <p>
                Already have an account?{" "}
                <Link
                  to="/"
                  className="w-100 bg-light text-decoration-none link-ft"
                >
                  Log In
                </Link>
              </p>
            </div>
            <p className="p-terms-ft">
              By continuing you agree with Flex Pulse's{" "}
              <a href="">Terms of services</a> and{" "}
              <a href="">Privacy Policy.</a>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
