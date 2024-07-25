import React from "react";
import Header from "./Header";
import Filters from "./Filters";
import PropertyList from "./PropertyList";

const Body = () => {
  return (
    <div>
      <Header />
      <div className="mx-2 px-2 rounded-lg">
        <Filters />
        <PropertyList />
      </div>
    </div>
  );
};

export default Body;
