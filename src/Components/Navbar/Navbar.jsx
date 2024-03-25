import React, { useState } from 'react';
import logo from '../Images/logo.png'
import Hamburger from '../Images/Hamburger.png'

export const Navbar = () => {
  const [showAdditionalas, setShowAdditionalas] = useState(false);

  const handleImageClick = () => {
    setShowAdditionalas(!showAdditionalas);
  };

  return (
    <div>
      <div className='px-6 bg-zinc-50 z-50 flex justify-between items-center h-[80px] shadow-lg shadow-gray-750 fixed w-full top-0 left-0'>
        <div className=' text-zinc-50 font-bold'>
          <img src={logo} alt='' className='h-10 w-40'/>         
        </div>

        <div className="lg:hidden md:hidden">
          <img
            className="ml-5 cursor-pointer"
            src={Hamburger}
            width={25}
            height={30}
            alt="Hamburgur Menu"
            onClick={handleImageClick}
          />
        </div>

        <div className="hidden lg:flex md:flex space-x-14 font-semibold">
          <a href='/' className='hover:text-red-600 '>Home</a>
          <a href='/about' className='hover:text-red-600 '>About</a>
          <a href='/inventory' className='hover:text-red-600 '>Inventory</a>
          <a href='/flightlogic' className='hover:text-red-600 '>FlightLogic</a>
          <a href='/contact' className='hover:text-red-600 '>Contact Us</a>
        </div>

        {showAdditionalas && (
          <div className="rounded-lg ring-1 ring-gray-800 bg-white lg:hidden md:hidden absolute top-[80px] right-2 w-60 shadow-lg">
            <div className="grid gap-2 py-4 px-6">
              <a href='/' className='hover:bg-gray-200 text-center rounded-lg p-1 hover:text-blue-800 hover:font-bold'>Home</a>
              <a href='/about' className='hover:bg-gray-200 text-center rounded-lg p-1 hover:text-blue-800 hover:font-bold'>About</a>
              <a href='/inventory' className='hover:bg-gray-200 text-center rounded-lg p-1 hover:text-blue-800 hover:font-bold'>Inventory</a>
              <a href='/flightlogic' className='hover:bg-gray-200 text-center rounded-lg p-1 hover:text-blue-800 hover:font-bold'>FlightLogic</a>
              <a href='/contact' className='hover:bg-gray-200 text-center rounded-lg p-1 hover:text-blue-800 hover:font-bold'>Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
