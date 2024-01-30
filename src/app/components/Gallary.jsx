import React, { useState } from 'react';

const Gallary = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 4));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide < 4 ? prevSlide + 1 : 0));
  };

  return (
  <div className="gallary-container py-2 px-8">
          <h1 className='text-center text-2xl py-2 px-4 font-extrabold '> Image Gallary </h1>
      <div id="default-carousel" className="relative w-full mt-10" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index - 1 === currentSlide ? '' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src={`https://img.freepik.com/free-photo/medium-shot-girl-posing-with-graduation-background_23-2150319879.jpg?w=996&t=st=1706555356~exp=1706555956~hmac=1e9e4bee7d1e02e83142f3c97d0a0bb73a6f15eb128fa5613663fd1eb8a7a448`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        {/* ... (rest of the button content remains the same) */}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        {/* ... (rest of the button content remains the same) */}
      </button>
    </div>
  </div>
  );
};

export default Gallary;
