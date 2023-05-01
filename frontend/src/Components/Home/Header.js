import React from "react";
import "./Home.css"
import {BsArrowRight} from "react-icons/bs";
import { Link } from "react-router-dom";
import FoodCircle from "../images/h1.png";
import Gym from "../images/h5 (2).png";
import Girl from "../images/Untitled design (4).png";
import {BsPhone} from "react-icons/bs";
import {BsTabletLandscape} from "react-icons/bs";
import {BsLaptop} from "react-icons/bs";
import {GoDeviceDesktop} from "react-icons/go";
import {MdDevices} from "react-icons/md";

const Header = () => {
  return (
    <>
      <section className="home">
        <div>
          <div className="space"></div>
          <div className="image-container">
            <div className="header-text">
              <div className="txt1">
                <div>
                  <h1>Transform your body and mind with <span className="flex">Flex</span><span className="pulse">Pulse</span></h1>
                </div>
                <div>
                  <Link to='/signup'>
                    <button className="try-btn"> TRY FOR FREE <span className="arrow"><BsArrowRight size={20} style={{paddingBottom: '2px'}}/></span></button>
                  </Link>
                </div>
                <div className="text-btm">
                  <p>Your personal fitness coach on-the-go.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="intro">
            <div className="header-intro">
              <h1>
                Get <span className="fit">Fit.</span>
              </h1>
              <h1>
                Get <span className="flexpulse">FlexPulse.</span>
              </h1>
            </div>
            <p>
              Transform your fitness journey with <span className="fit">FlexPulse</span>, the ultimate fitness app designed to help you achieve your health and wellness goals. Join thousands of satisfied users and enjoy benefits such as personalized workout plans, real-time progress tracking, and expert guidance from certified trainers. Start your fitness journey with <span className="fit">FlexPulse</span> and get ready to achieve the results you've always wanted.
            </p>
          </div>

          <div className="header-desktop">
          <div className="header-tablet-1">

            <div className="container-2">
                <div className="header-text-2">
                  <div>
                    <h1>Maintaining a healthy diet is fundamental to achieving good health.</h1>
                  </div>
                  <div>
                    <p>Flexpulse is a fitness app that not only provides workout routines but also includes a range of healthy diet recipes. <span className="link"><a href="/nutrition">Learn more.</a></span></p>
                  </div>
                </div>
                <div className="center">
                <div className="food-circle">
                    <img src={FoodCircle} style={{maxWidth: '100%', height: 'auto'}} alt="girl"/>
                </div>
                </div>
              </div>

              <div className="container-3">
                <div className="header-text-3">
                    <div>
                        <h1>Committing to a consistent exercise routine is the most reliable way to improve physical fitness, mental health, and overall well-being.</h1>
                    </div>
                    <div>
                        <p>Flexpulse is a must-have fitness app that offers personalized workouts, tracks progress, and provides expert guidance to help you achieve your fitness goals. <span className="link"><a href="/features">Learn more.</a></span></p>
                    </div>
                </div>
                    <div className="center">
                        <div className="food-circle gym">
                            <img src={Gym} style={{maxWidth: '100%', height: 'auto'}} alt="girl"/>
                        </div>
                    </div>
              </div>

            </div>

         <div className="header-tablet-2">
            <div className="container-4">
              <div className="header-text-4">
                  <div>
                      <h1>Discover our most popular workouts, meal plans, and challenges, all tried and tested by our community of fitness enthusiasts.</h1>
                  </div>
                  <div>
                    <p>Start your journey to a healthier you today!</p>
                  </div>
              </div>
                  <div className="center">
                      <div className="food-circle">
                        <div className="girl">
                              <img src={Girl} alt="start" style={{maxWidth: '90%', height: 'auto'}}/>
                        </div>
                      </div>
                  </div>
            </div>

            <div className="container-5">
              <div className="header-text-5">
                  <div>
                      <h1>Can’t go to the gym? No problem! Our workouts bring the gym to you,  whenever or wherever you are.</h1>
                  </div>
                  <div>
                    <p>Available to all devices.</p>
                  </div>
                  <div className="header-icons">
                      <span><BsPhone/></span>
                      <span><BsTabletLandscape/></span>
                      <span><BsLaptop/></span>
                      <span><GoDeviceDesktop/></span>
                      <span><MdDevices/></span>
                  </div>
              </div>
            </div>
            
          </div>

         </div>

        </div>
        <Link to="/signup">
            <span className="center">
              <button className="signup-btn">
                Start Free Trial 
                <span className="arrow"><BsArrowRight size={20} style={{paddingBottom: '2px'}}/>
                </span>
              </button>
            </span>
        </Link>  
      </section>
    </>
  )
}

export default Header;
