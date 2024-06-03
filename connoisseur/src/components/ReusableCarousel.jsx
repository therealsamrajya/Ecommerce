import React, { useState, useEffect } from "react";
import Button from "./Button";

const ReusableCarousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? items.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === items.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]); // Run effect when currentSlide changes

  return (
    <div>
      <div
        id="indicators-carousel"
        className="relative  lg:w-full h-[90vh] w-full"
        data-carousel="static">
        <div className="relative  rounded-lg">
          {items.map((item, index) => (
            <div
              key={index}
              className={` flex duration-700 ease-in-out ${
                index === currentSlide ? "block" : "hidden"
              }`}
              data-carousel-item={index === currentSlide ? "active" : ""}>
              <img
                src={item.image}
                className="absolute lg:w-full lg:h-[40vw] w-screen h-[90vh] "
                alt={item.description}
              />

              <div className="absolute text-center  lg:mt-[25rem] lg:ml-[38rem]   max-sm:mt-[21rem] max-sm:ml-[12rem]">
                <h3 className="text-white text-xl font-semibold">
                  {item.description}
                </h3>
                {/* <p className="text-white text-sm">${item.cost}</p> */}
                <Button
                  value="Add to Cart"
                  className="bg-tertiary text-primary px-7 py-4 rounded-sm shadow-lg hover:bg-slate-300 "></Button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute  flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 lg:ml-[42rem]  max-sm:ml-[16rem]">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-primary" : "bg-gray-300"
              }`}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setCurrentSlide(index)}></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrev}>
          {/* Previous button content */}
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNext}>
          {/* Next button content */}
        </button>
      </div>
    </div>
  );
};

export default ReusableCarousel;
