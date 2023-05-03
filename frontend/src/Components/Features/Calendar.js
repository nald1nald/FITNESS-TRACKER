import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Calendar.css";
import DashboardMenu from "./DashboardMenu";
import BottomNav from "./BottomNav";
import axios from "axios";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState([]);
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
    currentWeek.push(<div key={`empty-${i}`} className="empty"></div>);
  }

  for (let i = 1; i <= numberOfDays; i++) {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
    const isToday =
      currentDate.getDate() === new Date().getDate() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear();

    currentWeek.push(
      <Link
        key={`day-${i}`}
        to={`/blogs`}
        className={`day ${isToday ? "today" : ""}`}
      >
        {i}
        {isToday && <div className="circle"></div>}
      </Link>
    );

    if (currentWeek.length === 7 || i === numberOfDays) {
      weeks.push(
        <div key={`week-${weeks.length}`} className="week">
          {currentWeek}
        </div>
      );
      currentWeek = [];
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/users", {
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

  const heightInMeters = user && user.height / 100;
  const bmi = user && user.weight / (heightInMeters * heightInMeters);
  let message;
  let exerciseList = [];
  if (!user) {
    message = "Loading...";
  } else {
    const heightInMeters = user.height / 100;
    const bmi = user.weight / (heightInMeters * heightInMeters);
    if (!user) {
      message = "Loading...";
    } else if (bmi < 18.5) {
      message = "You are underweight.";
      exerciseList = [
        exercises[0],
        exercises[1],
        exercises[2],
        exercises[3],
        exercises[4],
      ];
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = "Your weight is normal.";
      exerciseList = [
        exercises[5],
        exercises[6],
        exercises[7],
        exercises[8],
        exercises[9],
      ];
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = "You are overweight.";
      exerciseList = [
        exercises[10],
        exercises[11],
        exercises[12],
        exercises[13],
        exercises[14],
      ];
    } else {
      message = "You are obese.";
      exerciseList = [
        exercises[15],
        exercises[16],
        exercises[17],
        exercises[18],
        exercises[19],
      ];
    }
  }

  const exerciseListStr = exerciseList.join(", ");

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await axios.get("http://localhost:5000/exercises");
      setExercises(response.data.exercises);
    };
    fetchExercises();
  }, []);

  console.log(exercises);

  return (
    <section className="calend">
      {/* <DashboardMenu /> */}
      <div className="calendar">
        <div className="header">
          {/* <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}>Previous</button> */}
          <h1>
            {monthsOfYear[date.getMonth()]} {date.getFullYear()}
          </h1>
          {/* <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}>Next</button> */}
        </div>
        <div className="daysOfWeek">
          {daysOfWeek.map((day, index) => (
            <div key={`dayOfWeek-${index}`}>{day}</div>
          ))}
        </div>
        <div className="weeks">{weeks}</div>
      </div>
      <div className="water-intake clsh">
        <p>
          BMI:
          <span>{!user ? "Loading..." : bmi.toFixed(2) + " " + message}</span>
        </p>
      </div>

      <div className="upper-body clsh">
        <p>
          Exercises
          <span>{user && exerciseListStr}</span>
        </p>
      </div>

      <BottomNav />
    </section>
  );
};

export default Calendar;
