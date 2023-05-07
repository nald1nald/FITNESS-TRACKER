import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";
import logo from "./images/logo.png";
import "./styles/Login.css";
import Cookies from "js-cookie";
import axios from "axios";
import jwtDecode from "jwt-decode";

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
      const response = await axios.post(
        "https://backend-nald1nald.vercel.app/api/login",
        values
      );

      if (response.status === 200) {
        const token = response.data.token;
        const decodedToken = jwtDecode(token);

        // Check if the payload of the decoded token contains the necessary information to authenticate the user
        if (decodedToken && decodedToken.email === values.email) {
          Cookies.set("token", token);
          Cookies.set("loggedIn", true);
          localStorage.setItem("token", token);

          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          window.location.href = "/dashboard";
        } else {
          setErrors({ login: "Invalid token" });
        }
      } else {
        setErrors({ login: response.data.error });
      }
    } catch (err) {
      console.error(err);
      setErrors({ login: "Internal server error" });
    }
  }

  const loggedIn = Cookies.get("loggedIn");
  if (loggedIn === "true") {
    return (
      <div className="d-flex justify-content-center align-items-center bg-white vh-100">
        <div className="border p-3 rounded w-25">
          <h2>You are already logged in</h2>
          <p>
            <Link
              to="/features/dashboard"
              className="w-100 bg-light text-decoration-none"
            >
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
                <Link to="/terms">Terms of services</Link> and{" "}
                <Link to="/privacy">Privacy Policy.</Link>{" "}
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
