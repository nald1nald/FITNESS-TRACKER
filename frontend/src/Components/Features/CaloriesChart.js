import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./DailyProgress.css";

const CaloriesChart = ({ levelOfCarbs }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;

    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    const labels = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(weekStart);
      date.setDate(date.getDate() + i);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    });

    // create the chart object
    const chart = new Chart(canvas, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: new Date().toLocaleString("default", { month: "long" }),
            data: levelOfCarbs ? levelOfCarbs : [0, 0, 0, 0, 0, 0, 0],
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
            text: new Date().toLocaleString("default", { month: "long" }),
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

    // set the chart size to fit the viewport
    chart.resize();

    // handle window resize to update the chart size
    const handleResize = () => {
      chart.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // remove the resize event listener before unmounting the component
      window.removeEventListener("resize", handleResize);

      // destroy the chart object before unmounting the component
      chart.destroy();
    };
  }, [levelOfCarbs]);

  return (
    <div>
      <div>
        <h3>
          Calories Burned, estimated <span>(Kcal)</span>
        </h3>
      </div>
      <div className="chart-container">
        <canvas ref={chartRef} id="myChart" />
      </div>
    </div>
  );
};

export default CaloriesChart;
