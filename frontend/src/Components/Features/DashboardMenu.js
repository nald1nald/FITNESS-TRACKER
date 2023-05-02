import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Features.css";

const DashboardMenu = () => {
  const location = useLocation();

  return (
      <section >
        <div className='dashboard-menu'>
            <div>
                <Link to="/daily" className={location.pathname === '/daily' ? 'active' : ''}>Daily</Link>
            </div>
            <div>
                <Link to="/calendar" className={location.pathname === '/calendar' ? 'active' : ''}>Calendar</Link>
            </div>
            <div>
                <Link to="/tasks" className={location.pathname === '/tasks' ? 'active' : ''}>Tasks</Link>
            </div>
        </div>
      </section>
  )
}

export default DashboardMenu;
