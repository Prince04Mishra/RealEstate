import React from "react";
import LocatorF from "./LocatorF";
import Header from "../Header";
import Sidebar from "../reviews/Sidebar";

const PinCode = () => {
  return (
    <div className="flex">
      <Header />
      <div className="flex-1 mt-24">
        <Sidebar />

        <LocatorF />
      </div>
    </div>
  );
};

export default PinCode;
