import React, { useState } from "react";

const ReviewsFilter = ({
  zones = [],
  selectedZone,
  onZoneSelect,
  onTypeSelect,
}) => {
  const [type, setType] = useState("locality");

  const handleTypeSelect = (type) => {
    setType(type);
    onTypeSelect(type); // Notify parent of type change
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md mb-4 h-[430px] w-96 text-black lg:mr-16 ">
      <div className="flex items-center space-x-4">
        <button
          className={`py-2 px-4 rounded border-r-2 font-bold text-xl hover:bg-gray-200 ${
            type === "locality" ? "bg-green-400" : "bg-white "
          }`}
          onClick={() => handleTypeSelect("locality")}
        >
          Localities
        </button>
        <button
          className={`py-2 px-4 rounded border-r-2 font-bold text-lg hover:bg-gray-200 ${
            type === "society" ? "bg-green-400" : "bg-white"
          }`}
          onClick={() => handleTypeSelect("society")}
        >
          Societies
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-bold text-black text-xl ml-1 p-1">Select Zone</h3>
        <ul className="mt-2 text-lg ml-1 p-1">
          {zones.length > 0 ? (
            zones.map((zone) => (
              <li
                key={zone}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 hover:font-semibold ${
                  zone === selectedZone ? "bg-gray-100 font-bold" : ""
                }`}
                onClick={() => onZoneSelect(zone)}
              >
                {zone}
              </li>
            ))
          ) : (
            <li className="px-4 py-2">No zones available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReviewsFilter;
