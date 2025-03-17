import React from 'react';
import { FaUserPlus, FaSearchLocation, FaCalendarAlt, FaShieldAlt, FaBell, FaFutbol } from 'react-icons/fa';

const steps = [
  { title: "Sign Up / Log In", desc: "Register using email, phone, or social login.", icon: <FaUserPlus /> },
  { title: "Find a Field", desc: "Filter by location, sport type, and date to find the perfect venue.", icon: <FaSearchLocation />, span: "col-span-2" },
  { title: "Reserve a Field", desc: "View pricing, time slots, images, and reviews before booking.", icon: <FaCalendarAlt />},
  { title: "Secure Booking", desc: "Pay securely via UPI or cards and receive instant confirmation.", icon: <FaShieldAlt /> },
  { title: "Stay Notified", desc: "Get reminders and check in using a QR code or booking ID.", icon: <FaBell /> },
  
];

const Grid = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-10 pb-5 mt-1 bg-black ">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full max-w-6xl p-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-xl bg-black backdrop-blur-lg border border-white/20 shadow-lg transition-all duration-300 hover:scale-[1.05] hover:border-white/40 flex flex-col items-center text-center ${step.span || "col-span-1 row-span-1"}`}
          >
            <div className="text-4xl text-[rgb(255,87,65)] mb-3">{step.icon}</div>
            <h2 className="text-2xl font-bold text-white mb-2">{step.title}</h2>
            <p className="text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
