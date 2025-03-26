import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="p-6 w-96 max-w-sm sm:max-w-md bg-black rounded-xl border border-gray-800 shadow-lg text-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Sign Up</h1>
          <p className="mt-2 text-gray-400">Create an account to get started.</p>
        </div>

        <form onSubmit={handleSignUp} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-10 bg-black text-white border border-gray-700 rounded-lg px-4 focus:outline-none focus:ring-1 focus:ring-white transition-all duration-300"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 bg-black text-white border border-gray-700 rounded-lg px-4 focus:outline-none focus:ring-1 focus:ring-white transition-all duration-300"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 bg-black text-white border border-gray-700 rounded-lg px-4 focus:outline-none focus:ring-1 focus:ring-white transition-all duration-300"
          />

          <button
            type="submit"
            className="w-full h-10 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="relative flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="mx-4 text-sm text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <button
          type="button"
          className="w-full h-10 bg-transparent text-white border border-gray-500 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
        >
        <svg className="w-5 h-5" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M24 20v8.7h11.9c-.5 3-3.5 8.7-11.9 8.7-7.3 0-13.3-6-13.3-13.3s6-13.3 13.3-13.3c4 0 6.7 1.7 8.2 3.2l5.7-5.5C37.3 5 31.8 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c12.7 0 21.4-8.9 21.4-21.4 0-1.4-.2-2.6-.4-3.6H24z" />
            </svg>
          Sign Up with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-white hover:underline">
            Sign In
          </a>{" "}
          instead.
        </p>
      </div>
    </div>
  );
};

export default Signup;
