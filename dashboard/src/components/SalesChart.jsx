import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function SalesChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Sales (in $)",
        data: [5000, 8000, 6500, 10000, 12000, 14000, 13000, 15000, 16000],
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white for fill
        borderColor: "#FFFFFF", // White line
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#FFFFFF", // White points
        tension: 0.3, // Curve the lines slightly
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 14,
          },
          color: "#FFFFFF", // White legend text
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark tooltip
        titleFont: { size: 14, color: "#FFFFFF" },
        bodyFont: { size: 12, color: "#FFFFFF" },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#FFFFFF", // White x-axis labels
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [5],
        },
        ticks: {
          stepSize: 5000,
          color: "#FFFFFF", // White y-axis labels
        },
      },
    },
  };


  return (
    <div className="bg-[#1e2939] shadow-md rounded-lg p-5 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Monthly Sales Overview
      </h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default SalesChart;
