import React from "react";
import { list4 } from "./dummy";


import { ImAirplane } from "react-icons/im";

import { Link } from "react-router-dom";

const Arrival = () => {
  return (
    <div className="Arrival_container">
      <div className="Arrival_menu">
        <Link to="/air" className={`Arrival_menu-link `}>
          <button className={`Arrival_menu-button `}>
            <ImAirplane />
            Departure
          </button>
        </Link>
        <Link to="/arrival" className={`Arrival_menu-link `}>
          <button className={`Arrival_menu-button `}>
            <ImAirplane /> Arrivals
          </button>
        </Link>
      </div>

      <h2>Arrival </h2>
      <ul className="Arrival_responsive-table">
        <li className="Arrival_table-header">
          <div className="col">Flight</div>
          <div className="col">Carrier</div>
          <div className="col">Destination</div>
          <div className="col">Departure</div>
        </li>

        {list4.map((flight, index) => (
          <li className="Arrival_table-row" key={index}>
            <div className="col" data-label="Flight">
              {flight.Flight}
            </div>
            <div className="col" data-label="Carrier">
              {flight.Carrier}
            </div>
            <div className="col" data-label="Destination">
              {flight.Destination}
            </div>
            <div className="col" data-label="Departure">
              {flight.Departure}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Arrival;
