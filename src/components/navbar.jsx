import React from 'react'

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 text-[rgb(226,230,225)]" >
        <h1 className="text-3xl font-semibold">OneSport</h1>
        <div className="flex gap-6 mr-8">
            <a href="/login" className="text-[rgb(226,230,225)] ">Login</a>
            <a href="/contact" className="text-[rgb(226,230,225)] ">Contact Us</a>
        </div>
      </nav>
    );
  }
  