import React from "react";
import "../index.css";
import Dashboard from "./Features/Dashboard";
import BottomNav from "./Features/BottomNav";

const Features = () => {
  return (
    <section className="features-section">
      <Dashboard />
      <BottomNav />
    </section>
  );
};
export default Features;
