import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";
import { MdDashboard } from "react-icons/md";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import { Squash as Hamburger } from "hamburger-react";
import { RiLogoutCircleLine } from "react-icons/ri";
import Logo from "../images/logo-white (2).png";
import Cookies from "js-cookie";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Cookies.get("token", "loggedIn")
  );

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleLogout() {
    Cookies.remove("token");
    Cookies.remove("loggedIn");
    setIsLoggedIn(false);
    window.location.href = "/";
  }

  return (
    <section
      className={`sidenav-container ${isOpen ? "open" : "closed"}`}
      style={{
        width: isOpen ? "15rem" : "3rem",
        borderTopRightRadius: isOpen ? "20px" : "0",
        height: height,
      }}
    >
      <div className="top">
        <div style={{ display: isOpen ? "block" : "none" }}>
          <img src={Logo} alt="Logo" />
        </div>
        <div
          className="sidenav-burger"
          style={{ left: isOpen ? "12rem" : ".2rem" }}
        >
          <Hamburger toggled={isOpen} toggle={handleToggle} size={20} />
        </div>
      </div>
      <div
        className="side-links"
        style={{ marginTop: isOpen ? "3rem" : "6rem" }}
      >
        <div className="link-container margin">
          <NavLink to="/features/dashboard" activeclassname="active-SideNav">
            <div className="sidenav-icons">
              <div className="side-icons">
                <MdDashboard size={23} />
                <span className="text-link-hover">Nutrition</span>
              </div>
              <div
                className="text-link"
                style={{ display: isOpen ? "block" : "none" }}
              >
                Dashboard
              </div>
            </div>
          </NavLink>
        </div>
        <div className="link-container margin">
          <NavLink
            to="/features/daily-progress"
            activeclassname="active-SideNav"
          >
            <div className="sidenav-icons">
              <div className="side-icons">
                <BsFillCalendarEventFill size={23} />
                <span className="text-link-hover">Nutrition</span>
              </div>
              <div
                className="text-link"
                style={{ display: isOpen ? "block" : "none" }}
              >
                Daily Progress
              </div>
            </div>
          </NavLink>
        </div>
        <div className="link-container margin">
          <NavLink to="/features/nutrition" activeclassname="active-SideNav">
            <div className="sidenav-icons">
              <div className="side-icons">
                <GiMeal size={23} />
                <span className="text-link-hover">Nutrition</span>
              </div>
              <div
                className="text-link"
                style={{ display: isOpen ? "block" : "none" }}
              >
                Nutrition
              </div>
            </div>
          </NavLink>
        </div>
        <div className="link-container margin">
          <NavLink
            to="/features/fitness-tracker"
            activeclassname="active-SideNav"
          >
            <div className="sidenav-icons">
              <div className="side-icons">
                <MdFitnessCenter size={23} />
                <span className="text-link-hover">Nutrition</span>
              </div>
              <div
                className="text-link"
                style={{ display: isOpen ? "block" : "none" }}
              >
                Fitness Tracker
              </div>
            </div>
          </NavLink>
        </div>
        {isLoggedIn && (
          <div className="link-container logout">
            <NavLink to="/" activeclassname="active-SideNav">
              <div className="sidenav-icons">
                <div className="side-icons">
                  <RiLogoutCircleLine size={23} onClick={handleLogout} />
                  <span className="text-link-hover">Logout</span>
                </div>
                <div
                  className="text-link"
                  style={{ display: isOpen ? "block" : "none" }}
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default SideNav;
