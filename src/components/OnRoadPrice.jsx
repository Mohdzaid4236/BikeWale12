import React from "react";

const BikePriceChecker = () => {
  return (
    <div
      className="relative top-0 left-0 w-full min-h-[300px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1568900311962-66498d9e9daf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      

      {/* Content Box */}
      <div className="relative z-10 bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Check On-Road Price</h2>

        {/* Search Input */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Type to select bike name, e.g., Royal Enfield"
            className="w-full p-3 pl-10 rounded-md text-gray-900 focus:ring focus:ring-blue-500"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>

        {/* City Dropdown */}
        <select className="w-full p-3 rounded-md text-gray-900">
          <option>Select City</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>

        <p className="mt-2 text-sm">Check the on-road price in your city</p>
      </div>
    </div>
  );
};

export default BikePriceChecker;
