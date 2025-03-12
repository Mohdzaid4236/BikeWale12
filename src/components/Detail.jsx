import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const variants = ["Standard", "Custom", "Sport", "Touring"];
const cities = ["New York", "Los Angeles", "Chicago", "Houston"];

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bike } = location.state || {}; // Get selected bike data

  const [selectedVariant, setSelectedVariant] = useState("Select Variant");
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [openModal, setOpenModal] = useState(null);

  const handleSelect = (type, value) => {
    if (type === "variant") {
      setSelectedVariant(value);
    } else {
      setSelectedCity(value);
    }
    setOpenModal(null); // Close modal after selection
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = bike ? [bike.image, bike.image, bike.image] : [];

  if (!bike) {
    return <div className="text-center p-6">No bike selected.</div>;
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 p-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="w-full h-20 bg-white relative m-4 flex items-center">
        <button onClick={() => navigate(-1)} className="ml-4 text-lg text-blue-600">
          ← Back
        </button>
        <h1 className="ml-4 text-black text-2xl font-bold">{bike.name}</h1>
      </div>

      {/* Navigation Menu */}
      <div className="w-full h-20 bg-white flex items-center m-4 pl-6">
        <ul className="flex space-x-6 text-black text-lg font-semibold">
          <li><a href="#" className="hover:text-gray-500">OVERVIEW</a></li>
          <li><a href="#" className="hover:text-gray-500">PRICE</a></li>
          <li><a href="#" className="hover:text-gray-500">EXPERT OPINION</a></li>
          <li><a href="#" className="hover:text-gray-500">SIMILAR BIKE</a></li>
          <li><a href="#" className="hover:text-gray-500">COLORS</a></li>
          <li><a href="#" className="hover:text-gray-500">MILEAGE</a></li>
          <li><a href="#" className="hover:text-gray-500">SPECS & FEATURES</a></li>
        </ul>
      </div>

      {/* Wrapper - Image on Left, Details on Right */}
      <div className="w-full flex bg-white shadow-md p-6">
        
        {/* Left Side - Image Slider */}
        <div className="w-1/2 flex flex-col">
          <div className="relative h-96 flex items-center justify-center">
            <img src={images[currentIndex]} alt="Bike" className="w-full h-full object-cover" />
            <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
              className="absolute left-4 bg-black text-white p-2 rounded-full hover:bg-gray-700">
              <FaArrowLeft size={20} />
            </button>
            <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
              className="absolute right-4 bg-black text-white p-2 rounded-full hover:bg-gray-700">
              <FaArrowRight size={20} />
            </button>
          </div>

          {/* New Navigation Menu Below Image Slider */}
          <div className="h-1/2 flex items-center justify-center space-x-6 text-lg font-semibold m-4">
            <a href="#" className="text-black hover:text-gray-500">Color</a>
            <a href="#" className="text-black hover:text-gray-500">Image</a>
            <a href="#" className="text-black hover:text-gray-500">Video</a>
            <a href="#" className="text-black hover:text-gray-500">360°</a>
          </div>
        </div>

        {/* Right Side - Variants, Price, and Buttons */}
        <div className="w-1/2 flex flex-col justify-between pl-6">
          {/* Variant and City Selection */}
          <div className="w-full flex border-b border-gray-300">
        {/* VARIANT */}
        <div
          className="w-1/2 flex items-center justify-center text-black text-lg font-semibold border-r border-gray-300 cursor-pointer p-4"
          onClick={() => setOpenModal("variant")}
        >
          {selectedVariant}
        </div>

        {/* CITY */}
        <div
          className="w-1/2 flex items-center justify-center text-black text-lg font-semibold cursor-pointer p-4"
          onClick={() => setOpenModal("city")}
        >
          {selectedCity}
        </div>
      </div>
      {openModal === "variant" && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-64">
          <h3 className="text-lg font-semibold mb-2 text-green-600">Select Variant</h3>
          {variants.map((variant) => (
            <div
              key={variant}
              className="p-2 hover:bg-gray-200 cursor-pointer text-black"
              onClick={() => handleSelect("variant", variant)}
            >
              {variant}
            </div>
          ))}
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
            onClick={() => setOpenModal(null)}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Modal for City Selection */}
      {openModal === "city" && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-64">
          <h3 className="text-lg font-semibold mb-2 text-green-600">Select City</h3>
          {cities.map((city) => (
            <div
              key={city}
              className="p-2 hover:bg-gray-200 cursor-pointer text-black"
              onClick={() => handleSelect("city", city)}
            >
              {city}
            </div>
          ))}
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
            onClick={() => setOpenModal(null)}
          >
            Cancel
          </button>
        </div>
      )}

          {/* Price */}
          <div className="p-4 text-lg font-semibold h-1/5">On-road Price: {bike.price}</div>

          {/* Buttons */}
          <div className="flex space-x-4 p-4 h-1/5">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full">EMI CALCULATOR</button>
          </div>
          <div className="flex space-x-4 p-4 h-1/5">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full">CHECK OFFERS</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Detail;
