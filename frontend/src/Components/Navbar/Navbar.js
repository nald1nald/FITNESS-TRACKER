import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import SignUpBtn from "./SignUp";
import "./navbar.css";
import { Squash as Hamburger } from "hamburger-react";
import LoginBtn from "./LoginBtn";
import DropdownMenu from "./DropdownMenu";
import Hamborger from "./Hamborger";
import { Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleLinkClick(link) {
    window.location.href = link;
  }

  function handleLogoClick() {
    if (isMobile) {
      setIsOpen(true);
    }
  }

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
      
      {isOpen ? null : (
        <ul className="nav-links">
          <li>
            <span><DropdownMenu/></span>
          </li>
          <li onClick={() => handleLinkClick('/blogs')}>
            <span>Blogs</span>
          </li>
          <li onClick={() => handleLinkClick('/login')}>
            <span>Sign In</span>
          </li>
          <li onClick={() => handleLinkClick('/signup')}>
            <span className="start">START FREE TRIAL<span className="arrow"><BsArrowRight size={20} style={{paddingBottom: '2px'}}/></span></span>
          </li>
        </ul>
      )}

      <ul className={`mobile-nav-links ${isOpen ? "open" : ""}`}>
        <Hamborger/>
        <li onClick={() => handleLinkClick('/blogs')}>
          <span>Blogs</span>
        </li>
        <li onClick={() => handleLinkClick('/login')}>
          <span>Sign In</span>
        </li>
        <li onClick={() => handleLinkClick('/signup')}>
          <div className="hamburg">
            <SignUpBtn />
          </div>
        </li>
      </ul>

      <div className="fgsd">
        {isOpen ? null : (
          <li onClick={() => handleLinkClick('/signup')}>
            <LoginBtn />
          </li>
        )}
        <div className="hamburger-btn">
          {isMobile && (
            <Hamburger
              color="#000"
              label="Menu"
              size={22}
              toggled={isOpen}
              toggle={handleToggle}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
