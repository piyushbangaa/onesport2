import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="p-6 w-96 bg-black rounded-xl border border-gray-800 shadow-lg">
        <div className="text-center text-white">
          <h1 className="mt-4 text-3xl font-semibold">Sign Up</h1>
          <p className="mt-2 text-gray-400">Join us by creating an account below.</p>
        </div>

        <form onSubmit={handleSignUp} className="mt-6">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-10 bg-black text-white border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
          />
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full h-10 bg-black text-white border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-4 w-full h-10 bg-black text-white border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
          />

          <button
            type="submit"
            className="mt-6 w-full h-10 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">OR</p>

        <button
          type="button"
          className="mt-4 w-full h-10 bg-transparent text-white border border-gray-500 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
        >
          Continue with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-white hover:underline">
            Sign In
          </a>{' '}
          instead.
        </p>
      </div>
    </div>
  );
};

export default Signup;
