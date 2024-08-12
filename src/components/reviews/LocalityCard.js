import React from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useToggle } from "../hooks/useToggle";
import LocalityDetails from "./LocalityDetails";

const LocalityCard = ({ locality, type }) => {
  const [isExpanded, toggleExpansion] = useToggle(false);

  return (
    <div className="p-4 border border-gray-200 rounded my-2 flex flex-col justify-evenly items-center cursor-pointer hover:ease-in-out hover:shadow-md hover:shadow-gray-400 mb-4 py-9 lg:py-14 ">
      <div
        className="flex  justify-evenly items-center gap-2"
        onClick={toggleExpansion}
      >
        <div className="flex items-center gap-10">
          <div className="ml-2">
            {/* <LocationCityIcon className="text-green-400 mr-2 font-bold" /> */}
            <img
              src={locality.image}
              alt="logo"
              className="h-16 rounded-full w-20  border-red-500 border-2 "
            />
          </div>

          <div>
            <h3 className="text-xl font-bold items-center text-gray-800 font-sans ml-2">
              {type === "locality" ? locality.name : locality.societieName}
            </h3>
            <p className="text-gray-600 font-serif font-bold m-1 px-2">
              {locality.zone}
            </p>
          </div>
        </div>
        <div className="flex justify-evenly items-end gap-8 lg:gap-20">
          <p className="flex flex-col items-center text-gray-800 font-serif font-bold">
            <span className="text-lg font-sans font-semibold text-gray-400 mb-1">
              Avg. Rate
            </span>
            {locality.avgRate}
          </p>
          <p className="flex flex-col items-center text-gray-800 font-serif font-bold">
            <span className="text-lg font-sans font-semibold text-gray-400 mb-1">
              Reviews
            </span>
            {locality.reviews}
          </p>
          <p className="flex flex-col items-center text-gray-800 font-serif font-bold">
            <span className="text-lg font-sans font-semibold text-gray-400 mb-1">
              Overall Rating
            </span>
            <p className="bg-green-500 text-white rounded text-center px-2 font-serif font-bold">
              {locality.rating} ★
            </p>
          </p>
          <p className="bg-gray-300 text-end px-2 py-1 font-serif rounded-full">
            <ExpandMoreIcon
              className={`text-gray-400 transform transition-transform duration-300 text-lg font-sans font-semibold mb-1 items-center ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </p>
        </div>
      </div>

      {isExpanded && <LocalityDetails locality={locality} />}
    </div>
  );
};

export default LocalityCard;
