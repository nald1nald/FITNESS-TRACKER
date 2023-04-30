import React from "react";
import "./Footer.css";
import Logo from "../images/logo-white (2).png";
import { Link } from "react-router-dom";
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";

const Footer = () => {
  return (
      <section>
        <div className="footer-container">
            <div className="footer-company">
                <div className="footer-logo">
                    <img src={Logo}/>
                </div>
                <div className="footer-text" >
                    <p>Your personal fitness companion – download FlexPulse today and start achieving your health goals with personalized workouts and real-time progress tracking.</p>
                </div>
            </div>
            <div className="footer"></div>
            <div className="footer-bottom">
                <p>Copyright © 2023 <span className="fl">Flex</span><span className="pl">Pulse.</span> All Right Reserved.</p>
                <h6>Privacy Policy | Terms of Use <span></span></h6>
            </div>
        </div>
      </section>
  )
}
export default Footer;