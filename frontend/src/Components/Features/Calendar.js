import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Calendar.css";
import DashboardMenu from "./DashboardMenu";
import BottomNav from "./BottomNav";

const Calendar = () => {
  const [date] = useState(new Date());
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const numberOfDays = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();

  const weeks = [];
  let currentWeek = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push(<div className="empty"></div>);
  }

  for (let i = 1; i <= numberOfDays; i++) {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
    const isToday =
      currentDate.getDate() === new Date().getDate() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear();

    currentWeek.push(
      <Link key={i} to={`/blogs`} className={`day ${isToday ? "today" : ""}`}>
        {i}
        {isToday && <div className="circle"></div>}
      </Link>
    );

    if (currentWeek.length === 7 || i === numberOfDays) {
      weeks.push(
        <div key={weeks.length} className="week">
          {currentWeek}
        </div>
      );
      currentWeek = [];
    }
  }

  return (
    <section className="calend">
      <DashboardMenu />
      <div className="calendar">
        <div className="header">
          {/* <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}>Previous</button> */}
          <h1>
            {monthsOfYear[date.getMonth()]} {date.getFullYear()}
          </h1>
          {/* <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}>Next</button> */}
        </div>
        <div className="daysOfWeek">
          {daysOfWeek.map((day) => (
            <div>{day}</div>
          ))}
        </div>
        <div className="weeks">{weeks}</div>
      </div>
      <div className="water-intake clsh">
        <p>
          <span>Water Intake:</span> Number of glasses drank/Target number of
          glasses
        </p>
      </div>
      <div className="calorie-count clsh">
        <p>
          <span>Water Intake:</span> Number of glasses drank/Target number of
          glasses
        </p>
      </div>
      <div className="steps-counter clsh">
        <p>
          <span>Water Intake:</span> Number of glasses drank/Target number of
          glasses
        </p>
      </div>
      <BottomNav />
    </section>
  );
};

export default Calendar;
