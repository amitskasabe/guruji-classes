// Your layout or page component where state is managed
'use client'
import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Course from './Course';
import Categories from './Categories';
import Footer from './Footer';
import Link from 'next/link';
import Gallary from './Gallary';
import Contact from '../contact/page';
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function (similar to what you have in the Header component)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>

      <Hero isMenuOpen={isMenuOpen} />
      {/*  */}
      <h1 className='text-center text-2xl py-2 px-4 font-extrabold mt-10'> Our Courses </h1>
      <div className="p-3 sm:px-20 mt-2">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {/* Column 1 */}
          <Course
            image="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
            name="React Js"
            description="Best React JS Course"
            length="Intermediate"
            lessons={10}
            duration="2 weeks"
            author="John Doe"
            price="9000"
          />

          {/* Column 2 */}
          <Course
            image="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
            name="Course Name"
            description="Description of the course."
            length="Intermediate"
            lessons={10}
            duration="2 weeks"
            author="John Doe"
          />

          {/* Column 3 */}
          <Course
            image="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
            name="Course Name"
            description="Description of the course."
            length="Intermediate"
            lessons={10}
            duration="2 weeks"
            author="John Doe"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {/* Column 1 */}
          <Course
            image="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
            name="Mathematics"
            description="The best mathematical course in barshi"
            length="Intermediate"
            lessons={10}
            duration="2 weeks"
            author="John Doe"
            price="9000"
          />

          {/* Column 2 */}
          <Course
            image="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
            name="Course Name"
            description="Description of the course."
            length="Intermediate"
            lessons={10}
            duration="2 weeks"
            author="John Doe"
          />

          {/* Column 3 */}
          <Course
            image="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
            name="Course Name"
            description="Description of the course."
            length="Intermediate"
            lessons={10}
            duration="2 weeks"
            author="John Doe"
          />
        </div>

      </div>
      <Contact/>
      <Gallary/>
      



      {/* Other content/components */}
    </>
  );
};

export default Index;
