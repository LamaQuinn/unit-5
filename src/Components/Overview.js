import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);
  return <div className="stack">
   <h1>{currentDisplay.name.official}</h1>
   <h2>{currentDisplay.name.common}</h2>
      <table className="overview-table">
        <tr>
            <td>Borders:</td>
            <td>{currentDisplay.borders.join(',')}</td>
        </tr>
        <tr>
            <td>Capital:</td>
            <td>{currentDisplay.capital}</td>
        </tr>
        <tr>
            <td>Population:</td>
            <td>{currentDisplay.population}</td>
        </tr>
        <tr>
            <td>Languages:</td>
            <td> {Object.values(currentDisplay.languages).map((language, index) => (
            <span key={index}>{language}</span>
        ))}</td>
        </tr>
      </table>
  </div>;
};

export default Overview;
