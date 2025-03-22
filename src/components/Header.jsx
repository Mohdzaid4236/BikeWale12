import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaHome,
  FaMotorcycle,
  FaBolt,
  FaFileInvoiceDollar,
  FaRegComments,
  FaCalculator,
  FaSignInAlt,
} from "react-icons/fa";
import { MdOutlineElectricBike } from "react-icons/md";
import { GiScooter, GiSellCard } from "react-icons/gi";
import { AiOutlineVideoCamera } from "react-icons/ai";

// Menu Items
const menuItems = [
  { name: "Home", icon: <FaHome />, path: "/" },
  { name: "New Bikes", icon: <FaMotorcycle />, path: "/new-bikes" },
  { name: "New Scooters", icon: <GiScooter />, path: "/new-scooters" },
  { name: "Electric Bikes", icon: <MdOutlineElectricBike />, path: "/electric-bikes" },
  { name: "Bike Loan", icon: <FaFileInvoiceDollar />, path: "/bike-loan" },
  { name: "Used Bikes", icon: <FaMotorcycle />, path: "/used-bikes" },
  { name: "Sell Bikes", icon: <GiSellCard />, path: "/sell-bikes" },
  { name: "Reviews", icon: <FaRegComments />, path: "/reviews" },
  { name: "News, Videos & Tips", icon: <AiOutlineVideoCamera />, path: "/news" },
  { name: "EMI Calculator", icon: <FaCalculator />, path: "/emi-calculator" },
  { name: "Login", icon: <FaSignInAlt />, path: "/login" },
];

const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
        {/* Left Section: Sidebar Toggle Button + Logo */}
        <div className="flex items-center gap-4">
          {/* Sidebar Toggle Button */}
          <button
            className="text-2xl text-gray-700"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://thumbs.dreamstime.com/b/racing-bike-logo-icons-vector-isolated-white-vector-illustration-elevate-your-brand-our-racing-bike-logo-icons-vector-art-322272902.jpg"
              alt="Bikewale Logo"
              className="h-10"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center border rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search Bikes..."
            className="outline-none w-40 md:w-60 text-gray-600"
          />
          <button className="text-gray-500 hover:text-gray-800 ml-2">🔍</button>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex items-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-96 h-full bg-white shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          className="text-2xl text-gray-600 absolute top-4 right-4"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Menu Items */}
        <nav className="mt-12">
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center px-6 py-3 text-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  navigate(item.path);
                  setIsSidebarOpen(false);
                }}
              >
                <span className="mr-4 text-xl">{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
