import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Carousel from "./Carousel.jsx";
import NewArrival from "./NewArrival.jsx";
import Intro from "./Intro.jsx";
import Feedbacks from "./Feedbacks.jsx";
import OurProducts from "./OurProducts.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import Mens from "./routes/Mens.jsx";
import Home from "./routes/Home.jsx";
import Womens from "./routes/Womens.jsx";
import Unisex from "./routes/Unisex.jsx";
import Kids from "./routes/Kids.jsx";
import AboutUS from "./routes/AboutUS.jsx";
import ContactUs from "./routes/ContactUs.jsx";
// import Loader from "./Loader.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        {/* The Spinner */}
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }
  return (
    <>
      {/* <Loader /> */}
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/Unisex" element={<Unisex />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/AboutUS" element={<AboutUS />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>

      {/* <div className="min-h-screen bg-white flex items-center justify-center">
      </div> */}
    </>
  );
}

export default App;
