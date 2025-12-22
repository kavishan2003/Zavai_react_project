import { useEffect, useRef, useState } from "react";

function Carousel() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Your slide data
  const slides = [
    { id: 1, title: "Discover Your \n Perfect Style" },
    { id: 2, title: "New Summer \n Collection" },
    { id: 3, title: "Premium \n Quality Gear" },
    { id: 4, title: "Express \n Your Unique Self" },
  ];

  // To make it infinite, we clone the first and last elements
  const extendedSlides = [
    slides[slides.length - 1], // Last slide at the start
    ...slides,
    slides[0], // First slide at the end
  ];

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    // Start at the actual first slide (index 1) to hide the cloned last slide
    slider.scrollLeft = slider.offsetWidth;

    const scrollNext = () => {
      if (isPaused) return;

      const { scrollLeft, offsetWidth, scrollWidth } = slider;

      // If we are on the "cloned first slide" at the very end
      if (scrollLeft + offsetWidth >= scrollWidth - 5) {
        // Switch to the REAL first slide instantly (no animation)
        slider.style.scrollBehavior = "auto";
        slider.scrollLeft = offsetWidth;
        // Then scroll to the second slide with animation
        setTimeout(() => {
          slider.style.scrollBehavior = "smooth";
          slider.scrollLeft = offsetWidth * 2;
        }, 10);
      } else {
        slider.style.scrollBehavior = "smooth";
        slider.scrollLeft += offsetWidth;
      }
    };

    const interval = setInterval(scrollNext, 3000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <>
      <div
        ref={scrollRef}
        className="carousel-container h-125 w-250 flex  scroll-smooth  overflow-hidden space-x-4 p-4 snap-x snap-mandatory"
      >
        <div className="section1 snap-center shrink-0 w-200 h-full  flex justify-center items-center ">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight whitespace-pre-line transition-all">
              Discover Your <br /> Perfect Style
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed transition-all text-sm md:text-base">
              Explore our curated collection of premium quality clothing and
              accessories. Find the perfect pieces to express your unique style.
            </p>
            <button className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-11 rounded-md bg-black text-white hover:bg-gray-800 px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm font-medium uppercase tracking-wide">
              Shop now
            </button>
          </div>
        </div>
        <div className="section1 snap-center shrink-0 w-200 h-full  flex justify-center items-center border-gray-300">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight whitespace-pre-line transition-all">
              Discover Your <br /> Perfect Style
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed transition-all text-sm md:text-base">
              Explore our curated collection of premium quality clothing and
              accessories. Find the perfect pieces to express your unique style.
            </p>
            <button className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-11 rounded-md bg-black text-white hover:bg-gray-800 px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm font-medium uppercase tracking-wide">
              Shop now
            </button>
          </div>
        </div>
        <div className="section1 snap-center shrink-0 w-200 h-full  flex justify-center items-center border-gray-300">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight whitespace-pre-line transition-all">
              Discover Your <br /> Perfect Style
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed transition-all text-sm md:text-base">
              Explore our curated collection of premium quality clothing and
              accessories. Find the perfect pieces to express your unique style.
            </p>
            <button className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-11 rounded-md bg-black text-white hover:bg-gray-800 px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm font-medium uppercase tracking-wide">
              Shop now
            </button>
          </div>
        </div>
        <div className="section1 snap-center shrink-0 w-200 h-full  flex justify-center items-center border-gray-300">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight whitespace-pre-line transition-all">
              Discover Your <br /> Perfect Style
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed transition-all text-sm md:text-base">
              Explore our curated collection of premium quality clothing and
              accessories. Find the perfect pieces to express your unique style.
            </p>
            <button className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-11 rounded-md bg-black text-white hover:bg-gray-800 px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm font-medium uppercase tracking-wide">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
