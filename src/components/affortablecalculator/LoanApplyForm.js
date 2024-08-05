import React, { useState } from "react";

const LoanApplyForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  //   const [errorMessege, setErrorMessege] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-[600px] p-12 bg-black my-36 absolute mx-auto right-0 left-0 text-white rounded-lg opacity-80"
      >
        <p className="font-normal text-lg  py-4">
          Please share your details to get a call from our Loan Experts
        </p>
        <h1 className="font-bold text-3xl  py-4">
          {isSignInForm ? "Log in" : "Enter your details"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />

        <input
          type="text"
          placeholder="Enter City"
          className="p-4 my-4 w-full bg-gray-700 rounded-md "
        />
        <input
          type="text"
          placeholder="Enter Mobile No."
          className="p-4 my-4 w-full bg-gray-700 rounded-md "
        />
        <p className="text-red-500 font-bold font-serif text-lg py-2 text-center"></p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Submit"}
        </button>
        <p className="py-4 text-xl text-center">
          {!isSignInForm ? "Already registred? " : "New one?"}
          <span
            onClick={toggleSignInForm}
            className="font-bold cursor-pointer hover:underline "
          >
            {!isSignInForm ? "Sign In." : " Register Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoanApplyForm;
