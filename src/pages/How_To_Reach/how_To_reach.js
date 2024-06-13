import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import './howtoreach.css';
import Bus from "./bus";
import Train from "./train";
import Air from "./air";
import Arrival from "./arrivals";
import { FaBusAlt } from "react-icons/fa";
import { FaTrain } from "react-icons/fa6";
import { ImAirplane } from "react-icons/im";

function HowToreach() {
    const [activeButton, setActiveButton] = useState("bus");

    const handleClick = (buttonName) => {
      setActiveButton(buttonName);
    };
  
    return (
      <div className="How_container margin">
        <div className="How_menu">
          <Link
            to="/bus"
            className={`How_menu-link ${activeButton === "bus" ? "active" : ""}`}
          >
            <button
              className={`How_menu-button ${activeButton === "bus" ? "active" : ""}`}
              onClick={() => handleClick("bus")}
            >
              <FaBusAlt /> Bus
            </button>
          </Link>
          <Link
            to="/train"
            className={`How_menu-link ${activeButton === "train" ? "active" : ""}`}
          >
            <button
              className={`How_menu-button ${activeButton === "train" ? "active" : ""}`}
              onClick={() => handleClick("train")}
            >
              <FaTrain /> Train
            </button>
          </Link>
          <Link
            to="/air"
            className={`How_menu-link ${activeButton === "air" ? "active" : ""}`}
          >
            <button
              className={`How_menu-button ${activeButton === "air" ? "active" : ""}`}
              onClick={() => handleClick("air")}
            >
              <ImAirplane /> Air
            </button>
          </Link>
        </div>
  
        <Routes>
          {/* <Route path="/" element={<Navigate to="/bus" />} /> */}
          <Route path="/bus" element={<Bus />} />
          <Route path="/train" element={<Train />} />
          <Route path="/air" element={<Air />} />
          <Route path="/arrival" element={<Arrival />} />
        </Routes>
      </div>
    );
}

export default HowToreach;
