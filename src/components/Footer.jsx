import React from "react";
import { TextHoverEffect } from "./TextHoverEffect";

export default function TextHoverEffectDemo() {
  return (
    <div className="min-h-[250px] flex flex-col ">
      <div className="">
        <TextHoverEffect text="OneSport" />
      </div>

      <footer className=" p-4 flex justify-end  text-gray-500">
        <div className="flex flex-col gap-6 ">
          <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition">Terms of Service</a>
          <a href="#" className="hover:text-blue-500 transition">Contact Us</a>
          <a href="#" className=""> Designed By Piyush Banga</a>
        </div>
      </footer>
    </div>
  );
}
