import React, { useState } from "react";
import PostalCodeDetails from "./PostalCodeDetails";
import ErrorMessage from "./ErrorMessage";
import MapComponent from "./MapComponent";
// const YOUR_OPENCAGE_API_KEY = "059d06a9d88c40558d2aebf49179cd88";

const LocatorF = () => {
  const [pincode, setPincode] = useState("");
  const [place, setPlace] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [division, setDivision] = useState("");
  const [location, setLocation] = useState(null);
  const [searchByLocation, setSearchByLocation] = useState({
    state: "",
    district: "",
    place: "",
  });

  const handleSearch = async () => {
    if (pincode.length === 6) {
      // Case 1: Fetch details based on pincode
      await fetchDataByPincode(pincode);
    } else if (
      searchByLocation.state &&
      searchByLocation.district &&
      searchByLocation.place
    ) {
      // Case 2: Fetch pincode based on state, district, and city
      await fetchPincodeByLocation(searchByLocation);
    } else {
      setError("Please provide valid inputs for search.");
    }
  };

  const fetchDataByPincode = async (pincode) => {
    try {
      setError("");
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await response.json();
      console.log("API Response:", data);

      if (data[0].Status === "Success") {
        const postOfficeData = data[0].PostOffice[0];
        setPlace(postOfficeData.Name);
        setDistrict(postOfficeData.District);
        setState(postOfficeData.State);
        setAddress(`${postOfficeData.Name}, ${postOfficeData.District}`);
        setName(postOfficeData.Name);
        setDivision(postOfficeData.Division);

        // Fetch location data
        const geoResponse = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${postOfficeData.Name},${postOfficeData.District},${postOfficeData.State}&key=059d06a9d88c40558d2aebf49179cd88`
        );
        const geoData = await geoResponse.json();
        if (geoData.results.length > 0) {
          const { lat, lng } = geoData.results[0].geometry;
          setLocation([lat, lng]);
        } else {
          setError("Geolocation not found");
        }
      } else {
        setError("Invalid pincode or data not found");
        clearLocationData();
      }
    } catch (err) {
      setError("Error fetching data");
      clearLocationData();
    }
  };

  const fetchPincodeByLocation = async ({ state, district, place }) => {
    try {
      setError("");
      const response = await fetch(
        `https://api.postalpincode.in/postoffice/${place}`
      );
      const data = await response.json();
      console.log("API Response:", data);

      if (data[0].Status === "Success") {
        const results = data[0].PostOffice.filter(
          (office) =>
            office.State.toLowerCase() === state.toLowerCase() &&
            office.District.toLowerCase() === district.toLowerCase()
        );
        if (results.length > 0) {
          setPincode(results[0].Pincode);
        } else {
          setError("No pincode found for the given location");
        }
      } else {
        setError("No data found for the given location");
      }
    } catch (err) {
      setError("Error fetching data");
    }
  };

  const clearLocationData = () => {
    setPlace("");
    setDistrict("");
    setState("");
    setAddress("");
    setName("");
    setDivision("");
    setLocation(null);
  };

  return (
    <div
      className="flex flex-col gap-6  p-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-animated"
      style={{
        backgroundImage: `url('https://www.guideoftheworld.com/wp-content/uploads/map/india_geographical_map.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-4xl sm:font-semibold mb-14 text-red-700 ">
        Pincode/Post Office Locator
      </h2>

      <div className="rounded-xl border ml-20 px-8 py-12 flex flex-col justify-evenly lg:flex-row lg:justify-center lg:items-center mr-28 bg-gradient-to-t from-slate-950 white bg-opacity-90 shadow-lg">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h2 className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">
            Search & Find Postal Codes of India
          </h2>

          <div className="flex flex-col gap-6 lg:w-1/2 items-center lg:items-start">
            <form className="flex flex-col gap-1 lg:w-1/2">
              <label className="text-lg sm:font-semibold m-2 tracking-wide text-gray-800 text-white font-bold">
                Pincode
              </label>
              <input
                className="border border-b-slate-700 rounded-md w-96 py-1 px-4 my-2"
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter pincode"
              />
              <label className="text-lg sm:font-semibold m-2 text-white font-bold ">
                City
              </label>
              <input
                className="border border-b-slate-700 rounded-md w-96 py-1 px-4 my-2"
                type="text"
                value={searchByLocation.place}
                onChange={(e) =>
                  setSearchByLocation({
                    ...searchByLocation,
                    place: e.target.value,
                  })
                }
                placeholder="City"
              />
              <label className="text-lg sm:font-semibold m-2 text-white font-bold">
                District
              </label>
              <input
                className="border border-b-slate-700 rounded-md w-96 py-1 px-4 my-2"
                type="text"
                value={searchByLocation.district}
                onChange={(e) =>
                  setSearchByLocation({
                    ...searchByLocation,
                    district: e.target.value,
                  })
                }
                placeholder="District"
              />
              <label className="text-lg sm:font-semibold m-2 text-white font-bold">
                State
              </label>
              <input
                className="border border-b-slate-700 rounded-md w-96 py-1 px-4 my-2"
                type="text"
                value={searchByLocation.state}
                onChange={(e) =>
                  setSearchByLocation({
                    ...searchByLocation,
                    state: e.target.value,
                  })
                }
                placeholder="State"
              />
            </form>

            <div className="w-96 text-white bg-[#d8232a] flex justify-center items-center p-2 rounded-full mt-6 lg:w-full">
              <button
                type="button"
                className="w-full lg:w-auto"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            {error && <ErrorMessage error={error} />}
          </div>
        </div>

        {pincode || state || name || address || division || location ? (
          <div className="lg:w-1/2 lg:ml-8">
            <PostalCodeDetails
              pincode={pincode}
              state={state}
              district={district}
              name={name}
              address={address}
              division={division}
            />
            {location && (
              <MapComponent
                location={location}
                name={name}
                district={district}
                state={state}
              />
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-6 mt-11 lg:w-1/2 lg:mt-0">
            <h2 className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">
              About Pincode
            </h2>
            <div className="flex flex-col gap-6 lg:w-98 font-light font-display justify-center items-center lg:items-start">
              <h3 className="tracking-wider leading-8 lg:leading-6  text-white text-lg font-semibold">
                A PIN Code in India is a specific code assigned to one or
                several post office(s) in one geography by the Indian Postal
                Services to facilitate easy and accurate delivery of posts and
                parcels. The system was introduced in 1972. A PIN Code currently
                has six digits, where the first digit of the PIN Code denotes a
                geographic zone in India, while the first two digits represent
                the state (or area) of delivery. The third digit of the code
                indicates the district. To ensure a more accurate identification
                within the district, the last three digits of the PIN Code act
                as a local code of the post office(s). In the future, the Indian
                Postal Service plans to add two more digits to this code,
                keeping in mind that various machines or automated processes may
                become involved for a more accurate delivery process. At
                present, the department is experimenting with using this 8-digit
                PIN Code in multiple regions around the country.
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocatorF;
