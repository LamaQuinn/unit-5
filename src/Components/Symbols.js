import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
const Symbols = () =>{
    const currentDisplay=useSelector(selectDisplay)
    return <div className="symbols">
        <div className="stack">
            <h2>Flag of {currentDisplay.name.common}:</h2>
            <img src={currentDisplay.flags.png} alt="" />
        </div>
        <div className="stack">
            <h2>Coat of Arms of {currentDisplay.name.common}</h2>
            <img src={currentDisplay.coatOfArms.png} alt="" style={{height:'180px'}}/>
        </div>
    </div>
}

export default Symbols;