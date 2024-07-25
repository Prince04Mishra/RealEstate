import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import EmiCalculator from "./components/loancalculator/EmiCalculator";
import PinCode from "./components/postalPode/PinCode";

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
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
