import React, { useState } from "react";
// import useLocalities from "./hooks/useLocalities";
// import Sidebar from "./components/reviews/Sidebar";
// import Header from "./components/reviews/Header";
// import SearchBar from "./components/reviews/SearchBar";
// import Filters from "./components/reviews/Filters";
// import LocalityList from "./components/reviews/LocalityList";
// import Navbar from "./components/reviews/Navbar";
// import ReviewsFilter from "./components/reviews/ReviewsFilter";

import useLocalities from "../hooks/useLocalities";
import Sidebar from "./Sidebar";
import HeadContainer from "./HeadContainer";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import LocalityList from "./LocalityList";
import ReviewsFillter from "./ReviewsFilter";
import { zoneOptions } from "../../data/localities";
import Header from "../Header";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Top Rated");
  const [selectedCity, setSelectedCity] = useState("Delhi"); // Default city
  const [selectedZone, setSelectedZone] = useState("All Zones");
  const [type, setType] = useState("locality");

  const localities = useLocalities(
    searchTerm,
    filter,
    selectedCity,
    selectedZone
  );

  const getZonesForCity = (city) => {
    const zonesByCity = zoneOptions;

    return zonesByCity[city] || [];
  };

  const zones = getZonesForCity(selectedCity);

  return (
    <div className="flex">
      <Header />
      <div className="flex-1 mt-24">
        <Sidebar />
        <HeadContainer
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
        <div className="flex items-center">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div className="mt-20 lg:ml-80 lg:mr-80">
          <Filters filter={filter} setFilter={setFilter} />
          <div className="flex">
            <LocalityList localities={localities} type={type} />
            <ReviewsFillter
              zones={zones}
              selectedZone={selectedZone}
              onZoneSelect={setSelectedZone}
              onTypeSelect={setType} // Handle type changes
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

// <Navbar />
