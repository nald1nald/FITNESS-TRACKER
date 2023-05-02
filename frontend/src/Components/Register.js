import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterValidation from "./RegisterValidation";
import axios from "axios";
import "./Registerform.css";
import logo from "./logo.png";

function Register() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    birthdate: "",
    email: "",
    password: "",
    gender: "",
    height: "",
    weight: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = RegisterValidation(values);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      axios
        .post("http://localhost:5000/register", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="form flex-column d-flex justify-content-center align-items-center base-ft">
      <div className="form-ft">
        <div className="text-center">
          <img className="img-login-logo-small-ft" src={logo} alt="" />
        </div>
        <div className="border bg-white rounded-ft w-30 rectangle-ft">
          <h2 className="text-center text-ft">
            Sign up to Flex<span className="text-yellow-ft">Pulse</span>
          </h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                className="input-login-ft"
                onChange={handleInput}
              />
              {errors.first_name && (
                <span className="text-danger">{errors.first_name}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                className="input-login-ft"
                onChange={handleInput}
              />
              {errors.last_name && (
                <span className="text-danger">{errors.last_name}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                placeholder="Birthday"
                className=" input-login-ft"
                onChange={handleInput}
              />
              {errors.birthdate && (
                <span className="text-danger">{errors.birthdate}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="input-login-ft"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className=" input-login-ft"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <div className="mb-3">
              <select
                className=" input-login-ft"
                id="gender"
                name="gender"
                value={values.gender}
                onChange={handleInput}
              >
                <option value="">Select one</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <span className="text-danger">{errors.gender}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="number"
                name="height"
                id="height"
                placeholder="Height in cm"
                className=" input-login-ft"
                onChange={handleInput}
              />
              {errors.height && (
                <span className="text-danger">{errors.height}</span>
              )}
            </div>

            <div className="mb-3">
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in cm"
                className="input-login-ft"
                onChange={handleInput}
              />
              {errors.weight && (
                <span className="text-danger">{errors.weight}</span>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-warning btn-orange-ft w-80 rounded-5 btn-login-ft"
              >
                <span>CREATE ACCOUNT</span>
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
              <p className="p-terms-ft">
                By continuing you agree with Flex Pulse's{" "}
                <a href="">Terms of services</a> and{" "}
                <a href="">Privacy Policy.</a>{" "}
              </p>
            </div>
            {/* <p className="mt-3">
            Have an account already?{" "}
            <Link to="/" className="w-100 bg-light text-decoration-none">
              Login
            </Link>
          </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
