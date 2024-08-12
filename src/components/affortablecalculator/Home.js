import React from "react";
import BudgetMainPage from "./BudgetMainPage";
import InfoPage from "./InfoPage";
import Header from "../Header";
import Sidebar from "../reviews/Sidebar";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Header />
        <div className="flex-1 mt-24">
          <Sidebar />
        </div>
        <BudgetMainPage />
      </div>
      <div className="relative py-4  bg-gradient-to-t from-black bg-opacity-10 rounded-3xl -mt-16 -z-20">
        <InfoPage />
      </div>
    </>
  );
};

export default Home;
