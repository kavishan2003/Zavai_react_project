import React from "react";
import Cards from "./components/cards.jsx";

function NewArrival() {
  return (
    <div className="new-arrival-container h-170 flex items-center justify-center bg-gray-100">
      <h2>New Arrival Component</h2>
      <Cards name ="zavai tshirt 10" price ="Rs. 1,400.00" />
    </div>
  );
}

export default NewArrival;