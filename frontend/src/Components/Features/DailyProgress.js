import React from "react";
import BottomNav from "./BottomNav";
import CaloriesChart from "./CaloriesChart";
import WeightChart from "./WeightChart";
import BMI from "./BMI"

const DailyProgress = () => {
  return (

      <section style={{height: "200vh"}}>

        <CaloriesChart/>
        <WeightChart/>
        <BMI/>
        <BottomNav/>
        
      </section>

  )
}
export default DailyProgress;
