import React, { useState, useEffect } from "react";
import PostalCodeDetails from "./PostalCodeDetails";

const LocatorF = () => {
  const [pincode, setPincode] = useState("");
  const [place, setPlace] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const [region, setRegion] = useState("");
  const [division, setDivision] = useState("");

  useEffect(() => {
    if (pincode.length === 6) {
      fetchData();
    } else {
      setPlace("");
      setDistrict("");
      setState("");
    }
  }, []);

  const handleSearch = () => {
    if (pincode.length === 6) {
      fetchData(pincode);
    } else {
      setError("Pincode must be 6 digits long");
      setPlace("");
      setDistrict("");
      setState("");
    }
  };

  // Indian PIN codes are 6 digits
  const fetchData = async () => {
    try {
      setError("");
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await response.json();
      console.log("API Response:", data); // Debugging line

      if (data[0].Status === "Success") {
        const postOfficeData = data[0].PostOffice[0];
        setPlace(postOfficeData.Name);
        setDistrict(postOfficeData.District);
        setState(postOfficeData.State);
        setAddress(`${postOfficeData.Name}, ${postOfficeData.District}`);
        setName(postOfficeData.Name);
        setDeliveryStatus(postOfficeData.DeliveryStatus);
        setRegion(postOfficeData.Region);
        setDivision(postOfficeData.Division);
      } else {
        setError("Invalid pincode or data not found");
        setPlace("");
        setDistrict("");
        setState("");
      }
    } catch (err) {
      setError("Error fetching data");
      setPlace("");
      setDistrict("");
      setState("");
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-9 ml-36 ">
      <h2 className="text-4xl sm:font-semibold mb-14">
        Pincode/Post Office Locator
      </h2>

      <div className="rounded-xl border px-8 py-12 flex flex-col justify-between lg:flex-row lg:justify-center lg:items-center mr-28 ">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h2 className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">
            Search & Find Postal Codes of India
          </h2>

          <div className="flex flex-col gap-6 lg:w-1/2 items-center lg:items-start pb-11 mb-11 ">
            <form className=" flex flex-col gap-1 lg:w-1/2" action="">
              <label className="text-lg sm:font-semibold m-2 tracking-wide">
                Pincode
              </label>
              <input
                className="border border-b-slate-700 rounded-md w-96 py-1 px-4 my-2"
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter pincode"
              />
              <label className="text-lg sm:font-semibold m-2">City</label>
              <input
                className="border border-b-slate-700 rounded-md w-96 py-1 px-4 my-2"
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="City"
              />
              <label className="text-lg sm:font-semibold m-2">District</label>
              <input
                className="border border-b-slate-700 rounded-md w-96 py-1 px-4 my-2"
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="District"
              />
              <label className="text-lg sm:font-semibold m-2">State</label>
              <input
                className="border border-b-slate-700 rounded-md w-96 py-1 px-4 my-2"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
              />
            </form>
            {error && (
              <p className="text-red-400 text-center font-semibold font-display  font-mono sm:ml-6">
                {error}
              </p>
            )}
            <div className="w-96 text-white bg-[#d8232a] flex justify-center items-center p-2 rounded-full mt-6 lg:w-full ">
              <button className="" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
        {(pincode ||
          state ||
          name ||
          address ||
          deliveryStatus ||
          region ||
          division) &&
        district ? (
          <div className="mt-16 flex flex-col justify-center items-center bg-slate-50 rounded-xl shadow-transparent shadow-sm md:ml-11 mr-14 lg:justify-evenly">
            <PostalCodeDetails
              pincode={pincode}
              state={state}
              district={district}
              name={name}
              address={address}
              deliveryStatus={deliveryStatus}
              region={region}
              division={division}
            />
          </div>
        ) : (
          <div className=" flex flex-col gap-6 mt-11 lg:w-1/2 lg:mt-0 ">
            <h2 className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">
              About Pincode
            </h2>
            <div className="flex flex-col gap-6 lg:w-1/2 font-light  font-display justify-center items-center lg:items-start">
              <h3 className="tracking-wider leading-8 lg:leading-6 ">
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
