import React from 'react';

const Grid = () => {
  return (
    <div className="mt-5 h-screen w-screen flex items-center justify-center px-10 overflow-hidden overflow-x-hidden overflow-y-auto max-w-full max-h-full pb-20">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full h-full p-10 max-w-full max-h-full box-border">
        {[
          { title: "1. Sign Up / Log In", desc: "Register using email, phone number, or social login.", span: "col-span-1 row-span-1" },
          { title: "2. Find a Field", desc: "Explore and reserve sports fields effortlessly by filtering based on location, sport type, and preferred date to find the perfect venue for your game. Easily discover and book sports fields by selecting your location, choosing your sport, and specifying a date.", span: "col-span-2 row-span-1" },
          { title: "3. Reserve a Field", desc: "Explore comprehensive field details such as pricing, available time slots, high-quality images, and user reviews to make an informed decision before securing your booking.", span: "col-span-1 row-span-2" },
          { title: "4. Secure Booking", desc: "Pay securely via UPI or cards. Receive booking confirmation via SMS with a booking ID.", span: "col-span-1 row-span-1" },
          { title: "5. Stay Notified", desc: "Get notifications before the booking. Check in at the venue using a QR code or booking ID.", span: "col-span-1 row-span-1" },
          { title: "6. Enjoy the Game", desc: "Use the booked field for the reserved time.", span: "col-span-2 row-span-1" },
        ].map((step, index) => (
          <div key={index} className={`p-4 border-2 border-gray-800 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg ${step.span}`}>
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
