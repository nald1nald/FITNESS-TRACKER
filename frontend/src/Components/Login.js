import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";
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
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <div className="border p-3 rounded w-25">
        <h2>Login</h2>
        {Cookies.get("loggedIn") ? (
          <p>You are already logged in!</p>
        ) : (
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email: </strong>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="form-control"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password: </strong>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                className="form-control"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="btn btn-success w-100">
              <strong>Login</strong>
            </button>
            <p>
              Not yet registered?{" "}
              <Link
                to="/Register"
                className="w-100 bg-light text-decoration-none"
              >
                Signup now!
              </Link>
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
  );
}

export default Login;
