import React from "react";
import { NavLink } from "react-router-dom";
import "./Features.css";

const DashboardMenu = () => {
  return (
    <section>
      <div className="dashboard-menu">
        <div className="dashboard-center">
          <NavLink
            exact={true.toString()}
            to="/features/dashboard/daily"
            className="dm-links"
            activeclassname="active-link"
          >
            Daily
          </NavLink>
        </div>

        <div className="dashboard-center">
          <NavLink
            exact={true.toString()}
            to="/features/dashboard/calendar"
            className="dm-links"
            activeclassname="active-link"
          >
            Calendar
          </NavLink>
        </div>

        {/* <div className="dashboard-center">
          <NavLink
            exact={true.toString()}
            to="/features/dashboard/tasks"
            className="dm-links"
            activeclassname="active-link"
          >
            Tasks
          </NavLink>
        </div> */}
      </div>
    </section>
  );
};

export default DashboardMenu;
