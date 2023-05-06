import React from "react";
import BottomNav from "./BottomNav";
import { Link } from 'react-router-dom'



const Dashboard = () => {
  return (
    <section>
      <div className="dash-menu">
        <Link to="/features/dashboard/daily">
          Daily
        </Link>
        <Link to="/features/dashboard/calendar">
          Calendar
        </Link>
        <Link to="/features/dashboard/tasks">
          Tasks
        </Link>
      </div>
      <BottomNav/>
    </section>
  );
};
export default Dashboard;
