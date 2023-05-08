import React from "react";
import "../index.css";
import Dashboard from "./Features/Dashboard";
import SideNav from "./Features/SideNav";
// import withAuth from "./withAuth";

const Features = () => {
  return (
    <section className="features-section">
      <Dashboard />
      <SideNav />
    </section>
  );
};

export default Features;