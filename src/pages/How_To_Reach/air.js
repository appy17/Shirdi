import React, { useState } from "react";
import { ImAirplane } from "react-icons/im";
import Arrival from "./arrivals";  // Import the Arrival component
import { list3 } from "./dummy";

const Departure = () => (
  <div className="Air_container">
    {/* <h2 className="h2">Departure</h2> */}
    <ul className="Air_responsive-table">
      <li className="Air_table-header">
        <div className="Air_col">Flight</div>
        <div className="Air_col">Carrier</div>
        <div className="Air_col">Destination</div>
        <div className="Air_col">Departure</div>
      </li>

      {list3.map((flight, index) => (
        <li className="Air_table-row" key={index}>
          <div className="Air_col" data-label="Flight">
            {flight.Flight}
          </div>
          <div className="Air_col" data-label="Carrier">
            {flight.Carrier}
          </div>
          <div className="Air_col" data-label="Destination">
            {flight.Destination}
          </div>
          <div className="Air_col" data-label="Departure">
            {flight.Departure}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Air = () => {
  const [showArrival, setShowArrival] = useState(false); // State to toggle between Departure and Arrival

  const handleButtonClick = (isArrival) => {
    setShowArrival(isArrival); // Update state based on button click
  };

  return (
    <div className="Air_container">
      <div className="Air_menu">
       
        <button
          className={`Air_menu-button ${!showArrival ? "active" : ""}`}
          onClick={() => handleButtonClick(false)}
        >
          <ImAirplane />
          Departure
        </button>

        <button
          className={`Air_menu-button ${showArrival ? "active" : ""}`}
          onClick={() => handleButtonClick(true)}
        >
          <ImAirplane /> Arrivals
        </button>
      </div>

      {/* Conditional rendering based on showArrival state */}
      {!showArrival ? <Departure /> : <Arrival />}
    </div>
  );
};

export default Air;
