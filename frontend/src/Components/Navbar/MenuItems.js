import React from "react";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <div>
      <ul className="hamborger-menu">
        <li>
          <Link to="/features/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/daily-progress">Daily Progress</Link>
        </li>
        <li>
          <Link to="/nutrition">Nutrition</Link>
        </li>
        <li>
          <Link to="/fitness-tracker">Fitness Tracker</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
