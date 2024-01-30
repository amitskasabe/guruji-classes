import React from 'react';
import Button from './Button';

const Hero = () => {
    
  return (
    <div className="md:py-4 md:px-20 py-0 px-0 sm:py-0 sm:px-0">
    <div className="md:flex md:items-center grid grid-cols-1 md:grid-cols-2 gap-1">
      <div className="p-4">
        <h1 className='text-xl text-green-700 sm:text-2xl md:text-4xl font-bold'>
          Want to get an early edge <br /> in your academics? Welcome to <span className='text-yellow-500'>GURUJI CLASSES </span>
        </h1>
        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In blanditiis molestiae autem dignissimos impedit atque ab, explicabo repellendus corporis sit!</p>
        <Button name="Explore Courses" id="heroButton" color="blue" className="mt-4"/>
      </div>
      <div className="p-4 hidden md:block">
        <img src="images/cs-banner.png" alt="" />
      </div>
    </div>
  </div>
  
  );
};

export default Hero;
