import { useEffect, useState } from "react";
import { localities } from "../../data/localities";

const useLocalities = (searchTerm, filter, selectedCity, selectedZone) => {
  const [filteredLocalities, setFilteredLocalities] = useState([]);
  const [zones, setZones] = useState([]);

  useEffect(() => {
    let filteredData = localities;

    if (selectedCity) {
      filteredData = filteredData.filter((loc) => loc.city === selectedCity);

      // Extract unique zones for the selected city
      const uniqueZones = [...new Set(filteredData.map((loc) => loc.zone))];
      setZones(uniqueZones);
    } else {
      setZones([]); // Clear zones if no city is selected
    }

    if (selectedCity) {
      filteredData = filteredData.filter((loc) => loc.city === selectedCity);
    }
    if (selectedZone && selectedZone !== "All Zones") {
      filteredData = filteredData.filter(
        (locality) => locality.zone === selectedZone
      );
    }

    if (searchTerm) {
      filteredData = filteredData.filter(
        (loc) =>
          loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          loc.societieName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter === "Top Rated") {
      filteredData.sort((a, b) => b.rating - a.rating);
    } else if (filter === "Low Rated") {
      filteredData.sort((a, b) => a.rating - b.rating);
    } else if (filter === "Top Searched") {
      filteredData.sort((a, b) => b.reviews.localeCompare(a.reviews));
    }

    setFilteredLocalities(filteredData);
  }, [searchTerm, filter, selectedCity, selectedZone]); // Add selectedCity to dependency array

  return filteredLocalities;
};

export default useLocalities;
