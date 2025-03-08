import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1728272871420-39e50f3913f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white shadow-lg p-8 rounded-lg w-96 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">SIGN UP FOR BIKEWALE</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Id"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="+91 Mobile no."
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="agree" className="mr-2" />
            <label htmlFor="agree" className="text-sm text-gray-600">
              I agree with{" "}
              <span className="text-blue-500 cursor-pointer hover:underline">
                User Agreement & Privacy Policy
              </span>
            </label>
          </div>
          <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
            Sign up
          </button>
        </form>
        
      </div>
      <div className="absolute bottom-4 text-white text-sm">
        © BikeWale India |{" "}
        <span className="underline cursor-pointer">Visitor Agreement & Privacy Policy</span>
      </div>
    </div>
  );
};

export default Signup;
