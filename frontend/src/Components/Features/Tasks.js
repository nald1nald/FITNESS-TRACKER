import React, { useState, useEffect } from "react";
import DashboardMenu from "./DashboardMenu";
import SideNav from "./SideNav";
import "./TAsks.css";

const Tasks = () => {
  return (
      <section style={{width: "100vw"}}>
        <DashboardMenu/>
          <div className="task-con" style={{paddingLeft: "4rem"}}>
            <h2 style={{paddingLeft: "2rem"}}>Ongoing Tasks</h2>
            <div className="task-list">
              <div className="tab1">
                  
              </div>
            </div>
          </div>
        <SideNav/>
      </section>
  );
};

export default Tasks;
