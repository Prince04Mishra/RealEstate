import React from "react";
import StarIcon from "@mui/icons-material/Star";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-end space-x-4 my-4 mr-[495px] lg:mr-[565px]">
      <button
        className={`px-4 py-2 border rounded flex items-center ${
          filter === "Top Rated" ? "bg-green-500 text-white" : "bg-gray-100"
        }`}
        onClick={() => setFilter("Top Rated")}
      >
        <StarIcon className="mr-2" /> Top Rated
      </button>
      <button
        className={`px-4 py-2 border rounded flex items-center ${
          filter === "Low Rated" ? "bg-green-500 text-white" : "bg-gray-100"
        }`}
        onClick={() => setFilter("Low Rated")}
      >
        <ThumbDownIcon className="mr-2" /> Low Rated
      </button>
      <button
        className={`px-4 py-2 border rounded flex items-center ${
          filter === "Top Searched" ? "bg-green-500 text-white" : "bg-gray-100"
        }`}
        onClick={() => setFilter("Top Searched")}
      >
        <TrendingUpIcon className="mr-2" /> Top Searched
      </button>
    </div>
  );
};

export default Filters;
