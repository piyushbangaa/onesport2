import React from 'react';

const Pricing = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative inline-flex h-88 w-170 overflow-hidden rounded-[20px] p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        
        <div className="inline-flex h-full w-full rounded-[20px] bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl relative">
          <div className="grid grid-cols-2 w-full h-full">

            {/* Left Section */}
            <div className="flex flex-col items-center text-center mt-5">
              <h1 className='text-xl font-semibold'>Practice</h1>
              <h1>₹0/month</h1>
              <ul>
                <li>Book up to 12 hours in advance</li>
                <li>No booking discounts</li>
                <li>Reschedule 2 times/month</li>
                <li>Standard check-in process</li>
              </ul>
             
              
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center text-center mt-5">
              <h1 className='text-xl font-semibold'>ProPlay</h1>
              <h1>₹299/month</h1>
              <ul>
                <li>Priority booking (5 days early)</li>
                <li>0% booking discount</li>
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
