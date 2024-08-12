import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const LocalityDetails = ({ locality }) => {
  return (
    <div className="mt-4 p-4 border-t border-gray-300 lg:ml-11 ">
      <div className="flex justify-evenly items-end gap-20 lg:gap-40">
        <p className="flex flex-col items-center  font-serif font-bold text-green-400">
          <span className="text-lg font-sans font-semibold text-gray-400 mb-1 ">
            Safety
          </span>
          {locality.safetyRating} ★
        </p>
        <p className="flex flex-col items-center  font-serif font-bold text-green-400">
          <span className="text-lg font-sans font-semibold text-gray-400 mb-1">
            Connectivity
          </span>
          {locality.connectivityRating} ★
        </p>
        <p className="flex flex-col items-center  font-serif font-bold text-green-400">
          <span className="text-lg font-sans font-semibold text-gray-400 mb-1">
            Lifestyle
          </span>
          {locality.lifestyleRating} ★
        </p>
        <p className="flex flex-col items-center font-serif font-bold text-green-400">
          <span className="text-lg font-sans font-semibold text-gray-400 mb-1">
            Environment
          </span>
          {locality.environmentRating} ★
        </p>
      </div>

      <div className="mt-6 p-4">
        {locality.comments.map((comment, index) => (
          <div
            key={index}
            className="mb-6 flex justify-evenly items-start flex-col bg-gray-100 px-6 py-4 rounded-xl "
          >
            <p className="text-gray-600 flex justify-between px-2 py-1 items-center text-lg  bg-green-400 rounded-full text-center  font-serif font-bold mb-2">
              {comment.rating} ★
            </p>
            <p className="font-serif text-gray-700 italic text-lg ml-4 p-2 ">
              {comment.text}
              <span className="text-blue-600 cursor-pointer hover:text-sm">
                .. Show More
              </span>
            </p>
            <div className="mt-2 flex items-center"></div>
            <div className="flex justify-between mt-2 text-gray-500 text-sm">
              <p className="mt-1 p-2 border-r border-gray-300  ">
                John Doe, Owner of property
              </p>
              <p className="mt-1 p-2 ml-2">Posted on: 2024-08-10</p>
            </div>
          </div>
        ))}
        <div className="flex justify-start ml-9 items-center mt-2 text-gray-600 ">
          <p className="mr-4 text-gray-400">Is this helpful?</p>
          <div className="flex items-center cursor-pointer  text-gray-700 font-semibold">
            <ThumbUpIcon className="text-green-500 mr-1 hover:text-green-700" />{" "}
            Yes
          </div>
          <div className="flex items-center cursor-pointer ml-4 text-gray-700 font-semibold">
            <ThumbDownIcon className="text-red-500 mr-1 hover:text-red-400" />{" "}
            No
          </div>
          <div className="flex items-center cursor-pointer ml-4 bg-green-400 px-4 py-1 text-white font-bold rounded-md hover:bg-green-200 hover:text-black">
            <button>Read Reviews</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalityDetails;
