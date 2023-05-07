import React from "react";
import DashboardMenu from "./DashboardMenu";
import SideNav from "./SideNav";
import "./Daily.css";
import Graphic from "../images/graphic.png";
import firstdaily from "../images/firstdaily.png";
import fruits from "../images/fruits.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Daily = () => {
  const data = {
    labels: ["Apple", "Banana", "Orange", "Grapes", "Mango"],
    calories: [52, 89, 47, 67, 135],
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://backend-omega-lyart.vercel.app/api/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section style={{ width: "100vw", height: "1000vh" }} className="daily">
      <SideNav />
      <DashboardMenu />
      <div className="features-daily">
        <div className="greetings">
          <div className="graphic">
            <img src={Graphic} alt="Man Waving" />
          </div>
          <div>
            <h2>
              Hi {user.first_name} {user.last_name}!
            </h2>
          </div>
        </div>
        <h6>Your today's plan</h6>

        <div>
          <div className="first-daily">
            <div>
              <p>Excercise</p>
              <p className="move">Move daily for a healthy body and mind.</p>
              <div>
                <Link to="/features/fitness-tracker">Start</Link>
              </div>
            </div>
            <div className="image-first">
              <img src={firstdaily} alt="first daily" />
            </div>
          </div>

          <div className="second-daily">
            <div>
              <p>Nutrition</p>
              <p className="move">
                Eat the Rainbow: Vary your diet with colorful fruits and
                vegetables.
              </p>
              <div>
                <Link to="/features/nutrition">Learn More</Link>
              </div>
            </div>
            <div className="image-second">
              <img src={fruits} alt="fruits" />
            </div>
          </div>

          <div className="third-daily">
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Daily;
