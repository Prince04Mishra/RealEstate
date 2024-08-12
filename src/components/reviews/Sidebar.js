import React, { useState } from "react";
import {
  Home,
  RateReview,
  Calculate,
  ArrowLeft,
  ArrowRight,
  MyLocation,
  Dataset,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isCollapsed ? "w-24" : "w-64"
      } bg-white h-screen rounded-r-[70px]  ml-0 z-40 mt-1 fixed shadow-xl `}
    >
      <div className="space-y-4 mt-72 text-lg ">
        <div className="flex items-center p-4 hover:bg-gray-200 cursor-pointer rounded-r-lg">
          <Link to="/">
            <Home />
            <span className={`${isCollapsed ? "hidden" : "ml-4"} `}>Home</span>
          </Link>
        </div>
        <div className="flex items-center p-4 hover:bg-gray-200 cursor-pointer rounded-r-lg">
          <Link to="/pincode">
            <MyLocation />
            <span className={`${isCollapsed ? "hidden" : "ml-4"}`}>
              Pincode
            </span>
          </Link>
        </div>
        <div className="flex items-center p-4 hover:bg-gray-200 cursor-pointer rounded-r-lg">
          <Link to="/calculator">
            <Calculate />
            <span className={`${isCollapsed ? "hidden" : "ml-4"}`}>
              EMI Calculator
            </span>
          </Link>
        </div>
        <div className="flex items-center p-4 hover:bg-gray-200 cursor-pointer rounded-r-lg">
          <Link to="/budget">
            <Dataset />
            <span className={`${isCollapsed ? "hidden" : "ml-4"}`}>
              Budget Calculator
            </span>
          </Link>
        </div>
        {/* <div className="flex items-center p-4 hover:bg-gray-200 cursor-pointer rounded-r-lg">
          <LocationCity />
          <span className={`${isCollapsed ? "hidden" : "ml-4"}`}>
            Locality Insights
          </span>
        </div> */}
        <div className="flex items-center p-4 hover:bg-gray-200 cursor-pointer rounded-r-lg">
          <Link to="/reviews">
            <RateReview />
            <span className={`${isCollapsed ? "hidden" : "ml-4"}`}>
              Ratings & Reviews
            </span>
          </Link>
        </div>

        {/* Add other sidebar items similarly */}
      </div>
      <div className="text-center py-2 px-2 mt-2">
        <button
          onClick={toggleSidebar}
          className="bg-gray-300  hover:opacity-75 px-2 py-2 rounded-full"
        >
          <span className="material-icons text-md font-mono font-bold text-black">
            {isCollapsed ? <ArrowRight /> : <ArrowLeft />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
