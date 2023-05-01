import React, { useState, useRef } from "react";
import "./DropdownMenu.css";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const DropdownMenu = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
    dropdownRef.current
      .querySelector(".down-icon")
      .classList.add("rotate-icon");
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    dropdownRef.current
      .querySelector(".down-icon")
      .classList.remove("rotate-icon");
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fts"
    >
      <p>
        Features{" "}
        <span className="down">
          <BsChevronRight className="down-icon" />
        </span>
      </p>
      {isOpen && (
        <ul className="dropdown">
          <li>
            <Link to="/dashboard" onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/daily-progress" onClick={() => setIsOpen(false)}>
              Daily Progress
            </Link>
          </li>
          <li>
            <Link to="/nutrition" onClick={() => setIsOpen(false)}>
              Nutrition
            </Link>
          </li>
          <li>
            <Link to="/fitness-tracker" onClick={() => setIsOpen(false)}>
              Fitness Tracker
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
