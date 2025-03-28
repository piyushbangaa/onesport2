import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Logo (Top-Left) */}
      <div className="top-5 left-5 mt-7 text-3xl ml-6">
       OneSport
      </div>

      {/* Login Button (Top-Right) */}
      <div className="absolute top-5 right-5 mt-3">
        <a href="/login" className="bg-blue-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-blue-600 transition">
          Login
        </a>
      </div>

      {/* Floating Navbar (Centered) */}
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-xl shadow-lg px-6 py-3 rounded-full flex gap-24 items-center justify-center w-[500px] z-50 border border-white/20 ">
        <a href="pricing" className="text-white font-semibold hover:text-blue-300 transition">
          Pricing
        </a>
        <a href="#" className="text-white font-semibold hover:text-blue-300 transition">
          workflow
        </a>
       
        <a href="#" className="text-white font-semibold hover:text-blue-300 transition">
          Features
        </a>
      </nav>
    </>
  );
};

export default Navbar;
