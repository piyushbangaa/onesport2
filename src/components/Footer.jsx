import React from "react";
import { TextHoverEffect } from "./TextHoverEffect";

export default function TextHoverEffectDemo() {
  return (
    <div className="min-h-[400px] flex flex-col justify-center items-center w-full px-4">
      <div className="flex justify-center w-full ml-120">
        <TextHoverEffect 
          text="OneSport" 
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter" 
        />
      </div>
      <footer className="w-full text-white text-center py-4 mt-2 sm:mt-4">
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 gap-6 text-[16px] sm:text-[20px] opacity-50">
          <a href="/pricing" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Pricing</a>
          <a href="#about" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">About Us</a>
          <a href="#refund" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Refund Policy</a>
        </div>
        <p className="mt-4 text-[16px] sm:text-[20px] opacity-50">Designed by <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full text-[rgb(255,87,65)]"><a href="https://www.linkedin.com/in/piyushbanga/">Piyush Banga</a></span></p>
      </footer>
    </div>
  );
}