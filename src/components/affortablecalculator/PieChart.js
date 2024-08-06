import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ eligibleBudget, cost }) => {
  const data = {
    labels: ["Eligible", "Property Cost"],
    datasets: [
      {
        data: [eligibleBudget, cost],
        backgroundColor: ["#0000ee", "#00ed64"],
        hoverBackgroundColor: ["#016bf8", "#6cc04a"],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            weight: "bold", // Make the labels bold
            size: 17, // Optional: Adjust font size if needed
          },
          color: "#fd3a36",
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            // Format the tooltip label
            return `${tooltipItem.label}: ₹${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="h-[420px] ml-12">
      <Pie data={data} options={options} className="mt-8 p-2" />
    </div>
  );
};

export default PieChart;
