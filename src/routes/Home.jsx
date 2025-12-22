import React from 'react'
import Carousel from "../Carousel.jsx";
import NewArrival from "../NewArrival.jsx";
import Intro from "../Intro.jsx";
import Feedbacks from "../Feedbacks.jsx";
import OurProducts from "../OurProducts.jsx";
import Footer from "../Footer.jsx";

const Home = () => {
  return (
      <>
      <Carousel />
      <NewArrival />
      <Intro />
      <Feedbacks />
      <OurProducts />
      <Footer />
    </>
  )
}

export default Home