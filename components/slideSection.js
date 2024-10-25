"use client";
import React, { useState } from "react";

const SlideSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      content: "text",
      image: "/slideImage1.png",
    },
    {
      id: 2,
      content: "text",
      image: "/slideImage2.png",
    },
    {
      id: 3,
      content: "text",
      image: "/slideImage3.png",
    },
    {
      id: 3,
      content: "text",
      image: "/slideImage3.png",
    },
  ];

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="lg:mx-20 mt-10 xs:pb-16 md:pb-0">
        <div className="absolute py-8 lg:px-20 sm:px-2 text-2xl md:text-5xl lg:text-5xl">
          Latest Insights
        </div>
        <div className="relative w-full sm:h-[120px] h-[520px] md:h-96 lg:h-[750px] items-center justify-center py-36 ">
          <div className="flex overflow-hidden w-full gap-x-4 md:gap-x-6 lg:gap-x-8">
            <div
              className="flex transition-transform duration-500 gap-6"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`flex-shrink-0 w-[90%] md:w-full lg:w-full h-64 md:h-96 lg:h-[350px] flex flex-col items-center justify-end text-white text-2xl font-bold space-y-2 md:space-y-4`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "8px",
                  }}
                >
                  <p className="bg-black bg-opacity-50 px-4 py-2 rounded-md text-sm md:text-lg lg:text-xl">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-4 right-16 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition"
            onClick={handlePrev}
          >
            &#10094;
          </button>

          <button
            className="absolute top-4 right-4 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideSection;
