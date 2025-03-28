import React from "react";


const Herosection = () => {
  return ( 
    <div className="min-h-[510px]" >
      <div className="mt-35 min-h-[160px] text-center text-8xl font-semibold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">Your path to  <span className="bg-gradient-to-r from-blue-200 to-blue-500 text-transparent bg-clip-text">effortless</span><br /> sports bookings!</div>
      <div className=" min-h-[80px] text-center mt-5 text-2xl opacity-60 "> Easily find, book, and play on top sports turfs & fields without hassle, <br /> anytime, anywhere just focus on the game.</div>
      <div className="flex justify-center">
  <a className="border rounded-3xl px-7 py-4 font-semibold bg-gradient-to-r from-blue-100 to-blue-300 text-black hover:text-gray-800 mt-6 " href="/booking">Book Now</a>
</div>
    </div>
  );
};

export default Herosection;