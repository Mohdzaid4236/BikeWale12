import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/assets/bikewale-logo.png"
          alt="Bikewale Logo"
          className="h-10"
        />
      </div>

      

      {/* Search Bar */}
      <div className="flex items-center border rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Search Bikes..."
          className="outline-none w-40 md:w-60 text-gray-600"
        />
        <button className="text-gray-500 hover:text-gray-800 ml-2">
          🔍
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="text-gray-600 text-2xl">☰</button>
      </div>
    </header>
  );
};

export default Header;
