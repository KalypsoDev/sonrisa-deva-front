import React, { useState } from 'react';
import deva1 from "../../../assets/img/deva1.jpg";
import deva2 from "../../../assets/img/deva2.jpg";
import deva4 from "../../../assets/img/deva4.jpg";
import deva5 from "../../../assets/img/deva5.jpg";
import deva6 from "../../../assets/img/deva6.jpg";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      return (prevSlide + 1) % images.length;
    });
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => {
      return (prevSlide - 1 + images.length) % images.length;
    });
  };

  const images = [deva1, deva2, deva4, deva5, deva6];

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentSlide ? '' : 'hidden'
            } data-carousel-item`}
          >
            <img
              src={imageSrc}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((imageSrc, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-primaryBlue' : 'bg-gray-300'
            }`}
            aria-current={index === currentSlide ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="text-5xl text-white absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePreviousSlide}
      >
        <IoIosArrowDropleftCircle />
      </button>

      {/* Next button */}
      <button
        type="button"
        className="text-5xl text-white absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handleNextSlide}
      >
        <IoIosArrowDroprightCircle />
      </button>
    </div>
  );
};

export default Carousel;
