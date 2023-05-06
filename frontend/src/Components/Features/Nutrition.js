import React from "react";
import BottomNav from "./BottomNav";
import "./Nutrition.css";

const Nutrition = () => {
  return (

      <section className="nutrition" style={{height: "1000vh"}}>
          <div className="nutrition-header">
            <h3>Healthy Eating</h3>
            <p>Healthy eating is all about nourishing your body with the right foods to keep you feeling great. It's not about depriving yourself, but rather finding a balance that works for you. So, come on in and explore our delicious and nutritious recipes that will help you achieve your fitness goals.</p>
          </div>
          <h4>Categories</h4>
          <div className="food-categories">
            <div className="breakfast">
              <p>Breakfast</p>
            </div>
            <div className="lunch">
              <p>Lunch</p>
            </div>
            <div className="dinner">
              <p>Dinner</p>
            </div>
            <div className="snacks">
              <p>Snacks</p>
            </div>
          </div>
        <BottomNav/>
      </section>

  )
}
export default Nutrition;
