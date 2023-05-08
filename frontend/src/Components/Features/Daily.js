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
import BarChart from "../images/barchart.png"

const Daily = () => {

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section style={{ width: "100vw", height: "100%" }} className="daily">
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
          
        <div className="column-con">
          <div className="features-column">
          <h5 className="plan">Your today's plan</h5>
          <div className="third-daily">
              <h6 className="tl">Start a streak to view your statistics.</h6>
            <div className="barchart">
              <img src={BarChart} alt="Bar Chart" />
            </div>
            <div className="vbd">
                <Link to="/features/daily-progress">View More.</Link>
              </div>
          </div>

          </div>

          <div className="features-column secol">
          <div className="second-daily">
            <div className="sd">
              <div>
              <h6 className="tl">Nutrition</h6>
              <p className="move">
                Eat the Rainbow: Vary your diet with colorful fruits and
                vegetables.
              </p>
            </div>
            <div className="image-second">
              <img src={fruits} alt="fruits" />
            </div>
            </div>
            <div className="lrn">
                <Link to="/features/nutrition">Learn More</Link>
            </div>
          </div>

          <div className="first-daily">
              <div>
                <h6 className="tl">Excercise</h6>
                <p className="move">Keep track of your progress. Move daily for a healthy body and mind.</p>
                <div>
                  <Link to="/features/fitness-tracker">Start</Link>
                </div>
              </div>
              <div className="image-first">
                <img src={firstdaily} alt="first daily" />
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};
export default Daily;
