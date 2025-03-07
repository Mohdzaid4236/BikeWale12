import React, { useState } from "react";

const bikesData = {
  trending: [
    { id: 1, name: "Royal Enfield Hunter 350", price: "₹ 1,49,900", image: "/hunter350.jpg" },
    { id: 2, name: "Royal Enfield Classic 350", price: "₹ 1,93,080", image: "/classic350.jpg" },
    { id: 3, name: "Yamaha MT 15 V2", price: "₹ 1,70,086", image: "/mt15.jpg" },
  ],
  popular: [
    { id: 4, name: "Honda CB 350", price: "₹ 2,00,000", image: "/cb350.jpg" },
  ],
  electric: [
    { id: 5, name: "Ather 450X", price: "₹ 1,45,000", image: "/ather450x.jpg" },
  ],
  upcoming: [
    { id: 6, name: "Kawasaki Ninja 300", price: "₹ 3,50,000", image: "/ninja300.jpg" },
  ],
};

const FeaturedBikes = () => {
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 border-b pb-2">
        {Object.keys(bikesData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-semibold capitalize transition-all duration-300 ${
              activeTab === tab
                ? "border-b-4 border-blue-600 text-black"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Bike Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {bikesData[activeTab].map((bike) => (
          <div
            key={bike.id}
            className="w-70 p-3 border rounded-lg shadow-md bg-white transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full h-28 object-cover rounded-md"
            />
            <h3 className="text-sm font-bold mt-2">{bike.name}</h3>
            <p className="text-gray-700 text-sm">{bike.price} Onwards</p>
            <button className="mt-2 w-full px-3 py-1 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition text-sm">
              Check on-road price
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBikes;
