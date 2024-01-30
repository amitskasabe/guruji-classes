// ./src/app/components/Header.jsx
'use client'
import React, { useState, useEffect } from 'react';
import './css/header.css';
import Link from 'next/link';
const Header = () => {
  // Check if window is defined (client side)
  const isClient = typeof window !== 'undefined';

  // Use useState and useEffect only on the client side
  const [isMenuOpen, setIsMenuOpen] = isClient ? useState(false) : [false, null];

  // Define toggleMenu function in the outer scope
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isClient) {
      // Your other code or event listeners can go here

      return () => {
        // Cleanup or remove event listeners if needed
      };
    }
  }, [isClient]); // Removed isMenuOpen from dependencies as it's not needed here

  return (
    <>
      <nav className="navbar px-2 md:px-20 p-5">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-slate-800 text-lg font-bold">
            Your Logo
          </Link>

          {/* Navbar Links (visible on larger screens) */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-slate-800">
              Home
            </Link>
            <Link href="/login" className="text-slate-800">
              Login
            </Link>
            <Link href="/about" className="text-slate-800">
              About
            </Link>
            <Link href="contact" className="text-slate-800">
              Contact
            </Link>

          </div>

          {/* Hamburger Icon (visible on smaller screens) */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu} // Add an onClick event to toggle the menu
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (hidden by default) */}
      <div className={`md:hidden bg-slate-100 p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          <a href="#" className="text-dark">
            Home
          </a>
          <a href="#" className="text-dark">
            About
          </a>
          <a href="#" className="text-dark">
            Services
          </a>
          <Link href="/contact" className="text-dark">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
