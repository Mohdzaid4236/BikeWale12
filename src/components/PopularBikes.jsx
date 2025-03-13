import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

const popularBikes = [
  {
    name: "TVS Jupiter",
    price: "₹ 80,568 Onwards",
    image: "https://imgd.aeplcdn.com/310x174/n/cw/ec/185315/jupiter-right-side-view-16.jpeg?isig=0&q=80",
  },
  {
    name: "TVS Ntorq 125",
    price: "₹ 94,322 Onwards",
    image: "https://imgd.aeplcdn.com/310x174/n/cw/ec/49444/ntorq-125-right-side-view-11.png?isig=0&q=80",
  },
  {
    name: "TVS Raider 125",
    price: "₹ 89,366 Onwards",
    image: "https://imgd.aeplcdn.com/310x174/n/cw/ec/103183/raider-125-right-side-view-20.png?isig=0&q=80",
  },
  {
    name: "OLA S1 X Gen 2",
    price: "₹ 92,225 Onwards",
    image: "https://imgd.aeplcdn.com/310x174/n/cw/ec/154921/s1-x-right-front-three-quarter-2.png?isig=0&q=80",
  },
  {
    name: "Honda Activa 6G",
    price: "₹ 78,920 Onwards",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/honda-select-model-black-1674535477895.png?q=80",
  }
];

const PopularBikes = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  const nextSlide = () => {
    if (index + itemsPerPage < popularBikes.length) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleCardClick = (bike) => {
    navigate('/detail', { state: { bike } });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get Offers on Popular Bikes</h2>

      <div className="flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition disabled:opacity-50"
          disabled={index === 0}
        >
          <FaArrowLeft size={20} />
        </button>

        <div className="grid grid-cols-3 gap-4">
          {popularBikes.slice(index, index + itemsPerPage).map((bike, idx) => (
            <div
              key={idx}
              onClick={() => navigate("/bike-detail", { state: { bike } })} 
              className="w-60 bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition cursor-pointer"
            >
              <img className="w-full h-28 object-cover rounded-md" src={bike.image} alt={bike.name} />
              <h3 className="text-sm font-medium mt-2">{bike.name}</h3>
              <p className="text-gray-600 text-xs">{bike.price}</p>
              <div className="block text-center mt-2 bg-blue-600 text-white py-1 rounded-md hover:bg-blue-700 transition text-sm">
                Get Best Offer
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition disabled:opacity-50"
          disabled={index + itemsPerPage >= popularBikes.length}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PopularBikes;
