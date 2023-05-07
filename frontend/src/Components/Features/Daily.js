import React from "react";
import DashboardMenu from "./DashboardMenu";
import SideNav from "./SideNav";
import "./Daily.css"

const Daily = () => {
  return (
      <section style={{width: "100vw"}} className="daily">
        <SideNav/>
        <DashboardMenu/>
        <div className="features-daily">
          <div>
            <div></div>
            <div><h1>Hi NAME!</h1></div>
          </div>
          <h3>Your today's plan</h3>
        </div>
      </section>
  )
}
export default Daily;
