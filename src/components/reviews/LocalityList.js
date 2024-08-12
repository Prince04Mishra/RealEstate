import React from "react";
import LocalityCard from "./LocalityCard";

const LocalityList = ({ localities, type }) => {
  return (
    <div className="ml-72 mr-40 rounded-lg">
      {localities.length > 0 ? (
        localities.map((locality) => (
          <LocalityCard key={locality.id} locality={locality} type={type} />
        ))
      ) : (
        <p>No {type} available</p>
      )}
    </div>
  );
};

export default LocalityList;
