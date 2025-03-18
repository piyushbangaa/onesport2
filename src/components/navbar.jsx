import React from 'react'

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4" >
        <h1 className="text-3xl ">OneSport</h1>
        <h1 className='mr-216'><a href="/pricing">Pricing</a></h1> 
        <div className="flex gap-6 mr-8">
            <a href="/login" >Login</a>
           
        </div>
      </nav>
    );
  }
  