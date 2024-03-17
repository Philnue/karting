import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Navbar from "./Nabvar";
import Home from "./home";
import Price from "./price";
import OpeningHours from "./openingHours";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <Navbar />
      <Home />
      <Price />
      <OpeningHours />
    </div>
  </React.StrictMode>
);
