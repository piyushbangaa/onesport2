import React from 'react';

const Pricing = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative inline-flex h-98 w-170 overflow-hidden rounded-[20px] p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        
        <div className="inline-flex h-full w-full rounded-[20px] bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl relative">
          <div className="grid grid-cols-2 w-full h-full">

            {/* Left Section */}
            <div className="flex flex-col items-center text-center mt-5">
              <h1 className='text-xl '>Practice</h1>
              <h1 className='text-6xl mt-3 font-semibold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent'>₹0<span className="text-gray-400 text-xl font-light ">/month</span></h1>
              <ul className='mt-5 text-lg text-left space-y-3'>
                <li>3 active bookings at a time</li>
                <li>No booking discounts</li>
                <li>Reschedule 2 times/month</li>
                <li>Standard check-in process</li>
              </ul>
             
              
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center text-center mt-5">
              <h1 className='text-xl'>ProPlay</h1>
              <h1 className='text-6xl mt-3 font-semibold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent'>₹299<span className="text-gray-400 text-xl font-light ">/month</span></h1>
              <ul className='mt-5 text-lg text-left space-y-3'>
                <li>Unlimited active bookings</li>
                <li>10% booking discount</li>
                <li>Unlimited reschedules</li>
                <li>Express check-in with QR code</li>
              </ul>
             

            </div>

          </div>

          {/* Divider */}
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-900 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
