import React from "react";
import Header from "./Header";
import Filters from "./Filters";
import PropertyList from "./PropertyList";
import Sidebar from "./reviews/Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Header />

      <div className="flex-1 mt-24">
        <Sidebar />
        <div className="mx-2 px-2 rounded-lg lg:ml-52 lg:mr-40 mt-1">
          <Filters />
          <PropertyList />
        </div>
      </div>
    </div>
  );
};

export default Body;
