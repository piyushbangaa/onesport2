import React from 'react'

const Features = () => {
  return (
    <div className='min-h-[550px] mt-15 ml-20 '>

     <h1 className='text-5xl ml-15 font-bold'> Trusted by athletes, teams, and sports enthusiasts for seamless turf and <br /> field bookings</h1> 

       <div className='mt-20 flex gap-18 ml-10 text-center'>
        
        <div className=' w-75 h-70 border-2 rounded-[10px]'> <h1 className='font-bold text-3xl mt-11'>99.99% Booking uptime</h1>
        <p className='mt-7 font-semibold'>Ensuring uninterrupted access to sports fields across schools & colleges, even during peak hours.</p>

        </div>

        <div className=' w-75 h-70 border-2 rounded-[10px]' > <h1 className='font-bold text-3xl mt-11' >86% faster reservations</h1>
        <p className='mt-7 font-semibold'>Our platform streamlines the booking process, making it 86% faster than traditional methods.</p>

        </div>

        <div className=' w-75 h-70 border-2 rounded-[10px]'> <h1 className='font-bold text-3xl mt-11'>70% peak-hour availability</h1>
        <p className='mt-7 font-semibold'>70% of users successfully secure their preferred slots, even during high-demand periods.</p>

        </div>
    

       </div>
      </div>
  )
}

export default Features