"use client";

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-2 sm:py-3' : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        <div className="text-white font-bold text-lg sm:text-2xl tracking-tighter italic">
          MTBIKE
        </div>

        <div className="hidden lg:flex items-center gap-8 text-white text-[13px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-gray-400 transition">Bikes</a>
          <a href="#" className="hover:text-gray-400 transition">Bike Computers</a>
          <a href="#" className="hover:text-gray-400 transition">Tours</a>
          <a href="#" className="hover:text-gray-400 transition">About</a>
          <a href="#" className="hover:text-gray-400 transition">Contacts</a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden sm:inline-flex px-3 sm:px-4 py-1.5 sm:py-2 text-white border border-white/30 rounded-full hover:bg-white/5 transition text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            Login
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black rounded-full hover:bg-neutral-200 transition text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
