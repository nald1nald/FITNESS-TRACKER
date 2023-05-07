import React from "react";
import SideNav from "./SideNav";
import "./FitnessTracker.css"
const FitnessTracker = () => {
  return (

      <section >
        <div className="fit-tracker">
          <div className="ft-header">
              <h3>Fitness Tracker</h3>
              <p>
              Regular exercise doesn't only provide physical fitness, but mental health benefits as well, including reducing the risk of chronic diseases, improving mood, increasing energy levels, and promoting better sleep.
              </p>
          </div>
        </div>
        <SideNav/>
      </section>

  )
}
export default FitnessTracker;
