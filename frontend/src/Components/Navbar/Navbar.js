import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import SignUpBtn from "./SignUp";
import "./navbar.css";
import { Squash as Hamburger } from "hamburger-react";
import LoginBtn from "./LoginBtn";
import DropdownMenu from "./DropdownMenu";
import Hamborger from "./Hamborger";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Cookies from "js-cookie";
import Home from "../Home";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("loggedIn"));

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

  function handleLogout() {
    Cookies.remove("loggedIn");
    setIsLoggedIn(false);
    window.location.href = "/login";
  }

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>

      {isOpen ? null : (
        <ul className="nav-links">
          {isLoggedIn && (
            <li>
              <span>
                <DropdownMenu isLoggedIn={isLoggedIn} />
              </span>
            </li>
          )}
          <li onClick={() => handleLinkClick("/blogs")}>
            <span>Blogs</span>
          </li>
          {!isLoggedIn && (
            <>
              <li onClick={() => handleLinkClick("/login")}>
                <span>Sign In</span>
              </li>
              <li onClick={() => handleLinkClick("/signup")}>
                <span className="start">
                  START FREE TRIAL
                  <span className="arrow">
                    <BsArrowRight size={20} style={{ paddingBottom: "2px" }} />
                  </span>
                </span>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li>
                <span onClick={handleLogout}>Logout</span>
              </li>
            </>
          )}
        </ul>
      )}

      <ul className={`mobile-nav-links ${isOpen ? "open" : ""}`}>
        {/* <Hamborger /> */}
        <li onClick={() => handleLinkClick("/")}>
          <span>Home</span>
        </li>
        <li onClick={() => handleLinkClick("/blogs")}>
          <span>Blogs</span>
        </li>
        {!isLoggedIn && (
          <>
            <li onClick={() => handleLinkClick("/login")}>
              <span>Sign In</span>
            </li>
            <li onClick={() => handleLinkClick("/signup")}>
              <div className="hamburg">
                <SignUpBtn />
              </div>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li onClick={() => handleLinkClick("/dashboard")}>
              <span>Dashboard</span>
            </li>
            <li>
              <span onClick={handleLogout}>Logout</span>
            </li>
          </>
        )}
      </ul>

      <div className="mobile-hamburger">
        <Hamburger toggled={isOpen} toggle={handleToggle} />
      </div>
    </nav>
  );
};

export default Navbar;
