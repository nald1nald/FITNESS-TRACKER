import React, { useState, useRef } from "react";
import "./MenuItems.css";
import { BsChevronRight } from "react-icons/bs";

const Hamborger = () => {
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

  const handleLinkClick = () => {
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div
      className="hamborg-parent"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="features">
        Features{" "}
        <span className="down">
          <BsChevronRight className="down-icon" />
        </span>
      </p>
      {isOpen && (
        <ul className="hamborger-menu">
          <li>
            <a href="/dashboard" onClick={handleLinkClick}>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/daily-progress" onClick={handleLinkClick}>
              Daily Progress
            </a>
          </li>
          <li>
            <a href="/nutrition" onClick={handleLinkClick}>
              Nutrition
            </a>
          </li>
          <li>
            <a href="/fitness-tracker" onClick={handleLinkClick}>
              Fitness Tracker
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Hamborger;
