// components/Course.js
import React from 'react';
import Button from './Button';
import { FaStar } from 'react-icons/fa';


const Course = ({ image, name, description, Price ,length, lessons, duration, author }) => {
  return (
    <>
    

<div className="max-w-sm p-2 border border-gray-200 rounded-lg shadow">
    <img src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="" className='rounded-lg' />
    <a href="#">
        <h5 className="mb-2 text-cente text-dark text-2xl font-bold tracking-tight mt-2 md:mt-5">{name}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
    </p>
    <h4> {Price} </h4>
    <div className='flex text-yellow-600 sm:text-xl '>
    {[...Array(5)].map((_, index) => (  
        <FaStar key={index} />
      ))}
    </div>
    <div className="grid grid-cols-2 justify-between mx-auto md:mt-2">
    {/* <!-- Pricing on the left --> */}
    <h1 className='text-2xl font-bold'>9999</h1>
    <Button name="Enroll Now" className="color-green" />

    {/* <!-- Button on the right --> */}
</div>

</div>

    </>
  );
};

export default Course;
