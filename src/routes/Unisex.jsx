import React from 'react'
import Footer from "../Footer.jsx";
import Products from "../components/Products.jsx";
import Filter from "../components/Filter.jsx";
import ShopByCategory from "../components/ShopByCategory.jsx";
import StayUpdated from "../components/StayUpdated.jsx";

const Unisex = () => {
  return (
    <div>
         <div className="h-80  border-gray-300 flex items-center justify-center ">
        <div className="text-center px-4">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Unisex Collection
          </div>
          <p className="text-center  md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Discover our curated selection of premium men's fashion. From casual
            basics to formal <br /> elegance, find pieces that define your
            style.
          </p>
        </div>
      </div>
      <Filter />
      <Products />
      <ShopByCategory />
      <StayUpdated />
      <Footer />

    </div>
  )
}

export default Unisex