import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const WeightChart = ({ weightData, currentWeight, targetWeight }) => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!chartRef.current) return;

    // get the canvas element from the ref
    const canvas = chartRef.current;

    // calculate labels for the past 6 days up until today
    const labels = Array.from({ length: 6 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return `${date.getMonth() + 1}/${date.getDate()}`;
    });

    // create the chart object
    const newChart = new Chart(canvas, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Weight",
            data: weightData,
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
              currentWeight && targetWeight
                ? `${currentWeight} - ${targetWeight}`
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

    // set the chart size to fit the parent container
    newChart.resize();

    // handle window resize to update the chart size
    const handleResize = () => {
      newChart.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // remove the resize event listener before unmounting the component
      window.removeEventListener("resize", handleResize);

      // destroy the chart object before unmounting the component
      newChart.destroy();
    };
  }, [chartRef, weightData, currentWeight, targetWeight]);

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
