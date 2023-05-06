import React from "react";
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/features/dashboard" activeclassname="active-bottomnav">
            <div className="bottomlinks">
            <div><MdDashboard size={25}/></div>
            <div className="active-btmnav">Dashboard</div>
            </div>
          </NavLink>
          
        </div>
        <div className="btm-links">
          <NavLink to="/features/daily-progress" activeclassname="active-bottomnav" >
            <div className="bottomlinks">
            <div><BsFillCalendarEventFill size={25}/></div>
            <div className="active-btmnav">Daily Progress</div>
            </div>
          </NavLink>
         
        </div>
        <div className="btm-links">
          <NavLink to="/features/nutrition" activeclassname="active-bottomnav">
            <div className="bottomlinks">
            <div><GiMeal size={25}/></div>
            <div className="active-btmnav">Nutrition</div>
            </div>
          </NavLink>
         
        </div>
        <div className="btm-links">
          <NavLink to="/features/fitness-tracker" activeclassname="active-bottomnav" >
            <div className="bottomlinks">
            <div><MdFitnessCenter size={25}/></div>
            <div className="active-btmnav">Fitness Tracker</div>
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default BottomNav;
