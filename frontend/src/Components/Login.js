import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";

function Login() {
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
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <div className="border p-3 rounded w-25">
        <h2>Login</h2>
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
        </form>
      </div>
    </div>
  );
}

export default Login;
