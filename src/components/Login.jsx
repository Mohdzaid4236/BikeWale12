import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1551008253-d028237260f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      <div className="bg-white shadow-lg p-8 rounded-lg w-96 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">LOGIN TO BIKEWALE</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
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
          <div className="text-right text-sm text-blue-500 mb-4 cursor-pointer hover:underline">
            Forgot password?
          </div>
          <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
            Log in
          </button>
        </form>
        <div className="my-4 text-gray-500">OR</div>
        {/* Added Link to Signup Page */}
        <Link to="/signup" className="text-blue-600 font-semibold cursor-pointer hover:underline">
          SIGN UP FOR BIKEWALE
        </Link>
      </div>
      <div className="absolute bottom-4 text-white text-sm">
        © BikeWale India | <span className="underline cursor-pointer">Visitor Agreement & Privacy Policy</span>
      </div>
    </div>
  );
};

export default Login;
