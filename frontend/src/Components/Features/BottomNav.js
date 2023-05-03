import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";
import { MdDashboard } from "react-icons/md";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";

const BottomNav = () => {
  return (
    <section className="bottom-nav">
      <div className="dashboard-links">
        <div className="btm-links">
          <Link to="/dashboard">
            <MdDashboard />
          </Link>
          <p>Dashboard</p>
        </div>
        <div className="btm-links">
          <Link to="/daily-progress">
            <BsFillCalendarEventFill />
          </Link>
          <p>Daily Progress</p>
        </div>
        <div className="btm-links">
          <Link to="/nutrition">
            <GiMeal />
          </Link>
          <p>Nutrition</p>
        </div>
        <div className="btm-links">
          <Link to="/fitness-tracker">
          <MdFitnessCenter />
          </Link>
          <p>Fitness Tracker</p> 
        </div>
      </div>
    </section>
  );
};

export default BottomNav;

