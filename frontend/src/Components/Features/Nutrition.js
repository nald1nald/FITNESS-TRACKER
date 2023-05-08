import React from "react";
import SideNav from "./SideNav";
import "./Nutrition.css";
import Meal from "./Nutrition/Meal"; 

const Nutrition = () => {

  return (
    <section className="nutrition" style={{ height: "1000vh" }}>
      <div className="ncon">
      <div className="nutrition-header">
        <h3>Healthy Eating</h3>
        <p>
          Healthy eating is all about nourishing your body with the right foods
          to keep you feeling great. It's not about depriving yourself, but
          rather finding a balance that works for you. So, come on in and
          explore our delicious and nutritious recipes that will help you
          achieve your fitness goals.
        </p>
      </div>
        <Meal /> {/* render the MealAPI component */}
      </div>

      <SideNav />
    </section>
  );
};

export default Nutrition;
