import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationDropdown from "./LocationDropdown";

const HeadContainer = ({ selectedCity, setSelectedCity }) => {
  return (
    <div className="flex justify-between flex-col  p-4 bg-green-400 text-white h-96 shadow-sm rounded-md">
      <div className="flex mt-6 ml-60 ">
        <LocationOnIcon className="mr-2" />
        <div>
          <h1 className="text-xl font-bold w-80">
            <LocationDropdown
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          </h1>
        </div>
      </div>
      <div className="">
        <p className="font-semibold font-serif text-4xl lg:text-5xl text-white -mt-52 text-center">
          On-Ground Insights by Actual Residents
        </p>
        <p className="font-semibold font-mono text-2xl text-white mt-5 text-center">
          Ghar lena ho ya bechna, Reecocefe ko hi apnana
        </p>
      </div>
    </div>
  );
};

export default HeadContainer;
