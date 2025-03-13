import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in both fields!");
      return;
    }
  
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="mt-33 flex items-center justify-center bg-black ">
      <div className="p-8 w-95 max-w-md bg-black rounded-xl border border-gray-800 shadow-lg">
        <div className="text-center text-white">
          <h1 className="mt-4 text-3xl font-semibold">Sign In</h1>
          <p className="mt-2 text-sm text-gray-400">Enter your email and password to login</p>
        </div>

        <form onSubmit={handleSignIn} className="mt-8">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 bg-black text-white border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
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
            Sign In
          </button>

          <button
            type="button"
            className="mt-4 w-full h-10 bg-transparent text-white border border-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Sign In with Google
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <a href="/signup" className="text-white hover:underline">
            Sign Up
          </a>{' '}
          — it's free!
        </p>
      </div>
    </div>
  );
};

export default Login;