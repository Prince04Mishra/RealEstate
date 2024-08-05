import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ eligibleBudget, cost }) => {
  return (
    <div className="h-[420px] ml-12">
      <Pie
        data={{
          labels: ["Eligible", "Property Cost"],
          datasets: [
            {
              data: [eligibleBudget, cost],
              backgroundColor: ["#36A2EB", "#FF6384"],
            },
          ],
        }}
        className="mt-8 p-2"
      />
    </div>
  );
};

export default PieChart;
