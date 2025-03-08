import { useState } from "react";

const categories = [
  { name: "Scooters", key: "scooters" },
  { name: "Best Mileage Bikes", key: "best-mileage" },
  { name: "Sports", key: "sports" },
  { name: "Cruisers", key: "cruisers" },
];

const bikesData = {
  scooters: [
    { name: "TVS Jupiter", price: "₹80,568", image: "https://imgd.aeplcdn.com/310x174/n/cw/ec/185315/jupiter-right-side-view-16.jpeg?isig=0&q=80" },
    { name: "Suzuki Access 125", price: "₹83,949", image: "https://imgd.aeplcdn.com/310x174/n/cw/ec/188491/access-125-2025-right-side-view-11.jpeg?isig=0&q=80" },
    { name: "TVS Ntorq 125", price: "₹94,322", image: "https://imgd.aeplcdn.com/310x174/n/cw/ec/49444/ntorq-125-right-side-view-11.png?isig=0&q=80" },
  ],
  "best-mileage": [
    { name: "Hero Splendor Plus", price: "₹75,141", image: "/images/hero-splendor.png" },
    { name: "Bajaj Platina 110", price: "₹67,808", image: "/images/bajaj-platina.png" },
  ],
  sports: [
    { name: "Yamaha R15 V4", price: "₹1,82,556", image: "/images/yamaha-r15.png" },
  ],
  cruisers: [
    { name: "Royal Enfield Meteor 350", price: "₹2,05,844", image: "/images/enfield-meteor.png" },
  ],
};

export default function BikeTypes() {
  const [activeCategory, setActiveCategory] = useState("scooters");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">Trending Bikes of March 2025</h1>
        
      </header>

    

      
      <div className="flex space-x-4 border-b mt-2  ">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`pb-2 font-semibold border-b-2 transition-all duration-300 ${
              activeCategory === category.key ? "border-teal-600 text-teal-600" : "text-gray-500"
            }`}
            onClick={() => setActiveCategory(category.key)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
        {bikesData[activeCategory].map((bike, index) => (
          <div key={index} className="p-4 border rounded-lg flex flex-col items-center shadow-md">
            <img src={bike.image} alt={bike.name} className="w-20 h-20 object-contain" />
            <h3 className="mt-2 font-semibold text-center">{bike.name}</h3>
            <p className="text-gray-600 text-sm">{bike.price} Onwards</p>
            <button className="mt-2 text-teal-600 text-sm font-medium border border-teal-600 px-3 py-1 rounded-lg">
              Check on-road price
            </button>
          </div>
        ))}
      </div>

      <button className="mt-4 text-teal-600 font-medium">Show All {categories.find((c) => c.key === activeCategory)?.name}</button>
    </div>
  );
}
