import React from "react";
import Cards from "./components/cards.jsx";

function NewArrival() {
  return (
    <>
      <div className="new-arrival-container flex  h-170 bg-gray-100">
        <div className="flex justify-center items-center flex-col w-full py-8 md:py-12 lg:py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            New Arrival
          </h2>
          <p className="text-center text-gray-500 text-sm md:text-base mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our latest collection featuring premium quality apparel
            designed for the modern individual. Each piece is crafted with
            attention to detail and contemporary style.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16">
            <Cards name="zavai tshirt 7" price="Rs. 1,400.00" />
            <Cards name="zavai tshirt 8" price="Rs. 1,400.00" />
            <Cards name="zavai tshirt 9" price="Rs. 1,400.00" />
            <Cards name="zavai tshirt 9" price="Rs. 1,400.00" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
