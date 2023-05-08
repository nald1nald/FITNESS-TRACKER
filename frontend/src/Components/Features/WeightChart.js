import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const WeightChart = () => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!chartRef.current || !user) return;

    const canvas = chartRef.current;

    const labels = Array.from({ length: 6 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return `${date.getMonth() + 1}/${date.getDate()}`;
    });

    const newChart = new Chart(canvas, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Weight",
            data: user.weight,
            borderColor: "#FFA100",
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "#ffa2009e",
            },
            ticks: {
              color: "#ffffffab",
            },
          },
          x: {
            ticks: {
              color: "#ffffffab",
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text:
              user.weight && user.targetweight
                ? `${user.weight} - ${user.targetweight}`
                : "Current Weight - Target Weight",
            font: {
              size: 15,
              weight: "bold",
            },
            position: "top",
            color: "#fff",
          },
          legend: {
            display: false,
          },
        },
      },
    });

    setChart(newChart);

    newChart.resize();

    const handleResize = () => {
      newChart.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      newChart.destroy();
    };
  }, [chartRef, user]);

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
    <div>
      <h1>Weight</h1>
      <div className="chart-container">
        <canvas ref={chartRef} id="weightChart" />
      </div>
    </div>
  );
};

export default WeightChart;
