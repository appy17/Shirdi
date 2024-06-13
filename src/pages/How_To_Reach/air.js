import React from "react";
import { list3 } from "./dummy";
import { ImAirplane } from "react-icons/im";
import {  Link } from "react-router-dom";

const Air = () => {
  return (
    <div className="Air_container">
      <div className="Air_menu">
        <Link to="/air" className={`Air_menu-link`}>
          <button className={`Air_menu-button `}>
            <ImAirplane />
            Departure
          </button>
        </Link>
        <Link to="/arrival" className={`Air_menu-link `}>
          <button className={`Air_menu-button `}>
            <ImAirplane /> Arrivals
          </button>
        </Link>
      </div>

      <h2 className="h2">Flight Schedule</h2>
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
};

export default Air;
