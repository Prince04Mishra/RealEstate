import React from "react";
import HomeLoanCalculator from "./HomeLoanCalculator";
import Header from "../Header";
import Sidebar from "../reviews/Sidebar";

const EmiCalculator = () => {
  return (
    <div className="flex">
      <Header />
      <div className="flex-1 mt-24">
        <Sidebar />
        <div className="m-11 ml-44">
          <HomeLoanCalculator />
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
