import React, { useState, useEffect } from "react";
import DashboardMenu from "./DashboardMenu";
import SideNav from "./SideNav";

const Tasks = () => {
  return (
    <section style={{ width: "100vw" }}>
      <DashboardMenu />
      <SideNav />
    </section>
  );
};

export default Tasks;
