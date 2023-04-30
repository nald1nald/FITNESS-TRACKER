import React from "react";
import LogoImg from "../images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
        <Link to="/" className="logo">
          <img src={LogoImg} alt="logo" />
        </Link>
      
    </div>
  );
};

export default Logo;
