import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import EmiCalculator from "./components/loancalculator/EmiCalculator";
import PinCode from "./components/postalPode/PinCode";
import "./components/style.css";
import Home from "./components/affortablecalculator/Home";
import LoanApplyForm from "./components/affortablecalculator/LoanApplyForm";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/calculator",
      element: <EmiCalculator />,
    },
    {
      path: "/pincode",
      element: <PinCode />,
    },
    {
      path: "/budget",
      element: <Home />,
    },
    {
      path: "/applyform",
      element: <LoanApplyForm />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
