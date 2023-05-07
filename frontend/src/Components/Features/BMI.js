import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const BMI = ({ weight, height }) => {
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState(null);
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

  const calculateBMI = useCallback(() => {
    if (user.weight && user.height) {
      const bmiValue = user.weight / (user.height / 100) ** 2;
      setBMI(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setStatus("Normal weight");
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setStatus("Overweight");
      } else if (bmiValue >= 30) {
        setStatus("Obese");
      }
    } else {
      setBMI("Current BMI :");
      setStatus("");
    }
  }, [user.weight, user.height]);

  useEffect(() => {
    calculateBMI();
  }, [calculateBMI]);

  const statusStyle = {
    backgroundColor: status
      ? status === "Underweight"
        ? "#ffa100"
        : status === "Normal weight"
        ? "#4CAF50"
        : status === "Overweight"
        ? "#ff5757"
        : status === "Obese"
        ? "#800000"
        : "#B900FF" // set default background color
      : "#B900FF", // set default background color when status has no value
    color: "white",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
  };

  return (
    <section style={{ marginTop: "2rem" }}>
      <h1>BMI(kg/m2)</h1>
      <div className="bmi-container">
        <p>
          {bmi && status && (
            <>
              <strong>BMI:</strong> {bmi} -{" "}
              <span style={statusStyle}>{status}</span>
            </>
          )}
          {(!bmi || !status) && <strong>{bmi}</strong>}
        </p>
      </div>
    </section>
  );
};

export default BMI;
