import React from "react";
// import PropTypes from "../../node_modules/prop-types/index.js";

function Cards( props) {
  return (
    <>
      <div className="border border-gray-300 h-90 w-70 rounded-lg">
        <div className="border border-gray-300 h-70 w-70 p-4 md:p-6 space-y-2 md:space-y-3 bg-white">
          {/* <img src={imageURl} alt="" /> */}
          <div className=" top-2 md:top-4 left-2 md:left-4 bg-black text-white px-2 md:px-3 py-1 text-xs font-semibold uppercase z-10 w-23">T-SHIRTS</div>
        </div>
        <div className=" h-20 w-70 p-4 md:p-2 space-y-2 md:space-y-3  group hover:bg-gray-100 transition-colors">
          <h3 className="font-semibold text-sm md:text-base text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2"> {props.name}</h3>
          <p className="text-gray-900 text-base md:text-lg font-bold">{props.price}</p>
        </div>
      </div>
    </>
  );
}

// Cards.propTypes = {
//   imageURl: PropTypes.string,
//   name: PropTypes.string,
// };

export default Cards;
