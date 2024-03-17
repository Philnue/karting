import React from "react";
import foto from "./assets/headerIMage.png";
const Navbar = () => {
  const scrollToTop = (event: any) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-500 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <img src={foto} alt="Karting" className="w-auto h-14" />
        <div className="flex">
          <a
            onClick={scrollToTop}
            className="cursor-pointer px-4 py-2 hover:bg-blue-700"
          >
            Home
          </a>
          <a href="#races" className="px-4 py-2 hover:bg-blue-700">
            Races
          </a>
          <a href="#prices" className="px-4 py-2 hover:bg-blue-700">
            Prices
          </a>
          <a href="#contact" className="px-4 py-2 hover:bg-blue-700">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
