import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import LoanSummary from "./LoanSummary";

// Register the required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({
  principal,
  totalInterest,
  payment,
  monthlyPayment,
  totalPayment,
}) => {
  const data = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        label: "Loan Breakdown",
        data: [principal, totalInterest],
        backgroundColor: ["#016bf8", "#f22c3d"],
        hoverBackgroundColor: ["#0000ee", "#f22c2d"],
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
            size: 14, // Optional: Adjust font size if needed
          },
          color: "#000000",
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
    <div className=" mt-6 flex flex-col md:flex-row p-2 bg-slate-50 rounded-3xl justify-between lg:shadow-lg lg:shadow-lime-300">
      <div className=" p-2 items-center ml-8">
        <LoanSummary
          monthlyPayment={monthlyPayment}
          totalInterest={totalInterest}
          totalPayment={totalPayment}
        />
      </div>
      <div className="h-64 py-6 lg:py-1 lg:h-[224px]">
        <h3 className="text-xl font-bold ">Your EMI Amount: {payment}</h3>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
