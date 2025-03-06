import React from "react";

function Hero() {
  return (
    <div
      className="relative h-[400px] md:h-[500px] flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/banner.jpg')", // Update this path as needed
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get Comprehensive Information on Bikes
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Search your bike here, e.g. Royal Enfield Hunter 350
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search your bike here..."
            className="w-full p-3 pl-4 pr-12 text-gray-900 rounded-lg focus:ring focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
