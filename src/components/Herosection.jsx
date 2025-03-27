import React from "react";


const Herosection = () => {
  return ( 
    <div className="min-h-[625px]" >
      <div className="mt-29 min-h-[160px] text-center text-8xl font-semibold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">Your path to effortless <br /> sports bookings!</div>
      <div className=" min-h-[120px] text-center mt-5 text-2xl opacity-60"> Easily find, book, and play on top sports turfs & fields without hassle, <br /> anytime, anywhere just focus on the game.</div>
      <a className="border rounded-3xl px-7 py-4 ml-145 font-semibold bg-gradient-to-r from-white to-[#C8B5FF] text-black hover:text-gray-800" href="/booking">Book Now</a>
    </div>
  );
};

export default Herosection;