import React from "react";
import SideNav from "./SideNav";
import CaloriesChart from "./CaloriesChart";
import WeightChart from "./WeightChart";
import BMI from "./BMI"

const DailyProgress = () => {
  return (

      <section style={{height: "200vh"}}>
        <CaloriesChart/>
        <WeightChart/>
        <BMI/>
        <SideNav/>
      </section>

  )
}
export default DailyProgress;
