import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 px-6 sm:px-12">
      {/* Logo */}
      <h1 className="text-2xl sm:text-3xl font-bold">OneSport</h1>

      {/* Pricing (Centered) */}
      <h1 className="flex-1 ml-10">
        <a href="/pricing" className="text-lg sm:text-xl">Pricing</a>
      </h1>

      {/* Right Section (Login) */}
      <div className="flex gap-4 sm:gap-6">
        <a href="/login" className="text-lg sm:text-xl">Login</a>
      </div>
    </nav>
  );
}
