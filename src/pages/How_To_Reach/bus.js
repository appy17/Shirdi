import React from "react";
import { lists } from "./dummy";

const Bus = () => {
  return (
    <div className="bus_container">
      <h1 className="bus_heading">By Bus</h1>
      <p>
        Maharashtra State Transport buses are available from major cities like
        Nashik, Mumbai, Aurangabad, Ahmednagar, Pune, Manmad, and Kopargaon to
        Shirdi. Private air-conditioned buses also available from various
        cities of Maharashtra, Telangana, Gujarat, Andhra Pradesh to Shirdi.
      </p>

      <div className="bus_container">
        <h2>Bus Time Table</h2>
        <ul className="bus_responsive-table">
          <li className="bus_table-header">
            <div className="col col-1">NO.</div>
            <div className="col col-2">Destination</div>
            <div className="col col-3">Departure Timings</div>
            {/* <div class="col col-4">Payment Status</div> */}
          </li>

          {lists.map((item) => (
            <li className="bus_table-row" key={item.No}>
              <div className="col col-1" data-label="No.">
                {item.No}
              </div>
              <div className="col col-2" data-label="Destination">
                {item.Destination}
              </div>
              <div className="col col-3" data-label="DepartureTimings">
                {item.DepartureTimings.join(", ")}
              </div>
              {/* <div class="col col-4" data-label="Payment Status">Pending</div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bus;
