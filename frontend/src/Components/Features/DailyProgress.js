import React from "react";
import SideNav from "./SideNav";
import CaloriesChart from "./CaloriesChart";
import WeightChart from "./WeightChart";
import BMI from "./BMI"

const DailyProgress = () => {
  return (

      <section style={{height: "200vh"}}>
         <div className="daily-prog">
          <CaloriesChart/>
          <WeightChart/>
          <BMI/>
         </div>
        <SideNav/>
      </section>

  )
}
export default DailyProgress;
