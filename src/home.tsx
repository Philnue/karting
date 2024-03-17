// Example for a Home component in Home.js
import React from "react";
import foto from "./assets/testfoto.jpg";
const Home = () => {
  return (
    <section id="home" className="p-8 pt-4">
      <div className="relative">
        <img src={foto} alt="Karting" className="w-full h-auto" />
        <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          Kartbahn Basel
        </h1>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          Voll elektrisch
        </h1>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 bg-gray-900 flex justify-around">
          <a
            href="#prices"
            className="text-white font-semibold py-2 px-4 border border-transparent rounded-md bg-red-600 hover:bg-red-700"
          >
            Prices
          </a>
          <a
            href="#opening-hours"
            className="text-white font-semibold py-2 px-4 border border-transparent rounded-md bg-blue-600 hover:bg-blue-700"
          >
            Opening Hours
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
