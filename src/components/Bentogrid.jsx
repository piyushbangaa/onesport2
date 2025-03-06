import React from 'react';

const Grid = () => {
  return (
    <div className="mt-20 h-screen w-screen flex items-center justify-center px-10 overflow-hidden overflow-x-hidden overflow-y-auto max-w-full max-h-full">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full h-full p-10 max-w-full max-h-full box-border">
        {[
          { title: "1. Sign Up / Log In", desc: "Register using email, phone number, or social login.", span: "col-span-1 row-span-1" },
          { title: "2. Find a Field", desc: "Explore available sports fields based on location, sport type, and date.", span: "col-span-2 row-span-1" },
          { title: "3. Reserve a Field", desc: "Check field details (cost, slots, images, reviews) & book your time.", span: "col-span-1 row-span-2" },
          { title: "4. Secure Booking", desc: "Pay securely via UPI or cards. Receive booking confirmation via SMS with a booking ID.", span: "col-span-1 row-span-1" },
          { title: "5. Stay Notified", desc: "Get notifications before the booking. Check in at the venue using a QR code or booking ID.", span: "col-span-1 row-span-1" },
          { title: "6. Enjoy the Game", desc: "Use the booked field for the reserved time.", span: "col-span-2 row-span-1" },
        ].map((step, index) => (
          <div key={index} className={`p-4 border-2 border-[#1e1e1e] rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg ${step.span}`}>
            <h2 className="text-2xl font-semibold  opacity-90">{step.title}</h2>
            <br />
            <p className="text-white opacity-80">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
