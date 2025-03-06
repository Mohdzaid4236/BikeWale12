import React, { useState } from "react";

const bikesData = {
  trending: [
    {
      id: 1,
      name: "Royal Enfield Hunter 350",
      price: "₹ 1,49,900",
      image: "/hunter350.jpg",
    },
    {
      id: 2,
      name: "Royal Enfield Classic 350",
      price: "₹ 1,93,080",
      image: "/classic350.jpg",
    },
    {
      id: 3,
      name: "Yamaha MT 15 V2",
      price: "₹ 1,70,086",
      image: "/mt15.jpg",
    },
  ],
  popular: [
    {
      id: 4,
      name: "Honda CB 350",
      price: "₹ 2,00,000",
      image: "/cb350.jpg",
    },
  ],
  electric: [
    {
      id: 5,
      name: "Ather 450X",
      price: "₹ 1,45,000",
      image: "/ather450x.jpg",
    },
  ],
  upcoming: [
    {
      id: 6,
      name: "Kawasaki Ninja 300",
      price: "₹ 3,50,000",
      image: "/ninja300.jpg",
    },
  ],
};

const FeaturedBikes = () => {
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex space-x-6 border-b pb-2">
        {["trending", "popular", "electric", "upcoming"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-semibold ${
              activeTab === tab ? "border-b-4 border-blue-600 text-black" : "text-gray-500"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Bike Cards */}
      <div className="flex space-x-6 overflow-x-auto mt-4">
        {bikesData[activeTab].map((bike) => (
          <div key={bike.id} className="w-72 p-4 border rounded-lg shadow-lg bg-white">
            <img src={bike.image} alt={bike.name} className="w-full h-40 object-contain" />
            <h3 className="text-xl font-bold mt-3">{bike.name}</h3>
            <p className="text-gray-700">{bike.price} Onwards</p>
            <button className="mt-3 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Check on-road price
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBikes;
