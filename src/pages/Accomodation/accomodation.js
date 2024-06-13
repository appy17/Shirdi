import { Routes, Route, Link, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import "./accomodation.css";
import General from "./general";
import Acc from './acc';
import Non from "./non";

function Accomodation() {
  const [activeButton, setActiveButton] = useState("general");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="Accomodation_body">
      <div className="Accomodation_menu">
        <Link to="/general" className={`Accomodation_menu-link ${activeButton === "general" ? "active" : ""}`}>
          <button className={`Accomodation_menu-button ${activeButton === "general" ? "active" : ""}`} onClick={() => handleClick("general")}>
            General
          </button>
        </Link>
        <Link to="/ac" className={`Accomodation_menu-link ${activeButton === "ac" ? "active" : ""}`}>
          <button className={`Accomodation_menu-button ${activeButton === "ac" ? "active" : ""}`} onClick={() => handleClick("ac")}>
            AC
          </button>
        </Link>
        <Link to="/non-ac" className={`Accomodation_menu-link ${activeButton === "non-ac" ? "active" : ""}`}>
          <button className={`Accomodation_menu-button ${activeButton === "non-ac" ? "active" : ""}`} onClick={() => handleClick("non-ac")}>
            NON-AC
          </button>
        </Link>
      </div>

      <Routes>
        {/* <Route path="/general" element={<Navigate to="/general" />} />
        <Route path="/general" element={<General />} />
        <Route path="/ac" element={<Acc />} />
        <Route path="/non-ac" element={<Non />} /> */}
      </Routes>
    </div>
  );
}

export default Accomodation;
