import React, { useState } from "react";
import HomeLoanCalculator from "./HomeLoanCalculator";
import LoanSummaryWithPieChart from "./LoanSummaryWithPieChart";
import YearWiseBreakdown from "./YearWiseBreakdown";

const Layout = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"
      }`}
    >
      <div className="container mx-auto p-4">
        {/* Home Loan Calculator and Loan Summary with Pie Chart */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full md:w-1/2">
            <HomeLoanCalculator />
          </div>
          <div
            className={`w-full md:w-1/2 ${
              theme === "light"
                ? "bg-gradient-to-br from-blue-200 to-green-200"
                : "bg-gradient-to-br from-gray-700 to-gray-800"
            } shadow-lg rounded-lg p-4`}
          >
            <LoanSummaryWithPieChart />
          </div>
        </div>

        {/* Yearly Breakdown Payment Details */}
        <div className="mt-8">
          <YearWiseBreakdown />
        </div>

        {/* Dark Mode / Light Mode Toggle */}
        <div className="flex justify-center items-center mt-4">
          <button
            className={`bg-${
              theme === "light" ? "gray-800" : "gray-200"
            } text-${
              theme === "light" ? "gray-200" : "gray-800"
            } py-2 px-4 rounded-full focus:outline-none`}
            onClick={toggleTheme}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
