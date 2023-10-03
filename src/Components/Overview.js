import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);
  return <div className="stack">
   <h1>{currentDisplay.name.official}</h1>
   <h2>{currentDisplay.name.common}</h2>

  </div>;
};

export default Overview;
