import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const bikesData = {
  trending: [
    {
      id: 1,
      name: "Royal Enfield Hunter 350",
      price: "₹ 1,49,900",
      image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/124013/hunter-350-right-front-three-quarter.jpeg?isig=0",
    },
    {
      id: 2,
      name: "Royal Enfield Classic 350",
      price: "₹ 1,93,080",
      image: "https://imgd.aeplcdn.com/1056x594/n/o1arleb_1768261.jpg?q=80&wm=3",
    },
    {
      id: 3,
      name: "Yamaha MT 15 V2",
      price: "₹ 1,70,086",
      image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/yamaha-select-model-racing-blue-1679650337000.png?q=80",
    },
  ],
  popular: [
    {
      id: 4,
      name: "Honda CB 350",
      price: "₹ 2,00,000",
      image: "https://imgd.aeplcdn.com/310x174/n/cw/ec/164985/cb350-right-side-view-6.png?isig=0&q=80",
    },
  ],
  electric: [
    {
      id: 5,
      name: "Ather 450X",
      price: "₹ 1,45,000",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/ather-450x-29-kwh-20251735974741344.jpg?q=80",
    },
  ],
  upcoming: [
    {
      id: 6,
      name: "Kawasaki Ninja 300",
      price: "₹ 3,50,000",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/149821/ninja-300-right-front-three-quarter-10.png?isig=0&q=80",
    },
  ],
};

const FeaturedBikes = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const navigate = useNavigate();

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
            className="w-70 p-3 border rounded-lg shadow-md bg-white transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate("/bike-detail", { state: { bike } })} // Pass bike data
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
