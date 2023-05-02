import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";
import logo from "./images/logo.png";
import "./styles/Login.css";
import Cookies from "js-cookie";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors(Validation(values));

    try {
      const response = await axios.post("http://localhost:5000/login", values);

      if (response.status === 200) {
        // Login successful, set the cookie and redirect to homepage
        Cookies.set("loggedIn", true);
        window.location.href = "/";
      } else {
        // Login failed, display the error message
        setErrors({ login: response.data.error });
      }
    } catch (err) {
      console.error(err);
      setErrors({ login: "Internal server error" });
    }
  }

  // Check if user is already authenticated
  const loggedIn = Cookies.get("loggedIn");
  if (loggedIn) {
    return (
      <div className="d-flex justify-content-center align-items-center bg-white vh-100">
        <div className="border p-3 rounded w-25">
          <h2>You are already logged in</h2>
          <p>
            <Link to="/" className="w-100 bg-light text-decoration-none">
              Go to homepage
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="form flex-column d-flex justify-content-center align-items-center base-ft">
      <div className="form-ft">
        <div className="text-center">
          <img className="img-login-logo-small-ft" src={logo} alt="" />
        </div>
        <div className="border bg-white rounded-ft w-24 rectangle-ft">
          <h2 className="text-center text-ft">
            Log in to Flex<span className="text-yellow-ft">Pulse</span>
          </h2>
          {Cookies.get("loggedIn") ? (
            <p>You are already logged in!</p>
          ) : (
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
                  <span>LOGIN </span>
                  <span className="arrow-ft">&#10132;</span>
                </button>
              </div>
              <div className="p-options-login-ft">
                <label className="lbl-remember-ft">
                  <input type="checkbox" />
                  &nbsp;Remember me
                </label>
                <p>
                  <Link
                    to="/Register"
                    className="w-100 bg-light text-decoration-none link-ft"
                  >
                    Forgot your Password?
                  </Link>
                </p>
              </div>
              <p className="p-terms-ft">
                By continuing you agree with Flex Pulse's{" "}
                <a href="">Terms of services</a> and{" "}
                <a href="">Privacy Policy.</a>{" "}
              </p>
              {errors.login && (
                <div className="alert alert-danger mt-3" role="alert">
                  {errors.login}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
