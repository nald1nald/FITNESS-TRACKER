import React from "react";
import "./SignUp.css";
import {BsArrowRight} from "react-icons/bs";

const SignUp = () => {
  return (
    <a><button className="signup-btn">Start Free Trial <span className="arrow"><BsArrowRight size={20} style={{paddingBottom: '2px'}}/></span></button></a>
  );
};

export default SignUp;
