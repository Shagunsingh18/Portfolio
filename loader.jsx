import React from "react";

import { FaSpinner } from "react-icons/fa";   // any icon works
import "./loader.css";

export default function Loader() {
  return (
    <div id="preloader">
      <FaSpinner className="loader-icon" />
      <p className="loading-text">Loading Shagun’s portfolio…</p>
    </div>
  );
}

