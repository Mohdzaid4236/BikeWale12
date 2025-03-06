import React from "react";
import { FaHeart } from "react-icons/fa";
import "tailwindcss";

function BikeCard({ bike }) {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden w-80">
      {/* Bike Image */}
      <div className="relative">
        <img src={bike.image} alt={bike.name} className="w-full h-48 object-contain p-4" />
        {/* Favorite Icon */}
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:shadow-md">
          <FaHeart className="text-gray-500 hover:text-red-500 transition duration-200" />
        </button>
      </div>

      {/* Bike Details */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{bike.name}</h3>
        <p className="text-gray-700 text-sm">₹ {bike.price} <span className="text-gray-500">Onwards</span></p>
        <p className="text-gray-500 text-xs mb-4">Avg. Ex-Showroom price</p>

        {/* CTA Button */}
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
          Check on-road price
        </button>
      </div>
    </div>
  );
}

export default BikeCard;
