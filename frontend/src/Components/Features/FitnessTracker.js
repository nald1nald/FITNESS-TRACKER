import React from "react";
import SideNav from "./SideNav";
import "./FitnessTracker.css"
const FitnessTracker = () => {
  return (

      <section >
        <div className="fit-tracker">
          <div className="ft-header">
             <div className="ft-text">
             <h3>Fitness Tracker</h3>
              <p>
              Exercise benefits not only physical fitness but also mental health, such as reducing the risk of chronic diseases, improving mood, boosting energy levels, and promoting better sleep.
              </p>
             </div>
          </div>
        </div>
        <SideNav/>
      </section>

  )
}
export default FitnessTracker;
