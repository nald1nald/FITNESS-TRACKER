import React from "react";
import "./Home/Home.css";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <>
      <section className="homed">
        <Navbar/>
        <Header/>
        <Footer/>
      </section>
    </>
  )
}
export default Home;
